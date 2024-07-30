import { EthereumWalletIds, SolanaWalletIds } from 'common';
import { EthereumFullConfig, type SolanaFullConfig } from '../../types';

export const ETHEREUM = {
	enabled: true,
	handler: 'ETHEREUM',
	config: {
		name: 'Ethereum',
		wallets: EthereumWalletIds,
		chainId: 'ethereum',
		assetId: 'ETH',
	},

	hops: {},
} as const satisfies EthereumFullConfig;
