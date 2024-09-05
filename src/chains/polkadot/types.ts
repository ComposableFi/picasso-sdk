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

export const ChainHops = ['CosmosIbc', 'SubstrateIbc', 'SubstrateXcm'] as const;
export type ChainHop = (typeof ChainHops)[number];

export interface RouteDetail {
  chainId?: number;
  order?: number;
  channelId?: number;
  timestamp?: number;
  height?: number;
  retries?: number;
  timeout?: number;
  chainHop: ChainHop;
  paraId?: string | null;
  address?: string;
}

export interface MultihopRoutePath {
  from: string;
  to: string;
  // paraChain?: NetworkType | '';
  paraChain?: string | '';
  index?: number;
  paths: RouteDetail[];
}
