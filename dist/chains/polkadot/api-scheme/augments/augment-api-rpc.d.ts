import type { AugmentedRpc } from '@polkadot/rpc-core/types';
import '@polkadot/rpc-core/types/jsonrpc';
import type { StorageKey } from '@polkadot/types';
import type { bool, Bytes, f64, HashMap, Json, Null, Option, Text, u32, U64, u64, U256, Vec } from '@polkadot/types-codec';
import { BTreeMap, u128 } from '@polkadot/types-codec';
import type { AnyNumber } from '@polkadot/types-codec/types';
import type { ExtrinsicOrHash, ExtrinsicStatus } from '@polkadot/types/interfaces/author';
import type { EpochAuthorship } from '@polkadot/types/interfaces/babe';
import type { BeefySignedCommitment } from '@polkadot/types/interfaces/beefy';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import type { PrefixedStorageKey } from '@polkadot/types/interfaces/childstate';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { CodeUploadRequest, CodeUploadResult, ContractCallRequest, ContractExecResult, ContractInstantiateResult, InstantiateRequest } from '@polkadot/types/interfaces/contracts';
import type { BlockStats } from '@polkadot/types/interfaces/dev';
import type { CreatedBlock } from '@polkadot/types/interfaces/engine';
import type { EthAccount, EthCallRequest, EthFeeHistory, EthFilter, EthFilterChanges, EthLog, EthReceipt, EthRichBlock, EthSubKind, EthSubParams, EthSyncStatus, EthTransaction, EthTransactionRequest, EthWork } from '@polkadot/types/interfaces/eth';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { EncodedFinalityProofs, JustificationNotification, ReportedRoundStates } from '@polkadot/types/interfaces/grandpa';
import type { MmrLeafBatchProof, MmrLeafProof } from '@polkadot/types/interfaces/mmr';
import type { StorageKind } from '@polkadot/types/interfaces/offchain';
import type { FeeDetails, RuntimeDispatchInfo } from '@polkadot/types/interfaces/payment';
import type { RpcMethods } from '@polkadot/types/interfaces/rpc';
import type { AccountId, AccountId32, AssetId, Balance, BlockNumber, H64, H160, H256, Hash, Header, Index, Justification, SignedBlock, StorageData } from '@polkadot/types/interfaces/runtime';
import type { ApplyExtrinsicResult, ChainProperties, ChainType, Health, NetworkState, NodeRole, PeerInfo, SyncState } from '@polkadot/types/interfaces/system';
import type { IExtrinsic, Observable } from '@polkadot/types/types';
import { Asset } from '../assets';
import type { CurrencyId, CustomRpcBalance, CustomRpcCurrencyId } from '../common';
import type { PalletPabloPoolId, PalletPabloPriceAggregate } from '../pablo';
export type __AugmentedRpc = AugmentedRpc<() => unknown>;
declare module '@polkadot/rpc-core/types/jsonrpc' {
    interface RpcInterface {
        assets: {
            balanceOf: AugmentedRpc<(asset: CustomRpcCurrencyId | string, account: AccountId32 | string | Uint8Array, at?: Hash | string | Uint8Array) => Observable<CustomRpcBalance>>;
            listAssets: AugmentedRpc<(at?: Hash | string | Uint8Array) => Observable<Vec<Asset>>>;
        };
        author: {
            hasKey: AugmentedRpc<(publicKey: Bytes | string | Uint8Array, keyType: Text | string) => Observable<bool>>;
            hasSessionKeys: AugmentedRpc<(sessionKeys: Bytes | string | Uint8Array) => Observable<bool>>;
            insertKey: AugmentedRpc<(keyType: Text | string, suri: Text | string, publicKey: Bytes | string | Uint8Array) => Observable<Bytes>>;
            pendingExtrinsics: AugmentedRpc<() => Observable<Vec<Extrinsic>>>;
            removeExtrinsic: AugmentedRpc<(bytesOrHash: Vec<ExtrinsicOrHash> | (ExtrinsicOrHash | {
                Hash: any;
            } | {
                Extrinsic: any;
            } | string | Uint8Array)[]) => Observable<Vec<Hash>>>;
            rotateKeys: AugmentedRpc<() => Observable<Bytes>>;
            submitAndWatchExtrinsic: AugmentedRpc<(extrinsic: Extrinsic | IExtrinsic | string | Uint8Array) => Observable<ExtrinsicStatus>>;
            submitExtrinsic: AugmentedRpc<(extrinsic: Extrinsic | IExtrinsic | string | Uint8Array) => Observable<Hash>>;
        };
        babe: {
            epochAuthorship: AugmentedRpc<() => Observable<HashMap<AuthorityId, EpochAuthorship>>>;
        };
        beefy: {
            getFinalizedHead: AugmentedRpc<() => Observable<H256>>;
            subscribeJustifications: AugmentedRpc<() => Observable<BeefySignedCommitment>>;
        };
        chain: {
            getBlock: AugmentedRpc<(hash?: BlockHash | string | Uint8Array) => Observable<SignedBlock>>;
            getBlockHash: AugmentedRpc<(blockNumber?: BlockNumber | AnyNumber | Uint8Array) => Observable<BlockHash>>;
            getFinalizedHead: AugmentedRpc<() => Observable<BlockHash>>;
            getHeader: AugmentedRpc<(hash?: BlockHash | string | Uint8Array) => Observable<Header>>;
            subscribeAllHeads: AugmentedRpc<() => Observable<Header>>;
            subscribeFinalizedHeads: AugmentedRpc<() => Observable<Header>>;
            subscribeNewHeads: AugmentedRpc<() => Observable<Header>>;
        };
        childstate: {
            getKeys: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, prefix: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            getKeysPaged: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, prefix: StorageKey | string | Uint8Array | any, count: u32 | AnyNumber | Uint8Array, startKey?: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            getStorage: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<StorageData>>>;
            getStorageEntries: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: Hash | string | Uint8Array) => Observable<Vec<Option<StorageData>>>>;
            getStorageHash: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<Hash>>>;
            getStorageSize: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<u64>>>;
        };
        contracts: {
            call: AugmentedRpc<(callRequest: ContractCallRequest | {
                origin?: any;
                dest?: any;
                value?: any;
                gasLimit?: any;
                inputData?: any;
            } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractExecResult>>;
            getStorage: AugmentedRpc<(address: AccountId | string | Uint8Array, key: H256 | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<Bytes>>>;
            instantiate: AugmentedRpc<(request: InstantiateRequest | {
                origin?: any;
                value?: any;
                gasLimit?: any;
                storageDepositLimit?: any;
                code?: any;
                data?: any;
                salt?: any;
            } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractInstantiateResult>>;
            rentProjection: AugmentedRpc<(address: AccountId | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<BlockNumber>>>;
            uploadCode: AugmentedRpc<(uploadRequest: CodeUploadRequest | {
                origin?: any;
                code?: any;
                storageDepositLimit?: any;
            } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<CodeUploadResult>>;
        };
        crowdloanRewards: {
            amountAvailableToClaimFor: AugmentedRpc<(accountId: AccountId | string | Uint8Array, at?: Hash | string | Uint8Array) => Observable<Balance>>;
        };
        dev: {
            getBlockStats: AugmentedRpc<(at: Hash | string | Uint8Array) => Observable<Option<BlockStats>>>;
        };
        engine: {
            createBlock: AugmentedRpc<(createEmpty: bool | boolean | Uint8Array, finalize: bool | boolean | Uint8Array, parentHash?: BlockHash | string | Uint8Array) => Observable<CreatedBlock>>;
            finalizeBlock: AugmentedRpc<(hash: BlockHash | string | Uint8Array, justification?: Justification) => Observable<bool>>;
        };
        eth: {
            accounts: AugmentedRpc<() => Observable<Vec<H160>>>;
            blockNumber: AugmentedRpc<() => Observable<U256>>;
            call: AugmentedRpc<(request: EthCallRequest | {
                from?: any;
                to?: any;
                gasPrice?: any;
                gas?: any;
                value?: any;
                data?: any;
                nonce?: any;
            } | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<Bytes>>;
            chainId: AugmentedRpc<() => Observable<U64>>;
            coinbase: AugmentedRpc<() => Observable<H160>>;
            estimateGas: AugmentedRpc<(request: EthCallRequest | {
                from?: any;
                to?: any;
                gasPrice?: any;
                gas?: any;
                value?: any;
                data?: any;
                nonce?: any;
            } | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            feeHistory: AugmentedRpc<(blockCount: U256 | AnyNumber | Uint8Array, newestBlock: BlockNumber | AnyNumber | Uint8Array, rewardPercentiles: Option<Vec<f64>> | null | Uint8Array | Vec<f64> | f64[]) => Observable<EthFeeHistory>>;
            gasPrice: AugmentedRpc<() => Observable<U256>>;
            getBalance: AugmentedRpc<(address: H160 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            getBlockByHash: AugmentedRpc<(hash: H256 | string | Uint8Array, full: bool | boolean | Uint8Array) => Observable<Option<EthRichBlock>>>;
            getBlockByNumber: AugmentedRpc<(block: BlockNumber | AnyNumber | Uint8Array, full: bool | boolean | Uint8Array) => Observable<Option<EthRichBlock>>>;
            getBlockTransactionCountByHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<U256>>;
            getBlockTransactionCountByNumber: AugmentedRpc<(block: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            getCode: AugmentedRpc<(address: H160 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<Bytes>>;
            getFilterChanges: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<EthFilterChanges>>;
            getFilterLogs: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<Vec<EthLog>>>;
            getLogs: AugmentedRpc<(filter: EthFilter | {
                fromBlock?: any;
                toBlock?: any;
                blockHash?: any;
                address?: any;
                topics?: any;
            } | string | Uint8Array) => Observable<Vec<EthLog>>>;
            getProof: AugmentedRpc<(address: H160 | string | Uint8Array, storageKeys: Vec<H256> | (H256 | string | Uint8Array)[], number: BlockNumber | AnyNumber | Uint8Array) => Observable<EthAccount>>;
            getStorageAt: AugmentedRpc<(address: H160 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<H256>>;
            getTransactionByBlockHashAndIndex: AugmentedRpc<(hash: H256 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthTransaction>>;
            getTransactionByBlockNumberAndIndex: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthTransaction>>;
            getTransactionByHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<EthTransaction>>;
            getTransactionCount: AugmentedRpc<(hash: H256 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            getTransactionReceipt: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<EthReceipt>>;
            getUncleByBlockHashAndIndex: AugmentedRpc<(hash: H256 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthRichBlock>>;
            getUncleByBlockNumberAndIndex: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthRichBlock>>;
            getUncleCountByBlockHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<U256>>;
            getUncleCountByBlockNumber: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            getWork: AugmentedRpc<() => Observable<EthWork>>;
            hashrate: AugmentedRpc<() => Observable<U256>>;
            maxPriorityFeePerGas: AugmentedRpc<() => Observable<U256>>;
            mining: AugmentedRpc<() => Observable<bool>>;
            newBlockFilter: AugmentedRpc<() => Observable<U256>>;
            newFilter: AugmentedRpc<(filter: EthFilter | {
                fromBlock?: any;
                toBlock?: any;
                blockHash?: any;
                address?: any;
                topics?: any;
            } | string | Uint8Array) => Observable<U256>>;
            newPendingTransactionFilter: AugmentedRpc<() => Observable<U256>>;
            protocolVersion: AugmentedRpc<() => Observable<u64>>;
            sendRawTransaction: AugmentedRpc<(bytes: Bytes | string | Uint8Array) => Observable<H256>>;
            sendTransaction: AugmentedRpc<(tx: EthTransactionRequest | {
                from?: any;
                to?: any;
                gasPrice?: any;
                gas?: any;
                value?: any;
                data?: any;
                nonce?: any;
            } | string | Uint8Array) => Observable<H256>>;
            submitHashrate: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array, hash: H256 | string | Uint8Array) => Observable<bool>>;
            submitWork: AugmentedRpc<(nonce: H64 | string | Uint8Array, headerHash: H256 | string | Uint8Array, mixDigest: H256 | string | Uint8Array) => Observable<bool>>;
            subscribe: AugmentedRpc<(kind: EthSubKind | 'newHeads' | 'logs' | 'newPendingTransactions' | 'syncing' | number | Uint8Array, params?: EthSubParams | {
                None: any;
            } | {
                Logs: any;
            } | string | Uint8Array) => Observable<Null>>;
            syncing: AugmentedRpc<() => Observable<EthSyncStatus>>;
            uninstallFilter: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<bool>>;
        };
        grandpa: {
            proveFinality: AugmentedRpc<(blockNumber: BlockNumber | AnyNumber | Uint8Array) => Observable<Option<EncodedFinalityProofs>>>;
            roundState: AugmentedRpc<() => Observable<ReportedRoundStates>>;
            subscribeJustifications: AugmentedRpc<() => Observable<JustificationNotification>>;
        };
        mmr: {
            generateBatchProof: AugmentedRpc<(leafIndices: Vec<u64> | (u64 | AnyNumber | Uint8Array)[], at?: BlockHash | string | Uint8Array) => Observable<MmrLeafProof>>;
            generateProof: AugmentedRpc<(leafIndex: u64 | AnyNumber | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<MmrLeafBatchProof>>;
        };
        net: {
            listening: AugmentedRpc<() => Observable<bool>>;
            peerCount: AugmentedRpc<() => Observable<Text>>;
            version: AugmentedRpc<() => Observable<Text>>;
        };
        offchain: {
            localStorageGet: AugmentedRpc<(kind: StorageKind | 'PERSISTENT' | 'LOCAL' | number | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
            localStorageSet: AugmentedRpc<(kind: StorageKind | 'PERSISTENT' | 'LOCAL' | number | Uint8Array, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => Observable<Null>>;
        };
        pablo: {
            pricesFor: AugmentedRpc<(poolId: PalletPabloPoolId | string, baseAssetId: CustomRpcCurrencyId | string, quoteAssetId: CustomRpcCurrencyId | string, amount: CustomRpcBalance | string, at?: Hash | string | Uint8Array) => Observable<PalletPabloPriceAggregate>>;
            isFlatFee: AugmentedRpc<(assetId: AssetId | string) => Observable<SafeRpcWrapper<Balance>>>;
            simulateAddLiquidity: AugmentedRpc<(who: AccountId | string, poolId: PalletPabloPoolId | string, amounts: BTreeMap<CurrencyId, Balance> | {
                [assetIn in string]: string;
            }) => Observable<u128>>;
            simulateRemoveLiquidity: AugmentedRpc<(who: AccountId | string, poolId: PalletPabloPoolId | string, amount: Balance | string, minExpectedAmounts: BTreeMap<CurrencyId, Balance> | {
                [assetIn in string]: string;
            }) => Observable<BTreeMap<AssetId, Balance>>>;
        };
        payment: {
            queryFeeDetails: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<FeeDetails>>;
            queryInfo: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<RuntimeDispatchInfo>>;
        };
        reward: {
            estimateFarmingReward: AugmentedRpc<(accountId: AccountId, poolCurrencyId: Text, rewardCurrencyId: Text, at?: Option<BlockHash>) => Observable<Balance>>;
            computeFarmingReward: AugmentedRpc<(accountId: AccountId, poolCurrencyId: Text, rewardCurrencyId: Text, at?: Option<BlockHash>) => Observable<Balance>>;
        };
        rpc: {
            methods: AugmentedRpc<() => Observable<RpcMethods>>;
        };
        syncstate: {
            genSyncSpec: AugmentedRpc<(raw: bool | boolean | Uint8Array) => Observable<Json>>;
        };
        system: {
            accountNextIndex: AugmentedRpc<(accountId: AccountId | string | Uint8Array) => Observable<Index>>;
            addLogFilter: AugmentedRpc<(directives: Text | string) => Observable<Null>>;
            addReservedPeer: AugmentedRpc<(peer: Text | string) => Observable<Text>>;
            chain: AugmentedRpc<() => Observable<Text>>;
            chainType: AugmentedRpc<() => Observable<ChainType>>;
            dryRun: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ApplyExtrinsicResult>>;
            health: AugmentedRpc<() => Observable<Health>>;
            localListenAddresses: AugmentedRpc<() => Observable<Vec<Text>>>;
            localPeerId: AugmentedRpc<() => Observable<Text>>;
            name: AugmentedRpc<() => Observable<Text>>;
            networkState: AugmentedRpc<() => Observable<NetworkState>>;
            nodeRoles: AugmentedRpc<() => Observable<Vec<NodeRole>>>;
            peers: AugmentedRpc<() => Observable<Vec<PeerInfo>>>;
            properties: AugmentedRpc<() => Observable<ChainProperties>>;
            removeReservedPeer: AugmentedRpc<(peerId: Text | string) => Observable<Text>>;
            reservedPeers: AugmentedRpc<() => Observable<Vec<Text>>>;
            resetLogFilter: AugmentedRpc<() => Observable<Null>>;
            syncState: AugmentedRpc<() => Observable<SyncState>>;
            version: AugmentedRpc<() => Observable<Text>>;
        };
        web3: {
            clientVersion: AugmentedRpc<() => Observable<Text>>;
            sha3: AugmentedRpc<(data: Bytes | string | Uint8Array) => Observable<H256>>;
        };
        ibc: {
            queryBalanceWithAddress: AugmentedRpc<(addr: AccountId32, assetId: CurrencyId) => Observable<BTreeMap<SafeRpcWrapper<AssetId>, SafeRpcWrapper<Balance>>>>;
            queryPacketAcknowledgement: AugmentedRpc<(chainId: Vec<u8>, portId: Vec<u8>, seq: u64) => Observable<BTreeMap<SafeRpcWrapper<AssetId>, SafeRpcWrapper<Balance>>>>;
        };
    }
}
