import EventEmitter from 'eventemitter3';
import { WalletApiEvents } from './types';
import { TransferType } from '../../config';
export declare const emitter: EventEmitter<WalletApiEvents, any>;
export declare const TIMEOUT_IBC_MAX = 6000000000000;
export declare const memoBuilder: ({ destChannel, destAddress, }: {
    destChannel: number;
    destAddress: string;
}) => string;
/**@description Plus mininutes. Default : 10  */
export declare const getTimeOut: (plusMin?: number) => any;
export declare const findSourceChannelId: (sourceChainId: string, destChainId: string) => string | undefined;
interface Hop {
    chainId: string;
    channelId: string;
}
export declare const buildIbcPath: (fromChainId: string, toChainId: string) => Hop[] | null;
/**@description If it returns undefined, that means it is not supported */
export declare const getSupportedType: (fromChainId: string, toChainId: string) => TransferType | undefined;
export declare const getPolkadotAddressStr: (accountId: string, prefix?: number) => string;
export declare const convertCosmosAddress: (address: string, newPrefix: string) => string;
/**@description When it comes to Cosmos network, coinType should be 114 to use this converter*/
export declare const convertAddressToStr: (address: string, fromChainId: string) => string;
export {};
//# sourceMappingURL=utils.d.ts.map