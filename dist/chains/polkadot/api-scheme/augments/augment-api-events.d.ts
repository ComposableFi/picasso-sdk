import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import '@polkadot/api-base/types/events';
import type { bool, BTreeMap, Bytes, Null, Option, Result, Struct, u8, U8aFixed, u16, u32, u64, u128, Vec } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256, Percent } from '@polkadot/types/interfaces/runtime';
import type { ComposableTraitsDefiCurrencyPairCurrencyId } from '../common';
import type { CommonMosaicRemoteAssetId, ComposableSupportEthereumAddress, ComposableTraitsAccountProxyProxyType, ComposableTraitsCallFilterCallFilterEntry, ComposableTraitsLendingUpdateInput, ComposableTraitsTimeTimeReleaseFunction, ComposableTraitsXcmAssetsXcmAssetLocation, FrameSupportScheduleLookupError, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, PalletCosmwasmContractInfo, PalletCosmwasmEntryPoint, PalletCrowdloanRewardsModelsRemoteAccount, PalletDemocracyVoteAccountVote, PalletDutchAuctionSellOrder, PalletMosaicAmmSwapInfo, PalletMosaicDecayBudgetPenaltyDecayer, PalletMosaicNetworkInfo, PalletMultisigTimepoint, PalletStakingRewardsRewardAccumulationHookError, SpRuntimeDispatchError, XcmV1MultiAsset, XcmV1MultiassetMultiAssets, XcmV1MultiLocation, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation } from '../crowdloanRewards';
import type { PalletDemocracyVoteThreshold } from '../democracy';
import type { ComposableTraitsDexFee } from '../pablo';
import type { ComposableTraitsVestingVestingSchedule, ComposableTraitsVestingVestingScheduleIdSet } from '../vesting';
export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;
declare module '@polkadot/api-base/types/events' {
    interface AugmentedEvents<ApiType extends ApiTypes> {
        assetsRegistry: {
            AssetRegistered: AugmentedEvent<ApiType, [
                assetId: u128,
                location: ComposableTraitsXcmAssetsXcmAssetLocation,
                decimals: Option<u8>
            ], {
                assetId: u128;
                location: ComposableTraitsXcmAssetsXcmAssetLocation;
                decimals: Option<u8>;
            }>;
            AssetUpdated: AugmentedEvent<ApiType, [
                assetId: u128,
                location: ComposableTraitsXcmAssetsXcmAssetLocation,
                decimals: Option<u8>
            ], {
                assetId: u128;
                location: ComposableTraitsXcmAssetsXcmAssetLocation;
                decimals: Option<u8>;
            }>;
            MinFeeUpdated: AugmentedEvent<ApiType, [
                targetParachainId: u32,
                foreignAssetId: ComposableTraitsXcmAssetsXcmAssetLocation,
                amount: Option<u128>
            ], {
                targetParachainId: u32;
                foreignAssetId: ComposableTraitsXcmAssetsXcmAssetLocation;
                amount: Option<u128>;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        balances: {
            BalanceSet: AugmentedEvent<ApiType, [
                who: AccountId32,
                free: u128,
                reserved: u128
            ], {
                who: AccountId32;
                free: u128;
                reserved: u128;
            }>;
            Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], {
                who: AccountId32;
                amount: u128;
            }>;
            DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], {
                account: AccountId32;
                amount: u128;
            }>;
            Endowed: AugmentedEvent<ApiType, [
                account: AccountId32,
                freeBalance: u128
            ], {
                account: AccountId32;
                freeBalance: u128;
            }>;
            Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], {
                who: AccountId32;
                amount: u128;
            }>;
            ReserveRepatriated: AugmentedEvent<ApiType, [
                from: AccountId32,
                to: AccountId32,
                amount: u128,
                destinationStatus: FrameSupportTokensMiscBalanceStatus
            ], {
                from: AccountId32;
                to: AccountId32;
                amount: u128;
                destinationStatus: FrameSupportTokensMiscBalanceStatus;
            }>;
            Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], {
                who: AccountId32;
                amount: u128;
            }>;
            Transfer: AugmentedEvent<ApiType, [
                from: AccountId32,
                to: AccountId32,
                amount: u128
            ], {
                from: AccountId32;
                to: AccountId32;
                amount: u128;
            }>;
            Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], {
                who: AccountId32;
                amount: u128;
            }>;
            Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], {
                who: AccountId32;
                amount: u128;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        bondedFinance: {
            NewBond: AugmentedEvent<ApiType, [
                offerId: u128,
                who: AccountId32,
                nbOfBonds: u128
            ], {
                offerId: u128;
                who: AccountId32;
                nbOfBonds: u128;
            }>;
            NewOffer: AugmentedEvent<ApiType, [
                offerId: u128,
                beneficiary: AccountId32
            ], {
                offerId: u128;
                beneficiary: AccountId32;
            }>;
            OfferCancelled: AugmentedEvent<ApiType, [offerId: u128], {
                offerId: u128;
            }>;
            OfferCompleted: AugmentedEvent<ApiType, [offerId: u128], {
                offerId: u128;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        callFilter: {
            Disabled: AugmentedEvent<ApiType, [
                entry: ComposableTraitsCallFilterCallFilterEntry
            ], {
                entry: ComposableTraitsCallFilterCallFilterEntry;
            }>;
            Enabled: AugmentedEvent<ApiType, [
                entry: ComposableTraitsCallFilterCallFilterEntry
            ], {
                entry: ComposableTraitsCallFilterCallFilterEntry;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        collatorSelection: {
            CandidateAdded: AugmentedEvent<ApiType, [
                accountId: AccountId32,
                deposit: u128
            ], {
                accountId: AccountId32;
                deposit: u128;
            }>;
            CandidateRemoved: AugmentedEvent<ApiType, [accountId: AccountId32], {
                accountId: AccountId32;
            }>;
            NewCandidacyBond: AugmentedEvent<ApiType, [bondAmount: u128], {
                bondAmount: u128;
            }>;
            NewDesiredCandidates: AugmentedEvent<ApiType, [desiredCandidates: u32], {
                desiredCandidates: u32;
            }>;
            NewInvulnerables: AugmentedEvent<ApiType, [invulnerables: Vec<AccountId32>], {
                invulnerables: Vec<AccountId32>;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        cosmwasm: {
            AdminCleared: AugmentedEvent<ApiType, [
                contract: AccountId32,
                oldAdmin: Option<AccountId32>
            ], {
                contract: AccountId32;
                oldAdmin: Option<AccountId32>;
            }>;
            AdminUpdated: AugmentedEvent<ApiType, [
                contract: AccountId32,
                oldAdmin: Option<AccountId32>,
                newAdmin: AccountId32
            ], {
                contract: AccountId32;
                oldAdmin: Option<AccountId32>;
                newAdmin: AccountId32;
            }>;
            Emitted: AugmentedEvent<ApiType, [
                contract: AccountId32,
                ty: Bytes,
                attributes: Vec<ITuple<[Bytes, Bytes]>>
            ], {
                contract: AccountId32;
                ty: Bytes;
                attributes: Vec<ITuple<[Bytes, Bytes]>>;
            }>;
            Executed: AugmentedEvent<ApiType, [
                contract: AccountId32,
                entrypoint: PalletCosmwasmEntryPoint,
                data: Option<Bytes>
            ], {
                contract: AccountId32;
                entrypoint: PalletCosmwasmEntryPoint;
                data: Option<Bytes>;
            }>;
            ExecutionFailed: AugmentedEvent<ApiType, [
                contract: AccountId32,
                entrypoint: PalletCosmwasmEntryPoint,
                error: Bytes
            ], {
                contract: AccountId32;
                entrypoint: PalletCosmwasmEntryPoint;
                error: Bytes;
            }>;
            IbcChannelOpen: AugmentedEvent<ApiType, [contract: AccountId32], {
                contract: AccountId32;
            }>;
            Instantiated: AugmentedEvent<ApiType, [
                contract: AccountId32,
                info: PalletCosmwasmContractInfo
            ], {
                contract: AccountId32;
                info: PalletCosmwasmContractInfo;
            }>;
            Migrated: AugmentedEvent<ApiType, [contract: AccountId32, to: u64], {
                contract: AccountId32;
                to: u64;
            }>;
            Uploaded: AugmentedEvent<ApiType, [codeHash: H256, codeId: u64], {
                codeHash: H256;
                codeId: u64;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        council: {
            Approved: AugmentedEvent<ApiType, [proposalHash: H256], {
                proposalHash: H256;
            }>;
            Closed: AugmentedEvent<ApiType, [
                proposalHash: H256,
                yes: u32,
                no: u32
            ], {
                proposalHash: H256;
                yes: u32;
                no: u32;
            }>;
            Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], {
                proposalHash: H256;
            }>;
            Executed: AugmentedEvent<ApiType, [
                proposalHash: H256,
                result: Result<Null, SpRuntimeDispatchError>
            ], {
                proposalHash: H256;
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            MemberExecuted: AugmentedEvent<ApiType, [
                proposalHash: H256,
                result: Result<Null, SpRuntimeDispatchError>
            ], {
                proposalHash: H256;
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            Proposed: AugmentedEvent<ApiType, [
                account: AccountId32,
                proposalIndex: u32,
                proposalHash: H256,
                threshold: u32
            ], {
                account: AccountId32;
                proposalIndex: u32;
                proposalHash: H256;
                threshold: u32;
            }>;
            Voted: AugmentedEvent<ApiType, [
                account: AccountId32,
                proposalHash: H256,
                voted: bool,
                yes: u32,
                no: u32
            ], {
                account: AccountId32;
                proposalHash: H256;
                voted: bool;
                yes: u32;
                no: u32;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        councilMembership: {
            Dummy: AugmentedEvent<ApiType, []>;
            KeyChanged: AugmentedEvent<ApiType, []>;
            MemberAdded: AugmentedEvent<ApiType, []>;
            MemberRemoved: AugmentedEvent<ApiType, []>;
            MembersReset: AugmentedEvent<ApiType, []>;
            MembersSwapped: AugmentedEvent<ApiType, []>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        crowdloanRewards: {
            Associated: AugmentedEvent<ApiType, [
                remoteAccount: PalletCrowdloanRewardsModelsRemoteAccount,
                rewardAccount: AccountId32
            ], {
                remoteAccount: PalletCrowdloanRewardsModelsRemoteAccount;
                rewardAccount: AccountId32;
            }>;
            Claimed: AugmentedEvent<ApiType, [
                remoteAccount: PalletCrowdloanRewardsModelsRemoteAccount,
                rewardAccount: AccountId32,
                amount: u128
            ], {
                remoteAccount: PalletCrowdloanRewardsModelsRemoteAccount;
                rewardAccount: AccountId32;
                amount: u128;
            }>;
            Initialized: AugmentedEvent<ApiType, [at: u64], {
                at: u64;
            }>;
            OverFunded: AugmentedEvent<ApiType, [excessFunds: u128], {
                excessFunds: u128;
            }>;
            RewardsUnlocked: AugmentedEvent<ApiType, [at: u64], {
                at: u64;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        cumulusXcm: {
            ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV2TraitsOutcome]>;
            InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
            UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        currencyFactory: {
            RangeCreated: AugmentedEvent<ApiType, [
                range: {
                    readonly current: u128;
                    readonly end: u128;
                } & Struct
            ], {
                range: {
                    readonly current: u128;
                    readonly end: u128;
                } & Struct;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        democracy: {
            Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], {
                proposalHash: H256;
            }>;
            Cancelled: AugmentedEvent<ApiType, [refIndex: u32], {
                refIndex: u32;
            }>;
            Delegated: AugmentedEvent<ApiType, [
                who: AccountId32,
                target: AccountId32
            ], {
                who: AccountId32;
                target: AccountId32;
            }>;
            Executed: AugmentedEvent<ApiType, [
                refIndex: u32,
                result: Result<Null, SpRuntimeDispatchError>
            ], {
                refIndex: u32;
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            ExternalTabled: AugmentedEvent<ApiType, []>;
            NotPassed: AugmentedEvent<ApiType, [refIndex: u32], {
                refIndex: u32;
            }>;
            Passed: AugmentedEvent<ApiType, [refIndex: u32], {
                refIndex: u32;
            }>;
            PreimageInvalid: AugmentedEvent<ApiType, [
                proposalHash: H256,
                refIndex: u32
            ], {
                proposalHash: H256;
                refIndex: u32;
            }>;
            PreimageMissing: AugmentedEvent<ApiType, [
                proposalHash: H256,
                refIndex: u32
            ], {
                proposalHash: H256;
                refIndex: u32;
            }>;
            PreimageNoted: AugmentedEvent<ApiType, [
                proposalHash: H256,
                who: AccountId32,
                deposit: u128
            ], {
                proposalHash: H256;
                who: AccountId32;
                deposit: u128;
            }>;
            PreimageReaped: AugmentedEvent<ApiType, [
                proposalHash: H256,
                provider: AccountId32,
                deposit: u128,
                reaper: AccountId32
            ], {
                proposalHash: H256;
                provider: AccountId32;
                deposit: u128;
                reaper: AccountId32;
            }>;
            PreimageUsed: AugmentedEvent<ApiType, [
                proposalHash: H256,
                provider: AccountId32,
                deposit: u128
            ], {
                proposalHash: H256;
                provider: AccountId32;
                deposit: u128;
            }>;
            ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], {
                propIndex: u32;
            }>;
            Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], {
                proposalIndex: u32;
                deposit: u128;
            }>;
            Seconded: AugmentedEvent<ApiType, [
                seconder: AccountId32,
                propIndex: u32
            ], {
                seconder: AccountId32;
                propIndex: u32;
            }>;
            Started: AugmentedEvent<ApiType, [
                refIndex: u32,
                threshold: PalletDemocracyVoteThreshold
            ], {
                refIndex: u32;
                threshold: PalletDemocracyVoteThreshold;
            }>;
            Tabled: AugmentedEvent<ApiType, [
                proposalIndex: u32,
                deposit: u128,
                depositors: Vec<AccountId32>
            ], {
                proposalIndex: u32;
                deposit: u128;
                depositors: Vec<AccountId32>;
            }>;
            Undelegated: AugmentedEvent<ApiType, [account: AccountId32], {
                account: AccountId32;
            }>;
            Vetoed: AugmentedEvent<ApiType, [
                who: AccountId32,
                proposalHash: H256,
                until: u32
            ], {
                who: AccountId32;
                proposalHash: H256;
                until: u32;
            }>;
            Voted: AugmentedEvent<ApiType, [
                voter: AccountId32,
                refIndex: u32,
                vote: PalletDemocracyVoteAccountVote
            ], {
                voter: AccountId32;
                refIndex: u32;
                vote: PalletDemocracyVoteAccountVote;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        dexRouter: {
            RouteAdded: AugmentedEvent<ApiType, [
                xAssetId: u128,
                yAssetId: u128,
                route: Vec<u128>
            ], {
                xAssetId: u128;
                yAssetId: u128;
                route: Vec<u128>;
            }>;
            RouteDeleted: AugmentedEvent<ApiType, [
                xAssetId: u128,
                yAssetId: u128,
                route: Vec<u128>
            ], {
                xAssetId: u128;
                yAssetId: u128;
                route: Vec<u128>;
            }>;
            RouteUpdated: AugmentedEvent<ApiType, [
                xAssetId: u128,
                yAssetId: u128,
                oldRoute: Vec<u128>,
                updatedRoute: Vec<u128>
            ], {
                xAssetId: u128;
                yAssetId: u128;
                oldRoute: Vec<u128>;
                updatedRoute: Vec<u128>;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        dmpQueue: {
            ExecutedDownward: AugmentedEvent<ApiType, [
                messageId: U8aFixed,
                outcome: XcmV2TraitsOutcome
            ], {
                messageId: U8aFixed;
                outcome: XcmV2TraitsOutcome;
            }>;
            InvalidFormat: AugmentedEvent<ApiType, [messageId: U8aFixed], {
                messageId: U8aFixed;
            }>;
            OverweightEnqueued: AugmentedEvent<ApiType, [
                messageId: U8aFixed,
                overweightIndex: u64,
                requiredWeight: u64
            ], {
                messageId: U8aFixed;
                overweightIndex: u64;
                requiredWeight: u64;
            }>;
            OverweightServiced: AugmentedEvent<ApiType, [
                overweightIndex: u64,
                weightUsed: u64
            ], {
                overweightIndex: u64;
                weightUsed: u64;
            }>;
            UnsupportedVersion: AugmentedEvent<ApiType, [messageId: U8aFixed], {
                messageId: U8aFixed;
            }>;
            WeightExhausted: AugmentedEvent<ApiType, [
                messageId: U8aFixed,
                remainingWeight: u64,
                requiredWeight: u64
            ], {
                messageId: U8aFixed;
                remainingWeight: u64;
                requiredWeight: u64;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        dutchAuction: {
            ConfigurationAdded: AugmentedEvent<ApiType, [
                configurationId: u128,
                configuration: ComposableTraitsTimeTimeReleaseFunction
            ], {
                configurationId: u128;
                configuration: ComposableTraitsTimeTimeReleaseFunction;
            }>;
            OrderAdded: AugmentedEvent<ApiType, [
                orderId: u128,
                order: PalletDutchAuctionSellOrder
            ], {
                orderId: u128;
                order: PalletDutchAuctionSellOrder;
            }>;
            OrderRemoved: AugmentedEvent<ApiType, [orderId: u128], {
                orderId: u128;
            }>;
            OrderTaken: AugmentedEvent<ApiType, [orderId: u128, taken: u128], {
                orderId: u128;
                taken: u128;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        fnft: {
            FinancialNftBurned: AugmentedEvent<ApiType, [
                collectionId: u128,
                instanceId: u64
            ], {
                collectionId: u128;
                instanceId: u64;
            }>;
            FinancialNftCollectionCreated: AugmentedEvent<ApiType, [
                collectionId: u128,
                who: AccountId32,
                admin: AccountId32
            ], {
                collectionId: u128;
                who: AccountId32;
                admin: AccountId32;
            }>;
            FinancialNftCreated: AugmentedEvent<ApiType, [
                collectionId: u128,
                instanceId: u64
            ], {
                collectionId: u128;
                instanceId: u64;
            }>;
            FinancialNftTransferred: AugmentedEvent<ApiType, [
                collectionId: u128,
                instanceId: u64,
                to: AccountId32
            ], {
                collectionId: u128;
                instanceId: u64;
                to: AccountId32;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        governanceRegistry: {
            GrantRoot: AugmentedEvent<ApiType, [assetId: u128], {
                assetId: u128;
            }>;
            Remove: AugmentedEvent<ApiType, [assetId: u128], {
                assetId: u128;
            }>;
            Set: AugmentedEvent<ApiType, [assetId: u128, value: AccountId32], {
                assetId: u128;
                value: AccountId32;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        identity: {
            IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], {
                who: AccountId32;
                deposit: u128;
            }>;
            IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], {
                who: AccountId32;
                deposit: u128;
            }>;
            IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], {
                who: AccountId32;
            }>;
            JudgementGiven: AugmentedEvent<ApiType, [
                target: AccountId32,
                registrarIndex: u32
            ], {
                target: AccountId32;
                registrarIndex: u32;
            }>;
            JudgementRequested: AugmentedEvent<ApiType, [
                who: AccountId32,
                registrarIndex: u32
            ], {
                who: AccountId32;
                registrarIndex: u32;
            }>;
            JudgementUnrequested: AugmentedEvent<ApiType, [
                who: AccountId32,
                registrarIndex: u32
            ], {
                who: AccountId32;
                registrarIndex: u32;
            }>;
            RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], {
                registrarIndex: u32;
            }>;
            SubIdentityAdded: AugmentedEvent<ApiType, [
                sub: AccountId32,
                main: AccountId32,
                deposit: u128
            ], {
                sub: AccountId32;
                main: AccountId32;
                deposit: u128;
            }>;
            SubIdentityRemoved: AugmentedEvent<ApiType, [
                sub: AccountId32,
                main: AccountId32,
                deposit: u128
            ], {
                sub: AccountId32;
                main: AccountId32;
                deposit: u128;
            }>;
            SubIdentityRevoked: AugmentedEvent<ApiType, [
                sub: AccountId32,
                main: AccountId32,
                deposit: u128
            ], {
                sub: AccountId32;
                main: AccountId32;
                deposit: u128;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        indices: {
            IndexAssigned: AugmentedEvent<ApiType, [who: AccountId32, index: u32], {
                who: AccountId32;
                index: u32;
            }>;
            IndexFreed: AugmentedEvent<ApiType, [index: u32], {
                index: u32;
            }>;
            IndexFrozen: AugmentedEvent<ApiType, [index: u32, who: AccountId32], {
                index: u32;
                who: AccountId32;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        lending: {
            Borrowed: AugmentedEvent<ApiType, [
                sender: AccountId32,
                marketId: u32,
                amount: u128
            ], {
                sender: AccountId32;
                marketId: u32;
                amount: u128;
            }>;
            BorrowRepaid: AugmentedEvent<ApiType, [
                sender: AccountId32,
                marketId: u32,
                beneficiary: AccountId32,
                amount: u128
            ], {
                sender: AccountId32;
                marketId: u32;
                beneficiary: AccountId32;
                amount: u128;
            }>;
            CollateralDeposited: AugmentedEvent<ApiType, [
                sender: AccountId32,
                marketId: u32,
                amount: u128
            ], {
                sender: AccountId32;
                marketId: u32;
                amount: u128;
            }>;
            CollateralWithdrawn: AugmentedEvent<ApiType, [
                sender: AccountId32,
                marketId: u32,
                amount: u128
            ], {
                sender: AccountId32;
                marketId: u32;
                amount: u128;
            }>;
            LiquidationInitiated: AugmentedEvent<ApiType, [
                marketId: u32,
                borrowers: Vec<AccountId32>
            ], {
                marketId: u32;
                borrowers: Vec<AccountId32>;
            }>;
            MarketCreated: AugmentedEvent<ApiType, [
                marketId: u32,
                vaultId: u64,
                manager: AccountId32,
                currencyPair: ComposableTraitsDefiCurrencyPairCurrencyId
            ], {
                marketId: u32;
                vaultId: u64;
                manager: AccountId32;
                currencyPair: ComposableTraitsDefiCurrencyPairCurrencyId;
            }>;
            MarketUpdated: AugmentedEvent<ApiType, [
                marketId: u32,
                input: ComposableTraitsLendingUpdateInput
            ], {
                marketId: u32;
                input: ComposableTraitsLendingUpdateInput;
            }>;
            MayGoUnderCollateralizedSoon: AugmentedEvent<ApiType, [
                marketId: u32,
                account: AccountId32
            ], {
                marketId: u32;
                account: AccountId32;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        liquidations: {
            PositionWasSentToLiquidation: AugmentedEvent<ApiType, []>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        mosaic: {
            AssetMappingCreated: AugmentedEvent<ApiType, [
                assetId: u128,
                networkId: u32,
                remoteAssetId: CommonMosaicRemoteAssetId
            ], {
                assetId: u128;
                networkId: u32;
                remoteAssetId: CommonMosaicRemoteAssetId;
            }>;
            AssetMappingDeleted: AugmentedEvent<ApiType, [
                assetId: u128,
                networkId: u32,
                remoteAssetId: CommonMosaicRemoteAssetId
            ], {
                assetId: u128;
                networkId: u32;
                remoteAssetId: CommonMosaicRemoteAssetId;
            }>;
            AssetMappingUpdated: AugmentedEvent<ApiType, [
                assetId: u128,
                networkId: u32,
                remoteAssetId: CommonMosaicRemoteAssetId
            ], {
                assetId: u128;
                networkId: u32;
                remoteAssetId: CommonMosaicRemoteAssetId;
            }>;
            BudgetUpdated: AugmentedEvent<ApiType, [
                assetId: u128,
                amount: u128,
                decay: PalletMosaicDecayBudgetPenaltyDecayer
            ], {
                assetId: u128;
                amount: u128;
                decay: PalletMosaicDecayBudgetPenaltyDecayer;
            }>;
            NetworksUpdated: AugmentedEvent<ApiType, [
                networkId: u32,
                networkInfo: PalletMosaicNetworkInfo
            ], {
                networkId: u32;
                networkInfo: PalletMosaicNetworkInfo;
            }>;
            PartialTransferAccepted: AugmentedEvent<ApiType, [
                from: AccountId32,
                assetId: u128,
                networkId: u32,
                remoteAssetId: CommonMosaicRemoteAssetId,
                amount: u128
            ], {
                from: AccountId32;
                assetId: u128;
                networkId: u32;
                remoteAssetId: CommonMosaicRemoteAssetId;
                amount: u128;
            }>;
            RelayerRotated: AugmentedEvent<ApiType, [ttl: u32, accountId: AccountId32], {
                ttl: u32;
                accountId: AccountId32;
            }>;
            RelayerSet: AugmentedEvent<ApiType, [relayer: AccountId32], {
                relayer: AccountId32;
            }>;
            StaleTxClaimed: AugmentedEvent<ApiType, [
                to: AccountId32,
                by: AccountId32,
                assetId: u128,
                amount: u128
            ], {
                to: AccountId32;
                by: AccountId32;
                assetId: u128;
                amount: u128;
            }>;
            TransferAccepted: AugmentedEvent<ApiType, [
                from: AccountId32,
                assetId: u128,
                networkId: u32,
                remoteAssetId: CommonMosaicRemoteAssetId,
                amount: u128
            ], {
                from: AccountId32;
                assetId: u128;
                networkId: u32;
                remoteAssetId: CommonMosaicRemoteAssetId;
                amount: u128;
            }>;
            TransferClaimed: AugmentedEvent<ApiType, [
                by: AccountId32,
                to: AccountId32,
                assetId: u128,
                amount: u128
            ], {
                by: AccountId32;
                to: AccountId32;
                assetId: u128;
                amount: u128;
            }>;
            TransferInto: AugmentedEvent<ApiType, [
                id: H256,
                to: AccountId32,
                networkId: u32,
                remoteAssetId: CommonMosaicRemoteAssetId,
                assetId: u128,
                amount: u128
            ], {
                id: H256;
                to: AccountId32;
                networkId: u32;
                remoteAssetId: CommonMosaicRemoteAssetId;
                assetId: u128;
                amount: u128;
            }>;
            TransferIntoRescined: AugmentedEvent<ApiType, [
                account: AccountId32,
                amount: u128,
                assetId: u128
            ], {
                account: AccountId32;
                amount: u128;
                assetId: u128;
            }>;
            TransferOut: AugmentedEvent<ApiType, [
                id: H256,
                to: ComposableSupportEthereumAddress,
                assetId: u128,
                networkId: u32,
                remoteAssetId: CommonMosaicRemoteAssetId,
                amount: u128,
                swapToNative: bool,
                sourceUserAccount: AccountId32,
                ammSwapInfo: Option<PalletMosaicAmmSwapInfo>,
                minimumAmountOut: u128
            ], {
                id: H256;
                to: ComposableSupportEthereumAddress;
                assetId: u128;
                networkId: u32;
                remoteAssetId: CommonMosaicRemoteAssetId;
                amount: u128;
                swapToNative: bool;
                sourceUserAccount: AccountId32;
                ammSwapInfo: Option<PalletMosaicAmmSwapInfo>;
                minimumAmountOut: u128;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        multisig: {
            MultisigApproval: AugmentedEvent<ApiType, [
                approving: AccountId32,
                timepoint: PalletMultisigTimepoint,
                multisig: AccountId32,
                callHash: U8aFixed
            ], {
                approving: AccountId32;
                timepoint: PalletMultisigTimepoint;
                multisig: AccountId32;
                callHash: U8aFixed;
            }>;
            MultisigCancelled: AugmentedEvent<ApiType, [
                cancelling: AccountId32,
                timepoint: PalletMultisigTimepoint,
                multisig: AccountId32,
                callHash: U8aFixed
            ], {
                cancelling: AccountId32;
                timepoint: PalletMultisigTimepoint;
                multisig: AccountId32;
                callHash: U8aFixed;
            }>;
            MultisigExecuted: AugmentedEvent<ApiType, [
                approving: AccountId32,
                timepoint: PalletMultisigTimepoint,
                multisig: AccountId32,
                callHash: U8aFixed,
                result: Result<Null, SpRuntimeDispatchError>
            ], {
                approving: AccountId32;
                timepoint: PalletMultisigTimepoint;
                multisig: AccountId32;
                callHash: U8aFixed;
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            NewMultisig: AugmentedEvent<ApiType, [
                approving: AccountId32,
                multisig: AccountId32,
                callHash: U8aFixed
            ], {
                approving: AccountId32;
                multisig: AccountId32;
                callHash: U8aFixed;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        oracle: {
            AnswerPruned: AugmentedEvent<ApiType, [AccountId32, u128]>;
            AssetInfoChange: AugmentedEvent<ApiType, [u128, Percent, u32, u32, u32, u128, u128]>;
            OracleRewarded: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            PriceChanged: AugmentedEvent<ApiType, [u128, u128]>;
            PriceSubmitted: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            RewardingAdjustment: AugmentedEvent<ApiType, [u64]>;
            SignerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
            StakeAdded: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            StakeReclaimed: AugmentedEvent<ApiType, [AccountId32, u128]>;
            StakeRemoved: AugmentedEvent<ApiType, [AccountId32, u128, u32]>;
            UserSlashed: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        pablo: {
            LiquidityAdded: AugmentedEvent<ApiType, [
                who: AccountId32,
                poolId: u128,
                baseAmount: u128,
                quoteAmount: u128,
                mintedLp: u128
            ], {
                who: AccountId32;
                poolId: u128;
                baseAmount: u128;
                quoteAmount: u128;
                mintedLp: u128;
            }>;
            LiquidityRemoved: AugmentedEvent<ApiType, [
                who: AccountId32,
                poolId: u128,
                baseAmount: u128,
                quoteAmount: u128,
                totalIssuance: u128
            ], {
                who: AccountId32;
                poolId: u128;
                baseAmount: u128;
                quoteAmount: u128;
                totalIssuance: u128;
            }>;
            PoolCreated: AugmentedEvent<ApiType, [
                poolId: u128,
                owner: AccountId32,
                assets: ComposableTraitsDefiCurrencyPairCurrencyId
            ], {
                poolId: u128;
                owner: AccountId32;
                assets: ComposableTraitsDefiCurrencyPairCurrencyId;
            }>;
            PoolDeleted: AugmentedEvent<ApiType, [
                poolId: u128,
                baseAmount: u128,
                quoteAmount: u128
            ], {
                poolId: u128;
                baseAmount: u128;
                quoteAmount: u128;
            }>;
            Swapped: AugmentedEvent<ApiType, [
                poolId: u128,
                who: AccountId32,
                baseAsset: u128,
                quoteAsset: u128,
                baseAmount: u128,
                quoteAmount: u128,
                fee: ComposableTraitsDexFee
            ], {
                poolId: u128;
                who: AccountId32;
                baseAsset: u128;
                quoteAsset: u128;
                baseAmount: u128;
                quoteAmount: u128;
                fee: ComposableTraitsDexFee;
            }>;
            TwapUpdated: AugmentedEvent<ApiType, [
                poolId: u128,
                timestamp: u64,
                twaps: BTreeMap<u128, u128>
            ], {
                poolId: u128;
                timestamp: u64;
                twaps: BTreeMap<u128, u128>;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        parachainSystem: {
            DownwardMessagesProcessed: AugmentedEvent<ApiType, [
                weightUsed: u64,
                dmqHead: H256
            ], {
                weightUsed: u64;
                dmqHead: H256;
            }>;
            DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], {
                count: u32;
            }>;
            UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256], {
                codeHash: H256;
            }>;
            ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], {
                relayChainBlockNum: u32;
            }>;
            ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
            ValidationFunctionStored: AugmentedEvent<ApiType, []>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        preimage: {
            Cleared: AugmentedEvent<ApiType, [hash_: H256], {
                hash_: H256;
            }>;
            Noted: AugmentedEvent<ApiType, [hash_: H256], {
                hash_: H256;
            }>;
            Requested: AugmentedEvent<ApiType, [hash_: H256], {
                hash_: H256;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        proxy: {
            Announced: AugmentedEvent<ApiType, [
                real: AccountId32,
                proxy: AccountId32,
                callHash: H256
            ], {
                real: AccountId32;
                proxy: AccountId32;
                callHash: H256;
            }>;
            AnonymousCreated: AugmentedEvent<ApiType, [
                anonymous: AccountId32,
                who: AccountId32,
                proxyType: ComposableTraitsAccountProxyProxyType,
                disambiguationIndex: u16
            ], {
                anonymous: AccountId32;
                who: AccountId32;
                proxyType: ComposableTraitsAccountProxyProxyType;
                disambiguationIndex: u16;
            }>;
            ProxyAdded: AugmentedEvent<ApiType, [
                delegator: AccountId32,
                delegatee: AccountId32,
                proxyType: ComposableTraitsAccountProxyProxyType,
                delay: u32
            ], {
                delegator: AccountId32;
                delegatee: AccountId32;
                proxyType: ComposableTraitsAccountProxyProxyType;
                delay: u32;
            }>;
            ProxyExecuted: AugmentedEvent<ApiType, [
                result: Result<Null, SpRuntimeDispatchError>
            ], {
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            ProxyRemoved: AugmentedEvent<ApiType, [
                delegator: AccountId32,
                delegatee: AccountId32,
                proxyType: ComposableTraitsAccountProxyProxyType,
                delay: u32
            ], {
                delegator: AccountId32;
                delegatee: AccountId32;
                proxyType: ComposableTraitsAccountProxyProxyType;
                delay: u32;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        relayerXcm: {
            AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV1MultiLocation, XcmVersionedMultiAssets]>;
            Attempted: AugmentedEvent<ApiType, [XcmV2TraitsOutcome]>;
            InvalidResponder: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]>;
            InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
            Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
            NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
            NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
            NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, u64, u64]>;
            NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>;
            NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64, XcmV2TraitsError]>;
            ResponseReady: AugmentedEvent<ApiType, [u64, XcmV2Response]>;
            ResponseTaken: AugmentedEvent<ApiType, [u64]>;
            Sent: AugmentedEvent<ApiType, [XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]>;
            SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
            UnexpectedResponse: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
            VersionChangeNotified: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        scheduler: {
            CallLookupFailed: AugmentedEvent<ApiType, [
                task: ITuple<[u32, u32]>,
                id: Option<Bytes>,
                error: FrameSupportScheduleLookupError
            ], {
                task: ITuple<[u32, u32]>;
                id: Option<Bytes>;
                error: FrameSupportScheduleLookupError;
            }>;
            Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], {
                when: u32;
                index: u32;
            }>;
            Dispatched: AugmentedEvent<ApiType, [
                task: ITuple<[u32, u32]>,
                id: Option<Bytes>,
                result: Result<Null, SpRuntimeDispatchError>
            ], {
                task: ITuple<[u32, u32]>;
                id: Option<Bytes>;
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], {
                when: u32;
                index: u32;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        session: {
            NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], {
                sessionIndex: u32;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        stakingRewards: {
            Claimed: AugmentedEvent<ApiType, [
                owner: AccountId32,
                fnftCollectionId: u128,
                fnftInstanceId: u64
            ], {
                owner: AccountId32;
                fnftCollectionId: u128;
                fnftInstanceId: u64;
            }>;
            RewardAccumulationHookError: AugmentedEvent<ApiType, [
                poolId: u128,
                assetId: u128,
                error: PalletStakingRewardsRewardAccumulationHookError
            ], {
                poolId: u128;
                assetId: u128;
                error: PalletStakingRewardsRewardAccumulationHookError;
            }>;
            RewardPoolCreated: AugmentedEvent<ApiType, [
                poolId: u128,
                owner: AccountId32,
                endBlock: u32
            ], {
                poolId: u128;
                owner: AccountId32;
                endBlock: u32;
            }>;
            RewardPoolUpdated: AugmentedEvent<ApiType, [poolId: u128], {
                poolId: u128;
            }>;
            RewardsPotIncreased: AugmentedEvent<ApiType, [
                poolId: u128,
                assetId: u128,
                amount: u128
            ], {
                poolId: u128;
                assetId: u128;
                amount: u128;
            }>;
            RewardTransferred: AugmentedEvent<ApiType, [
                from: AccountId32,
                poolId: u128,
                rewardCurrency: u128,
                rewardIncrement: u128
            ], {
                from: AccountId32;
                poolId: u128;
                rewardCurrency: u128;
                rewardIncrement: u128;
            }>;
            SplitPosition: AugmentedEvent<ApiType, [
                positions: Vec<ITuple<[u128, u64, u128]>>
            ], {
                positions: Vec<ITuple<[u128, u64, u128]>>;
            }>;
            StakeAmountExtended: AugmentedEvent<ApiType, [
                fnftCollectionId: u128,
                fnftInstanceId: u64,
                amount: u128
            ], {
                fnftCollectionId: u128;
                fnftInstanceId: u64;
                amount: u128;
            }>;
            Staked: AugmentedEvent<ApiType, [
                poolId: u128,
                owner: AccountId32,
                amount: u128,
                durationPreset: u64,
                fnftCollectionId: u128,
                fnftInstanceId: u64,
                rewardMultiplier: u64,
                keepAlive: bool
            ], {
                poolId: u128;
                owner: AccountId32;
                amount: u128;
                durationPreset: u64;
                fnftCollectionId: u128;
                fnftInstanceId: u64;
                rewardMultiplier: u64;
                keepAlive: bool;
            }>;
            Unstaked: AugmentedEvent<ApiType, [
                owner: AccountId32,
                fnftCollectionId: u128,
                fnftInstanceId: u64,
                slash: Option<u128>
            ], {
                owner: AccountId32;
                fnftCollectionId: u128;
                fnftInstanceId: u64;
                slash: Option<u128>;
            }>;
            UnstakeRewardSlashed: AugmentedEvent<ApiType, [
                poolId: u128,
                owner: AccountId32,
                fnftInstanceId: u64,
                rewardAssetId: u128,
                amountSlashed: u128
            ], {
                poolId: u128;
                owner: AccountId32;
                fnftInstanceId: u64;
                rewardAssetId: u128;
                amountSlashed: u128;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        sudo: {
            KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], {
                oldSudoer: Option<AccountId32>;
            }>;
            Sudid: AugmentedEvent<ApiType, [
                sudoResult: Result<Null, SpRuntimeDispatchError>
            ], {
                sudoResult: Result<Null, SpRuntimeDispatchError>;
            }>;
            SudoAsDone: AugmentedEvent<ApiType, [
                sudoResult: Result<Null, SpRuntimeDispatchError>
            ], {
                sudoResult: Result<Null, SpRuntimeDispatchError>;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        system: {
            CodeUpdated: AugmentedEvent<ApiType, []>;
            ExtrinsicFailed: AugmentedEvent<ApiType, [
                dispatchError: SpRuntimeDispatchError,
                dispatchInfo: FrameSupportWeightsDispatchInfo
            ], {
                dispatchError: SpRuntimeDispatchError;
                dispatchInfo: FrameSupportWeightsDispatchInfo;
            }>;
            ExtrinsicSuccess: AugmentedEvent<ApiType, [
                dispatchInfo: FrameSupportWeightsDispatchInfo
            ], {
                dispatchInfo: FrameSupportWeightsDispatchInfo;
            }>;
            KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], {
                account: AccountId32;
            }>;
            NewAccount: AugmentedEvent<ApiType, [account: AccountId32], {
                account: AccountId32;
            }>;
            Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], {
                sender: AccountId32;
                hash_: H256;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        technicalCommittee: {
            Approved: AugmentedEvent<ApiType, [proposalHash: H256], {
                proposalHash: H256;
            }>;
            Closed: AugmentedEvent<ApiType, [
                proposalHash: H256,
                yes: u32,
                no: u32
            ], {
                proposalHash: H256;
                yes: u32;
                no: u32;
            }>;
            Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], {
                proposalHash: H256;
            }>;
            Executed: AugmentedEvent<ApiType, [
                proposalHash: H256,
                result: Result<Null, SpRuntimeDispatchError>
            ], {
                proposalHash: H256;
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            MemberExecuted: AugmentedEvent<ApiType, [
                proposalHash: H256,
                result: Result<Null, SpRuntimeDispatchError>
            ], {
                proposalHash: H256;
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            Proposed: AugmentedEvent<ApiType, [
                account: AccountId32,
                proposalIndex: u32,
                proposalHash: H256,
                threshold: u32
            ], {
                account: AccountId32;
                proposalIndex: u32;
                proposalHash: H256;
                threshold: u32;
            }>;
            Voted: AugmentedEvent<ApiType, [
                account: AccountId32,
                proposalHash: H256,
                voted: bool,
                yes: u32,
                no: u32
            ], {
                account: AccountId32;
                proposalHash: H256;
                voted: bool;
                yes: u32;
                no: u32;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        technicalCommitteeMembership: {
            Dummy: AugmentedEvent<ApiType, []>;
            KeyChanged: AugmentedEvent<ApiType, []>;
            MemberAdded: AugmentedEvent<ApiType, []>;
            MemberRemoved: AugmentedEvent<ApiType, []>;
            MembersReset: AugmentedEvent<ApiType, []>;
            MembersSwapped: AugmentedEvent<ApiType, []>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        tokens: {
            BalanceSet: AugmentedEvent<ApiType, [
                currencyId: u128,
                who: AccountId32,
                free: u128,
                reserved: u128
            ], {
                currencyId: u128;
                who: AccountId32;
                free: u128;
                reserved: u128;
            }>;
            Deposited: AugmentedEvent<ApiType, [
                currencyId: u128,
                who: AccountId32,
                amount: u128
            ], {
                currencyId: u128;
                who: AccountId32;
                amount: u128;
            }>;
            DustLost: AugmentedEvent<ApiType, [
                currencyId: u128,
                who: AccountId32,
                amount: u128
            ], {
                currencyId: u128;
                who: AccountId32;
                amount: u128;
            }>;
            Endowed: AugmentedEvent<ApiType, [
                currencyId: u128,
                who: AccountId32,
                amount: u128
            ], {
                currencyId: u128;
                who: AccountId32;
                amount: u128;
            }>;
            LockRemoved: AugmentedEvent<ApiType, [
                lockId: U8aFixed,
                currencyId: u128,
                who: AccountId32
            ], {
                lockId: U8aFixed;
                currencyId: u128;
                who: AccountId32;
            }>;
            LockSet: AugmentedEvent<ApiType, [
                lockId: U8aFixed,
                currencyId: u128,
                who: AccountId32,
                amount: u128
            ], {
                lockId: U8aFixed;
                currencyId: u128;
                who: AccountId32;
                amount: u128;
            }>;
            Reserved: AugmentedEvent<ApiType, [
                currencyId: u128,
                who: AccountId32,
                amount: u128
            ], {
                currencyId: u128;
                who: AccountId32;
                amount: u128;
            }>;
            ReserveRepatriated: AugmentedEvent<ApiType, [
                currencyId: u128,
                from: AccountId32,
                to: AccountId32,
                amount: u128,
                status: FrameSupportTokensMiscBalanceStatus
            ], {
                currencyId: u128;
                from: AccountId32;
                to: AccountId32;
                amount: u128;
                status: FrameSupportTokensMiscBalanceStatus;
            }>;
            Slashed: AugmentedEvent<ApiType, [
                currencyId: u128,
                who: AccountId32,
                freeAmount: u128,
                reservedAmount: u128
            ], {
                currencyId: u128;
                who: AccountId32;
                freeAmount: u128;
                reservedAmount: u128;
            }>;
            TotalIssuanceSet: AugmentedEvent<ApiType, [currencyId: u128, amount: u128], {
                currencyId: u128;
                amount: u128;
            }>;
            Transfer: AugmentedEvent<ApiType, [
                currencyId: u128,
                from: AccountId32,
                to: AccountId32,
                amount: u128
            ], {
                currencyId: u128;
                from: AccountId32;
                to: AccountId32;
                amount: u128;
            }>;
            Unreserved: AugmentedEvent<ApiType, [
                currencyId: u128,
                who: AccountId32,
                amount: u128
            ], {
                currencyId: u128;
                who: AccountId32;
                amount: u128;
            }>;
            Withdrawn: AugmentedEvent<ApiType, [
                currencyId: u128,
                who: AccountId32,
                amount: u128
            ], {
                currencyId: u128;
                who: AccountId32;
                amount: u128;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        transactionPayment: {
            TransactionFeePaid: AugmentedEvent<ApiType, [
                who: AccountId32,
                actualFee: u128,
                tip: u128
            ], {
                who: AccountId32;
                actualFee: u128;
                tip: u128;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        treasury: {
            Awarded: AugmentedEvent<ApiType, [
                proposalIndex: u32,
                award: u128,
                account: AccountId32
            ], {
                proposalIndex: u32;
                award: u128;
                account: AccountId32;
            }>;
            Burnt: AugmentedEvent<ApiType, [burntFunds: u128], {
                burntFunds: u128;
            }>;
            Deposit: AugmentedEvent<ApiType, [value: u128], {
                value: u128;
            }>;
            Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], {
                proposalIndex: u32;
            }>;
            Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], {
                proposalIndex: u32;
                slashed: u128;
            }>;
            Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], {
                rolloverBalance: u128;
            }>;
            SpendApproved: AugmentedEvent<ApiType, [
                proposalIndex: u32,
                amount: u128,
                beneficiary: AccountId32
            ], {
                proposalIndex: u32;
                amount: u128;
                beneficiary: AccountId32;
            }>;
            Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], {
                budgetRemaining: u128;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        unknownTokens: {
            Deposited: AugmentedEvent<ApiType, [
                asset: XcmV1MultiAsset,
                who: XcmV1MultiLocation
            ], {
                asset: XcmV1MultiAsset;
                who: XcmV1MultiLocation;
            }>;
            Withdrawn: AugmentedEvent<ApiType, [
                asset: XcmV1MultiAsset,
                who: XcmV1MultiLocation
            ], {
                asset: XcmV1MultiAsset;
                who: XcmV1MultiLocation;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        utility: {
            BatchCompleted: AugmentedEvent<ApiType, []>;
            BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
            BatchInterrupted: AugmentedEvent<ApiType, [
                index: u32,
                error: SpRuntimeDispatchError
            ], {
                index: u32;
                error: SpRuntimeDispatchError;
            }>;
            DispatchedAs: AugmentedEvent<ApiType, [
                result: Result<Null, SpRuntimeDispatchError>
            ], {
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            ItemCompleted: AugmentedEvent<ApiType, []>;
            ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], {
                error: SpRuntimeDispatchError;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        vault: {
            Deposited: AugmentedEvent<ApiType, [
                account: AccountId32,
                assetAmount: u128,
                lpAmount: u128
            ], {
                account: AccountId32;
                assetAmount: u128;
                lpAmount: u128;
            }>;
            EmergencyShutdown: AugmentedEvent<ApiType, [vault: u64], {
                vault: u64;
            }>;
            LiquidateStrategy: AugmentedEvent<ApiType, [
                account: AccountId32,
                amount: u128
            ], {
                account: AccountId32;
                amount: u128;
            }>;
            VaultCreated: AugmentedEvent<ApiType, [id: u64], {
                id: u64;
            }>;
            VaultStarted: AugmentedEvent<ApiType, [vault: u64], {
                vault: u64;
            }>;
            Withdrawn: AugmentedEvent<ApiType, [
                account: AccountId32,
                lpAmount: u128,
                assetAmount: u128
            ], {
                account: AccountId32;
                lpAmount: u128;
                assetAmount: u128;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        vesting: {
            Claimed: AugmentedEvent<ApiType, [
                who: AccountId32,
                asset: u128,
                vestingScheduleIds: ComposableTraitsVestingVestingScheduleIdSet,
                lockedAmount: u128,
                claimedAmountPerSchedule: BTreeMap<u128, u128>
            ], {
                who: AccountId32;
                asset: u128;
                vestingScheduleIds: ComposableTraitsVestingVestingScheduleIdSet;
                lockedAmount: u128;
                claimedAmountPerSchedule: BTreeMap<u128, u128>;
            }>;
            VestingScheduleAdded: AugmentedEvent<ApiType, [
                from: AccountId32,
                to: AccountId32,
                asset: u128,
                vestingScheduleId: u128,
                schedule: ComposableTraitsVestingVestingSchedule,
                scheduleAmount: u128
            ], {
                from: AccountId32;
                to: AccountId32;
                asset: u128;
                vestingScheduleId: u128;
                schedule: ComposableTraitsVestingVestingSchedule;
                scheduleAmount: u128;
            }>;
            VestingSchedulesUpdated: AugmentedEvent<ApiType, [who: AccountId32], {
                who: AccountId32;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        xcmpQueue: {
            BadFormat: AugmentedEvent<ApiType, [messageHash: Option<H256>], {
                messageHash: Option<H256>;
            }>;
            BadVersion: AugmentedEvent<ApiType, [messageHash: Option<H256>], {
                messageHash: Option<H256>;
            }>;
            Fail: AugmentedEvent<ApiType, [
                messageHash: Option<H256>,
                error: XcmV2TraitsError,
                weight: u64
            ], {
                messageHash: Option<H256>;
                error: XcmV2TraitsError;
                weight: u64;
            }>;
            OverweightEnqueued: AugmentedEvent<ApiType, [
                sender: u32,
                sentAt: u32,
                index: u64,
                required: u64
            ], {
                sender: u32;
                sentAt: u32;
                index: u64;
                required: u64;
            }>;
            OverweightServiced: AugmentedEvent<ApiType, [index: u64, used: u64], {
                index: u64;
                used: u64;
            }>;
            Success: AugmentedEvent<ApiType, [
                messageHash: Option<H256>,
                weight: u64
            ], {
                messageHash: Option<H256>;
                weight: u64;
            }>;
            UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<H256>], {
                messageHash: Option<H256>;
            }>;
            XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: Option<H256>], {
                messageHash: Option<H256>;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        xTokens: {
            TransferredMultiAssets: AugmentedEvent<ApiType, [
                sender: AccountId32,
                assets: XcmV1MultiassetMultiAssets,
                fee: XcmV1MultiAsset,
                dest: XcmV1MultiLocation
            ], {
                sender: AccountId32;
                assets: XcmV1MultiassetMultiAssets;
                fee: XcmV1MultiAsset;
                dest: XcmV1MultiLocation;
            }>;
            [key: string]: AugmentedEvent<ApiType>;
        };
    }
}
