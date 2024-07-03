import { type StdFee } from '@cosmjs/stargate';

import { emitter } from '../common/utils';
import { TX_MSG } from './constants';
import { generateTransferMsg, getClient } from './helper';
import { type TX_MSG_TYPE } from './types';
import { Keplr } from '@keplr-wallet/types';

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
  const client = await getClient({
    chainId,
    rpc,
    keplr,
    supportLedger: !!memo,
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
  await client.simulate(sourceAddress, [msg], memo);

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
    const generalResponse = await client.signAndBroadcast(
      sourceAddress,
      [msg],
      refinedFee
    );
    emitter.emit('COSMOS_APPROVED'); // optional: emit event for approval of wallet extension
    return generalResponse.transactionHash; // Query indexer by this txHash
  } catch (ex) {
    console.error(ex, 'cosmosError');
    emitter.emit('CANCEL_COSMOS'); // optional: emit event for cancel of wallet extension
  }
};
