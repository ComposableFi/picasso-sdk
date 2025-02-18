import type { Enum, Null, Struct, u32, u128 } from '@polkadot/types-codec';
import type { Balance, BlockNumber, Moment } from '@polkadot/types/interfaces/runtime';
export interface ComposableTraitsVestingVestingSchedule extends Struct {
    readonly vestingScheduleId: u128;
    readonly window: VestingWindow;
    readonly periodCount: u32;
    readonly perPeriod: Balance;
    readonly alreadyClaimed: Balance;
}
export interface ComposableTraitsVestingVestingScheduleIdSet extends Null {
}
export interface ComposableTraitsVestingVestingScheduleInfo extends Struct {
    readonly window: VestingWindow;
    readonly periodCount: u128;
    readonly perPeriod: u128;
}
export interface VestingWindow extends Enum {
    readonly isMomentBased: boolean;
    readonly asMomentBased: {
        readonly start: Moment;
        readonly period: Moment;
    } & Struct;
    readonly isBlockNumberBased: boolean;
    readonly asBlockNumberBased: {
        readonly start: BlockNumber;
        readonly period: BlockNumber;
    } & Struct;
    readonly type: 'MomentBased' | 'BlockNumberBased';
}
export type PHANTOM_VESTING = 'vesting';
//# sourceMappingURL=types.d.ts.map