# picasso-sdk

This is Picasso IBC sdk for cosmos, ethereum, solana, and polkadot

# How to use indexer Query

NOTE: To use the indexer API, you need to obtain the Hasura endpoint and secret key. Please contact the Picasso team for assistance.

### 1. Install Packages

```
npm install react graphql graphql-tag subscriptions-transport-ws picasso-sdk

```

- Please get hasura url and

### 2. Code example with react

usePicassoStatus.ts

```
import { useEffect, useState } from 'react';

import { type DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { type IbcEventsResponse } from 'picasso-sdk';
import { SubscriptionClient } from 'subscriptions-transport-ws';

type QueryKey = {
	fromBlockHash?: { _eq: string };
	sequence?: { _eq: number };
};

const HASURA_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_HASURA_URL || '';
const HASURA_ADMIN_SECRET = process.env.NEXT_PUBLIC_HASURA_PRIVATE_KEY || '';

export const queryIbcEvents = `
	query MyQuery($limit: Int = 20, $offset: Int = 10,  $orderBy: [IbcEvents_order_by!] = [{createdAt: desc}]) {
		IbcEvents(limit: $limit, offset: $offset, order_by: $orderBy) {
			id
			sequence
			type
			status
			sourceChannel
			destinationChannel
			fromChainId
			fromBlockHash
			fromFee
			fromFeeAssetId
			fromAddress
			fromTimestamp
			fromAmount
			fromAssetId
			toChainId
			toBlockHash
			toFee
			toFeeAssetId
			toAddress
			toTimestamp
			toAmount
			toAssetId
			nextSequence
			data
			createdAt
			updatedAt
			timeout
			timeout_height
			excludeAdjust
			from_amount_as_numeric
		}
	}
`;

export const queryIbcEventsWithFromAddress = `
	query MyQuery($limit: Int = 20, $offset: Int = 10, $fromAddress: String, $orderBy: [IbcEvents_order_by!] = [{createdAt: desc}]) {
		IbcEvents(limit: $limit, offset: $offset, order_by: $orderBy, where: { fromAddress: { _eq: $fromAddress } }) {
			id
			sequence
			type
			status
			sourceChannel
			destinationChannel
			fromChainId
			fromBlockHash
			fromFee
			fromFeeAssetId
			fromAddress
			fromTimestamp
			fromAmount
			fromAssetId
			toChainId
			toBlockHash
			toFee
			toFeeAssetId
			toAddress
			toTimestamp
			toAmount
			toAssetId
			nextSequence
			data
			createdAt
			updatedAt
			timeout
			timeout_height
			excludeAdjust
			from_amount_as_numeric
		}
	}
`;
const queryFn = async ({ pageParam = 0, queryKey }: { pageParam?: number; queryKey: [string, string | undefined] }) => {
	const [_1, walletAddress] = queryKey;
	const PAGE_SIZE = walletAddress ? WALLET_PAGE_SIZE : ALL_PAGE_SIZE;
	const variables = {
		fromAddress: walletAddress,
		offset: pageParam * PAGE_SIZE,
		limit: PAGE_SIZE,
		orderBy: [{ createdAt: 'desc' }]
	};

	const query = walletAddress ? queryIbcEventsWithFromAddress : queryIbcEvents;

	const { data } = await client.query({
		query: gql`
			${query}
		`,
		variables
	});

	const refinedIbcEvents: IbcEventsResponse[] = data?.IbcEvents?.map(event => ({
		...event,
		amount: {
			assetName: event?.fromAssetId,
			assetId: event?.fromAssetId,
			amount: event?.fromAmount
			// 필요한 경우 assetName과 decimals를 추가
		},
		status: event.status as any,
		sequence: event.sequence as `${number}`,
		realStatus: event.status as any,
		fromBlockHash: event.fromBlockHash || '',
		sourceChannel: event.sourceChannel as `channel-${number}`,
		fromFee: event.fromFee as `${number}`,
		toFee: event.toFee as `${number}`,
		toFeeAssetId: event.toFeeAssetId as `${number}`,
		fromTimestamp: event.fromTimestamp as `${bigint}`,
		toTimestamp: event.toTimestamp as `${bigint}`,
		destinationChannel: event.destinationChannel as `channel-${number}`,
		nextSequence: event.nextSequence as `${number}` | null,
		data: {
			...event.data,
			txHash: event.data?.txHash || ''
		},
		createdAt: event.createdAt
	})).filter(event => !event?.data?.memo?.includes('wasm')); //filter wasm for now

	const filteredEvents = refinedIbcEvents.reduce((acc, currentItem, index, array) => {
		const shouldInclude = array.some(
			otherItem =>
				currentItem.sequence === otherItem.nextSequence && currentItem.fromBlockHash === otherItem.toBlockHash
		);

		if (!shouldInclude) {
			acc.push(currentItem);
		}
		return acc;
	}, [] as IbcEventsResponse[]);

	return {
		events: filteredEvents,
		nextPage: filteredEvents.length === PAGE_SIZE ? pageParam + 1 : undefined,
		totalCount: data?.IbcEvents_aggregate?.aggregate?.count || 0
	};
};


```

# How to use methods

### Ethereum

```
import {
  getWeb3,
  ethereumTransfer,
  getTimeOut,
  buildIbcPath,
  createForwardPathRecursive,
} from 'picasso-sdk';

const web3 = getWeb3('endpoint');

const originChainId = 'ethereum';
const destinationChainId = 'picasso';
const AMOUNT = '10000000000000000'; // hardcoded example
// use txhash to track the transaction from indexer
const EthereumButton = () => {
  //example : send ETH osmosis -> solana transfer via picasso pfm

  // example txHash: ethereum -> archway https://etherscan.io/tx/0x332d9cd30af18245e5a70989f0e61a0f98594ca25baf159ab409223b808c4744

  // example txhash: ethereum -> picasso https://etherscan.io/tx/0x6c3fd9120cfe7825d98e41e5b71279cfd6543c3811d82e40545ca7e69a2d95ce
  const ethereumTransfer = async () => {
    //TODO: add approval

    const ibcPath = buildIbcPath(originChainId, destinationChainId) || [];

    const memo =
      ibcPath.length > 1
        ? JSON.stringify(
            createForwardPathRecursive(ibcPath?.slice(1, ibcPath.length))
          )
        : '';

    const memoWithEscape = memo.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    ethereumTransfer({
      web3,
      amount: AMOUNT, // wei amount
      assetId: 'ETH', // for PICA it is '0xbb63a9b64a80e9338b8ea298c51765e57c4f159c'
      originAddress: '0x46762bdE09C1a1c566c3efD959368455Bf20c354',
      destinationAddress: 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj',
      channel: 2, // etheruem to picasso(cosmos) channel is 2
      minimalDenom: getConfigAssetInfo(assetId).minimalDenom, // for PICA it is 'transfer/channel-2/ppica'
      memo: memoWithEscape,
      timeout: getTimeOut(120).toString(),
    });
  };
  // send PICA from ethereum to osmosis

  return (
    <>
      <button onClick={ethereumToPicassoTransfer}>
        ethereumToPicassoTransfer
      </button>
      <button onClick={ethereumPfmTransfer}>ethereumPfmTransfer</button>
    </>
  );
};

```

### Solana

```
const SolanaButton = () => {
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
```

### Cosmos

```
import { cosmosTransfer, memoBuilder, secretTransfer } from 'picasso-sdk';
import { getTimeOut, keplrChains } from '..';

const CosmosButton = () => {
const keplr = window.keplr;
    //example : osmosis -> solana transfer via picasso pfm
	const cosmosToSolanaTransfer = async () => {
		const txHash = await cosmosTransfer({
			sourceChannel: 1279,
            gasPrice: (keplrChains['osmosis-1'].feeCurrencies[0].gasPriceStep?.average || 0).toString(),
            chainId: 'osmosis-1',
			sourceAddress: 'osmo1ewm97t5qw3uutwd9qh0ydy007ymhl8qtyn24d8', //osmosis fromAddress
			destAddress: 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj', // picasso hopAddress
			amount: '100000000', // minimal denom amount
			assetId: 'uosmo', // coin or ibc denom
			fee: 'auto', // set fee as auto
            timeout: getTimeOut(240),
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
            gasPrice: (keplrChains['osmosis-1'].feeCurrencies[0].gasPriceStep?.average || 0).toString(),
            chainId: 'osmosis-1',
			sourceAddress: 'osmo1ewm97t5qw3uutwd9qh0ydy007ymhl8qtyn24d8', //osmosis fromAddress
			destAddress: 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj', // picasso hopAddress
			amount: '100000000', // minimal denom amount
			assetId: 'uosmo', // coin or ibc denom
			fee: 'auto', // set fee as auto
            timeout: getTimeOut(240),
			chainId: 'osmosis-1', // source chain id
			rpc: 'https://osmosis-rpc.polkachu.com', // use chain rpc from chain registry
			memo: memoBuilder({
				destChannel: 52, //  picasso(cosmos)->ethereum's source channel is 52
				destAddress: '0x46762bdE09C1a1c566c3efD959368455Bf20c354' // ethereum address
			}) //memo for pfm
		});
		console.log(txHash, 'txHash:Osmosis->Ethereum');
	};

    const secretTransfer = async () => {
        const txHash = await secretTransfer({
            amount: '100000000',
            secretAssetId: 'uscrt',
            keplr: provider,
            sourceAddress: 'osmo1ewm97t5qw3uutwd9qh0ydy007ymhl8qtyn24d8',
            destAddress: 'pica1ewm97t5qw3uutwd9qh0ydy007ymhl8qth56qlj',
            sourceChannel: 83,
            codeHash: getConfigAssetInfo('uscrt').codeHash
        });
    }
	return (
		<>
		   	<button onClick={cosmosToSolanaTransfer}>cosmosToSolanaTransfer</button>
			<button onClick={cosmosToEthereumTransfer}>cosmosToEthereumTransfer</button>
            <button onClick={secretTransfer}>secretTransfer</button>
		</>
	);
};
```
