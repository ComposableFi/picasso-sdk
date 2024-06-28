import { type StdFee } from '@cosmjs/stargate';

import { emitter } from '../common/utils';
import { TX_MSG } from './constants';
import { generateTransferMsg, getClient, keplr } from './helper';
import { type TX_MSG_TYPE } from './types';

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
	timeout = 30,
	txMsg = TX_MSG
}: {
	sourceChannel: number; //channel with picasso(cosmos), ex> osmosis -> picasso(cosmos)'s source channel id is 1279
	sourceAddress: string;
	destAddress: string;
	amount: string;
	assetId: string;
	fee: 'auto' | StdFee;
	chainId: string;
	rpc: string;
	memo: string; // pfm requires memo
	timeout?: number;
	txMsg?: TX_MSG_TYPE;
}) => {
	const client = await getClient(chainId, rpc);
	const msg = generateTransferMsg(txMsg, sourceChannel, sourceAddress, destAddress, amount, assetId, memo, timeout);

	// To avoid keplr or leap overrides custom fee from FE (mostly it is set to 'auto'
	if (keplr) {
		keplr.defaultOptions = {
			sign: {
				preferNoSetFee: fee !== 'auto'
			}
		};
	}

	try {
		const generalResponse = await client.signAndBroadcast(sourceAddress, [msg], fee);
		emitter.emit('COSMOS_APPROVED'); // optional: emit event for approval of wallet extension
		return generalResponse.transactionHash; // Query indexer by this txHash
	} catch (ex) {
		emitter.emit('CANCEL_COSMOS'); // optional: emit event for cancel of wallet extension
	}
};


