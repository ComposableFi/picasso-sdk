# picasso-sdk
Picasso IBC sdk for cosmos, ethereum, solana, and polkadot

# How to use indexer 

## 1. Transaction with direct channel 
* You can query indexer API with txHash 
https://204.48.25.128/api/ibc_events?txHash=0F3DFE07428C1D600964B5FA9BF91A72EEEED0AFB628532864998B58F97B66A7

## 2. PFM Transaction via Picasso(Cosmos) 
* query by next hop's information 

[First hop] Composable -> Picasso (kusama)
https://204.48.25.128/api/ibc_events?fromBlockHash=0x2cfdd9d31db4c1c5b643c7b8a82cdf7e65fcd4b711fa2745e67ee448a69980db&sequence=4823

response: 
```
{
  ..., 
  toBlockHash : "0xde232ee07fb9d6c36f4f3c04ae3dca1be02890f4f2cbe369d730c25a2083e831",
  nextSequence : "21892"
}
```

[Second hop] Picasso (kusama) -> Picasso(Cosmos)
https://204.48.25.128/api/ibc_events?fromBlockHash=0xde232ee07fb9d6c36f4f3c04ae3dca1be02890f4f2cbe369d730c25a2083e831&sequence=21892

response: 
```
{
  ..., 
  toBlockHash : "C209A7397B3A0C139F5959C48035224AB7048718920CED667AB84DCFEF7FE4F4",
  nextSequence : "null" // query until nextSequence is null 
}
```



# Examles
##  Ethereum example 
import React from 'react';

import Big from 'big.js';

import { memoBuilder } from '../common/utils';
import { getApprovedErc20, getWeb3 } from './helpers';
import { approveErc20, ethereumTransfer } from './methods';

const web3 = getWeb3('endpoint');

// use txhash to track the transaction from indexer
const Button = () => {
	//example : send ETH osmosis -> solana transfer via picasso pfm

	const AMOUNT = '10000000000000000'; // hardcoded example
	// example txhash: ethereum -> picasso https://etherscan.io/tx/0x6c3fd9120cfe7825d98e41e5b71279cfd6543c3811d82e40545ca7e69a2d95ce
	const ethereumToPicassoTransfer = async () => {
		//TODO: add approval
		const txHash = await ethereumTransfer({
			web3,
			amount: AMOUNT, // wei amount
			assetId: 'ETH', // for PICA it is '0xbb63a9b64a80e9338b8ea298c51765e57c4f159c'
			originAddress: '0x46762bdE09C1a1c566c3efD959368455Bf20c354',
			destinationAddress: 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj',
			channel: 2, // etheruem to picasso(cosmos) channel is 2
			minimalDenom: 'ETH', // for PICA it is 'transfer/channel-2/ppica'
			memo: ''
		});
		console.log(txHash, 'txHash:Ethereum->Picasso');
	};

	// example txHash: ethereum -> archway https://etherscan.io/tx/0x332d9cd30af18245e5a70989f0e61a0f98594ca25baf159ab409223b808c4744 
	// send PICA from ethereum to osmosis
	const ethereumPfmTransfer = async () => {
		const approvedAmount = await getApprovedErc20(
			web3,
			'0x46762bdE09C1a1c566c3efD959368455Bf20c354',
			'0xbb63a9b64a80e9338b8ea298c51765e57c4f159c'
		); // PICA's erc20 address
		if (new Big(approvedAmount || 0).lt(AMOUNT)) {
			await approveErc20(
				web3,
				'0xbb63a9b64a80e9338b8ea298c51765e57c4f159c',
				AMOUNT,
				'0xbb63a9b64a80e9338b8ea298c51765e57c4f159c'
			);
		}

		// ethereum memo should use escape code
		const memoWithEscape = memoBuilder({
			destChannel: 3, // picasso(cosmos)-> osmosis 's  source channel is 3
			destAddress: 'osmo1ewm97t5qw3uutwd9qh0ydy007ymhl8qtyn24d8' // osmosis address
		})
			.replace(/\\/g, '\\\\')
			.replace(/"/g, '\\"');
		// TODO: add approval
		const txHash = await ethereumTransfer({
			web3,
			amount: '1000000000000000', // wei amount
			assetId: 'ETH', // for PICA it is '0xbb63a9b64a80e9338b8ea298c51765e57c4f159c'
			originAddress: '0x46762bdE09C1a1c566c3efD959368455Bf20c354', // ethereum address
			destinationAddress: 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj', // picasso address
			channel: 2, // etheruem to picasso(cosmos) channel is 2
			minimalDenom: 'ETH', // for PICA it is 'transfer/channel-2/ppica'
			memo: memoWithEscape
		});

		console.log(txHash, 'txHash:Ethereum->Osmosis');
	};
	return (
		<>
			<button onClick={ethereumToPicassoTransfer}>ethereumToPicassoTransfer</button>
			<button onClick={ethereumPfmTransfer}>ethereumPfmTransfer</button>
		</>
	);
};

export default Button;



## Solana example 
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


## Cosmos example 
import React from 'react';

import { memoBuilder } from '../common/utils';
import cosmosTransfer from './methods';

// use txhash to track the transaction from indexer
const Button = () => {
	//example : osmosis -> solana transfer via picasso pfm
	const cosmosToSolanaTransfer = async () => {
		const txHash = await cosmosTransfer({
			sourceChannel: 1279,
			sourceAddress: 'osmo1ewm97t5qw3uutwd9qh0ydy007ymhl8qtyn24d8', //osmosis fromAddress
			destAddress: 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj', // picasso hopAddress
			amount: '100000000', // minimal denom amount
			assetId: 'uosmo', // coin or ibc denom
			fee: 'auto', // set fee as auto
			chainId: 'osmosis-1', // source chain id
			rpc: 'https://osmosis-rpc.polkachu.com', // use chain rpc from chain registry
			memo: memoBuilder({
				destChannel: 71, // picasso(cosmos)-> solana 's  source channel is 71
				destAddress: '1ryziZbFQW4fcWck9wW4vU4KD4qxPHKhmAht6pXPFWo' // solana address
			}) // memo for pfm
		});
		console.log(txHash, 'txHash:Osmosis->Solana');
	};

	// example : osmosis -> ethereum transfer via picasso pfm
	const cosmosToEthereumTransfer = async () => {
		const txHash = await cosmosTransfer({
			sourceChannel: 1279,
			sourceAddress: 'osmo1ewm97t5qw3uutwd9qh0ydy007ymhl8qtyn24d8', //osmosis fromAddress
			destAddress: 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj', // picasso hopAddress
			amount: '100000000', // minimal denom amount
			assetId: 'uosmo', // coin or ibc denom
			fee: 'auto', // set fee as auto
			chainId: 'osmosis-1', // source chain id
			rpc: 'https://osmosis-rpc.polkachu.com', // use chain rpc from chain registry
			memo: memoBuilder({
				destChannel: 52, //  picasso(cosmos)->ethereum's source channel is 52
				destAddress: '0x46762bdE09C1a1c566c3efD959368455Bf20c354' // ethereum address
			}) //memo for pfm
		});
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
