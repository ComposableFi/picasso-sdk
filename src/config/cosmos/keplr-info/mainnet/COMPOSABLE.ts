import { PolkadotWalletIds } from 'common';
import { type DotsamaFullConfig } from '../../types';

export const COMPOSABLE = {
	enabled: true,
	handler: 'POLKADOT',
	config: {
		endpoint: [
			'wss://rpc.composable.finance',
			'wss://composable-rpc.dwellir.com',
			'wss://composable.api.onfinality.io/public-ws',
		],
		chain_type: 'PARA_CHAIN',
		ss58_format: 50,
		name: 'Composable',
		chainId: 'composable',
		dotChainId: '2019',
		wallets: PolkadotWalletIds,
		assetId: '1', //  should be 2 but LAYR is not available
	},
	hops: {
		PICASSO: {
			type: 'IBC',
			fromChannelId: '15',
			toChannelId: '15',
		},
		POLKADOT: {
			type: 'XCM',
			xcmType: 'xTokens.transfer',
			version: 'V3',
			tokens: ['79228162514264337593543950342'],
		},
		BIFROST_POLKADOT: {
			type: 'XCM',
			xcmType: 'xTokens.transfer',
			version: 'V2',
			tokens: ['79228162514264337593543950369', '79228162514264337593543950370'], // ['BNC_DOT', 'vDOT'],
		},
		ASTAR: {
			type: 'XCM',
			xcmType: 'xTokens.transfer',
			version: 'V2',
			tokens: ['79228162514264337593543952342'], // ['ASTR'],
		},
	},
} as const satisfies DotsamaFullConfig;
