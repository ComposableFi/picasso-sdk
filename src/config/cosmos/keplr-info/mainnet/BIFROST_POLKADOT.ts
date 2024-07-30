import { PolkadotWalletIds } from 'common';
import { type DotsamaFullConfig } from '../../types';

export const BIFROST_POLKADOT = {
	enabled: true,
	handler: 'POLKADOT',
	config: {
		endpoint: ['wss://hk.p.bifrost-rpc.liebi.com/ws'],
		chain_type: 'PARA_CHAIN',
		assetId: '79228162514264337593543950369', // BNC_DOT
		ss58_format: 6,
		name: 'BiFrost Polkadot',
		chainId: 'bifrost-dot',
		dotChainId: '2030',
		wallets: PolkadotWalletIds,
		general_index: '1', // BNC_DOT id in Bifrost
	},
	hops: {
		COMPOSABLE: {
			type: 'XCM',
			xcmType: 'xTokens.transfer',
			version: 'V2',
			tokens: ['79228162514264337593543950369', '79228162514264337593543950370'], // ['BNC_DOT', 'vDOT'],
		},
	},
} as const satisfies DotsamaFullConfig;
