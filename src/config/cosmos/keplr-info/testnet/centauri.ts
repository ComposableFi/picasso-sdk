import { type ChainInfo } from '@keplr-wallet/types';
import { type DevChainIdType } from 'common';
import { generateBech32Config } from '../helpers';

export const centauri: ChainInfo & { chainId: DevChainIdType } = {
	chainId: 'banksy-testnet-5',
	chainName: 'centauri-testnet',
	rpc: 'https://rpc-testnet5.composable-cosmos.composablenodes.tech:443',
	rest: 'https://api-testnet5.composable-cosmos.composablenodes.tech',
	// rest: 'https://composable-api.cogwheel.zone/',

	bip44: {
		coinType: 118,
	},
	walletUrlForStaking: 'https://explorer.nodestake.top/composable',
	bech32Config: generateBech32Config('pica'),
	currencies: [
		{
			coinDenom: 'PICA',
			coinMinimalDenom: 'ppica',
			coinDecimals: 12,
			coinGeckoId: 'unknown',
		},
	],
	feeCurrencies: [
		{
			coinDenom: 'PICA',
			coinMinimalDenom: 'ppica',
			coinDecimals: 12,
			coinGeckoId: 'unknown',
			gasPriceStep: {
				low: 0,
				average: 0,
				high: 0,
			},
		},
	],
	stakeCurrency: {
		coinDenom: 'PICA',
		coinMinimalDenom: 'ppica',
		coinDecimals: 12,
		coinGeckoId: 'unknown',
	},
	features: ['ibc-transfer', 'ibc-go'],
};
