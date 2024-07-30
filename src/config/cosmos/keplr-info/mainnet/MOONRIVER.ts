import { PolkadotWalletIds } from 'common';
import { type DotsamaFullConfig } from '../../types';

export const MOONRIVER = {
	enabled: true,
	handler: 'POLKADOT',
	config: {
		endpoint: ['wss://moonriver-rpc.dwellir.com'],
		chain_type: 'PARA_CHAIN',
		chainId: 'moonriver',
		dotChainId: '2023',
		assetId: '23',
		ss58_format: 0,
		name: 'Moonriver',
		wallets: PolkadotWalletIds,
		general_index: '203223821023327994093278529517083736593', // usdt id in statemine
	},
	hops: {
		PICASSO: {
			type: 'XCM',
			xcmType: 'polkadotXcm.limitedReserveTransferAssets',
			version: 'V2',
			tokens: ['23'],
		},
	},
} as const satisfies DotsamaFullConfig;
