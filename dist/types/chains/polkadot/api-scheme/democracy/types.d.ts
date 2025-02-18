import type { Enum, Null, Struct, u128, Vec } from '@polkadot/types-codec';
import type { AccountId32, Balance } from '@polkadot/types/interfaces/runtime';
export interface PalletDemocracyPreimageStatus extends Null {
}
export interface PalletDemocracyReferendumInfo extends Null {
}
export interface PalletDemocracyReleases extends Null {
}
export interface PalletDemocracyVoteThreshold extends Null {
}
export interface PalletDemocracyVoteVoting extends Enum {
    readonly isDelegating: boolean;
    readonly asDelegating: {
        readonly balance: Balance;
        readonly target: AccountId32;
        readonly conviction: Null;
        readonly delegations: {
            readonly votes: Null;
            readonly capital: Null;
        } & Struct;
        readonly prior: Null;
    } & Struct;
    readonly isDirect: boolean;
    readonly asDirect: {
        readonly votes: Vec<Null>;
        readonly delegations: {
            readonly votes: u128;
            readonly capital: u128;
            readonly prior: Null;
        } & Struct;
    } & Struct;
    readonly type: 'Delegating' | 'Direct';
}
export interface PalletPreimageRequestStatus extends Null {
}
export type PHANTOM_DEMOCRACY = 'democracy';
//# sourceMappingURL=types.d.ts.map