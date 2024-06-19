import React from 'react';

import { memoBuilder } from '../common/utils';
import { ethereumTransfer } from './methods';

// use txhash to track the transaction from indexer
const Button = () => {
	//example : osmosis -> solana transfer via picasso pfm
	
	const ethereumToPicassoTransfer = async () => {

		//TODO: add approval
		const txHash = await ethereumTransfer(
			{
				amount: '1000000000000000', // wei amount 
				assetId: 'ETH', // for PICA it is '0xbb63a9b64a80e9338b8ea298c51765e57c4f159c'
				originAddress: '0x46762bdE09C1a1c566c3efD959368455Bf20c354',
				destinationAddress : 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj',
				channel: 2, // etheruem to picasso(cosmos) channel is 2 
				minimalDenom : 'ETH', // for PICA it is 'transfer/channel-2/ppica' 
				memo : '' 
			}
			
		);
		console.log(txHash, 'txHash:Ethereum->Picasso');
	};
	
	// ethereum to osmosis
	const ethereumPfmTransfer = async () => {
		//TODO: add approval 
		
		// ethereum memo should use escape code
		const memoWithEscape = memoBuilder({
			destChannel: 3, // picasso(cosmos)-> osmosis 's  source channel is 3
			destAddress: 'osmo1ewm97t5qw3uutwd9qh0ydy007ymhl8qtyn24d8'// osmosis address
		})
			.replace(/\\/g, '\\\\')
			.replace(/"/g, '\\"');
		// TODO: add approval 
		const txHash = await ethereumTransfer(
			{
				amount: '1000000000000000', // wei amount 
				assetId: 'ETH', // for PICA it is '0xbb63a9b64a80e9338b8ea298c51765e57c4f159c'
				originAddress: '0x46762bdE09C1a1c566c3efD959368455Bf20c354', // ethereum address 
				destinationAddress : 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj', // picasso address
				channel: 2, // etheruem to picasso(cosmos) channel is 2 
				minimalDenom : 'ETH', // for PICA it is 'transfer/channel-2/ppica' 
				memo: memoWithEscape
			}
			
		);
		console.log(txHash, 'txHash:Ethereum->Picasso');
	};
	return (
		<>
			<button onClick={ethereumToPicassoTransfer}>ethereumToPicassoTransfer</button>
			<button onClick={ethereumPfmTransfer}>ethereumPfmTransfer</button>
		</>
	);
};

export default Button;
