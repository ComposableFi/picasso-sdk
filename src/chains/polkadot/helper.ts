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
import { MultihopRoutePath, RouteDetail } from './types';
import { networks } from '../../config';
import { hexToString } from '@polkadot/util';

export { decodeAddress, encodeAddress } from '@polkadot/util-crypto';
export { base58Decode } from '@polkadot/util-crypto';
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

export async function getPaymentAsset({
  api,
  accountId,
}: {
  api: ApiPromise;
  accountId: string;
}): Promise<[string, string] | null> {
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
    accountId,
    assetId,
    signer,
    api,
  }: {
    accountId: string;
    assetId: string;
    signer: any;
    api: ApiPromise;
  }
): Promise<ISubmittableResult> {
  const asset = Number(assetId) === 1 ? null : api.createType('u128', assetId);

  return await signAndSend({
    accountId,
    extrinsics: [api.tx.assetTxPayment.setPaymentAsset(accountId, asset)],
    filter: api.events.system.ExtrinsicSuccess.is,
    onFailedTx: undefined,
    api,
    signer,
  });
}

export async function getSignAndSendParams(
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

  api,
  signer,
}: {
  accountId: string;
  extrinsics: SubmittableExtrinsic<'promise'>[];
  filter: (event: IEvent<AnyTuple>) => event is IEvent<T>;
  onFailedTx: OnFailedTxHandler | undefined;
  api: ApiPromise;
  signer: any;
}): Promise<ISubmittableResult> {
  const { account, signerOption } = await getSignAndSendParams(
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

export const getMultiApi = (endpoints: string[]): Promise<ApiPromise[]> => {
  const promises: Promise<ApiPromise>[] = [];

  endpoints.forEach((api) => {
    if (api.startsWith('wss://')) promises.push(getApi(api));
  });
  return Promise.all(promises);
};

export const getPolkadotBlockHeight = async (
  api: ApiPromise,
  extra: number = 100
) => {
  const height = Number(await api.query.system.number());

  return height + extra;
};
export const makeIbcToPolkadot = ({
  api,
  toAddress,
  sourceChannel,
  assetId,
  amount,
  destinationHeight,
  memo = '',
}: {
  api: ApiPromise;
  toAddress: string;
  sourceChannel: number;
  assetId: string;
  amount: string;
  destinationHeight: number;
  memo: string;
}) => {
  if (memo === '') {
    return api.tx.ibc.transfer(
      api.createType('PalletIbcTransferParams', {
        to: { id: api.createType('AccountId32', toAddress) },
        sourceChannel: api.createType('u64', sourceChannel),
        timeout: {
          absolute: {
            height: api.createType('u64', destinationHeight),
          },
        },
      }),
      api.createType('u128', assetId),
      api.createType('u128', amount),
      undefined
    );
  }
  return api.tx.ibc.transfer(
    api.createType('PalletIbcTransferParams', {
      to: { id: api.createType('AccountId32', toAddress) },
      sourceChannel: api.createType('u64', sourceChannel),
      timeout: {
        absolute: {
          height: api.createType('u64', destinationHeight),
        },
      },
    }),
    api.createType('u128', assetId),
    api.createType('u128', amount),
    api.createType('Text', memo)
  );
};

export const makeIbcToCosmos = ({
  api,
  toAddress,
  sourceChannel,
  assetId,
  amount,
  destinationHeight,
  memo = '',
}: {
  api: ApiPromise;
  toAddress: string;
  sourceChannel: number;
  assetId: string;
  amount: string;
  destinationHeight: number;
  memo: string;
}) => {
  if (memo === '') {
    return api.tx.ibc.transfer(
      api.createType('PalletIbcTransferParams', {
        to: { Raw: toAddress },
        sourceChannel: api.createType('u64', sourceChannel),
        timeout: {
          absolute: {
            height: api.createType('u64', destinationHeight),
          },
        },
      }),
      api.createType('AssetId', assetId),
      api.createType('Balance', amount),
      undefined
    );
  }
  return api.tx.ibc.transfer(
    api.createType('PalletIbcTransferParams', {
      to: { Raw: toAddress },
      sourceChannel: api.createType('u64', sourceChannel),
      timeout: {
        absolute: {
          height: api.createType('u64', destinationHeight),
        },
      },
    }),
    api.createType('AssetId', assetId),
    api.createType('Balance', amount),
    api.createType('Text', memo)
  );
};

export const getMultihopPath = async (
  fromChainId: string,
  networkType: '2019' | '2087' // composable |picasso
): Promise<MultihopRoutePath[]> => {
  const { rpc: rpc } = networks[networkType];

  const api = await getApi(rpc);
  const result =
    await api.query.palletMultihopXcmIbc.routeIdToRoutePath.entries();
  return result.map((p) => {
    const paths = JSON.parse(JSON.stringify(p[1])).map((path) => {
      return {
        ...path[0],
        chainId: path[1].startsWith('0x')
          ? chainNameMap[hexToString(path[1])]
          : path[1],
      };
    }) as unknown as RouteDetail[];
    const to = paths[paths.length - 1].chainId || 'NONE';
    const route = {
      fromChainId: fromChainId, // Join the characters into a string.
      toChainId: to.toString(),
      paraChain: fromChainId === 'kusama' ? undefined : networkType,
      index: p[0][48], // currently p[0] is array of numbers - the 48th digit represents the actual index. but on the polkadot.js UI, this field is a simple integer.
      paths,
    };
    return route;
  });
};
// for batching tx - inside of route there's a chain name. need to match it with networkType
const chainNameMap = {
  polkadot: 'polkadot',
  picasso: '2087',
  composable: '2019',
  centauri: 'centauri-1',
  osmo: 'osmosis-1',
  cre: 'crescent-1',
  neutron: 'neutron-1',
  kujira: 'kaiyo-1',
  celestia: 'celestia',
  umee: 'umee-1',
  sei: 'pacific-1',
  secret: 'secret-4',
  quicksilver: 'quicksilver-2',
  inj: 'injective-1',
  agoric: 'agoric-3',
};
