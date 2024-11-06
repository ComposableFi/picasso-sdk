import { generateTransferMsg } from './helper';
import { type TX_MSG_TYPE } from './types';
import { Keplr, OfflineAminoSigner } from '@keplr-wallet/types';
export declare const cosmosTransfer: ({ sourceChannel, sourceAddress, destAddress, amount, assetId, fee, chainId, rpc, memo, timeout, txMsg, keplr, gasPrice, gas, feeAssetId, }: {
    sourceChannel: number;
    sourceAddress: string;
    destAddress: string;
    amount: string;
    assetId: string;
    fee: string;
    chainId: string;
    rpc: string;
    memo: string;
    timeout: number;
    txMsg?: TX_MSG_TYPE;
    keplr: Keplr;
    gasPrice: string;
    gas: string;
    feeAssetId: string;
}) => Promise<string>;
export declare const secretTransfer: ({ amount, secretAssetId, keplr, signer, sourceAddress, destAddress, sourceChannel, codeHash, }: {
    amount: string;
    secretAssetId: string;
    keplr: Keplr;
    signer: OfflineAminoSigner;
    sourceAddress: string;
    destAddress: string;
    sourceChannel: number;
    codeHash: string;
}) => Promise<string>;
export declare const injectiveTransfer: ({ generatedMsg, keplr, }: {
    generatedMsg: ReturnType<typeof generateTransferMsg>;
    keplr: Keplr;
}) => Promise<import("@injectivelabs/sdk-ts").TxResponse>;
//# sourceMappingURL=methods.d.ts.map