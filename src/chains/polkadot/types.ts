export interface TransferStatusByAddress {
  destAddress: string;
  sequence: string;
  txHash: string;
  // originChannelId: string;
  // destChannelId: string;
  status: TransferTxStatus;
  currentHopIndex: number;
  timestamp?: string;
  destChannel?: string; //cosmos
  message?: string;
  latestBlockNumber?: number;
  errorMessage?: string;
}
export type TransferTxStatus =
  | 'init'
  | 'pending'
  | 'swapping'
  | 'timeout'
  | 'success'
  | 'error';
