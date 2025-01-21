import type { bool, Enum, Null, Struct, u32, u64, u128 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EthereumAccountId } from '@polkadot/types/interfaces/eth';
import type { EcdsaSignature, MultiSignature } from '@polkadot/types/interfaces/extrinsics';
import type { ParachainInherentData, PersistedValidationData } from '@polkadot/types/interfaces/parachains';
import type { AccountId32, Balance, Permill } from '@polkadot/types/interfaces/runtime';
import type { ComposableTraitsDefiCurrencyPairCurrencyId, CurrencyId } from '../common';
export interface CommonMosaicRemoteAssetId extends Null {
}
export interface ComposableSupportEthereumAddress extends Null {
}
export interface ComposableTraitsAccountProxyProxyDefinition extends Null {
}
export interface ComposableTraitsAccountProxyProxyType extends Null {
}
export interface ComposableTraitsAssetsBasicAssetMetadata extends Struct {
    readonly symbol: {
        readonly inner: Null;
    } & Struct;
    readonly name: {
        readonly inner: Null;
    } & Struct;
}
export interface ComposableTraitsAssetsXcmAssetLocation extends Null {
}
export interface ComposableTraitsAuctionAuctionStepFunction extends Null {
}
export interface ComposableTraitsBondedFinanceBondDuration extends Struct {
    readonly Finite: {
        readonly returnIn: u32;
    } & Struct;
}
export interface ComposableTraitsBondedFinanceBondOffer extends Struct {
    readonly beneficiary: AccountId32;
    readonly asset: CurrencyId;
    readonly bondPrice: u128;
    readonly nbOfBonds: u128;
    readonly maturity: ComposableTraitsBondedFinanceBondDuration;
    readonly reward: ComposableTraitsBondedFinanceBondOfferReward;
    readonly keepAlive: bool;
}
export interface ComposableTraitsBondedFinanceBondOfferReward extends Struct {
    readonly asset: CurrencyId;
    readonly amount: u128;
    readonly maturity: u32;
}
export interface ComposableTraitsCallFilterCallFilterEntry extends Null {
}
export interface ComposableTraitsCurrencyRational64 extends Null {
}
export interface ComposableTraitsDefiSell extends Null {
}
export interface ComposableTraitsDefiTake extends Null {
}
export interface ComposableTraitsDexAssetAmount extends Null {
}
export interface ComposableTraitsDexConstantProductPoolInfo extends Struct {
    readonly owner: AccountId32;
    readonly pair: ComposableTraitsDefiCurrencyPairCurrencyId;
    readonly lpToken: u128;
    readonly fee: Permill;
    readonly ownerFee: Permill;
}
export interface ComposableTraitsDexDexRoute extends Null {
}
export interface ComposableTraitsDexStableSwapPoolInfo extends Null {
}
export interface ComposableTraitsGovernanceSignedRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly isIsSigned: boolean;
    readonly asIsSigned: bool;
    readonly isAsSigned: boolean;
    readonly asAsSigned: AccountId32;
    readonly type: 'Root' | 'Signed' | 'IsSigned' | 'AsSigned';
}
export interface ComposableTraitsLendingCreateInput extends Null {
}
export interface ComposableTraitsLendingMarketConfig extends Null {
}
export interface ComposableTraitsLendingRepayStrategy extends Null {
}
export interface ComposableTraitsLendingUpdateInput extends Null {
}
export interface ComposableTraitsOraclePrice extends Null {
}
export interface ComposableTraitsOracleRewardTracker extends Null {
}
export interface ComposableTraitsStakingRewardPool extends Null {
}
export interface ComposableTraitsStakingRewardPoolConfiguration extends Null {
}
export interface ComposableTraitsStakingRewardUpdate extends Null {
}
export interface ComposableTraitsStakingStake extends Null {
}
export interface ComposableTraitsTimeTimeReleaseFunction extends Null {
}
export interface ComposableTraitsVaultVaultConfig extends Null {
}
export interface ComposableTraitsXcmAssetsForeignMetadata extends Null {
}
export interface ComposableTraitsXcmAssetsXcmAssetLocation extends Null {
}
export interface CumulusPalletDmpQueueConfigData extends Null {
}
export interface CumulusPalletDmpQueuePageIndexData extends Null {
}
export interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Null {
}
export interface CumulusPalletXcmpQueueInboundChannelDetails extends Null {
}
export interface CumulusPalletXcmpQueueInboundStatus extends Null {
}
export interface CumulusPalletXcmpQueueOutboundChannelDetails extends Null {
}
export interface CumulusPalletXcmpQueueOutboundStatus extends Null {
}
export interface CumulusPalletXcmpQueueQueueConfigData extends Null {
}
export interface CumulusPrimitivesParachainInherentParachainInherentData extends ParachainInherentData {
}
export interface DaliRuntimeOpaqueSessionKeys extends Null {
}
export interface DaliRuntimeOriginCaller extends Null {
}
export interface FrameSupportPalletId extends Null {
}
export interface FrameSupportScheduleLookupError extends Null {
}
export interface FrameSupportScheduleMaybeHashed extends Null {
}
export interface FrameSupportTokensMiscBalanceStatus extends Null {
}
export interface FrameSupportWeightsDispatchInfo extends Null {
}
export interface FrameSupportWeightsPerDispatchClassU64 extends Null {
}
export interface FrameSupportWeightsRuntimeDbWeight extends Null {
}
export interface FrameSystemAccountInfo extends Struct {
    readonly nonce: Null;
    readonly consumers: Null;
    readonly providers: Null;
    readonly sufficients: Null;
    readonly data: {
        readonly free: u128;
        readonly reserved: u128;
        readonly miscFrozen: u128;
        readonly feeFrozen: u128;
    } & Struct;
}
export interface FrameSystemEventRecord extends Null {
}
export interface FrameSystemLastRuntimeUpgradeInfo extends Null {
}
export interface FrameSystemLimitsBlockLength extends Null {
}
export interface FrameSystemLimitsBlockWeights extends Null {
}
export interface FrameSystemPhase extends Null {
}
export interface IbcTraitOpenChannelParams extends Null {
}
export interface IbcTransferPalletParams extends Null {
}
export interface IbcTransferTransferParams extends Null {
}
export interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
}
export interface OrmlTokensBalanceLock extends Null {
}
export interface OrmlTokensReserveData extends Null {
}
export interface PalletAccountProxyAnnouncement extends Null {
}
export interface PalletAssetsRegistryCandidateStatus extends Null {
}
export interface PalletAssetsRegistryForeignMetadata extends Null {
}
export interface PalletAuthorshipUncleEntryItem extends Null {
}
export interface PalletBalancesAccountData extends Null {
}
export interface PalletBalancesBalanceLock extends Struct {
    readonly amount: Null;
}
export interface PalletBalancesReleases extends Null {
}
export interface PalletBalancesReserveData extends Null {
}
export interface PalletCollatorSelectionCandidateInfo extends Null {
}
export interface PalletCollectiveVotes extends Null {
}
export interface PalletCosmwasmCodeIdentifier extends Null {
}
export interface PalletCosmwasmCodeInfo extends Null {
}
export interface PalletCosmwasmContractInfo extends Null {
}
export interface PalletCosmwasmEntryPoint extends Null {
}
export interface PalletCosmwasmInstrumentCostRules extends Null {
}
export interface PalletCrowdloanRewardsModelsEcdsaSignature extends EcdsaSignature {
}
export interface PalletCrowdloanRewardsModelsProof extends Enum {
    readonly isRelayChain: boolean;
    readonly asRelayChain: ITuple<[AccountId32, MultiSignature]>;
    readonly isEthereum: boolean;
    readonly asEthereum: PalletCrowdloanRewardsModelsEcdsaSignature;
    readonly type: 'RelayChain' | 'Ethereum';
}
export interface PalletCrowdloanRewardsModelsRemoteAccount extends Enum {
    readonly isRelayChain: boolean;
    readonly asRelayChain: AccountId32;
    readonly isEthereum: boolean;
    readonly asEthereum: EthereumAccountId;
    readonly isRegistry: boolean;
    readonly type: 'RelayChain' | 'Ethereum' | 'Registry';
}
export interface PalletCrowdloanRewardsModelsReward extends Struct {
    readonly total: u128;
    readonly claimed: u128;
    readonly vestingPeriod: u64;
}
export interface PalletCrowdloanRewardsReward extends Null {
}
export interface PalletDemocracyConviction extends Null {
}
export interface PalletDemocracyVoteAccountVote extends Null {
}
export interface PalletDutchAuctionSellOrder extends Null {
}
export interface PalletDutchAuctionTakeOrder extends Null {
}
export interface PalletIbcAny extends Null {
}
export interface PalletIbcConnectionParams extends Null {
}
export interface PalletIbcErrorsIbcError extends Null {
}
export interface PalletIbcEventsIbcEvent extends Null {
}
export interface PalletIbcIbcConsensusState extends Null {
}
export interface PalletIbcPalletParams extends Null {
}
export interface PalletIbcPingSendPingParams extends Null {
}
export interface PalletIbcTransferParams extends Null {
}
export interface PalletIbcUpgradeParams extends Null {
}
export interface PalletIdentityBitFlags extends Null {
}
export interface PalletIdentityIdentityInfo extends Null {
}
export interface PalletIdentityJudgement extends Null {
}
export interface PalletIdentityRegistrarInfo extends Null {
}
export interface PalletIdentityRegistration extends Null {
}
export interface PalletLiquidationsLiquidationStrategyConfiguration extends Null {
}
export interface PalletLiquidityBootstrappingPool extends Null {
}
export interface PalletMosaicAmmSwapInfo extends Null {
}
export interface PalletMosaicAssetInfo extends Null {
}
export interface PalletMosaicDecayBudgetPenaltyDecayer extends Null {
}
export interface PalletLiquidStakingUnstakeProvider extends Null {
}
export interface PalletMosaicNetworkInfo extends Struct {
    readonly enabled: bool;
    readonly maxTransferSize: Balance;
}
export interface PalletMosaicRelayerStaleRelayer extends Struct {
    readonly relayer: {
        readonly current: AccountId32;
        readonly next: {
            readonly ttl: u32;
            readonly account: AccountId32;
        } & Struct;
    } & Struct;
}
export interface PalletMultisigMultisig extends Null {
}
export interface PalletMultisigTimepoint extends Null {
}
export interface PalletOracleAssetInfo extends Null {
}
export interface PalletOraclePrePrice extends Null {
}
export interface PalletOraclePrice extends Null {
}
export interface PalletOracleWithdraw extends Struct {
    readonly stake: u128;
    readonly unlockBlock: u32;
}
export interface PalletSchedulerReleases extends Null {
}
export interface PalletSchedulerScheduledV2 extends Null {
}
export interface PalletSchedulerScheduledV3 extends Null {
}
export interface PalletStakingRewardsRewardAccumulationHookError extends Null {
}
export interface PalletTransactionPaymentReleases extends Null {
}
export interface PalletTreasuryProposal extends Null {
}
export interface PalletVaultModelsStrategyOverview extends Null {
}
export interface PalletVaultModelsVaultInfo extends Null {
}
export interface PalletXcmQueryStatus extends Null {
}
export interface PalletXcmVersionMigrationStage extends Null {
}
export interface PolkadotCorePrimitivesOutboundHrmpMessage extends Null {
}
export interface PolkadotParachainPrimitivesXcmpMessageFormat extends Null {
}
export interface PolkadotPrimitivesV1AbridgedHostConfiguration extends Null {
}
export interface PolkadotPrimitivesV1PersistedValidationData extends PersistedValidationData {
}
export interface PolkadotPrimitivesV2AbridgedHostConfiguration extends Null {
}
export interface PolkadotPrimitivesV2PersistedValidationData extends Null {
}
export interface PolkadotPrimitivesV2UpgradeRestriction extends Null {
}
export interface SpConsensusAuraSr25519AppSr25519Public extends Null {
}
export interface SpCoreCryptoKeyTypeId extends Null {
}
export interface SpRuntimeDigest extends Null {
}
export interface SpRuntimeDispatchError extends Null {
}
export interface SpRuntimeHeader extends Null {
}
export interface SpTrieStorageProof extends Null {
}
export interface SpVersionRuntimeVersion extends Null {
}
export interface XcmV1MultiAsset extends Null {
}
export interface XcmV1MultiassetMultiAssets extends Null {
}
export interface XcmV1MultiLocation extends Null {
}
export interface XcmV2Response extends Null {
}
export interface XcmV2TraitsError extends Null {
}
export interface XcmV2TraitsOutcome extends Null {
}
export interface XcmV2WeightLimit extends Null {
}
export interface XcmV2Xcm extends Null {
}
export interface XcmVersionedMultiAsset extends Null {
}
export interface XcmVersionedMultiAssets extends Null {
}
export interface XcmVersionedMultiLocation extends Null {
}
export interface StagingXcmVersionedMultiLocation extends Null {
}
export interface XcmVersionedXcm extends Null {
}
export type PHANTOM_CROWDLOANREWARDS = 'crowdloanRewards';
