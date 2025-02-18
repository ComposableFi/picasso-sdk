import type { Null, Struct, Text, u128 } from '@polkadot/types-codec';
export interface AssetsBalance extends u128 {
}
export interface ComposableTraitsDefiCurrencyPairCurrencyId extends Struct {
    readonly base: CurrencyId;
    readonly quote: CurrencyId;
}
export interface ComposableTraitsDefiSellCurrencyId extends CurrencyId {
}
export interface ComposableTraitsXcmCumulusMethodId extends Null {
}
export interface ComposableTraitsXcmXcmSellRequest extends Null {
}
export interface CurrencyId extends u128 {
}
export interface CustomRpcBalance extends SafeRpcWrapper {
}
export interface CustomRpcCurrencyId extends SafeRpcWrapper {
}
export interface SafeRpcWrapper extends Text {
}
export type PHANTOM_COMMON = 'common';
//# sourceMappingURL=types.d.ts.map