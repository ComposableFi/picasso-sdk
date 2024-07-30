import { PolkadotWalletIds } from 'common';
import { type DotsamaFullConfig } from '../../types';

export const ASTAR = {
	enabled: true,
	handler: 'POLKADOT',
	config: {
		endpoint: ['wss://rpc.astar.network'],
		chain_type: 'PARA_CHAIN',
		chainId: 'Astar',
		assetId: '79228162514264337593543952342',
		ss58_format: 5,
		name: 'astar',
		dotChainId: '2006',
		wallets: PolkadotWalletIds,
	},
	hops: {
		COMPOSABLE: {
			type: 'XCM',
			xcmType: 'xTokens.transfer',
			version: 'V2',
			tokens: ['79228162514264337593543952342'], // ['ASTR'],
		},
	},
} as const satisfies DotsamaFullConfig;
