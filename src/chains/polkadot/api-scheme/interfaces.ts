import type Big from 'big.js';

export type AssetRatio = {
	n: number;
	d: number;
};

export interface BalanceRes {
	consumers: string;
	nonce: string;
	providers: string;
	sufficients: string;
	data: {
		free: string;
		reserved: string;
		miscFrozen: string;
		feeFrozen: string;
	};
}

export interface Balance {
	assetId: string;
	value: string;
}

export interface AssetInterface {
	name: string;
	id: string;
	decimals: number;
	existentialDeposit: string;
	ratio: AssetRatio;
	balance?: string;
	exchangeRate?: string;
}

export interface BalancesInterface {
	assetId: string;
	assetName: string;
	balance: string;
	decimal: Big;
}
