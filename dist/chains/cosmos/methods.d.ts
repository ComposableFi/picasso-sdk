import { type StdFee } from '@cosmjs/stargate';
import { type TX_MSG_TYPE } from './types';
import { Keplr } from '@keplr-wallet/types';
export declare const cosmosTransfer: ({ sourceChannel, sourceAddress, destAddress, amount, assetId, fee, chainId, rpc, memo, timeout, txMsg, keplr, supportLedger, }: {
    sourceChannel: number;
    sourceAddress: string;
    destAddress: string;
    amount: string;
    assetId: string;
    fee: "auto" | StdFee;
    chainId: string;
    rpc: string;
    memo: string;
    timeout?: number;
    txMsg?: TX_MSG_TYPE;
    keplr: Keplr;
    supportLedger: boolean;
}) => Promise<string>;
//# sourceMappingURL=methods.d.ts.map