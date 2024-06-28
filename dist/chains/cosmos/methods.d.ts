import { type StdFee } from '@cosmjs/stargate';
import { type TX_MSG_TYPE } from './types';
declare const cosmosTransfer: ({ sourceChannel, sourceAddress, destAddress, amount, assetId, fee, chainId, rpc, memo, timeout, txMsg }: {
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
}) => Promise<string>;
export default cosmosTransfer;
//# sourceMappingURL=methods.d.ts.map