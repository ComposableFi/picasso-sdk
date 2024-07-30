import { SolanaWalletIds } from 'common';
import { type SolanaFullConfig } from '../../types';

export const SOLANA = {
	enabled: false,
	handler: 'SOLANA',
	config: {
		name: 'Solana',
		wallets: SolanaWalletIds,
		chainId: 'solana',
		assetId: 'sol',
	},

	hops: {},
} as const satisfies SolanaFullConfig;
