import { SigningStargateClient } from '@cosmjs/stargate';
import { TX_MSG_TYPE } from './types';
export declare const generateTransferMsg: (txMsg: TX_MSG_TYPE, channel: number, sourceAddress: string, destAddress: string, amount: string, assetId: string, memo: string, timeout?: number) => {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer";
    value: {
        sourcePort: string;
        sourceChannel: string;
        token: {
            denom: string;
            amount: string;
        };
        sender: string;
        receiver: string;
        memo: string;
        timeoutTimestamp: number;
    };
};
/** description the amount of seconds for timeout */
export declare const getCosmosTimeoutTimestamp: (seconds: number) => number;
/** @description chainId is from cosmos chain registry */
export declare const getSigner: (chainId: string) => any;
export declare const keplr: any;
export declare const getClient: (chainId: string, rpc: string) => Promise<SigningStargateClient>;
//# sourceMappingURL=helper.d.ts.map