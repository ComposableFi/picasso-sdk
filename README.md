# picasso-sdk

This is Picasso IBC sdk for cosmos, ethereum, solana, and polkadot(will be updated soon)

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

const subscriptionQueryWithTxHash = gql`
	subscription MySubscription(
		$txHash: String!
		$fromBlockHash: String_comparison_exp = {}
		$sequence: String_comparison_exp = {}
	) {
		IbcEvents(where: { data: { _contains: { txHash: $txHash } }, fromBlockHash: $fromBlockHash, sequence: $sequence }) {
			data
			fromAssetId
			fromAmount
			fromAddress
			fromBlockHash
			fromChainId
			fromFee
			fromFeeAssetId
			fromTimestamp
			nextSequence
			sequence
			sourceChannel
			status
			timeout
			toAddress
			toAmount
			toAssetId
			toBlockHash
			toChainId
			toFee
			toFeeAssetId
			updatedAt
			toTimestamp
			type
			timeout_height
		}
	}
`;

const subscriptionQueryWithoutTxHash = gql`
	subscription MySubscription($fromBlockHash: String_comparison_exp = {}, $sequence: String_comparison_exp = {}) {
		IbcEvents(where: { fromBlockHash: $fromBlockHash, sequence: $sequence }) {
			data
			fromAssetId
			fromAmount
			fromAddress
			fromBlockHash
			fromChainId
			fromFee
			fromFeeAssetId
			fromTimestamp
			nextSequence
			sequence
			sourceChannel
			status
			timeout
			toAddress
			toAmount
			toAssetId
			toBlockHash
			toChainId
			toFee
			toFeeAssetId
			updatedAt
			toTimestamp
			type
			timeout_height
		}
	}
`;

export const usePicassoStatus = (txHash?: string, duration: number = 10000) => {
	const [ibcEvent, setIbcEvent] = useState<Partial<IbcEventsResponse>>();
	const [hopIndex, setHopIndex] = useState(-1);

	const resetStatus = () => {
		setIbcEvent(undefined);
		setHopIndex(-1);
	};

	const subscribeToIbcEvents = (
		client: SubscriptionClient,
		variables: QueryKey & { txHash?: string },
		subscriptionQuery: DocumentNode
	) => {
		if (hopIndex > 100) {
			client.close();
			return;
		}

		const subscription = client.request({ query: subscriptionQuery, variables }).subscribe({
			next(data) {
				console.log('Received data:', data);
				const event = data?.data?.IbcEvents?.[0];
				setIbcEvent(event);
				if (event?.fromBlockHash !== ibcEvent?.fromBlockHash) {
					setHopIndex(prev => prev + 1);
				}

				if (event?.toBlockHash && event?.nextSequence) {
					const nextVariables = {
						fromBlockHash: { _eq: event.toBlockHash },
						sequence: { _eq: event.nextSequence }
					};
					subscribeToIbcEvents(client, nextVariables, subscriptionQueryWithoutTxHash);
				} else if (event && ['TransferPending', 'send_packet'].every(v => event?.status !== v)) {
					client.close();

					console.log('Subscription stopped:', event);
				}
			},
			error(err) {
				console.error('Subscription error:', err);
			},
			complete() {
				console.log('Subscription complete');
			}
		});

		return subscription;
	};

	useEffect(() => {
		if (!txHash) return;
		resetStatus();
		const client = new SubscriptionClient(
			HASURA_GRAPHQL_ENDPOINT,
			{
				reconnect: true,
				connectionParams: {
					headers: {
						'x-hasura-admin-secret': HASURA_ADMIN_SECRET
					}
				}
			},
			WebSocket
		);

		const initialVariables = { txHash };
		const initialSubscription = subscribeToIbcEvents(client, initialVariables, subscriptionQueryWithTxHash);
		if (ibcEvent && ibcEvent?.status !== 'TransferPending' && ibcEvent?.status !== 'send_packet') {
			console.log('this has closed');
			client.close();

			initialSubscription?.unsubscribe();
			const timer = setTimeout(() => {
				hopIndex >= 0 && setHopIndex(-1);

				setIbcEvent(undefined);
			}, duration);

			return () => {
				clearTimeout(timer);
				console.log('Subscription stopped!');
			};
		}

		return () => {
			initialSubscription?.unsubscribe();
			client.close();
			clearTimeout(duration);
		};
	}, [txHash, duration]);

	return { hopIndex, ibcEvent, resetStatus };
};


```

### Usage

```
const Stepper = () => {
	const { ibcEvent, hopIndex, resetStatus } = usePicassoStatus('txHash...');
	return <div>stepper..</div>;
};
```

# How to use methods

### Ethereum

```
const web3 = getWeb3('endpoint');

const AMOUNT = '10000000000000000'; // hardcoded example
// use txhash to track the transaction from indexer
const EthereumButton = () => {
	//example : send ETH osmosis -> solana transfer via picasso pfm

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
			memo: '',
			timeout: 240
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
			await approveErc20({
				web3,
				account: '0xbb63a9b64a80e9338b8ea298c51765e57c4f159c',
				amount: AMOUNT,
				erc20TokenAddress: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0' // FXS's erc20 address
			});
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
const CosmosButton = () => {
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
```
