import { PolkadotWalletIds } from 'common';
import { type DotsamaFullConfig } from '../../types';

export const KUSAMA = {
	enabled: true,
	handler: 'POLKADOT',
	config: {
		endpoint: [
			'wss://kusama-rpc.polkadot.io',
			'wss://kusama-rpc.dwellir.com',
			'wss://1rpc.io/ksm',
			'wss://kusama.api.onfinality.io/public-ws',
		],
		chain_type: 'RELAY_CHAIN',
		ss58_format: 2,
		name: 'Kusama',
		chainId: 'kusama',
		dotChainId: 'kusama',
		wallets: PolkadotWalletIds,
		assetId: '4',
	},
	hops: {
		PICASSO: {
			type: 'XCM',
			xcmType: 'xcmPallet.reserveTransferAssets',
			version: 'V2',
			tokens: ['4'],
		},
	},
} as const satisfies DotsamaFullConfig;
