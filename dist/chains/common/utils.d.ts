import EventEmitter from "eventemitter3";
import { WalletApiEvents } from "./types";
export declare const emitter: EventEmitter<WalletApiEvents, any>;
export declare const TIMEOUT_IBC_MAX = 6000000000000;
export declare const memoBuilder: ({ destChannel, destAddress }: {
    destChannel: number;
    destAddress: string;
}) => string;
/**@description Plus mininutes. Default : 10  */
export declare const getTimeOut: (plusMin?: number) => any;
//# sourceMappingURL=utils.d.ts.map