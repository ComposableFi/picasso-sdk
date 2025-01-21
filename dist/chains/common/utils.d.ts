import EventEmitter from 'eventemitter3';
import { WalletApiEvents } from './types';
import { TransferType } from '../../config';
export declare const emitter: EventEmitter<WalletApiEvents, any>;
export declare const memoBuilder: ({ destChannel, destAddress, }: {
    destChannel: number;
    destAddress: string;
}) => string;
export declare const getTimeOut: (plusMin?: number) => any;
export declare const findSourceChannelId: (sourceChainId: string, destChainId: string) => string | undefined;
interface Hop {
    chainId: string;
    channelId: number;
    receiver?: string;
}
export declare const getForbiddenChains: (fromChainId: string, toChainId: string) => boolean;
export declare const buildIbcPath: (fromChainId: string, toChainId: string) => Hop[];
export declare const getAllowedTokensForPath: (originChainId: string, destinationChainId: string) => any[];
export declare const channelList: import("../../config").NetworkInfo[];
export declare const getChainIdsByChannels: (channels: number[]) => string[];
export declare const getSupportedType: (fromChainId: string, toChainId: string) => TransferType | undefined;
export declare const getPolkadotAddressStr: (accountId: string, prefix?: number) => string;
export declare const convertCosmosAddress: (address: string, newPrefix: string) => string;
export declare const convertAddressToStr: (address: string, fromChainId: string) => string;
export declare const createForwardPathRecursive: (ibcPath: Hop[], index?: number, timeout?: number) => any;
export declare const getChannelIdsFromMemo: (memo: string) => {
    channels: number[];
    finalReceiver: string;
};
export declare const getSourceChannel: (fromChainId: string, toChainId: string) => string;
export declare const getXcmInfo: (fromChainId: string, toChainId: string) => {
    type: "XCM";
    xcmType: string;
    version: string;
    tokens: string[];
};
export declare const getExplorerUrl: (chainId: string, infoType: "tx" | "address", info: string) => string;
export declare const getPolkadotAddressNetwork: (accountId: string) => string;
export declare const getCosmosAddressNetwork: (accountId: string) => string;
export declare const getSolanaAddressNetwork: (accountId: string) => string;
export declare const getEthereumAddressNetwork: (accountId: string) => string;
export declare const getNetworkFromAddress: (address: string) => string;
export {};
