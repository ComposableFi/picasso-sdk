import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import '@polkadot/api-base/types/submittable';
import type { Data } from '@polkadot/types';
import type { bool, BTreeMap, Bytes, Compact, Option, Text, u8, U8aFixed, u16, u32, u64, u128, Vec, WrapperKeepOpaque } from '@polkadot/types-codec';
import type { AnyNumber, Codec, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { ComposableTraitsDefiCurrencyPairCurrencyId, ComposableTraitsDefiSellCurrencyId, ComposableTraitsXcmXcmSellRequest } from '../common';
import type { CommonMosaicRemoteAssetId, ComposableSupportEthereumAddress, ComposableTraitsAccountProxyProxyType, ComposableTraitsAssetsBasicAssetMetadata, ComposableTraitsBondedFinanceBondOffer, ComposableTraitsCallFilterCallFilterEntry, ComposableTraitsCurrencyRational64, ComposableTraitsDefiTake, ComposableTraitsDexAssetAmount, ComposableTraitsLendingCreateInput, ComposableTraitsLendingRepayStrategy, ComposableTraitsLendingUpdateInput, ComposableTraitsStakingRewardPoolConfiguration, ComposableTraitsStakingRewardUpdate, ComposableTraitsTimeTimeReleaseFunction, ComposableTraitsVaultVaultConfig, ComposableTraitsXcmAssetsXcmAssetLocation, CumulusPrimitivesParachainInherentParachainInherentData, DaliRuntimeOpaqueSessionKeys, DaliRuntimeOriginCaller, FrameSupportScheduleMaybeHashed, PalletCosmwasmCodeIdentifier, PalletCrowdloanRewardsModelsProof, PalletCrowdloanRewardsModelsRemoteAccount, PalletDemocracyConviction, PalletDemocracyVoteAccountVote, PalletIbcAny, PalletIbcPalletParams, PalletIbcPingSendPingParams, PalletIbcTransferParams, PalletIbcUpgradeParams, PalletIdentityBitFlags, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletLiquidationsLiquidationStrategyConfiguration, PalletLiquidStakingUnstakeProvider, PalletMosaicAmmSwapInfo, PalletMosaicDecayBudgetPenaltyDecayer, PalletMosaicNetworkInfo, PalletMultisigTimepoint, SpRuntimeHeader, XcmV1MultiLocation, XcmV2WeightLimit, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm } from '../crowdloanRewards';
import type { PalletPabloPoolInitConfiguration } from '../pablo';
import type { ComposableTraitsVestingVestingScheduleIdSet, ComposableTraitsVestingVestingScheduleInfo } from '../vesting';
export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;
declare module '@polkadot/api-base/types/submittable' {
    interface AugmentedSubmittables<ApiType extends ApiTypes> {
        assetsTransactorRouter: {
            burnFrom: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                MultiAddress,
                Compact<u128>
            ]>;
            forceTransfer: AugmentedSubmittable<(asset: u128 | AnyNumber | Uint8Array, source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                MultiAddress,
                MultiAddress,
                Compact<u128>,
                bool
            ]>;
            forceTransferNative: AugmentedSubmittable<(source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                MultiAddress,
                Compact<u128>,
                bool
            ]>;
            mintInitialize: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u128>,
                MultiAddress
            ]>;
            mintInitializeWithGovernance: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, governanceOrigin: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u128>,
                MultiAddress,
                MultiAddress
            ]>;
            mintInto: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                MultiAddress,
                Compact<u128>
            ]>;
            transfer: AugmentedSubmittable<(asset: u128 | AnyNumber | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                MultiAddress,
                Compact<u128>,
                bool
            ]>;
            transferAll: AugmentedSubmittable<(asset: u128 | AnyNumber | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                MultiAddress,
                bool
            ]>;
            transferAllNative: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                bool
            ]>;
            transferNative: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                Compact<u128>,
                bool
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        assetsRegistry: {
            registerAsset: AugmentedSubmittable<(location: ComposableTraitsXcmAssetsXcmAssetLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, ratio: ComposableTraitsCurrencyRational64 | {
                n?: any;
                d?: any;
            } | string | Uint8Array, decimals: Option<u8> | null | Uint8Array | u8 | AnyNumber) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsXcmAssetsXcmAssetLocation,
                ComposableTraitsCurrencyRational64,
                Option<u8>
            ]>;
            setMinFee: AugmentedSubmittable<(targetParachainId: u32 | AnyNumber | Uint8Array, foreignAssetId: ComposableTraitsXcmAssetsXcmAssetLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, amount: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [
                u32,
                ComposableTraitsXcmAssetsXcmAssetLocation,
                Option<u128>
            ]>;
            updateAsset: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, location: ComposableTraitsXcmAssetsXcmAssetLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, ratio: ComposableTraitsCurrencyRational64 | {
                n?: any;
                d?: any;
            } | string | Uint8Array, decimals: Option<u8> | null | Uint8Array | u8 | AnyNumber) => SubmittableExtrinsic<ApiType>, [
                u128,
                ComposableTraitsXcmAssetsXcmAssetLocation,
                ComposableTraitsCurrencyRational64,
                Option<u8>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        assetTxPayment: {
            setPaymentAsset: AugmentedSubmittable<(payer: AccountId32 | string | Uint8Array, assetId: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                Option<u128>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        authorship: {
            setUncles: AugmentedSubmittable<(newUncles: Vec<SpRuntimeHeader> | (SpRuntimeHeader | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                Vec<SpRuntimeHeader>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        balances: {
            forceTransfer: AugmentedSubmittable<(source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                MultiAddress,
                Compact<u128>
            ]>;
            forceUnreserve: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                u128
            ]>;
            setBalance: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                Compact<u128>,
                Compact<u128>
            ]>;
            transfer: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                Compact<u128>
            ]>;
            transferAll: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                bool
            ]>;
            transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                Compact<u128>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        bondedFinance: {
            bond: AugmentedSubmittable<(offerId: u128 | AnyNumber | Uint8Array, nbOfBonds: u128 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128,
                bool
            ]>;
            cancel: AugmentedSubmittable<(offerId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            offer: AugmentedSubmittable<(offer: ComposableTraitsBondedFinanceBondOffer | {
                beneficiary?: any;
                asset?: any;
                bondPrice?: any;
                nbOfBonds?: any;
                maturity?: any;
                reward?: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsBondedFinanceBondOffer,
                bool
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        callFilter: {
            disable: AugmentedSubmittable<(entry: ComposableTraitsCallFilterCallFilterEntry | {
                palletName?: any;
                functionName?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsCallFilterCallFilterEntry
            ]>;
            enable: AugmentedSubmittable<(entry: ComposableTraitsCallFilterCallFilterEntry | {
                palletName?: any;
                functionName?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsCallFilterCallFilterEntry
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        collatorSelection: {
            leaveIntent: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            registerAsCandidate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            setCandidacyBond: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128
            ]>;
            setDesiredCandidates: AugmentedSubmittable<(max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32
            ]>;
            setInvulnerables: AugmentedSubmittable<(updated: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                Vec<AccountId32>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        cosmwasm: {
            clearAdmin: AugmentedSubmittable<(contract: AccountId32 | string | Uint8Array, gas: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                u64
            ]>;
            execute: AugmentedSubmittable<(contract: AccountId32 | string | Uint8Array, funds: BTreeMap<u128, ITuple<[u128, bool]>>, gas: u64 | AnyNumber | Uint8Array, message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                BTreeMap<u128, ITuple<[u128, bool]>>,
                u64,
                Bytes
            ]>;
            instantiate: AugmentedSubmittable<(codeIdentifier: PalletCosmwasmCodeIdentifier | {
                CodeId: any;
            } | {
                CodeHash: any;
            } | string | Uint8Array, salt: Bytes | string | Uint8Array, admin: Option<AccountId32> | null | Uint8Array | AccountId32 | string, label: Bytes | string | Uint8Array, funds: BTreeMap<u128, ITuple<[u128, bool]>>, gas: u64 | AnyNumber | Uint8Array, message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                PalletCosmwasmCodeIdentifier,
                Bytes,
                Option<AccountId32>,
                Bytes,
                BTreeMap<u128, ITuple<[u128, bool]>>,
                u64,
                Bytes
            ]>;
            migrate: AugmentedSubmittable<(contract: AccountId32 | string | Uint8Array, newCodeIdentifier: PalletCosmwasmCodeIdentifier | {
                CodeId: any;
            } | {
                CodeHash: any;
            } | string | Uint8Array, gas: u64 | AnyNumber | Uint8Array, message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                PalletCosmwasmCodeIdentifier,
                u64,
                Bytes
            ]>;
            updateAdmin: AugmentedSubmittable<(contract: AccountId32 | string | Uint8Array, newAdmin: AccountId32 | string | Uint8Array, gas: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                AccountId32,
                u64
            ]>;
            upload: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        council: {
            close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: Compact<u64> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256,
                Compact<u32>,
                Compact<u64>,
                Compact<u32>
            ]>;
            disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256
            ]>;
            execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Call,
                Compact<u32>
            ]>;
            propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>,
                Call,
                Compact<u32>
            ]>;
            setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Vec<AccountId32>,
                Option<AccountId32>,
                u32
            ]>;
            vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256,
                Compact<u32>,
                bool
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        councilMembership: {
            addMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            changeKey: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            removeMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            resetMembers: AugmentedSubmittable<(members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                Vec<AccountId32>
            ]>;
            setPrime: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            swapMember: AugmentedSubmittable<(remove: AccountId32 | string | Uint8Array, add: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                AccountId32
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        crowdloanRewards: {
            associate: AugmentedSubmittable<(rewardAccount: AccountId32 | string | Uint8Array, proof: PalletCrowdloanRewardsModelsProof | {
                RelayChain: any;
            } | {
                Ethereum: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                PalletCrowdloanRewardsModelsProof
            ]>;
            claim: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            initialize: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            initializeAt: AugmentedSubmittable<(at: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            populate: AugmentedSubmittable<(rewards: Vec<ITuple<[PalletCrowdloanRewardsModelsRemoteAccount, u128, u64]>> | [
                (PalletCrowdloanRewardsModelsRemoteAccount | {
                    RelayChain: any;
                } | {
                    Ethereum: any;
                } | string | Uint8Array),
                u128 | AnyNumber | Uint8Array,
                u64 | AnyNumber | Uint8Array
            ][]) => SubmittableExtrinsic<ApiType>, [
                Vec<ITuple<[PalletCrowdloanRewardsModelsRemoteAccount, u128, u64]>>
            ]>;
            unlockRewardsFor: AugmentedSubmittable<(rewardAccounts: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                Vec<AccountId32>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        cumulusXcm: {
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        currencyFactory: {
            addRange: AugmentedSubmittable<(length: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            setMetadata: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, metadata: ComposableTraitsAssetsBasicAssetMetadata | {
                symbol?: any;
                name?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                ComposableTraitsAssetsBasicAssetMetadata
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        democracy: {
            blacklist: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, maybeRefIndex: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [
                H256,
                Option<u32>
            ]>;
            cancelProposal: AugmentedSubmittable<(propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>
            ]>;
            cancelQueued: AugmentedSubmittable<(which: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            cancelReferendum: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>
            ]>;
            clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            delegate: AugmentedSubmittable<(to: AccountId32 | string | Uint8Array, conviction: PalletDemocracyConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                PalletDemocracyConviction,
                u128
            ]>;
            emergencyCancel: AugmentedSubmittable<(refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32
            ]>;
            enactProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256,
                u32
            ]>;
            externalPropose: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256
            ]>;
            externalProposeDefault: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256
            ]>;
            externalProposeMajority: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256
            ]>;
            fastTrack: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, votingPeriod: u32 | AnyNumber | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256,
                u32,
                u32
            ]>;
            noteImminentPreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes
            ]>;
            noteImminentPreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes
            ]>;
            notePreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes
            ]>;
            notePreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes
            ]>;
            propose: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256,
                Compact<u128>
            ]>;
            reapPreimage: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, proposalLenUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256,
                Compact<u32>
            ]>;
            removeOtherVote: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                u32
            ]>;
            removeVote: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            second: AugmentedSubmittable<(proposal: Compact<u32> | AnyNumber | Uint8Array, secondsUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>,
                Compact<u32>
            ]>;
            undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            unlock: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            vetoExternal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256
            ]>;
            vote: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletDemocracyVoteAccountVote | {
                Standard: any;
            } | {
                Split: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>,
                PalletDemocracyVoteAccountVote
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        dexRouter: {
            addLiquidity: AugmentedSubmittable<(assets: BTreeMap<u128, u128>, minMintAmount: u128 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                BTreeMap<u128, u128>,
                u128,
                bool
            ]>;
            buy: AugmentedSubmittable<(inAssetId: u128 | AnyNumber | Uint8Array, outAsset: ComposableTraitsDexAssetAmount | {
                assetId?: any;
                amount?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                ComposableTraitsDexAssetAmount
            ]>;
            removeLiquidity: AugmentedSubmittable<(lpAmount: u128 | AnyNumber | Uint8Array, minReceive: BTreeMap<u128, u128>) => SubmittableExtrinsic<ApiType>, [
                u128,
                BTreeMap<u128, u128>
            ]>;
            swap: AugmentedSubmittable<(inAsset: ComposableTraitsDexAssetAmount | {
                assetId?: any;
                amount?: any;
            } | string | Uint8Array, minReceive: ComposableTraitsDexAssetAmount | {
                assetId?: any;
                amount?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsDexAssetAmount,
                ComposableTraitsDexAssetAmount
            ]>;
            updateRoute: AugmentedSubmittable<(assetPair: ComposableTraitsDefiCurrencyPairCurrencyId | {
                base?: any;
                quote?: any;
            } | string | Uint8Array, route: Option<Vec<u128>> | null | Uint8Array | Vec<u128> | (u128 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsDefiCurrencyPairCurrencyId,
                Option<Vec<u128>>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        dmpQueue: {
            serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u64,
                u64
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        farming: {
            deposit: AugmentedSubmittable<(poolCurrencyId: u128, amount: u128) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128
            ]>;
            claim: AugmentedSubmittable<(poolCurrencyId: u128, rewardCurrencyId: u128) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128
            ]>;
            withdraw: AugmentedSubmittable<(poolCurrencyId: u128, amount: u128) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128
            ]>;
            updateRewardSchedule: AugmentedSubmittable<(poolCurrencyId: u128, currencyId: u128, periodCount: u128, amount: u128) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128,
                u128,
                u128
            ]>;
        };
        dutchAuction: {
            addConfiguration: AugmentedSubmittable<(configurationId: u128 | AnyNumber | Uint8Array, configuration: ComposableTraitsTimeTimeReleaseFunction | {
                LinearDecrease: any;
            } | {
                StairstepExponentialDecrease: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                ComposableTraitsTimeTimeReleaseFunction
            ]>;
            ask: AugmentedSubmittable<(order: ComposableTraitsDefiSellCurrencyId | {
                pair?: any;
                take?: any;
            } | string | Uint8Array, configuration: ComposableTraitsTimeTimeReleaseFunction | {
                LinearDecrease: any;
            } | {
                StairstepExponentialDecrease: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsDefiSellCurrencyId,
                ComposableTraitsTimeTimeReleaseFunction
            ]>;
            liquidate: AugmentedSubmittable<(orderId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128
            ]>;
            take: AugmentedSubmittable<(orderId: u128 | AnyNumber | Uint8Array, take: ComposableTraitsDefiTake | {
                amount?: any;
                limit?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                ComposableTraitsDefiTake
            ]>;
            xcmSell: AugmentedSubmittable<(request: ComposableTraitsXcmXcmSellRequest | {
                orderId?: any;
                fromTo?: any;
                order?: any;
                configuration?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsXcmXcmSellRequest
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        governanceRegistry: {
            grantRoot: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128
            ]>;
            remove: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            set: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, value: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                AccountId32
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        ibc: {
            deliver: AugmentedSubmittable<(messages: Vec<PalletIbcAny> | (PalletIbcAny | {
                typeUrl?: any;
                value?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                Vec<PalletIbcAny>
            ]>;
            freezeClient: AugmentedSubmittable<(clientId: Bytes | string | Uint8Array, height: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes,
                u64
            ]>;
            setParams: AugmentedSubmittable<(params: PalletIbcPalletParams | {
                sendEnabled?: any;
                receiveEnabled?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                PalletIbcPalletParams
            ]>;
            transfer: AugmentedSubmittable<(params: PalletIbcTransferParams | {
                to?: any;
                sourceChannel?: any;
                timeout?: any;
            } | string | Uint8Array, assetId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, memo?: Text) => SubmittableExtrinsic<ApiType>, [
                PalletIbcTransferParams,
                u128,
                u128,
                Option<Text>
            ]>;
            upgradeClient: AugmentedSubmittable<(params: PalletIbcUpgradeParams | {
                clientState?: any;
                consensusState?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                PalletIbcUpgradeParams
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        ibcPing: {
            sendPing: AugmentedSubmittable<(params: PalletIbcPingSendPingParams | {
                data?: any;
                timeoutHeightOffset?: any;
                timeoutTimestampOffset?: any;
                channelId?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                PalletIbcPingSendPingParams
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        identity: {
            addRegistrar: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            addSub: AugmentedSubmittable<(sub: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, data: Data | {
                None: any;
            } | {
                Raw: any;
            } | {
                BlakeTwo256: any;
            } | {
                Sha256: any;
            } | {
                Keccak256: any;
            } | {
                ShaThree256: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                Data
            ]>;
            cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32
            ]>;
            clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            killIdentity: AugmentedSubmittable<(target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress
            ]>;
            provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, judgement: PalletIdentityJudgement | {
                Unknown: any;
            } | {
                FeePaid: any;
            } | {
                Reasonable: any;
            } | {
                KnownGood: any;
            } | {
                OutOfDate: any;
            } | {
                LowQuality: any;
            } | {
                Erroneous: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>,
                MultiAddress,
                PalletIdentityJudgement
            ]>;
            quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            removeSub: AugmentedSubmittable<(sub: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress
            ]>;
            renameSub: AugmentedSubmittable<(sub: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, data: Data | {
                None: any;
            } | {
                Raw: any;
            } | {
                BlakeTwo256: any;
            } | {
                Sha256: any;
            } | {
                Keccak256: any;
            } | {
                ShaThree256: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                Data
            ]>;
            requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>,
                Compact<u128>
            ]>;
            setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>,
                AccountId32
            ]>;
            setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>,
                Compact<u128>
            ]>;
            setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>,
                PalletIdentityBitFlags
            ]>;
            setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | {
                additional?: any;
                display?: any;
                legal?: any;
                web?: any;
                riot?: any;
                email?: any;
                pgpFingerprint?: any;
                image?: any;
                twitter?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                PalletIdentityIdentityInfo
            ]>;
            setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | [
                AccountId32 | string | Uint8Array,
                (Data | {
                    None: any;
                } | {
                    Raw: any;
                } | {
                    BlakeTwo256: any;
                } | {
                    Sha256: any;
                } | {
                    Keccak256: any;
                } | {
                    ShaThree256: any;
                } | string | Uint8Array)
            ][]) => SubmittableExtrinsic<ApiType>, [
                Vec<ITuple<[AccountId32, Data]>>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        indices: {
            claim: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            forceTransfer: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                u32,
                bool
            ]>;
            free: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            freeze: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            transfer: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                u32
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        lending: {
            borrow: AugmentedSubmittable<(marketId: u32 | AnyNumber | Uint8Array, amountToBorrow: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                u128
            ]>;
            createMarket: AugmentedSubmittable<(input: ComposableTraitsLendingCreateInput | {
                updatable?: any;
                currencyPair?: any;
                reservedFactor?: any;
                interestRateModel?: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsLendingCreateInput,
                bool
            ]>;
            depositCollateral: AugmentedSubmittable<(marketId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                u128,
                bool
            ]>;
            liquidate: AugmentedSubmittable<(marketId: u32 | AnyNumber | Uint8Array, borrowers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                u32,
                Vec<AccountId32>
            ]>;
            repayBorrow: AugmentedSubmittable<(marketId: u32 | AnyNumber | Uint8Array, beneficiary: AccountId32 | string | Uint8Array, amount: ComposableTraitsLendingRepayStrategy | {
                TotalDebt: any;
            } | {
                PartialAmount: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                AccountId32,
                ComposableTraitsLendingRepayStrategy,
                bool
            ]>;
            updateMarket: AugmentedSubmittable<(marketId: u32 | AnyNumber | Uint8Array, input: ComposableTraitsLendingUpdateInput | {
                collateralFactor?: any;
                underCollateralizedWarnPercent?: any;
                liquidators?: any;
                maxPriceAge?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                ComposableTraitsLendingUpdateInput
            ]>;
            withdrawCollateral: AugmentedSubmittable<(marketId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                u128
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        liquidations: {
            addLiquidationStrategy: AugmentedSubmittable<(configuration: PalletLiquidationsLiquidationStrategyConfiguration | {
                DutchAuction: any;
            } | {
                Pablo: any;
            } | {
                Xcm: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                PalletLiquidationsLiquidationStrategyConfiguration
            ]>;
            sell: AugmentedSubmittable<(order: ComposableTraitsDefiSellCurrencyId | {
                pair?: any;
                take?: any;
            } | string | Uint8Array, configuration: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsDefiSellCurrencyId,
                Vec<u32>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        palletLiquidStaking: {
            stake: AugmentedSubmittable<(amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            unstake: AugmentedSubmittable<(liquidAmount: u128 | AnyNumber | Uint8Array, unstakeProvider: Codec | PalletLiquidStakingUnstakeProvider | 'RelayChain' | 'Loans' | 'MatchingPool' | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                PalletLiquidStakingUnstakeProvider
            ]>;
        };
        mosaic: {
            acceptTransfer: AugmentedSubmittable<(from: AccountId32 | string | Uint8Array, networkId: u32 | AnyNumber | Uint8Array, remoteAssetId: CommonMosaicRemoteAssetId | {
                EthereumTokenAddress: any;
            } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                u32,
                CommonMosaicRemoteAssetId,
                u128
            ]>;
            addRemoteAmmId: AugmentedSubmittable<(networkId: u32 | AnyNumber | Uint8Array, ammId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                u128
            ]>;
            claimStaleTo: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                AccountId32
            ]>;
            claimTo: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                AccountId32
            ]>;
            removeRemoteAmmId: AugmentedSubmittable<(networkId: u32 | AnyNumber | Uint8Array, ammId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                u128
            ]>;
            rescindTimelockedMint: AugmentedSubmittable<(networkId: u32 | AnyNumber | Uint8Array, remoteAssetId: CommonMosaicRemoteAssetId | {
                EthereumTokenAddress: any;
            } | string | Uint8Array, account: AccountId32 | string | Uint8Array, untrustedAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                CommonMosaicRemoteAssetId,
                AccountId32,
                u128
            ]>;
            rotateRelayer: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array, validatedTtl: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                u32
            ]>;
            setBudget: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, decay: PalletMosaicDecayBudgetPenaltyDecayer | {
                Linear: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128,
                PalletMosaicDecayBudgetPenaltyDecayer
            ]>;
            setNetwork: AugmentedSubmittable<(networkId: u32 | AnyNumber | Uint8Array, networkInfo: PalletMosaicNetworkInfo | {
                enabled?: any;
                minTransferSize?: any;
                maxTransferSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                PalletMosaicNetworkInfo
            ]>;
            setRelayer: AugmentedSubmittable<(relayer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            setTimelockDuration: AugmentedSubmittable<(period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32
            ]>;
            timelockedMint: AugmentedSubmittable<(networkId: u32 | AnyNumber | Uint8Array, remoteAssetId: CommonMosaicRemoteAssetId | {
                EthereumTokenAddress: any;
            } | string | Uint8Array, to: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, lockTime: u32 | AnyNumber | Uint8Array, id: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                CommonMosaicRemoteAssetId,
                AccountId32,
                u128,
                u32,
                H256
            ]>;
            transferTo: AugmentedSubmittable<(networkId: u32 | AnyNumber | Uint8Array, assetId: u128 | AnyNumber | Uint8Array, address: ComposableSupportEthereumAddress | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, minimumAmountOut: u128 | AnyNumber | Uint8Array, swapToNative: bool | boolean | Uint8Array, sourceUserAccount: AccountId32 | string | Uint8Array, ammSwapInfo: Option<PalletMosaicAmmSwapInfo> | null | Uint8Array | PalletMosaicAmmSwapInfo | {
                destinationTokenOutAddress?: any;
                destinationAmm?: any;
                minimumAmountOut?: any;
            } | string, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                u128,
                ComposableSupportEthereumAddress,
                u128,
                u128,
                bool,
                AccountId32,
                Option<PalletMosaicAmmSwapInfo>,
                bool
            ]>;
            updateAssetMapping: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, networkId: u32 | AnyNumber | Uint8Array, remoteAssetId: Option<CommonMosaicRemoteAssetId> | null | Uint8Array | CommonMosaicRemoteAssetId | {
                EthereumTokenAddress: any;
            } | string) => SubmittableExtrinsic<ApiType>, [
                u128,
                u32,
                Option<CommonMosaicRemoteAssetId>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        multisig: {
            approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | {
                height?: any;
                index?: any;
            } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u16,
                Vec<AccountId32>,
                Option<PalletMultisigTimepoint>,
                U8aFixed,
                u64
            ]>;
            asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | {
                height?: any;
                index?: any;
            } | string, call: WrapperKeepOpaque<Call> | object | string | Uint8Array, storeCall: bool | boolean | Uint8Array, maxWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u16,
                Vec<AccountId32>,
                Option<PalletMultisigTimepoint>,
                WrapperKeepOpaque<Call>,
                bool,
                u64
            ]>;
            asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Vec<AccountId32>,
                Call
            ]>;
            cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | {
                height?: any;
                index?: any;
            } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u16,
                Vec<AccountId32>,
                PalletMultisigTimepoint,
                U8aFixed
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        oracle: {
            addAssetAndInfo: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, threshold: Percent | AnyNumber | Uint8Array, minAnswers: u32 | AnyNumber | Uint8Array, maxAnswers: u32 | AnyNumber | Uint8Array, blockInterval: u32 | AnyNumber | Uint8Array, rewardWeight: u128 | AnyNumber | Uint8Array, slash: u128 | AnyNumber | Uint8Array, emitPriceChanges: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                Percent,
                u32,
                u32,
                u32,
                u128,
                u128,
                bool
            ]>;
            addStake: AugmentedSubmittable<(stake: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            adjustRewards: AugmentedSubmittable<(annualCostPerOracle: u128 | AnyNumber | Uint8Array, numIdealOracles: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u8
            ]>;
            reclaimStake: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            removeStake: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            setSigner: AugmentedSubmittable<(signer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            submitPrice: AugmentedSubmittable<(price: u128 | AnyNumber | Uint8Array, assetId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        pablo: {
            addLiquidity: AugmentedSubmittable<(poolId: u128 | AnyNumber | Uint8Array, assets: BTreeMap<u128, u128>, minMintAmount: u128 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                BTreeMap<u128, u128>,
                u128,
                bool
            ]>;
            buy: AugmentedSubmittable<(poolId: u128 | AnyNumber | Uint8Array, inAssetId: u128 | AnyNumber | Uint8Array, outAsset: ComposableTraitsDexAssetAmount | {
                assetId?: any;
                amount?: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128,
                ComposableTraitsDexAssetAmount,
                bool
            ]>;
            create: AugmentedSubmittable<(pool: PalletPabloPoolInitConfiguration | {
                DualAssetConstantProduct: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                PalletPabloPoolInitConfiguration
            ]>;
            enableTwap: AugmentedSubmittable<(poolId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128
            ]>;
            removeLiquidity: AugmentedSubmittable<(poolId: u128 | AnyNumber | Uint8Array, lpAmount: u128 | AnyNumber | Uint8Array, minReceive: BTreeMap<u128, u128>) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128,
                BTreeMap<u128, u128>
            ]>;
            swap: AugmentedSubmittable<(poolId: u128 | AnyNumber | Uint8Array, inAsset: ComposableTraitsDexAssetAmount | {
                assetId?: any;
                amount?: any;
            } | string | Uint8Array, minReceive: ComposableTraitsDexAssetAmount | {
                assetId?: any;
                amount?: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                ComposableTraitsDexAssetAmount,
                ComposableTraitsDexAssetAmount,
                bool
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        parachainInfo: {
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        parachainSystem: {
            authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256
            ]>;
            enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes
            ]>;
            setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | {
                validationData?: any;
                relayChainState?: any;
                downwardMessages?: any;
                horizontalMessages?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                CumulusPrimitivesParachainInherentParachainInherentData
            ]>;
            sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        preimage: {
            notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes
            ]>;
            requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256
            ]>;
            unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        proxy: {
            addProxy: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, proxyType: ComposableTraitsAccountProxyProxyType | 'Any' | 'Governance' | 'CancelProxy' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                ComposableTraitsAccountProxyProxyType,
                u32
            ]>;
            announce: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                H256
            ]>;
            anonymous: AugmentedSubmittable<(proxyType: ComposableTraitsAccountProxyProxyType | 'Any' | 'Governance' | 'CancelProxy' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsAccountProxyProxyType,
                u32,
                u16
            ]>;
            killAnonymous: AugmentedSubmittable<(spawner: AccountId32 | string | Uint8Array, proxyType: ComposableTraitsAccountProxyProxyType | 'Any' | 'Governance' | 'CancelProxy' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                ComposableTraitsAccountProxyProxyType,
                u16,
                Compact<u32>,
                Compact<u32>
            ]>;
            proxy: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, forceProxyType: Option<ComposableTraitsAccountProxyProxyType> | null | Uint8Array | ComposableTraitsAccountProxyProxyType | 'Any' | 'Governance' | 'CancelProxy' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                Option<ComposableTraitsAccountProxyProxyType>,
                Call
            ]>;
            proxyAnnounced: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, real: AccountId32 | string | Uint8Array, forceProxyType: Option<ComposableTraitsAccountProxyProxyType> | null | Uint8Array | ComposableTraitsAccountProxyProxyType | 'Any' | 'Governance' | 'CancelProxy' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                AccountId32,
                Option<ComposableTraitsAccountProxyProxyType>,
                Call
            ]>;
            rejectAnnouncement: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                H256
            ]>;
            removeAnnouncement: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                H256
            ]>;
            removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            removeProxy: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, proxyType: ComposableTraitsAccountProxyProxyType | 'Any' | 'Governance' | 'CancelProxy' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                ComposableTraitsAccountProxyProxyType,
                u32
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        relayerXcm: {
            execute: AugmentedSubmittable<(message: XcmVersionedXcm | {
                V0: any;
            } | {
                V1: any;
            } | {
                V2: any;
            } | string | Uint8Array, maxWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedXcm,
                u64
            ]>;
            forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [
                Option<u32>
            ]>;
            forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedMultiLocation
            ]>;
            forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedMultiLocation
            ]>;
            forceXcmVersion: AugmentedSubmittable<(location: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, xcmVersion: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmV1MultiLocation,
                u32
            ]>;
            limitedReserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV2WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedMultiLocation,
                XcmVersionedMultiLocation,
                XcmVersionedMultiAssets,
                u32,
                XcmV2WeightLimit
            ]>;
            limitedTeleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV2WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedMultiLocation,
                XcmVersionedMultiLocation,
                XcmVersionedMultiAssets,
                u32,
                XcmV2WeightLimit
            ]>;
            reserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedMultiLocation,
                XcmVersionedMultiLocation,
                XcmVersionedMultiAssets,
                u32
            ]>;
            send: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, message: XcmVersionedXcm | {
                V0: any;
            } | {
                V1: any;
            } | {
                V2: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedMultiLocation,
                XcmVersionedXcm
            ]>;
            teleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedMultiLocation,
                XcmVersionedMultiLocation,
                XcmVersionedMultiAssets,
                u32
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        scheduler: {
            cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                u32
            ]>;
            cancelNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: FrameSupportScheduleMaybeHashed | {
                Value: any;
            } | {
                Hash: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                Option<ITuple<[u32, u32]>>,
                u8,
                FrameSupportScheduleMaybeHashed
            ]>;
            scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: FrameSupportScheduleMaybeHashed | {
                Value: any;
            } | {
                Hash: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32,
                Option<ITuple<[u32, u32]>>,
                u8,
                FrameSupportScheduleMaybeHashed
            ]>;
            scheduleNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: FrameSupportScheduleMaybeHashed | {
                Value: any;
            } | {
                Hash: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes,
                u32,
                Option<ITuple<[u32, u32]>>,
                u8,
                FrameSupportScheduleMaybeHashed
            ]>;
            scheduleNamedAfter: AugmentedSubmittable<(id: Bytes | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: FrameSupportScheduleMaybeHashed | {
                Value: any;
            } | {
                Hash: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes,
                u32,
                Option<ITuple<[u32, u32]>>,
                u8,
                FrameSupportScheduleMaybeHashed
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        session: {
            purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            setKeys: AugmentedSubmittable<(keys: DaliRuntimeOpaqueSessionKeys | {
                aura?: any;
            } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                DaliRuntimeOpaqueSessionKeys,
                Bytes
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        stakingRewards: {
            addToRewardsPot: AugmentedSubmittable<(poolId: u128 | AnyNumber | Uint8Array, assetId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128,
                u128,
                bool
            ]>;
            claim: AugmentedSubmittable<(fnftCollectionId: u128 | AnyNumber | Uint8Array, fnftInstanceId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u64
            ]>;
            createRewardPool: AugmentedSubmittable<(poolConfig: ComposableTraitsStakingRewardPoolConfiguration | {
                RewardRateBasedIncentive: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsStakingRewardPoolConfiguration
            ]>;
            extend: AugmentedSubmittable<(fnftCollectionId: u128 | AnyNumber | Uint8Array, fnftInstanceId: u64 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u64,
                u128
            ]>;
            split: AugmentedSubmittable<(fnftCollectionId: u128 | AnyNumber | Uint8Array, fnftInstanceId: u64 | AnyNumber | Uint8Array, ratio: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u64,
                Permill
            ]>;
            stake: AugmentedSubmittable<(poolId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, durationPreset: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128,
                u64
            ]>;
            unstake: AugmentedSubmittable<(fnftCollectionId: u128 | AnyNumber | Uint8Array, fnftInstanceId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u64
            ]>;
            updateRewardsPool: AugmentedSubmittable<(poolId: u128 | AnyNumber | Uint8Array, rewardUpdates: BTreeMap<u128, ComposableTraitsStakingRewardUpdate>) => SubmittableExtrinsic<ApiType>, [
                u128,
                BTreeMap<u128, ComposableTraitsStakingRewardUpdate>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        sudo: {
            setKey: AugmentedSubmittable<(updated: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress
            ]>;
            sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
            sudoAs: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                Call
            ]>;
            sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Call,
                u64
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        system: {
            fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Perbill
            ]>;
            killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes,
                u32
            ]>;
            killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                Vec<Bytes>
            ]>;
            remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes
            ]>;
            setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Bytes
            ]>;
            setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array][]) => SubmittableExtrinsic<ApiType>, [
                Vec<ITuple<[Bytes, Bytes]>>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        technicalCommittee: {
            close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: Compact<u64> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256,
                Compact<u32>,
                Compact<u64>,
                Compact<u32>
            ]>;
            disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256
            ]>;
            execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Call,
                Compact<u32>
            ]>;
            propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>,
                Call,
                Compact<u32>
            ]>;
            setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Vec<AccountId32>,
                Option<AccountId32>,
                u32
            ]>;
            vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                H256,
                Compact<u32>,
                bool
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        technicalCommitteeMembership: {
            addMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            changeKey: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            removeMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            resetMembers: AugmentedSubmittable<(members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                Vec<AccountId32>
            ]>;
            setPrime: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32
            ]>;
            swapMember: AugmentedSubmittable<(remove: AccountId32 | string | Uint8Array, add: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                AccountId32,
                AccountId32
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        timestamp: {
            set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u64>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        tokens: {
            forceTransfer: AugmentedSubmittable<(source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u128 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                MultiAddress,
                u128,
                Compact<u128>
            ]>;
            setBalance: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u128 | AnyNumber | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                u128,
                Compact<u128>,
                Compact<u128>
            ]>;
            transfer: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u128 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                u128,
                Compact<u128>
            ]>;
            transferAll: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u128 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                u128,
                bool
            ]>;
            transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u128 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                u128,
                Compact<u128>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        treasury: {
            approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>
            ]>;
            proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u128>,
                MultiAddress
            ]>;
            rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>
            ]>;
            removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u32>
            ]>;
            spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Compact<u128>,
                MultiAddress
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        unknownTokens: {
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        utility: {
            asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u16,
                Call
            ]>;
            batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                Vec<Call>
            ]>;
            batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                Vec<Call>
            ]>;
            dispatchAs: AugmentedSubmittable<(asOrigin: DaliRuntimeOriginCaller | {
                system: any;
            } | {
                Void: any;
            } | {
                Council: any;
            } | {
                RelayerXcm: any;
            } | {
                CumulusXcm: any;
            } | {
                TechnicalCommittee: any;
            } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                DaliRuntimeOriginCaller,
                Call
            ]>;
            forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                Vec<Call>
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        vault: {
            addSurcharge: AugmentedSubmittable<(dest: u64 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u64,
                u128
            ]>;
            claimSurcharge: AugmentedSubmittable<(dest: u64 | AnyNumber | Uint8Array, address: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [
                u64,
                Option<AccountId32>
            ]>;
            create: AugmentedSubmittable<(vault: ComposableTraitsVaultVaultConfig | {
                assetId?: any;
                reserved?: any;
                manager?: any;
                strategies?: any;
            } | string | Uint8Array, depositAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                ComposableTraitsVaultVaultConfig,
                u128
            ]>;
            deleteTombstoned: AugmentedSubmittable<(dest: u64 | AnyNumber | Uint8Array, address: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [
                u64,
                Option<AccountId32>
            ]>;
            deposit: AugmentedSubmittable<(vault: u64 | AnyNumber | Uint8Array, assetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u64,
                u128
            ]>;
            emergencyShutdown: AugmentedSubmittable<(vault: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u64
            ]>;
            liquidateStrategy: AugmentedSubmittable<(vaultIdx: u64 | AnyNumber | Uint8Array, strategyAccountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u64,
                AccountId32
            ]>;
            start: AugmentedSubmittable<(vault: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            withdraw: AugmentedSubmittable<(vault: u64 | AnyNumber | Uint8Array, lpAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u64,
                u128
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        vesting: {
            claim: AugmentedSubmittable<(asset: u128 | AnyNumber | Uint8Array, vestingScheduleIds: ComposableTraitsVestingVestingScheduleIdSet | {
                All: any;
            } | {
                One: any;
            } | {
                Many: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                ComposableTraitsVestingVestingScheduleIdSet
            ]>;
            claimFor: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, asset: u128 | AnyNumber | Uint8Array, vestingScheduleIds: ComposableTraitsVestingVestingScheduleIdSet | {
                All: any;
            } | {
                One: any;
            } | {
                Many: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                u128,
                ComposableTraitsVestingVestingScheduleIdSet
            ]>;
            updateVestingSchedules: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, asset: u128 | AnyNumber | Uint8Array, vestingSchedules: Vec<ComposableTraitsVestingVestingScheduleInfo> | (ComposableTraitsVestingVestingScheduleInfo | {
                window?: any;
                periodCount?: any;
                perPeriod?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                u128,
                Vec<ComposableTraitsVestingVestingScheduleInfo>
            ]>;
            vestedTransfer: AugmentedSubmittable<(from: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, beneficiary: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, asset: u128 | AnyNumber | Uint8Array, scheduleInfo: ComposableTraitsVestingVestingScheduleInfo | {
                window?: any;
                periodCount?: any;
                perPeriod?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                MultiAddress,
                MultiAddress,
                u128,
                ComposableTraitsVestingVestingScheduleInfo
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        xcmpQueue: {
            resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u64,
                u64
            ]>;
            suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            updateDropThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32
            ]>;
            updateResumeThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32
            ]>;
            updateSuspendThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u32
            ]>;
            updateThresholdWeight: AugmentedSubmittable<(updated: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u64
            ]>;
            updateWeightRestrictDecay: AugmentedSubmittable<(updated: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u64
            ]>;
            updateXcmpMaxIndividualWeight: AugmentedSubmittable<(updated: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u64
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        xTokens: {
            transfer: AugmentedSubmittable<(currencyId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128,
                XcmVersionedMultiLocation,
                u64
            ]>;
            transferMultiasset: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedMultiAsset,
                XcmVersionedMultiLocation,
                u64
            ]>;
            transferMultiassets: AugmentedSubmittable<(assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedMultiAssets,
                u32,
                XcmVersionedMultiLocation,
                u64
            ]>;
            transferMultiassetWithFee: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, fee: XcmVersionedMultiAsset | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                XcmVersionedMultiAsset,
                XcmVersionedMultiAsset,
                XcmVersionedMultiLocation,
                u64
            ]>;
            transferMulticurrencies: AugmentedSubmittable<(currencies: Vec<ITuple<[u128, u128]>> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array][], feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                Vec<ITuple<[u128, u128]>>,
                u32,
                XcmVersionedMultiLocation,
                u64
            ]>;
            transferWithFee: AugmentedSubmittable<(currencyId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [
                u128,
                u128,
                u128,
                XcmVersionedMultiLocation,
                u64
            ]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
    }
}
