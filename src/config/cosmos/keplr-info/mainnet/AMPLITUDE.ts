import { PolkadotWalletIds } from 'common';
import { type DotsamaFullConfig } from '../../types';

export const AMPLITUDE = {
	enabled: true,
	handler: 'POLKADOT',
	config: {
		endpoint: ['wss://rpc-amplitude.pendulumchain.tech'],
		chain_type: 'PARA_CHAIN',
		chainId: 'Amplitude',
		assetId: '79228162514264337593543952342',
		ss58_format: 56,
		name: 'amplitude',
		dotChainId: '2124',
		wallets: PolkadotWalletIds,
	},
	hops: {
		COMPOSABLE: {
			type: 'XCM',
			xcmType: 'xTokens.transfer',
			version: 'V2',
			tokens: ['0000'], // ['ASTR'],
		},
	},
} as const satisfies DotsamaFullConfig;
