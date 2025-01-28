declare const _default: {
    rpc: {};
    types: {
        PalletDemocracyVoteVoting: {
            _enum: {
                delegating: {
                    balance: string;
                    target: string;
                    conviction: string;
                    delegations: {
                        votes: string;
                        capital: string;
                    };
                    prior: string;
                };
                direct: {
                    votes: string;
                    delegations: {
                        votes: string;
                        capital: string;
                        prior: string;
                    };
                };
            };
        };
        PalletDemocracyVoteThreshold: string;
        PalletDemocracyPreimageStatus: string;
        PalletDemocracyReferendumInfo: string;
        PalletPreimageRequestStatus: string;
        PalletDemocracyReleases: string;
    };
};
export default _default;
