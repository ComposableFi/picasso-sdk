"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rpc: {},
    types: {
        VestingWindow: {
            _enum: {
                MomentBased: {
                    start: 'Moment',
                    period: 'Moment'
                },
                BlockNumberBased: {
                    start: 'BlockNumber',
                    period: 'BlockNumber'
                }
            }
        },
        ComposableTraitsVestingVestingSchedule: {
            vestingScheduleId: 'u128',
            window: 'VestingWindow<BlockNumber, Moment>',
            periodCount: 'u32',
            perPeriod: 'Balance',
            alreadyClaimed: 'Balance'
        },
        ComposableTraitsVestingVestingScheduleIdSet: 'Null',
        ComposableTraitsVestingVestingScheduleInfo: {
            window: 'VestingWindow<BlockNumber, Moment>',
            periodCount: 'u128',
            perPeriod: 'u128'
        }
    }
};
