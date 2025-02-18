import { ApiPromise } from '@polkadot/api';
import { Signer } from '@polkadot/types/types';
import { TransferStatusByAddress } from './types';
export declare const buildStatusInfo: (txHash: any, events: any) => {
    txHash: any;
    sequence: any;
};
export declare function transferXcm({ fromChainId, toChainId, fromAddress, toAddress, amount, assetId, signer, fromApi, toApi, }: {
    fromChainId: string;
    toChainId: string;
    fromAddress: string;
    toAddress: string;
    amount: string;
    assetId: string;
    signer: Signer;
    fromApi: ApiPromise;
    toApi: ApiPromise;
}): Promise<TransferStatusByAddress>;
export declare function transferIbc({ fromChainId, toChainId, fromAddress, toAddress, amount, assetId, signer, sourceChannel, memo, fromApi, toApi, destinationHeight, }: {
    fromChainId: string;
    toChainId: string;
    fromAddress: string;
    toAddress: string;
    amount: string;
    assetId: string;
    signer: Signer;
    sourceChannel: number;
    memo: string;
    fromApi: ApiPromise;
    toApi?: ApiPromise;
    destinationHeight: number;
}): Promise<TransferStatusByAddress>;
export declare const polkadotTransfer: ({ fromChainId, toChainId, fromAddress, toAddress, amount, assetId, signer, memo, sourceChannel, fromApi, toApi, destinationHeight, }: {
    fromChainId: string;
    toChainId: string;
    fromAddress: string;
    toAddress: string;
    amount: string;
    assetId: string;
    signer: any;
    sourceChannel?: number;
    memo: string;
    fromApi: ApiPromise;
    toApi?: ApiPromise;
    destinationHeight: number;
}) => Promise<TransferStatusByAddress>;
