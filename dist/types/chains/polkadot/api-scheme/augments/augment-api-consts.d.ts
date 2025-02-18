import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import '@polkadot/api-base/types/consts';
import type { bool, Bytes, Option, Text, u8, U8aFixed, u16, u32, u64, u128 } from '@polkadot/types-codec';
import type { Codec } from '@polkadot/types-codec/types';
import type { AccountId32, Perbill, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportPalletId, FrameSupportWeightsRuntimeDbWeight, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, PalletCosmwasmInstrumentCostRules, SpVersionRuntimeVersion, XcmV1MultiLocation } from '../crowdloanRewards';
export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;
declare module '@polkadot/api-base/types/consts' {
    interface AugmentedConsts<ApiType extends ApiTypes> {
        assets: {
            nativeAssetId: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        assetTxPayment: {
            useUserConfiguration: bool & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        authorship: {
            uncleGenerations: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        balances: {
            existentialDeposit: u128 & AugmentedConst<ApiType>;
            maxLocks: u32 & AugmentedConst<ApiType>;
            maxReserves: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        bondedFinance: {
            minReward: u128 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            stake: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        callFilter: {
            maxStringSize: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        cosmwasm: {
            chainId: Text & AugmentedConst<ApiType>;
            codeBranchTableSizeLimit: u32 & AugmentedConst<ApiType>;
            codeGlobalVariableLimit: u32 & AugmentedConst<ApiType>;
            codeParameterLimit: u32 & AugmentedConst<ApiType>;
            codeStackLimit: u32 & AugmentedConst<ApiType>;
            codeStorageByteDeposit: u32 & AugmentedConst<ApiType>;
            codeTableSizeLimit: u32 & AugmentedConst<ApiType>;
            contractStorageByteReadPrice: u32 & AugmentedConst<ApiType>;
            contractStorageByteWritePrice: u32 & AugmentedConst<ApiType>;
            maxCodeSize: u32 & AugmentedConst<ApiType>;
            maxContractLabelSize: u32 & AugmentedConst<ApiType>;
            maxContractTrieIdSize: u32 & AugmentedConst<ApiType>;
            maxFrames: u32 & AugmentedConst<ApiType>;
            maxFundsAssets: u32 & AugmentedConst<ApiType>;
            maxInstantiateSaltSize: u32 & AugmentedConst<ApiType>;
            maxInstrumentedCodeSize: u32 & AugmentedConst<ApiType>;
            maxMessageSize: u32 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            wasmCostRules: PalletCosmwasmInstrumentCostRules & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        crowdloanRewards: {
            accountId: AccountId32 & AugmentedConst<ApiType>;
            initialPayment: Perbill & AugmentedConst<ApiType>;
            lockByDefault: bool & AugmentedConst<ApiType>;
            lockId: U8aFixed & AugmentedConst<ApiType>;
            overFundedThreshold: Perbill & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            prefix: Bytes & AugmentedConst<ApiType>;
            vestingStep: u64 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        democracy: {
            cooloffPeriod: u32 & AugmentedConst<ApiType>;
            democracyId: U8aFixed & AugmentedConst<ApiType>;
            enactmentPeriod: u32 & AugmentedConst<ApiType>;
            fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>;
            instantAllowed: bool & AugmentedConst<ApiType>;
            launchPeriod: u32 & AugmentedConst<ApiType>;
            maxProposals: u32 & AugmentedConst<ApiType>;
            maxVotes: u32 & AugmentedConst<ApiType>;
            minimumDeposit: u128 & AugmentedConst<ApiType>;
            preimageByteDeposit: u128 & AugmentedConst<ApiType>;
            voteLockingPeriod: u32 & AugmentedConst<ApiType>;
            votingPeriod: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        dexRouter: {
            maxHopsInRoute: u32 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        dutchAuction: {
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            positionExistentialDeposit: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        fnft: {
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        identity: {
            basicDeposit: u128 & AugmentedConst<ApiType>;
            fieldDeposit: u128 & AugmentedConst<ApiType>;
            maxAdditionalFields: u32 & AugmentedConst<ApiType>;
            maxRegistrars: u32 & AugmentedConst<ApiType>;
            maxSubAccounts: u32 & AugmentedConst<ApiType>;
            subAccountDeposit: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        indices: {
            deposit: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        lending: {
            oracleMarketCreationStake: u128 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        liquidations: {
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        mosaic: {
            minimumTimeLockPeriod: u32 & AugmentedConst<ApiType>;
            minimumTTL: u32 & AugmentedConst<ApiType>;
            timelockPeriod: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        multisig: {
            depositBase: u128 & AugmentedConst<ApiType>;
            depositFactor: u128 & AugmentedConst<ApiType>;
            maxSignatories: u16 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        oracle: {
            maxHistory: u32 & AugmentedConst<ApiType>;
            maxPrePrices: u32 & AugmentedConst<ApiType>;
            msPerBlock: u64 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            twapWindow: u16 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        pablo: {
            msPerBlock: u32 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            pbloAssetId: u128 & AugmentedConst<ApiType>;
            picaAssetId: u128 & AugmentedConst<ApiType>;
            twapInterval: u64 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        proxy: {
            announcementDepositBase: u128 & AugmentedConst<ApiType>;
            announcementDepositFactor: u128 & AugmentedConst<ApiType>;
            maxPending: u32 & AugmentedConst<ApiType>;
            maxProxies: u32 & AugmentedConst<ApiType>;
            proxyDepositBase: u128 & AugmentedConst<ApiType>;
            proxyDepositFactor: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        scheduler: {
            maximumWeight: u64 & AugmentedConst<ApiType>;
            maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        stakingRewards: {
            lockId: U8aFixed & AugmentedConst<ApiType>;
            maxRewardConfigsPerPool: u32 & AugmentedConst<ApiType>;
            maxStakingDurationPresets: u32 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            pbloAssetId: u128 & AugmentedConst<ApiType>;
            pbloStakeFinancialNftCollectionId: u128 & AugmentedConst<ApiType>;
            picaAssetId: u128 & AugmentedConst<ApiType>;
            picaStakeFinancialNftCollectionId: u128 & AugmentedConst<ApiType>;
            releaseRewardsPoolsBatchSize: u8 & AugmentedConst<ApiType>;
            treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
            xPbloAssetId: u128 & AugmentedConst<ApiType>;
            xPicaAssetId: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        system: {
            blockHashCount: u32 & AugmentedConst<ApiType>;
            blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
            blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
            dbWeight: FrameSupportWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
            ss58Prefix: u16 & AugmentedConst<ApiType>;
            version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        timestamp: {
            minimumPeriod: u64 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        tokens: {
            maxLocks: u32 & AugmentedConst<ApiType>;
            maxReserves: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        transactionPayment: {
            operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        treasury: {
            burn: Permill & AugmentedConst<ApiType>;
            maxApprovals: u32 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            proposalBond: Permill & AugmentedConst<ApiType>;
            proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
            proposalBondMinimum: u128 & AugmentedConst<ApiType>;
            spendPeriod: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        utility: {
            batchedCallsLimit: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        vault: {
            creationDeposit: u128 & AugmentedConst<ApiType>;
            existentialDeposit: u128 & AugmentedConst<ApiType>;
            minimumDeposit: u128 & AugmentedConst<ApiType>;
            minimumWithdrawal: u128 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            rentPerBlock: u128 & AugmentedConst<ApiType>;
            tombstoneDuration: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        vesting: {
            minVestedTransfer: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        xTokens: {
            baseXcmWeight: u64 & AugmentedConst<ApiType>;
            selfLocation: XcmV1MultiLocation & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
    }
}
//# sourceMappingURL=augment-api-consts.d.ts.map