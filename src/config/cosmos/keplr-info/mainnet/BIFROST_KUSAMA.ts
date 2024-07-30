import { PolkadotWalletIds } from 'common';
import { type DotsamaFullConfig } from '../../types';

export const BIFROST_KUSAMA = {
	enabled: true,
	handler: 'POLKADOT',
	config: {
		endpoint: [
			'wss://bifrost-rpc.liebi.com/ws',
			'wss://bifrost-rpc.dwellir.com',
			'wss://bifrost-parachain.api.onfinality.io/public-ws',
		],
		chain_type: 'PARA_CHAIN',
		chainId: 'bifrost-kusama',
		dotChainId: '2001',
		ss58_format: 6,
		name: 'BiFrost Kusama',
		wallets: PolkadotWalletIds,
		assetId: '4',
		general_index: '1', //  BNC id on Bifrost
	},
	hops: {
		PICASSO: {
			type: 'XCM',
			xcmType: 'xTokens.transfer',
			version: 'V2',
			tokens: ['31', '32'], // ['BNC_KSM', 'vKSM'],
		},
	},
} as const satisfies DotsamaFullConfig;
