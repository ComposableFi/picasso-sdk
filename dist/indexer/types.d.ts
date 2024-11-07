interface IndexerResult {
    totalCount: number;
    countPerPage: number;
}
export interface IbcEventsResponses extends IndexerResult {
    ibcEvents: IbcEventsResponse[];
    totalCount: number;
    countPerPage: number;
}
export type TxHash = string;
export type TransferState = 'TransferSuccess' | 'TransferFailed' | 'TransferTimeout' | 'TransferPending' | 'TransferMaintenance' | 'TransferSuccessButError' | 'send_packet';
export declare const TransferSuccess: string[];
export declare const TransferFail: string[];
export declare const TransferPending: string[];
export type Path = {
    origin: string;
    destination: string;
};
export interface IbcEventsResponse {
    id: number;
    sequence: `${number}`;
    type: 'ibc' | 'xcm';
    status: TransferState;
    realStatus: string;
    sourceChannel: `channel-${number}`;
    destinationChannel: `channel-${number}`;
    fromChainId: string;
    fromAssetId: string;
    fromBlockHash: string;
    fromFee: `${number}`;
    fromFeeAssetId: string;
    fromAddress: string;
    fromTimestamp: `${bigint}`;
    toChainId: string;
    toBlockHash: string;
    toFee: `${number}` | null;
    toFeeAssetId: `${number}` | null;
    toAddress: string;
    toTimestamp: `${bigint}`;
    nextSequence: `${number}` | null;
    data: {
        denom: string;
        memo: string;
        amount: `${bigint}`;
        sender: string;
        txHash: TxHash;
        receiver: string;
        errorMessage: null | string;
    };
    amount: {
        assetId: string;
        assetName?: string;
        decimals?: number;
        amount: string;
    };
    createdAt: string;
}
export interface MemoStructure {
    forward: {
        substrate?: boolean;
        receiver: string;
        channel: `channel-${bigint}`;
        timeout: number;
        retries: number;
        port: string;
        next?: string;
    };
}
export {};
//# sourceMappingURL=types.d.ts.map