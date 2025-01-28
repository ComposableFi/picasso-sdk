declare const _default: {
    rpc: {
        amountAvailableToClaimFor: {
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
    };
    types: {
        ComposableTraitsAssetsXcmAssetLocation: string;
        PalletCrowdloanRewardsModelsReward: {
            total: string;
            claimed: string;
            vestingPeriod: string;
        };
        PalletCrowdloanRewardsModelsRemoteAccount: {
            _enum: {
                RelayChain: string;
                Ethereum: string;
                Registry: string;
            };
        };
        ComposableTraitsCallFilterCallFilterEntry: string;
        PalletAssetsRegistryCandidateStatus: string;
        SpConsensusAuraSr25519AppSr25519Public: string;
        ComposableTraitsBondedFinanceBondOffer: {
            beneficiary: string;
            asset: string;
            bondPrice: string;
            nbOfBonds: string;
            maturity: string;
            reward: string;
            keepAlive: string;
        };
        ComposableTraitsBondedFinanceBondDuration: {
            Finite: {
                returnIn: string;
            };
        };
        ComposableTraitsBondedFinanceBondOfferReward: {
            asset: string;
            amount: string;
            maturity: string;
        };
        PalletCollatorSelectionCandidateInfo: string;
        PalletCrowdloanRewardsReward: string;
        CumulusPalletDmpQueueConfigData: string;
        PalletDutchAuctionSellOrder: string;
        CumulusPalletDmpQueuePageIndexData: string;
        PalletDutchAuctionTakeOrder: string;
        ComposableTraitsGovernanceSignedRawOrigin: {
            _enum: {
                Root: string;
                Signed: string;
                isSigned: string;
                asSigned: string;
            };
        };
        PalletIdentityRegistration: string;
        PalletIdentityRegistrarInfo: string;
        PalletOracleAssetInfo: string;
        PalletOracleWithdraw: {
            stake: string;
            unlockBlock: string;
        };
        PalletOraclePrePrice: string;
        PalletOraclePrice: string;
        PolkadotPrimitivesV1AbridgedHostConfiguration: string;
        PolkadotPrimitivesV2PersistedValidationData: string;
        PolkadotPrimitivesV2UpgradeRestriction: string;
        PolkadotPrimitivesV2AbridgedHostConfiguration: string;
        CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: string;
        PolkadotPrimitivesV1PersistedValidationData: string;
        PalletSchedulerScheduledV2: string;
        PalletSchedulerReleases: string;
        PalletSchedulerScheduledV3: string;
        DaliRuntimeOpaqueSessionKeys: string;
        OrmlTokensAccountData: {
            free: string;
            reserved: string;
            frozen: string;
        };
        OrmlTokensBalanceLock: string;
        OrmlTokensReserveData: string;
        PalletTreasuryProposal: string;
        PalletVaultModelsStrategyOverview: string;
        PalletVaultModelsVaultInfo: string;
        CumulusPalletXcmpQueueInboundStatus: string;
        CumulusPalletXcmpQueueInboundChannelDetails: string;
        PolkadotParachainPrimitivesXcmpMessageFormat: string;
        CumulusPalletXcmpQueueOutboundStatus: string;
        CumulusPalletXcmpQueueQueueConfigData: string;
        CumulusPalletXcmpQueueOutboundChannelDetails: string;
        PalletCrowdloanRewardsModelsProof: {
            _enum: {
                RelayChain: string;
                Ethereum: string;
            };
        };
        PalletCrowdloanRewardsModelsEcdsaSignature: string;
        PalletDemocracyConviction: string;
        PalletDemocracyVoteAccountVote: string;
        ComposableTraitsDefiSell: string;
        ComposableTraitsAuctionAuctionStepFunction: string;
        ComposableTraitsDefiTake: string;
        ComposableTraitsTimeTimeReleaseFunction: string;
        PalletIdentityJudgement: string;
        PalletIdentityBitFlags: string;
        PalletIdentityIdentityInfo: string;
        CumulusPrimitivesParachainInherentParachainInherentData: string;
        DaliRuntimeOriginCaller: string;
        ComposableTraitsVaultVaultConfig: string;
        XcmVersionedMultiAsset: string;
        PalletMosaicNetworkInfo: {
            enabled: string;
            maxTransferSize: string;
        };
        PalletMosaicDecayBudgetPenaltyDecayer: string;
        PalletAssetsRegistryForeignMetadata: string;
        PalletMosaicAssetInfo: string;
        PalletMosaicRelayerStaleRelayer: {
            relayer: {
                current: string;
                next: {
                    ttl: string;
                    account: string;
                };
            };
        };
        FrameSupportScheduleMaybeHashed: string;
        FrameSupportScheduleLookupError: string;
        PalletLiquidationsLiquidationStrategyConfiguration: string;
        CommonMosaicRemoteAssetId: string;
        ComposableTraitsLendingMarketConfig: string;
        ComposableTraitsLendingCreateInput: string;
        ComposableTraitsLendingUpdateInput: string;
        ComposableTraitsDexStableSwapPoolInfo: string;
        ComposableTraitsOraclePrice: string;
        PalletLiquidityBootstrappingPool: string;
        ComposableTraitsDexConstantProductPoolInfo: {
            owner: string;
            pair: string;
            lpToken: string;
            fee: string;
            ownerFee: string;
        };
        ComposableSupportEthereumAddress: string;
        ComposableTraitsAssetsBasicAssetMetadata: {
            symbol: {
                inner: string;
            };
            name: {
                inner: string;
            };
        };
        ComposableTraitsDexDexRoute: string;
        ComposableTraitsLendingRepayStrategy: string;
        ComposableTraitsXcmAssetsXcmAssetLocation: string;
        SpTrieStorageProof: string;
        ComposableTraitsXcmAssetsForeignMetadata: string;
        FrameSystemAccountInfo: {
            nonce: string;
            consumers: string;
            providers: string;
            sufficients: string;
            data: {
                free: string;
                reserved: string;
                miscFrozen: string;
                feeFrozen: string;
            };
        };
        PalletIbcPingSendPingParams: string;
        IbcTraitOpenChannelParams: string;
        PalletIbcConnectionParams: string;
        PalletIbcAny: string;
        PalletIbcIbcConsensusState: string;
        PalletIbcEventsIbcEvent: string;
        PalletIbcErrorsIbcError: string;
        PalletMosaicAmmSwapInfo: string;
        ComposableTraitsStakingRewardPool: string;
        ComposableTraitsStakingRewardPoolConfiguration: string;
        IbcTransferPalletParams: string;
        IbcTransferTransferParams: string;
        ComposableTraitsOracleRewardTracker: string;
        ComposableTraitsStakingStake: string;
        ComposableTraitsStakingRewardUpdate: string;
        ComposableTraitsAccountProxyProxyType: string;
        ComposableTraitsAccountProxyProxyDefinition: string;
        PalletAccountProxyAnnouncement: string;
        PalletCosmwasmContractInfo: string;
        PalletCosmwasmCodeInfo: string;
        PalletCosmwasmEntryPoint: string;
        PalletStakingRewardsRewardAccumulationHookError: string;
        XcmVersionedMultiAssets: string;
        XcmVersionedMultiLocation: string;
        XcmVersionedXcm: string;
        PalletMultisigTimepoint: string;
        XcmV2WeightLimit: string;
        ComposableTraitsDexAssetAmount: string;
        PalletCosmwasmCodeIdentifier: string;
        XcmV1MultiLocation: string;
        XcmV1MultiAsset: string;
        XcmV1MultiassetMultiAssets: string;
        XcmV2TraitsOutcome: string;
        XcmV2Xcm: string;
        SpRuntimeDispatchError: string;
        SpRuntimeHeader: string;
        SpVersionRuntimeVersion: string;
        FrameSystemLimitsBlockWeights: string;
        FrameSystemLimitsBlockLength: string;
        FrameSupportWeightsRuntimeDbWeight: string;
        PalletCollectiveVotes: string;
        FrameSystemLastRuntimeUpgradeInfo: string;
        FrameSystemPhase: string;
        FrameSystemEventRecord: string;
        SpRuntimeDigest: string;
        FrameSupportWeightsPerDispatchClassU64: string;
        SpCoreCryptoKeyTypeId: string;
        PalletXcmQueryStatus: string;
        PalletXcmVersionMigrationStage: string;
        PolkadotCorePrimitivesOutboundHrmpMessage: string;
        PalletBalancesReleases: string;
        PalletBalancesReserveData: string;
        PalletBalancesBalanceLock: {
            amount: string;
        };
        PalletBalancesAccountData: string;
        PalletAuthorshipUncleEntryItem: string;
        PalletMultisigMultisig: string;
        PalletTransactionPaymentReleases: string;
        XcmV2TraitsError: string;
        XcmV2Response: string;
        FrameSupportTokensMiscBalanceStatus: string;
        FrameSupportWeightsDispatchInfo: string;
        FrameSupportPalletId: string;
        ComposableTraitsCurrencyRational64: string;
        PalletCosmwasmInstrumentCostRules: string;
    };
};
export default _default;
