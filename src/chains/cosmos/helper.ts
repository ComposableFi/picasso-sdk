import { SigningStargateClient } from '@cosmjs/stargate';
import { TX_MSG_TYPE } from './types';
import { type Keplr } from '@keplr-wallet/types';

export const generateTransferMsg = (
  txMsg: TX_MSG_TYPE,
  channel: number,
  sourceAddress: string,
  destAddress: string,
  amount: string,
  assetId: string,
  memo: string,
  timeout: number = 30
) => {
  const msg = {
    typeUrl: txMsg,
    value: {
      sourcePort: 'transfer',
      sourceChannel: `channel-${channel}`,
      token: {
        denom: assetId,
        amount: amount,
      },
      sender: sourceAddress,
      receiver: destAddress,
      memo,
      timeoutTimestamp: getCosmosTimeoutTimestamp(timeout * 60), //  30~240 minutes
    },
  };
  return msg;
};

/** description the amount of seconds for timeout */
export const getCosmosTimeoutTimestamp = (seconds: number) => {
  return new Date().getTime() * 1_000_000 + seconds * 1_000 * 1_000_000;
};

/** @description chainId is from cosmos chain registry */
export const getSigner = (
  chainId: string,
  keplr: Keplr,
  supportLedger: boolean = true
) => {
  return supportLedger
    ? keplr.getOfflineSignerOnlyAmino(chainId)
    : keplr.getOfflineSigner(chainId);
};

// export const keplr = (typeof window !== 'undefined') ? (window as any).keplr : undefined; // provider of cosmos wallet

export const getClient = async (
  chainId: string,
  rpc: string,
  keplr: Keplr,
  supportLedger: boolean = true
) => {
  const signer = getSigner(chainId, keplr, supportLedger);
  return await SigningStargateClient.connectWithSigner(rpc, signer);
};
