import { type StdFee } from '@cosmjs/stargate';

import { TX_MSG } from './constants';
import { broadcastTx, generateTransferMsg, getCosmosClient } from './helper';
import { type TX_MSG_TYPE } from './types';
import {
  Keplr,
  OfflineAminoSigner,
  OfflineDirectSigner,
} from '@keplr-wallet/types';
import { toBase64, toUtf8 } from 'secretjs';
import { getSecretClient } from './helper';
import { networks } from '../../config';
import {
  BaseAccount,
  ChainRestAuthApi,
  ChainRestTendermintApi,
  createTransaction,
  getTxRawFromTxRawOrDirectSignResponse,
  MsgTransfer,
  TxRestClient,
} from '@injectivelabs/sdk-ts';
import {
  DEFAULT_BLOCK_TIMEOUT_HEIGHT,
  DEFAULT_STD_FEE,
} from '@injectivelabs/utils';

export const cosmosTransfer = async ({
  sourceChannel,
  sourceAddress,
  destAddress,
  amount,
  assetId,
  fee,
  chainId,
  rpc,
  memo,
  timeout,
  txMsg = TX_MSG,
  keplr,
  gasPrice,
  gas,
  feeAssetId,
}: {
  sourceChannel: number; //channel with picasso(cosmos), ex> osmosis -> picasso(cosmos)'s source channel id is 1279
  sourceAddress: string;
  destAddress: string;
  amount: string;
  assetId: string;
  fee: string;
  chainId: string;
  rpc: string;
  memo: string; // pfm requires memo
  timeout: number;
  txMsg?: TX_MSG_TYPE;
  keplr: Keplr;
  gasPrice: string;
  gas: string;
  feeAssetId: string;
}) => {
  const client = await getCosmosClient({
    chainId,
    rpc,
    keplr,
    supportLedger: !memo,
    feeAssetId,
    gasPrice,
  });
  const msg = generateTransferMsg(
    txMsg,
    sourceChannel,
    sourceAddress,
    destAddress,
    amount,
    assetId,
    memo,
    timeout
  );
  // await client.simulate(sourceAddress, [msg], memo);

  // To avoid keplr or leap overrides custom fee from FE (mostly it is set to 'auto'
  if (keplr) {
    keplr.defaultOptions = {
      sign: {
        preferNoSetFee: fee !== 'auto',
      },
    };
  }

  const refinedFee: 'auto' | StdFee =
    fee === 'auto'
      ? 'auto'
      : {
          amount: [
            {
              amount: fee,
              denom: feeAssetId,
            },
          ],
          gas,
        };

  try {
    if (chainId === 'injective-1') {
      const injectiveResponse = await injectiveTransfer({
        generatedMsg: msg,
        keplr,
      });
      return injectiveResponse.txHash;
    }

    const generalResponse = await client.signAndBroadcast(
      sourceAddress,
      [msg],
      refinedFee
    );
    return generalResponse.transactionHash; // Query indexer by this txHash
  } catch (ex) {
    console.error(ex, 'cosmosError');
  }
};

export const secretTransfer = async ({
  amount,
  secretAssetId,
  keplr,
  signer,
  sourceAddress,
  destAddress,
  sourceChannel,
  codeHash,
}: {
  amount: string;
  secretAssetId: string;
  keplr: Keplr;
  signer: OfflineAminoSigner;
  sourceAddress: string;
  destAddress: string;
  sourceChannel: number;
  codeHash: string;
}) => {
  const refinedSecretAssetId = secretAssetId.split(':')[1];

  // const msg = generateTransferMsg(
  //   TX_MSG,
  //   sourceChannel,
  //   sourceAddress,
  //   destAddress,
  //   amount,
  //   refinedSecretAssetId,
  //   memo || '',
  //   30
  // );

  const client = await getSecretClient({
    keplr,
    signer,
    address: sourceAddress,
  });

  // let response: DeliverTxResponse;
  let rawLog: string;
  let txHash: string;
  try {
    const generalResponse = await client.tx.compute.executeContract(
      {
        contract_address: refinedSecretAssetId,
        code_hash: codeHash,
        sender: sourceAddress,

        msg: {
          send: {
            //  no idea why this is hardcoded ngl
            recipient: 'secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4', // cw20-ics20
            recipient_code_hash:
              'f85b413b547b9460162958bafd51113ac266dac96a84c33b9150f68f045f2641',
            amount,
            // memo -> 1

            msg: toBase64(
              toUtf8(
                JSON.stringify({
                  channel: `channel-${sourceChannel}`,
                  remote_address: destAddress,
                  timeout: 30 * 60, // 2 minute timeout,
                })
              )
            ),
          },
        },
      },
      //  ref https://github.com/scrtlabs/dash.scrt.network/blob/723e2e92e01c65cb4df67a7ddf097a5bd038f974/src/shared/utils/config.ts#L34
      {
        gasLimit: 300_000,
        gasPriceInFeeDenom: 0.1,
        feeDenom: 'uscrt',
        feeGranter: '',
        ibcTxsOptions: {
          resolveResponses: true,
          resolveResponsesCheckIntervalMs: 10_000,
          resolveResponsesTimeoutMs: 12 * 60 * 1000,
        },
      }
    );

    rawLog = generalResponse.rawLog;
    txHash = generalResponse.transactionHash;
    return txHash;
  } catch (ex) {
    console.error(ex, 'secretError');
  }
};

export const injectiveTransfer = async ({
  generatedMsg,
  keplr,
}: {
  // wallet: WalletType,
  generatedMsg: ReturnType<typeof generateTransferMsg>;
  keplr: Keplr;
}) => {
  const chainId = 'injective-1';
  const restEndpoint = networks[chainId].rest;

  /** Account Details **/
  const chainRestAuthApi = new ChainRestAuthApi(restEndpoint);
  const accountDetailsResponse = await chainRestAuthApi.fetchAccount(
    generatedMsg.value.sender
  );
  const baseAccount = BaseAccount.fromRestApi(accountDetailsResponse);

  /** Block Details */
  const chainRestTendermintApi = new ChainRestTendermintApi(restEndpoint);
  const latestBlock = await chainRestTendermintApi.fetchLatestBlock();
  const latestHeight = latestBlock.header.height;
  const timeoutHeight = Number(latestHeight) + DEFAULT_BLOCK_TIMEOUT_HEIGHT;

  /** Argument Type for MsgTransfer */

  // 	amount: {
  // 		denom: string;
  // 		amount: string;
  // };
  // memo?: string;
  // sender: string;
  // port: string;
  // receiver: string;
  // channelId: string;
  // timeout?: number;
  // height?: {
  // 		revisionHeight: number;
  // 		revisionNumber: number;
  // };

  // create msg to generate binary data for createTransaction(injective-sdk's method)
  const msg = MsgTransfer.fromJSON({
    port: generatedMsg.value.sourcePort,
    channelId: generatedMsg.value.sourceChannel,
    timeout: generatedMsg.value.timeoutTimestamp,
    memo: generatedMsg.value.memo,
    height: {
      revisionNumber: 0,
      revisionHeight: 0,
    },
    amount: {
      amount: generatedMsg.value.token.amount,
      denom: generatedMsg.value.token.denom,
    },
    sender: generatedMsg.value.sender,
    receiver: generatedMsg.value.receiver,
  });

  /** Get the PubKey of the Signer from the Wallet/Private Key */
  const pubKeyResult = (await keplr?.getKey(chainId))?.pubKey;
  const pubKey = Buffer.from(pubKeyResult!).toString('base64');

  /** Injective SDK for creating SignDoc */
  const { signDoc } = createTransaction({
    pubKey: pubKey,
    chainId,
    fee: DEFAULT_STD_FEE,
    message: msg,
    sequence: baseAccount.sequence,
    timeoutHeight: timeoutHeight,
    accountNumber: baseAccount.accountNumber,
  });

  const signer = keplr.getOfflineSigner(chainId);
  // sign first Before sending, Does not support Ledger
  const result = await (signer as OfflineDirectSigner)?.signDirect(
    generatedMsg.value.sender,
    signDoc as any
  );

  if (result) {
    const txRaw = getTxRawFromTxRawOrDirectSignResponse(result);

    const txHash = await broadcastTx({ chainId, txRaw, keplr });
    console.log('injectiveHash:', txHash);

    if (txHash) {
      const response = await new TxRestClient(restEndpoint).fetchTxPoll(txHash);
      console.log('injectiveResponse:', response);
      return response;
    }
  }
};
