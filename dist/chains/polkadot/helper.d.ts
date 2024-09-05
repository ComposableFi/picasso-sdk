import { ApiPromise } from '@polkadot/api';
import { type AddressOrPair, type SubmittableExtrinsic } from '@polkadot/api-base/types';
import { ApiOptions } from '@polkadot/api/types';
import { type AnyTuple, type IEvent, type ISubmittableResult } from '@polkadot/types/types';
import Big from 'big.js';
export type OnFailedTxHandler = (result: ISubmittableResult, errorMessage?: string) => void;
export declare function getSubAccount(api: ApiPromise, poolId: string): string;
export declare function getAssetBalance(api: ApiPromise, assetId: string, poolId: string): Promise<string>;
export declare function getPaymentAsset({ endpoint, accountId, }: {
    endpoint: string;
    accountId: string;
}): Promise<[string, string] | null>;
export declare function setPaymentAsset({ endpoint, accountId, assetId, signer, }: {
    endpoint: string;
    accountId: string;
    assetId: string;
    signer: any;
}): Promise<ISubmittableResult>;
export declare function getSignAndSendParams(accountId: string, signer: any): Promise<{
    account: AddressOrPair;
    signerOption: {
        signer: any;
    };
}>;
export declare function signAndSend<T extends AnyTuple>({ accountId, extrinsics, filter, onFailedTx, endpoint, signer, }: {
    accountId: string;
    extrinsics: SubmittableExtrinsic<'promise'>[];
    filter: (event: IEvent<AnyTuple>) => event is IEvent<T>;
    onFailedTx: OnFailedTxHandler | undefined;
    endpoint: string;
    signer: any;
}): Promise<ISubmittableResult>;
export declare function getAvailableCoin(endpoint: string, accountId: string | null): Promise<Big>;
export declare function getApi(endpoint: string, option?: ApiOptions): Promise<ApiPromise>;
export declare const getMultiApi: (endpoints: string[]) => Promise<ApiPromise[]>;
export declare const getDefaultTxHeight: (height: number, extra?: number) => number;
export declare const makeIbcToPolkadot: ({ api, toAddress, sourceChannel, assetId, amount, defaultHeight, memo, }: {
    api: ApiPromise;
    toAddress: string;
    sourceChannel: number;
    assetId: string;
    amount: string;
    defaultHeight: number;
    memo: string;
}) => SubmittableExtrinsic<"promise", ISubmittableResult>;
//# sourceMappingURL=helper.d.ts.map