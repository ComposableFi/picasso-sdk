export { ApiPromise, WsProvider } from '@polkadot/api';
export { type Injected, type InjectedAccount, type InjectedWindowProvider, } from '@polkadot/extension-inject/types';
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
export declare const ChainHops: readonly ["CosmosIbc", "SubstrateIbc", "SubstrateXcm"];
export type ChainHop = (typeof ChainHops)[number];
export interface RouteDetail {
    chainId?: string;
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
    fromChainId: string;
    toChainId: string;
    paraChain?: string | '';
    index?: number;
    paths: RouteDetail[];
}
