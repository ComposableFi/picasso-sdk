import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import '@polkadot/api-base/types/storage';
import type { Data } from '@polkadot/types';
import type { bool, BTreeMap, BTreeSet, Bytes, Null, Option, U8aFixed, u16, u32, u64, u128, Vec, WrapperKeepOpaque } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, FixedU128, H256 } from '@polkadot/types/interfaces/runtime';
import type { Observable } from '@polkadot/types/types';
import type { ComposableTraitsXcmCumulusMethodId } from '../common';
import type { CommonMosaicRemoteAssetId, ComposableTraitsAccountProxyProxyDefinition, ComposableTraitsAssetsBasicAssetMetadata, ComposableTraitsBondedFinanceBondOffer, ComposableTraitsCallFilterCallFilterEntry, ComposableTraitsCurrencyRational64, ComposableTraitsDexDexRoute, ComposableTraitsGovernanceSignedRawOrigin, ComposableTraitsLendingMarketConfig, ComposableTraitsOraclePrice, ComposableTraitsOracleRewardTracker, ComposableTraitsStakingRewardPool, ComposableTraitsStakingStake, ComposableTraitsTimeTimeReleaseFunction, ComposableTraitsXcmAssetsForeignMetadata, ComposableTraitsXcmAssetsXcmAssetLocation, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueQueueConfigData, DaliRuntimeOpaqueSessionKeys, FrameSupportWeightsPerDispatchClassU64, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensReserveData, PalletAccountProxyAnnouncement, PalletAuthorshipUncleEntryItem, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReleases, PalletBalancesReserveData, PalletCollatorSelectionCandidateInfo, PalletCollectiveVotes, PalletCosmwasmCodeInfo, PalletCosmwasmContractInfo, PalletCrowdloanRewardsModelsRemoteAccount, PalletCrowdloanRewardsModelsReward, PalletDutchAuctionSellOrder, PalletDutchAuctionTakeOrder, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletLiquidationsLiquidationStrategyConfiguration, PalletMosaicAssetInfo, PalletMosaicNetworkInfo, PalletMosaicRelayerStaleRelayer, PalletMultisigMultisig, PalletOracleAssetInfo, PalletOraclePrePrice, PalletOracleWithdraw, PalletSchedulerScheduledV3, PalletTransactionPaymentReleases, PalletTreasuryProposal, PalletVaultModelsStrategyOverview, PalletVaultModelsVaultInfo, PalletXcmQueryStatus, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpRuntimeDigest, SpTrieStorageProof, XcmV1MultiLocation, XcmVersionedMultiLocation } from '../crowdloanRewards';
import type { PalletCurrencyFactoryRanges } from '../currencyFactory';
import type { PalletDemocracyPreimageStatus, PalletDemocracyReferendumInfo, PalletDemocracyReleases, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletPreimageRequestStatus } from '../democracy';
import type { PalletPabloPoolConfiguration, PalletPabloPriceCumulative, PalletPabloTimeWeightedAveragePrice } from '../pablo';
import type { ComposableTraitsVestingVestingSchedule } from '../vesting';
export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;
declare module '@polkadot/api-base/types/storage' {
    interface AugmentedQueries<ApiType extends ApiTypes> {
        assetsRegistry: {
            assetRatio: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsCurrencyRational64>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            foreignToLocal: AugmentedQuery<ApiType, (arg: ComposableTraitsXcmAssetsXcmAssetLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array) => Observable<Option<u128>>, [
                ComposableTraitsXcmAssetsXcmAssetLocation
            ]> & QueryableStorageEntry<ApiType, [ComposableTraitsXcmAssetsXcmAssetLocation]>;
            localToForeign: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsXcmAssetsForeignMetadata>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            minFeeAmounts: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: ComposableTraitsXcmAssetsXcmAssetLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array) => Observable<Option<u128>>, [
                u32,
                ComposableTraitsXcmAssetsXcmAssetLocation
            ]> & QueryableStorageEntry<ApiType, [u32, ComposableTraitsXcmAssetsXcmAssetLocation]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        assetTxPayment: {
            paymentAssets: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[u128, u128]>>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        aura: {
            authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
            currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        auraExt: {
            authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        authorship: {
            author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            uncles: AugmentedQuery<ApiType, () => Observable<Vec<PalletAuthorshipUncleEntryItem>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        balances: {
            account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletBalancesReleases>, []> & QueryableStorageEntry<ApiType, []>;
            totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        bondedFinance: {
            bondOfferCount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            bondOffers: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId32, ComposableTraitsBondedFinanceBondOffer]>>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        callFilter: {
            disabledCalls: AugmentedQuery<ApiType, (arg: ComposableTraitsCallFilterCallFilterEntry | {
                palletName?: any;
                functionName?: any;
            } | string | Uint8Array) => Observable<Option<Null>>, [
                ComposableTraitsCallFilterCallFilterEntry
            ]> & QueryableStorageEntry<ApiType, [ComposableTraitsCallFilterCallFilterEntry]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        collatorSelection: {
            candidacyBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            candidates: AugmentedQuery<ApiType, () => Observable<Vec<PalletCollatorSelectionCandidateInfo>>, []> & QueryableStorageEntry<ApiType, []>;
            desiredCandidates: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            lastAuthoredBlock: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        cosmwasm: {
            codeHashToId: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<u64>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            codeIdToInfo: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletCosmwasmCodeInfo>>, [
                u64
            ]> & QueryableStorageEntry<ApiType, [u64]>;
            contractToInfo: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletCosmwasmContractInfo>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            currentCodeId: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            currentNonce: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            instrumentedCode: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [
                u64
            ]> & QueryableStorageEntry<ApiType, [u64]>;
            pristineCode: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        council: {
            members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [
                H256
            ]> & QueryableStorageEntry<ApiType, [H256]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        councilMembership: {
            members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        crowdloanRewards: {
            associations: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletCrowdloanRewardsModelsRemoteAccount>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            claimedRewards: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            removeRewardLocks: AugmentedQuery<ApiType, () => Observable<Option<Null>>, []> & QueryableStorageEntry<ApiType, []>;
            rewards: AugmentedQuery<ApiType, (arg: PalletCrowdloanRewardsModelsRemoteAccount | {
                RelayChain: any;
            } | {
                Ethereum: any;
            } | string | Uint8Array) => Observable<Option<PalletCrowdloanRewardsModelsReward>>, [
                PalletCrowdloanRewardsModelsRemoteAccount
            ]> & QueryableStorageEntry<ApiType, [PalletCrowdloanRewardsModelsRemoteAccount]>;
            totalContributors: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            totalRewards: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            vestingTimeStart: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        currencyFactory: {
            assetEd: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            assetIdRanges: AugmentedQuery<ApiType, () => Observable<PalletCurrencyFactoryRanges>, []> & QueryableStorageEntry<ApiType, []>;
            assetMetadata: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsAssetsBasicAssetMetadata>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        democracy: {
            blacklist: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[u32, Vec<AccountId32>]>>>, [
                H256
            ]> & QueryableStorageEntry<ApiType, [H256]>;
            cancellations: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<bool>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            depositOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId32>, u128]>>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            lowestUnbaked: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[H256, PalletDemocracyVoteThreshold]>>>, [
            ]> & QueryableStorageEntry<ApiType, []>;
            preimages: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletDemocracyPreimageStatus>>, [
                H256
            ]> & QueryableStorageEntry<ApiType, [H256]>;
            publicPropCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, H256, AccountId32]>>>, []> & QueryableStorageEntry<ApiType, []>;
            referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            referendumInfoOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletDemocracyReferendumInfo>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<Option<PalletDemocracyReleases>>, []> & QueryableStorageEntry<ApiType, []>;
            votingOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletDemocracyVoteVoting>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        dexRouter: {
            dexRoutes: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsDexDexRoute>>, [
                u128,
                u128
            ]> & QueryableStorageEntry<ApiType, [u128, u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        dmpQueue: {
            configuration: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
            overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, Bytes]>>>, [
                u64
            ]> & QueryableStorageEntry<ApiType, [u64]>;
            pageIndex: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueuePageIndexData>, []> & QueryableStorageEntry<ApiType, []>;
            pages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, Bytes]>>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        dutchAuction: {
            configurations: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsTimeTimeReleaseFunction>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            localOrderIdToRemote: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u64]>>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            ordersIndex: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            parachainXcmCallbackLocation: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsXcmCumulusMethodId>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            sellOrders: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<PalletDutchAuctionSellOrder>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            takes: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<Vec<PalletDutchAuctionTakeOrder>>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            xcmSellOrders: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [
                u32,
                u64
            ]> & QueryableStorageEntry<ApiType, [u32, u64]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        fnft: {
            collection: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId32, AccountId32, BTreeMap<Bytes, Bytes>]>>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            financialNftId: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<u64>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            instance: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId32, BTreeMap<Bytes, Bytes>]>>>, [
                u128,
                u64
            ]> & QueryableStorageEntry<ApiType, [u128, u64]>;
            ownerInstances: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<BTreeSet<ITuple<[u128, u64]>>>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        governanceRegistry: {
            originsByAssetId: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsGovernanceSignedRawOrigin>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        identity: {
            identityOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletIdentityRegistration>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>, []> & QueryableStorageEntry<ApiType, []>;
            subsOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, Vec<AccountId32>]>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            superOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[AccountId32, Data]>>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        indices: {
            accounts: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId32, u128, bool]>>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        lending: {
            accountCollateral: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [
                u32,
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
            borrowIndex: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            borrowRent: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [
                u32,
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
            borrowTimestamp: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u64>>, [
                u32,
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
            debtIndex: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [
                u32,
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
            debtTokenForMarket: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            lastBlockTimestamp: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            lendingCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            markets: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsLendingMarketConfig>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        liquidations: {
            defaultStrategyIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            strategies: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletLiquidationsLiquidationStrategyConfiguration>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            strategyIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        palletLiquidStaking: {
            exchangeRate: AugmentedQuery<ApiType, () => Observable<FixedU128>, []> & QueryableStorageEntry<ApiType, []>;
            totalReserves: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
        };
        mosaic: {
            assetsInfo: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<PalletMosaicAssetInfo>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            incomingTransactions: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u128, u32]>>>, [
                AccountId32,
                u128
            ]> & QueryableStorageEntry<ApiType, [AccountId32, u128]>;
            localToRemoteAsset: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<CommonMosaicRemoteAssetId>>, [
                u128,
                u32
            ]> & QueryableStorageEntry<ApiType, [u128, u32]>;
            networkInfos: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletMosaicNetworkInfo>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            nonce: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            outgoingTransactions: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u128, u32]>>>, [
                AccountId32,
                u128
            ]> & QueryableStorageEntry<ApiType, [AccountId32, u128]>;
            relayer: AugmentedQuery<ApiType, () => Observable<Option<PalletMosaicRelayerStaleRelayer>>, []> & QueryableStorageEntry<ApiType, []>;
            remoteAmmWhitelist: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [
                u32,
                u128
            ]> & QueryableStorageEntry<ApiType, [u32, u128]>;
            remoteToLocalAsset: AugmentedQuery<ApiType, (arg1: CommonMosaicRemoteAssetId | {
                EthereumTokenAddress: any;
            } | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [
                CommonMosaicRemoteAssetId,
                u32
            ]> & QueryableStorageEntry<ApiType, [CommonMosaicRemoteAssetId, u32]>;
            timeLockPeriod: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        multisig: {
            calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[WrapperKeepOpaque<Call>, AccountId32, u128]>>>, [
                U8aFixed
            ]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<PalletMultisigMultisig>>, [
                AccountId32,
                U8aFixed
            ]> & QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        oracle: {
            answerInTransit: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            assetsCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            assetsInfo: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<PalletOracleAssetInfo>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            controllerToSigner: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AccountId32>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            declaredWithdraws: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletOracleWithdraw>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            oracleStake: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            prePrices: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Vec<PalletOraclePrePrice>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            priceHistory: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Vec<ComposableTraitsOraclePrice>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            prices: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<ComposableTraitsOraclePrice>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            rewardTrackerStore: AugmentedQuery<ApiType, () => Observable<Option<ComposableTraitsOracleRewardTracker>>, []> & QueryableStorageEntry<ApiType, []>;
            signerToController: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AccountId32>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        pablo: {
            poolCount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            pools: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<PalletPabloPoolConfiguration>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            priceCumulativeState: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<PalletPabloPriceCumulative>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            twapState: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<PalletPabloTimeWeightedAveragePrice>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        parachainInfo: {
            parachainId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        parachainSystem: {
            announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            customValidationHeadData: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2AbridgedHostConfiguration>>, [
            ]> & QueryableStorageEntry<ApiType, []>;
            hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotCorePrimitivesOutboundHrmpMessage>>, [
            ]> & QueryableStorageEntry<ApiType, []>;
            hrmpWatermark: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
            lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, H256>>, []> & QueryableStorageEntry<ApiType, []>;
            lastRelayChainBlockNumber: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
            processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            relayStateProof: AugmentedQuery<ApiType, () => Observable<Option<SpTrieStorageProof>>, []> & QueryableStorageEntry<ApiType, []>;
            relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>>, [
            ]> & QueryableStorageEntry<ApiType, []>;
            reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
            reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
            upgradeRestrictionSignal: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2UpgradeRestriction>>, [
            ]> & QueryableStorageEntry<ApiType, []>;
            upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2PersistedValidationData>>, [
            ]> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        preimage: {
            preimageFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            statusFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>, [
                H256
            ]> & QueryableStorageEntry<ApiType, [H256]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        proxy: {
            announcements: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletAccountProxyAnnouncement>, u128]>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            proxies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<ComposableTraitsAccountProxyProxyDefinition>, u128]>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        randomnessCollectiveFlip: {
            randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        relayerXcm: {
            assetTraps: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            currentMigration: AugmentedQuery<ApiType, () => Observable<Option<PalletXcmVersionMigrationStage>>, []> & QueryableStorageEntry<ApiType, []>;
            queries: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>, [
                u64
            ]> & QueryableStorageEntry<ApiType, [u64]>;
            queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            supportedVersion: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => Observable<Option<u32>>, [
                u32,
                XcmVersionedMultiLocation
            ]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
            versionDiscoveryQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[XcmVersionedMultiLocation, u32]>>>, [
            ]> & QueryableStorageEntry<ApiType, []>;
            versionNotifiers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => Observable<Option<u64>>, [
                u32,
                XcmVersionedMultiLocation
            ]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
            versionNotifyTargets: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => Observable<Option<ITuple<[u64, u64, u32]>>>, [
                u32,
                XcmVersionedMultiLocation
            ]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        scheduler: {
            agenda: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduledV3>>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [
                Bytes
            ]> & QueryableStorageEntry<ApiType, [Bytes]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        session: {
            currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<AccountId32>>, [
                ITuple<[SpCoreCryptoKeyTypeId, Bytes]>
            ]> & QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
            nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<DaliRuntimeOpaqueSessionKeys>>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, DaliRuntimeOpaqueSessionKeys]>>>, [
            ]> & QueryableStorageEntry<ApiType, []>;
            validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        stakingRewards: {
            rewardPools: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsStakingRewardPool>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            rewardsPotIsEmpty: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [
                u128,
                u128
            ]> & QueryableStorageEntry<ApiType, [u128, u128]>;
            stakes: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsStakingStake>>, [
                u128,
                u64
            ]> & QueryableStorageEntry<ApiType, [u128, u64]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        sudo: {
            key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        system: {
            account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportWeightsPerDispatchClassU64>, []> & QueryableStorageEntry<ApiType, []>;
            digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
            eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
            eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [
                H256
            ]> & QueryableStorageEntry<ApiType, [H256]>;
            executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
            extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
            number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
            upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        technicalCommittee: {
            members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [
                H256
            ]> & QueryableStorageEntry<ApiType, [H256]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        technicalCommitteeMembership: {
            members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        timestamp: {
            didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        tokens: {
            accounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<OrmlTokensAccountData>, [
                AccountId32,
                u128
            ]> & QueryableStorageEntry<ApiType, [AccountId32, u128]>;
            locks: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [
                AccountId32,
                u128
            ]> & QueryableStorageEntry<ApiType, [AccountId32, u128]>;
            reserves: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<Vec<OrmlTokensReserveData>>, [
                AccountId32,
                u128
            ]> & QueryableStorageEntry<ApiType, [AccountId32, u128]>;
            totalIssuance: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<u128>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        transactionPayment: {
            nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        treasury: {
            approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>, [
                u32
            ]> & QueryableStorageEntry<ApiType, [u32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        unknownTokens: {
            abstractFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<u128>, [
                XcmV1MultiLocation,
                Bytes
            ]> & QueryableStorageEntry<ApiType, [XcmV1MultiLocation, Bytes]>;
            concreteFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, arg2: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array) => Observable<u128>, [
                XcmV1MultiLocation,
                XcmV1MultiLocation
            ]> & QueryableStorageEntry<ApiType, [XcmV1MultiLocation, XcmV1MultiLocation]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        vault: {
            capitalStructure: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletVaultModelsStrategyOverview>, [
                u64,
                AccountId32
            ]> & QueryableStorageEntry<ApiType, [u64, AccountId32]>;
            lpTokensToVaults: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<u64>>, [
                u128
            ]> & QueryableStorageEntry<ApiType, [u128]>;
            vaultCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            vaults: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletVaultModelsVaultInfo>>, [
                u64
            ]> & QueryableStorageEntry<ApiType, [u64]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        vesting: {
            vestingScheduleNonce: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            vestingSchedules: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<BTreeMap<u128, ComposableTraitsVestingVestingSchedule>>, [
                AccountId32,
                u128
            ]> & QueryableStorageEntry<ApiType, [AccountId32, u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        xcmpQueue: {
            inboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [
                u32,
                u32
            ]> & QueryableStorageEntry<ApiType, [u32, u32]>;
            inboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueInboundChannelDetails>>, [
            ]> & QueryableStorageEntry<ApiType, []>;
            outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [
                u32,
                u16
            ]> & QueryableStorageEntry<ApiType, [u32, u16]>;
            outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueOutboundChannelDetails>>, [
            ]> & QueryableStorageEntry<ApiType, []>;
            overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32, Bytes]>>>, [
                u64
            ]> & QueryableStorageEntry<ApiType, [u64]>;
            overweightCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            queueConfig: AugmentedQuery<ApiType, () => Observable<CumulusPalletXcmpQueueQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
            queueSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            signalMessages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
    }
}
//# sourceMappingURL=augment-api-query.d.ts.map