declare const _default: {
    rpc: {
        pricesFor: {
            description: string;
            params: ({
                name: string;
                type: string;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        simulateAddLiquidity: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        isFlatFee: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        simulateRemoveLiquidity: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
    };
    types: {
        PalletPabloPoolInitConfiguration: string;
        PalletPabloPoolConfiguration: {
            _enum: {
                DualAssetConstantProduct: {
                    owner: string;
                    assetsWeights: string;
                    lpToken: string;
                    feeConfig: {
                        feeRate: string;
                        ownerFeeRate: string;
                        protocolFeeRate: string;
                    };
                };
            };
        };
        PalletPabloPriceCumulative: string;
        PalletPabloTimeWeightedAveragePrice: string;
        PalletPabloPoolId: string;
        PalletPabloPriceAggregate: {
            poolId: string;
            baseAssetId: string;
            quoteAssetId: string;
            spotPrice: string;
        };
        ComposableTraitsDexFee: {
            fee: string;
            lpFee: string;
            ownerFee: string;
            protocolFee: string;
            assetId: string;
        };
        ComposableTraitsDexStakingRewardPool: string;
        RemoveLiquiditySimulationResult: string;
    };
};
export default _default;
//# sourceMappingURL=definitions.d.ts.map