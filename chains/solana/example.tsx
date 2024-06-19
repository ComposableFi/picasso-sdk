import React from 'react';

import { getTimeOut, memoBuilder } from '../common/utils';
import solanaTransfer from './methods';

// use txhash to track the transaction from indexer
const Button = () => {
	//example : osmosis -> picasso transfer
	const solanaToPicassoTransfer = async () => {
		//rewrite below code to use solanaTransfer method

		const txHash = await solanaTransfer({
			//write the parameters here
			quantity: '1000000',
			accountId: '1ryziZbFQW4fcWck9wW4vU4KD4qxPHKhmAht6pXPFWo', // solana address
			destinationAddress: 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj', // picasso originAddress
			configAssetId: 'EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM', // Solana OSMO mintAddress
			sourceChannelId: 1, // solana -> picasso(cosmos) 's source channel is 1
			configDenom: 'transfer/channel-1/transfer/channel-3/uosmo',
			endpoint: 'https://mainnet.helius-rpc.com/?api-key=your-api-key', // helius rpc
			timeout: getTimeOut(30).toNumber(),
			memo: ''
		});
		console.log(txHash, 'txHash:Solana->Picasso');
	};

	// example: solana -> osmosis transfer via picasso pfm
	const solanaPfmTransfer = async () => {
		const txHash = await solanaTransfer({
			//write the parameters here
			quantity: '1000000',
			accountId: '1ryziZbFQW4fcWck9wW4vU4KD4qxPHKhmAht6pXPFWo', // solana address
			destinationAddress: 'pfm', // set pfm as hop address
			configAssetId: 'EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM', // Solana OSMO mintAddress
			sourceChannelId: 1, // solana -> picasso(cosmos) 's source channel is 1
			configDenom: 'transfer/channel-1/transfer/channel-3/uosmo',
			endpoint: 'https://mainnet.helius-rpc.com/?api-key=your-api-key', // helius rpc
			timeout: getTimeOut(30).toNumber(),
			memo: memoBuilder({
				destChannel: 3, // picasso(cosmos)-> osmosis 's  source channel is 3
				destAddress: 'osmo1ewm97t5qw3uutwd9qh0ydy007ymhl8qtyn24d8' // osmosis address
			}) // memo for pfm
		});
		console.log(txHash, 'txHash:Solana->Osmosis');
	};

	return (
		<>
			<button onClick={solanaToPicassoTransfer}>solanaToPicassoTransfer</button>
			<button onClick={solanaPfmTransfer}>solanaPfmTransfer</button>
		</>
	);
};

export default Button;
