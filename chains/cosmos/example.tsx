import React from 'react';

import { memoBuilder } from '../common/utils';
import cosmosTransfer from './methods';

// use txhash to track the transaction from indexer
const Button = () => {
	//example : osmosis -> solana transfer via picasso pfm
	const cosmosToSolanaTransfer = async () => {
		const txHash = await cosmosTransfer(
			1279,
			'osmo1ewm97t5qw3uutwd9qh0ydy007ymhl8qtyn24d8', //osmosis fromAddress
			'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj', // picasso hopAddress
			'100000000', // minimal denom amount
			'uosmo', // coin or ibc denom
			'auto', // set fee as auto
			'osmosis-1', // source chain id
			'https://osmosis-rpc.polkachu.com', // use chain rpc from chain registry
			memoBuilder({
				destChannel: 71, // picasso(cosmos)-> solana 's  source channel is 71
				destAddress: '1ryziZbFQW4fcWck9wW4vU4KD4qxPHKhmAht6pXPFWo' // solana address
			}) // memo for pfm
		);
		console.log(txHash, 'txHash:Osmosis->Solana');
	};

	// example : osmosis -> ethereum transfer via picasso pfm
	const cosmosToEthereumTransfer = async () => {
		const txHash = await cosmosTransfer(
			1279,
			'osmo1ewm97t5qw3uutwd9qh0ydy007ymhl8qtyn24d8', //osmosis fromAddress
			'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj', // solana toAddress
			'100000000', // minimal denom amount
			'uosmo', // coin or ibc denom
			'auto', // set fee as auto
			'osmosis-1', // source chain id
			'https://osmosis-rpc.polkachu.com', // use chain rpc from chain registry
			memoBuilder({
				destChannel: 52, //  picasso(cosmos)->ethereum's source channel is 52
				destAddress: '0x46762bdE09C1a1c566c3efD959368455Bf20c354' // ethereum address
			}) //memo for pfm
		);
		console.log(txHash, 'txHash:Osmosis->Ethereum');
	};
	return (
		<>
			<button onClick={cosmosToSolanaTransfer}>cosmosToSolanaTransfer</button>
			<button onClick={cosmosToEthereumTransfer}>cosmosToEthereumTransfer</button>
		</>
	);
};

export default Button;
