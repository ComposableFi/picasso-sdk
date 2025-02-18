declare const _default: {
    rpc: {};
    types: {
        VestingWindow: {
            _enum: {
                MomentBased: {
                    start: string;
                    period: string;
                };
                BlockNumberBased: {
                    start: string;
                    period: string;
                };
            };
        };
        ComposableTraitsVestingVestingSchedule: {
            vestingScheduleId: string;
            window: string;
            periodCount: string;
            perPeriod: string;
            alreadyClaimed: string;
        };
        ComposableTraitsVestingVestingScheduleIdSet: string;
        ComposableTraitsVestingVestingScheduleInfo: {
            window: string;
            periodCount: string;
            perPeriod: string;
        };
    };
};
export default _default;
