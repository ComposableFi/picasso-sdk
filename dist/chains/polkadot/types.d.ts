export interface TransferStatusByAddress {
    destAddress: string;
    sequence: string;
    txHash: string;
    status: TransferTxStatus;
    currentHopIndex: number;
    timestamp?: string;
    destChannel?: string;
    message?: string;
    latestBlockNumber?: number;
    errorMessage?: string;
}
export type TransferTxStatus = 'init' | 'pending' | 'swapping' | 'timeout' | 'success' | 'error';
//# sourceMappingURL=types.d.ts.map