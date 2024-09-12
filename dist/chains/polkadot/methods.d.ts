import { TransferStatusByAddress } from './types';
export declare const buildStatusInfo: (txHash: any, events: any) => {
    txHash: any;
    sequence: any;
};
export declare function transferXcm({ fromChainId, toChainId, fromAddress, toAddress, amount, assetId, signer, }: {
    fromChainId: string;
    toChainId: string;
    fromAddress: string;
    toAddress: string;
    amount: string;
    assetId: string;
    signer: any;
}): Promise<TransferStatusByAddress>;
export declare function transferIbc({ fromChainId, toChainId, fromAddress, toAddress, amount, assetId, signer, memo, }: {
    fromChainId: string;
    toChainId: string;
    fromAddress: string;
    toAddress: string;
    amount: string;
    assetId: string;
    signer: any;
    memo: string;
}): Promise<TransferStatusByAddress>;
export declare const polkadotTransfer: ({ fromChainId, toChainId, fromAddress, toAddress, amount, assetId, signer, memo, }: {
    fromChainId: string;
    toChainId: string;
    fromAddress: string;
    toAddress: string;
    amount: string;
    assetId: string;
    signer: any;
    memo: string;
}) => Promise<TransferStatusByAddress>;
//# sourceMappingURL=methods.d.ts.map