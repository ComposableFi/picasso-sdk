import React from 'react';

import { getTimeOut, memoBuilder } from '../common/utils';
import solanaTransfer from './methods';

// use txhash to track the transaction from indexer
const Button = () => {
	//example : osmosis -> solana transfer via picasso pfm
	const solanaToPicassoTransfer = async () => {
		const txHash = await solanaTransfer(
			'1000000',
			'1ryziZbFQW4fcWck9wW4vU4KD4qxPHKhmAht6pXPFWo', // solana address
			'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj', // picasso originAddress
			'EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM', // Solana OSMO mintAddress
			1, // solana -> picasso(cosmos) 's source channel is 1
			'transfer/channel-1/transfer/channel-3/uosmo',
			'https://mainnet.helius-rpc.com/?api-key=your-api-key', // helius rpc
			getTimeOut(30).toNumber(),
	
		);
		console.log(txHash, 'txHash:Solana->Picasso');
	};

	const solanaPfmTransfer = async () => {
		const txHash = await solanaTransfer(
			'1000000',
			'1ryziZbFQW4fcWck9wW4vU4KD4qxPHKhmAht6pXPFWo', // solana address
			'pfm', //osmosis fromAddress
			'EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM', // Solana OSMO mintAddress
      1, // solana -> picasso(cosmos) 's source channel is 1
			'transfer/channel-1/transfer/channel-3/uosmo',
			'https://mainnet.helius-rpc.com/?api-key=your-api-key', // helius rpc
			getTimeOut(30).toNumber(),
			memoBuilder({
				destChannel: 3, // picasso(cosmos)-> osmosis 's  source channel is 3
				destAddress: '1ryziZbFQW4fcWck9wW4vU4KD4qxPHKhmAht6pXPFWo' // solana address
			}) // memo for pfm
		);
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
