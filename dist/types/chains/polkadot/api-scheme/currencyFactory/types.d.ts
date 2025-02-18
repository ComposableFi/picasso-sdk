import type { Struct, Vec } from '@polkadot/types-codec';
import type { AssetId } from '@polkadot/types/interfaces/runtime';
export interface PalletCurrencyFactoryRanges extends Struct {
    readonly ranges: Vec<PalletCurrencyFactoryRangesRange>;
}
export interface PalletCurrencyFactoryRangesRange extends Struct {
    readonly current: AssetId;
    readonly end: AssetId;
}
export type PHANTOM_CURRENCYFACTORY = 'currencyFactory';
