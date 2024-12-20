import { encodeAddress, decodeAddress } from '@polkadot/util-crypto';
import {
  buildXcmPalletTransferV1,
  buildXcmPalletTransferV2,
  buildXTokensTransferV2,
  buildXTokensMoonbeamTransferV2,
  buildXTokensTransferV3,
  buildXTokensTransferV3X2,
  buildPolkadotXcmTransferV2,
  buildPolkadotXcmTransferV3,
  buildXcmLimitedReserveTransferV2,
  buildXcmVersionedMultiAssetV3,
} from './type-builder';

import { ApiPromise, WsProvider } from '@polkadot/api';
import { type SubmittableExtrinsic } from '@polkadot/api-base/types';
import {
  getMultiApi,
  getPolkadotBlockHeight,
  getSignAndSendParams,
  makeIbcToCosmos,
  makeIbcToPolkadot,
} from './helper';
import { networks } from '../../config';
import { IEvent, AnyTuple, Signer } from '@polkadot/types/types';
import { TransferStatusByAddress } from './types';
import { getSourceChannel, getXcmInfo } from '../common';
// import { makeIbcToCosmos, makeIbcToPolkadot, getDefaultTxHeight } from './ibc';

async function signAndSendTransfer<T extends AnyTuple>({
  api,
  apiTo,
  fromAddress,
  toAddress,
  extrinsic,
  isIbc,
  filter,
  signer,
}: {
  api: ApiPromise;
  apiTo: ApiPromise | undefined;
  fromAddress: string;
  toAddress: string;
  extrinsic: SubmittableExtrinsic<'promise'>;
  isIbc: boolean;
  filter: ((event: IEvent<AnyTuple>) => event is IEvent<T>) | null;
  signer: any;
}): Promise<TransferStatusByAddress> {
  const { account, signerOption } = await getSignAndSendParams(
    fromAddress,
    signer
  );

  return new Promise<TransferStatusByAddress>((resolve, reject) => {
    const state = { isFailedTxShown: false };
    extrinsic
      .signAndSend(account, signerOption, async (result) => {
        // Emit approval event

        const { dispatchError, status, events } = result;
        const { txHash, sequence } = buildStatusInfo(
          result.txHash.toString(),
          JSON.parse(JSON.stringify(events))
        );

        // Handle dispatch errors
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
            state.isFailedTxShown = true;
          }

          const errorResult: TransferStatusByAddress = {
            destAddress: toAddress,
            txHash,
            sequence,
            status: 'error',
            currentHopIndex: 0,
            message: errorMessage,
          };
          return reject(errorResult);
        }

        // Look for incomplete transfer events
        const found = JSON.parse(JSON.stringify(events)).find((e) =>
          e.event?.data?.find((data) => data['incomplete']?.length > 0)
        );

        if (found) {
          return reject({
            destAddress: toAddress,
            txHash,
            sequence,
            status: 'error',
            message: 'Transfer incomplete',
          });
        }

        // Check if transaction is finalized
        if (status) {
          if (isIbc) {
            const header = apiTo ? await apiTo.rpc.chain.getHeader() : null;
            const result: TransferStatusByAddress = {
              destAddress: toAddress,
              txHash,
              sequence,
              currentHopIndex: 0,
              status: 'pending',
              latestBlockNumber: header ? header.number.toNumber() : -1, // For COSMOS
            };
            return resolve(result);
          } else if (filter) {
            const found = events.find((e) => filter(e.event));
            if (!found && !state.isFailedTxShown) {
              state.isFailedTxShown = true;
              return reject({
                destAddress: toAddress,
                txHash,
                sequence,
                status: 'error',
              });
            }
            if (found && found.event.data.find((x) => x['isComplete'])) {
              const result: TransferStatusByAddress = {
                destAddress: toAddress,
                txHash,
                sequence,
                currentHopIndex: 0,
                status: 'success',
              };
              return resolve(result);
            }
          } else {
            // For xTokens
            const header = apiTo ? await apiTo.rpc.chain.getHeader() : null;
            const result: TransferStatusByAddress = {
              destAddress: toAddress,
              txHash,
              sequence,
              status: 'success',
              currentHopIndex: 0,
              latestBlockNumber: header ? header.number.toNumber() : -1,
            };
            return resolve(result);
          }
        }
      })
      .catch((e) => {
        console.error('errorSDKSignAndSend', e);
        return reject({
          fromAddress,
          destAddress: toAddress,
          txHash: 'NONE',
          sequence: 'NONE',
          status: 'error',
          errorMessage: e.toString(),
        });
      });
  });
}

export const buildStatusInfo = (txHash, events) => {
  if (!events) return { txHash, sequence: 'NONE' };
  const packet = events
    .filter(
      (d) => d.event && d.event.data && typeof d.event.data[0] !== 'string'
    )
    .reduce((a, e) => a.concat(e.event.data[0]), []);

  for (let i = 0; i < packet.length; i++) {
    if (
      packet[i].ok &&
      packet[i].ok.sendPacket &&
      packet[i].ok.sendPacket.sequence
    ) {
      const { sequence } = packet[i].ok.sendPacket;
      return { txHash, sequence };
    }
  }

  return { txHash, sequence: 'NONE' };
};

export async function transferXcm({
  fromChainId,
  toChainId,
  fromAddress,
  toAddress,
  amount,
  assetId,
  signer,
  fromApi,
  toApi,
}: {
  fromChainId: string;
  toChainId: string;
  fromAddress: string;
  toAddress: string;
  amount: string;
  assetId: string;

  signer: Signer;
  fromApi: ApiPromise;
  toApi: ApiPromise;
}): Promise<TransferStatusByAddress> {
  try {
    const {
      polkadot: { ss58Format: fromSs58Format, isParachain: isFromParachain },
    } = networks[fromChainId];

    const {
      polkadot: { ss58Format: toSs58Format, isParachain: isToParachain },
    } = networks[toChainId];

    const { xcmType, version } = getXcmInfo(fromChainId, toChainId);

    console.log('xcmTypeSDK', xcmType, version);
    const ethreumlish = ['2004', '2023'];
    // Get network configurations

    // Convert addresses based on network type
    const convertedToAddr = ethreumlish.includes(toChainId)
      ? toAddress
      : encodeAddress(decodeAddress(toAddress), toSs58Format);
    const convertedFromAddr = ethreumlish.includes(fromChainId)
      ? fromAddress
      : encodeAddress(decodeAddress(fromAddress), fromSs58Format);

    // Ensure transferMedium is defined
    if (!xcmType || !version) return;

    let result;

    // Handle different transfer mediums
    if (xcmType === 'xcmPallet.reserveTransferAssets') {
      if (version === 'V1') {
        result = buildXcmPalletTransferV1(
          fromApi,
          toChainId,
          convertedToAddr,
          amount
        );
      } else {
        result = buildXcmPalletTransferV2(
          fromApi,
          toChainId,
          convertedToAddr,
          amount
        );
      }
    } else if (xcmType === 'xTokens.transfer') {
      if (version === 'V2') {
        if (
          assetId === '32' &&
          toChainId === '2087' &&
          fromChainId === '2001'
        ) {
          result = buildXTokensTransferV2(
            fromApi,
            convertedToAddr,
            assetId,
            amount,
            toChainId,
            'VToken',
            'AccountId32'
          );
        } else if (
          assetId === '31' &&
          toChainId === '2087' &&
          fromChainId === '2001'
        ) {
          result = buildXTokensTransferV2(
            fromApi,
            convertedToAddr,
            assetId,
            amount,
            toChainId,
            'Native',
            'AccountId32'
          );
        } else if (fromChainId === '2030' && assetId === '33') {
          result = buildXTokensTransferV2(
            fromApi,
            convertedToAddr,
            assetId,
            amount,
            toChainId,
            'Native',
            'AccountId32'
          );
        } else if (fromChainId === '2030' && assetId === '34') {
          result = buildXTokensTransferV2(
            fromApi,
            convertedToAddr,
            '0',
            amount,
            toChainId,
            'VToken2',
            'AccountId32'
          );
        } else if (toChainId === '2004' || toChainId === '2023') {
          result = buildXTokensTransferV2(
            fromApi,
            convertedToAddr,
            assetId,
            amount,
            toChainId,
            'AssetId',
            'AccountKey20'
          );
        } else if (fromChainId === '2004' || fromChainId === '2023') {
          result = buildXTokensMoonbeamTransferV2(
            fromApi,
            convertedToAddr,
            assetId,
            amount,
            toChainId
          );
        } else {
          result = buildXTokensTransferV2(
            fromApi,
            convertedToAddr,
            assetId,
            amount,
            toChainId,
            'AssetId',
            'AccountId32'
          );
        }
      } else {
        if (fromChainId === '2125') {
          result = buildXTokensTransferV3X2(
            fromApi,
            convertedToAddr,
            '0',
            amount,
            toChainId
          );
        } else {
          result = buildXTokensTransferV3(
            fromApi,
            convertedToAddr,
            assetId,
            amount
          );
        }
      }
    } else if (xcmType === 'polkadotXcm.limitedReserveTransferAssets') {
      if (version === 'V2') {
        result = buildPolkadotXcmTransferV2(
          fromApi,
          convertedToAddr,
          toChainId,
          assetId,
          amount,
          fromChainId === '1000' ? '1984' : '' // only for statemine
        );
      } else {
        result = buildPolkadotXcmTransferV3(
          fromApi,
          convertedToAddr,
          toChainId,
          amount
        );
      }
    } else if (xcmType === 'xcmPallet.limitedReserveTransferAssets') {
      result = buildXcmLimitedReserveTransferV2(
        fromApi,
        convertedToAddr,
        toChainId,
        assetId,
        amount
      );
    } else if (xcmType === 'xTokens.transferMultiasset') {
      result = buildXcmVersionedMultiAssetV3(
        fromApi,
        convertedToAddr,
        toChainId,
        amount,
        '1984',
        ''
      );
    }

    // Call signAndSendTransfer with the appropriate parameters
    return await signAndSendTransfer({
      api: fromApi,
      apiTo: toApi,
      fromAddress: convertedFromAddr,
      toAddress: convertedToAddr,
      extrinsic: result(),
      isIbc: false,
      filter: isFromParachain ? null : fromApi.events.xcmPallet.Attempted.is,
      signer,
    });
  } catch (e) {
    console.log('errorSDK', e);
  }
}

export async function transferIbc(
  {
    fromChainId,
    toChainId,
    fromAddress,
    toAddress,
    amount,
    assetId,
    signer,
    sourceChannel,
    memo,
    fromApi,
    toApi,
    destinationHeight,
  }: {
    fromChainId: string;
    toChainId: string;
    fromAddress: string;
    toAddress: string;
    amount: string;
    assetId: string;
    signer: Signer;
    sourceChannel: number;
    memo: string;
    fromApi: ApiPromise;
    toApi?: ApiPromise;
    destinationHeight: number;
  }

  // networkFrom: NetworkType,
  // networkTo: NetworkType,
  // fromAddress: string,
  // toAddress: string,
  // amount: string,
  // assetId: string,
  // feeAmount: string,
  // gas: string,
  // transferMedium: TransferApi | undefined,
  // memo: string,
  // config: any,
): Promise<TransferStatusByAddress> {
  if (!assetId) throw 'assetId not found';
  if (!sourceChannel) throw 'sourceChannel not found';
  const { polkadot: { ss58Format: fromSs58Format = 0 } = {} } =
    networks[fromChainId];

  const {
    chainType: toChainType,
    polkadot: { ss58Format: toSs58Format = 0 } = {},
  } = networks[toChainId];

  // Fetch the relevant APIs for the networks

  // Convert the fromAddress using the correct ss58 format for the networkFrom
  const convertedFromAddr = encodeAddress(
    decodeAddress(fromAddress),
    fromSs58Format
  );

  let convertedToAddr = '';
  let extrinsic: SubmittableExtrinsic<'promise'>;

  convertedToAddr =
    networks[toChainId].chainType === 'polkadot'
      ? encodeAddress(decodeAddress(toAddress), toSs58Format)
      : toAddress;

  // const defaultHeight = getPolkadotBlockHeight(height, chainType);
  extrinsic =
    toChainType === 'polkadot'
      ? makeIbcToPolkadot({
          api: fromApi,
          toAddress: convertedToAddr,
          sourceChannel: Number(sourceChannel),
          assetId,
          amount,
          destinationHeight,
          memo,
        })
      : makeIbcToCosmos({
          api: fromApi,
          toAddress: convertedToAddr,
          sourceChannel: Number(sourceChannel),
          assetId,
          amount,
          destinationHeight,
          memo,
        });
  return await signAndSendTransfer({
    api: fromApi,
    apiTo: toApi,
    fromAddress: convertedFromAddr,
    toAddress: convertedToAddr,
    extrinsic,
    isIbc: true,
    filter: null,
    signer,
  });
}

export const polkadotTransfer = async ({
  fromChainId,
  toChainId,
  fromAddress,
  toAddress,
  amount,
  assetId,
  signer,
  memo,
  sourceChannel,
  fromApi,
  toApi,
  destinationHeight,
}: {
  fromChainId: string;
  toChainId: string;
  fromAddress: string;
  toAddress: string;
  amount: string;
  assetId: string;
  signer: any;
  sourceChannel?: number;
  memo: string;
  fromApi: ApiPromise;
  toApi?: ApiPromise;
  destinationHeight: number;
}) => {
  try {
    if (getXcmInfo(fromChainId, toChainId)?.type === 'XCM')
      return transferXcm({
        fromApi,
        toApi,
        fromChainId,
        toChainId,
        fromAddress,
        toAddress,
        amount,
        assetId,
        signer,
      });
    return transferIbc({
      fromChainId,
      toChainId,
      fromAddress,
      toAddress,
      amount,
      assetId,
      signer,
      sourceChannel,
      memo,
      destinationHeight,
      fromApi,
      toApi,
    });
  } catch (err) {
    console.error(err);
  }
};
