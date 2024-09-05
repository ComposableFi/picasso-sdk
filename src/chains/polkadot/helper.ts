import { ApiPromise, WsProvider } from '@polkadot/api';
import {
  type AddressOrPair,
  type SubmittableExtrinsic,
} from '@polkadot/api-base/types';
import { ApiOptions } from '@polkadot/api/types';
import { type AccountId32 } from '@polkadot/types/interfaces/runtime';
import {
  type AnyTuple,
  type Codec,
  type IEvent,
  type ISubmittableResult,
} from '@polkadot/types/types';
import Big from 'big.js';

import {
  concatU8a,
  PALLET_TYPE_ID,
  polkadotApiRpc,
  polkadotApiTypes,
} from './api-scheme';

export type OnFailedTxHandler = (
  result: ISubmittableResult,
  errorMessage?: string
) => void;

async function checkWalletIdForSigning(accountId: string) {
  // Default implementation, does nothing
}

export function getSubAccount(api: ApiPromise, poolId: string): string {
  const palletId = api.consts.pablo.palletId.toU8a();
  const poolAccountId = api.createType('([u8; 4], [u8; 8], u64)', [
    PALLET_TYPE_ID,
    palletId,
    poolId,
  ]);

  const accountIdu8a = poolAccountId.toU8a();
  const poolAccount = concatU8a(
    accountIdu8a,
    new Uint8Array(32 - accountIdu8a.length).fill(0)
  );
  return api.createType('AccountId32', poolAccount).toString();
}

export async function getAssetBalance(
  api: ApiPromise,
  assetId: string,
  poolId: string
): Promise<string> {
  const convertedAssetId = api.createType('CustomRpcCurrencyId', assetId);
  const ownerWalletAddress = getSubAccount(api, poolId);
  const accountId32 = api.createType('AccountId32', ownerWalletAddress);
  const balance = await api.rpc.assets.balanceOf(
    convertedAssetId as any,
    accountId32 as AccountId32
  );
  return balance.toJSON();
}

export async function getPaymentAsset({
  endpoint,
  accountId,
}: {
  endpoint: string;
  accountId: string;
}): Promise<[string, string] | null> {
  const api = await getApi(endpoint);
  const accountId32 = api.createType('AccountId32', accountId);
  const result = await api.query.assetTxPayment.paymentAssets(accountId32);
  return result.toJSON() as [string, string] | null;
}

export async function setPaymentAsset(
  //   networkType: NetworkType,
  //   walletId: PolkadotWalletId,
  //   accountId: string,
  //   assetId: string,
  //   walletApi: WalletApi

  {
    endpoint,
    accountId,
    assetId,
    signer,
  }: {
    endpoint: string;
    accountId: string;
    assetId: string;
    signer: any;
  }
): Promise<ISubmittableResult> {
  const api = await getApi(endpoint);
  const asset = Number(assetId) === 1 ? null : api.createType('u128', assetId);

  return await signAndSend({
    accountId,
    extrinsics: [api.tx.assetTxPayment.setPaymentAsset(accountId, asset)],
    filter: api.events.system.ExtrinsicSuccess.is,
    onFailedTx: undefined,

    endpoint,
    signer,
  });
}

async function getSignAndSendParams(
  api: ApiPromise,
  accountId: string,
  signer: any
): Promise<{
  account: AddressOrPair;
  signerOption: { signer: any };
}> {
  await checkWalletIdForSigning(accountId);

  if (!signer) throw new Error('No signer found');

  return {
    account: accountId,
    signerOption: { signer },
  };
}

export async function signAndSend<T extends AnyTuple>({
  accountId,
  extrinsics,
  filter,
  onFailedTx,
  endpoint,
  signer,
}: {
  accountId: string;
  extrinsics: SubmittableExtrinsic<'promise'>[];
  filter: (event: IEvent<AnyTuple>) => event is IEvent<T>;
  onFailedTx: OnFailedTxHandler | undefined;
  endpoint: string;
  signer: any;
}): Promise<ISubmittableResult> {
  const api = await getApi(endpoint);

  const { account, signerOption } = await getSignAndSendParams(
    api,
    accountId,
    signer
  );

  return new Promise<ISubmittableResult>((resolve, reject) => {
    const state = { isFailedTxShown: false };
    (extrinsics.length === 1 ? extrinsics[0] : api.tx.utility.batch(extrinsics))
      .signAndSend(account, signerOption, (result) => {
        const { dispatchError, status, events } = result;
        if (dispatchError) {
          let errorMessage;
          if (dispatchError.isModule) {
            const decoded = api.registry.findMetaError(dispatchError.asModule);
            const { docs, name, section } = decoded;
            errorMessage = `${section}.${name}: ${docs.join(' ')}`;
          } else {
            errorMessage = dispatchError.toString();
          }
          if (result?.txHash && !state.isFailedTxShown) {
            if (onFailedTx) {
              onFailedTx(result, errorMessage);
            }
            state.isFailedTxShown = true;
          }
          return reject(state.isFailedTxShown ? null : errorMessage);
        }

        if (status.isInBlock || status.isFinalized) {
          const found = events.find((e) => filter(e.event));
          if (!found && !state.isFailedTxShown) {
            state.isFailedTxShown = true;
            if (onFailedTx) {
              onFailedTx(result);
            }
            return reject(null);
          }
          return resolve(result);
        } else {
          if (typeof window !== 'undefined') console.log('status', status);
        }
      })
      .catch(function (e) {
        const errors = e.toString().split(':');
        reject(Error(errors[errors.length - 1]));
      });
  });
}

export async function getAvailableCoin(
  endpoint: string,
  accountId: string | null
): Promise<Big> {
  const api = await getApi(endpoint);
  const accountId32 = api.createType('AccountId32', accountId);
  const accountInfo = (
    await api.query.system.account(accountId32)
  ).toJSON() as any;

  const free = accountInfo?.data?.['free'];
  const feeFrozen = accountInfo?.data?.['frozen'];
  const getDecimal = (str?: string) => {
    if (!str) return 10;
    if (str.toString().startsWith('0x')) return 16;
    return 10;
  };

  return new Big(parseInt(free, getDecimal(free)) || '0').minus(
    parseInt(feeFrozen, getDecimal(feeFrozen)) || 0
  );
}

export async function getApi(
  endpoint: string,
  option?: ApiOptions
): Promise<ApiPromise> {
  const wsProvider = new WsProvider(endpoint);
  try {
    const api = await ApiPromise.create({
      provider: wsProvider,
      rpc: polkadotApiRpc,
      types: polkadotApiTypes,
      noInitWarn: false,
      throwOnConnect: true,
      ...option,
    });

    await api.isReadyOrError;
    return api;
  } catch (ex) {
    void wsProvider.disconnect();
    throw ex;
  }
}
