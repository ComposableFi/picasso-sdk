import type { ApiTypes, AugmentedCall, DecoratedCallBase } from '@polkadot/api-base/types';
import '@polkadot/api-base/types/calls';
import type { Bytes, Null, Option, u32, Vec } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { CheckInherentsResult, InherentData } from '@polkadot/types/interfaces/blockbuilder';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { CollationInfo } from '@polkadot/types/interfaces/cumulus';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { OpaqueMetadata } from '@polkadot/types/interfaces/metadata';
import type { FeeDetails, RuntimeDispatchInfo } from '@polkadot/types/interfaces/payment';
import type { AccountId, Block, Header, Index, KeyTypeId, SlotDuration } from '@polkadot/types/interfaces/runtime';
import type { RuntimeVersion } from '@polkadot/types/interfaces/state';
import type { ApplyExtrinsicResult } from '@polkadot/types/interfaces/system';
import type { TransactionSource, TransactionValidity } from '@polkadot/types/interfaces/txqueue';
import type { IExtrinsic, Observable } from '@polkadot/types/types';
export type __AugmentedCall<ApiType extends ApiTypes> = AugmentedCall<ApiType>;
export type __DecoratedCallBase<ApiType extends ApiTypes> = DecoratedCallBase<ApiType>;
declare module '@polkadot/api-base/types/calls' {
    interface AugmentedCalls<ApiType extends ApiTypes> {
        accountNonceApi: {
            accountNonce: AugmentedCall<ApiType, (accountId: AccountId | string | Uint8Array) => Observable<Index>>;
            [key: string]: DecoratedCallBase<ApiType>;
        };
        auraApi: {
            authorities: AugmentedCall<ApiType, () => Observable<Vec<AuthorityId>>>;
            slotDuration: AugmentedCall<ApiType, () => Observable<SlotDuration>>;
            [key: string]: DecoratedCallBase<ApiType>;
        };
        blockBuilder: {
            applyExtrinsic: AugmentedCall<ApiType, (extrinsic: Extrinsic | IExtrinsic | string | Uint8Array) => Observable<ApplyExtrinsicResult>>;
            checkInherents: AugmentedCall<ApiType, (block: Block | {
                header?: any;
                extrinsics?: any;
            } | string | Uint8Array, data: InherentData | {
                data?: any;
            } | string | Uint8Array) => Observable<CheckInherentsResult>>;
            finalizeBlock: AugmentedCall<ApiType, () => Observable<Header>>;
            inherentExtrinsics: AugmentedCall<ApiType, (inherent: InherentData | {
                data?: any;
            } | string | Uint8Array) => Observable<Vec<Extrinsic>>>;
            [key: string]: DecoratedCallBase<ApiType>;
        };
        collectCollationInfo: {
            collectCollationInfo: AugmentedCall<ApiType, (header: Header | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
            } | string | Uint8Array) => Observable<CollationInfo>>;
            [key: string]: DecoratedCallBase<ApiType>;
        };
        core: {
            executeBlock: AugmentedCall<ApiType, (block: Block | {
                header?: any;
                extrinsics?: any;
            } | string | Uint8Array) => Observable<Null>>;
            initializeBlock: AugmentedCall<ApiType, (header: Header | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
            } | string | Uint8Array) => Observable<Null>>;
            version: AugmentedCall<ApiType, () => Observable<RuntimeVersion>>;
            [key: string]: DecoratedCallBase<ApiType>;
        };
        metadata: {
            metadata: AugmentedCall<ApiType, () => Observable<OpaqueMetadata>>;
            [key: string]: DecoratedCallBase<ApiType>;
        };
        offchainWorkerApi: {
            offchainWorker: AugmentedCall<ApiType, (header: Header | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
            } | string | Uint8Array) => Observable<Null>>;
            [key: string]: DecoratedCallBase<ApiType>;
        };
        sessionKeys: {
            decodeSessionKeys: AugmentedCall<ApiType, (encoded: Bytes | string | Uint8Array) => Observable<Option<Vec<ITuple<[Bytes, KeyTypeId]>>>>>;
            generateSessionKeys: AugmentedCall<ApiType, (seed: Option<Bytes> | null | Uint8Array | Bytes | string) => Observable<Bytes>>;
            [key: string]: DecoratedCallBase<ApiType>;
        };
        taggedTransactionQueue: {
            validateTransaction: AugmentedCall<ApiType, (source: TransactionSource | 'InBlock' | 'Local' | 'External' | number | Uint8Array, tx: Extrinsic | IExtrinsic | string | Uint8Array, blockHash: BlockHash | string | Uint8Array) => Observable<TransactionValidity>>;
            [key: string]: DecoratedCallBase<ApiType>;
        };
        transactionPaymentApi: {
            queryFeeDetails: AugmentedCall<ApiType, (uxt: Extrinsic | IExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<FeeDetails>>;
            queryInfo: AugmentedCall<ApiType, (uxt: Extrinsic | IExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<RuntimeDispatchInfo>>;
            [key: string]: DecoratedCallBase<ApiType>;
        };
    }
}
//# sourceMappingURL=augment-api-runtime.d.ts.map