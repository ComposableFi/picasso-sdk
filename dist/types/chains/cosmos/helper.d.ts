import { SigningStargateClient } from '@cosmjs/stargate';
import { TX_MSG_TYPE } from './types';
import { OfflineAminoSigner, type Keplr } from '@keplr-wallet/types';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { QueryClient, setupIbcExtension } from '@cosmjs/stargate';
import { SecretNetworkClient } from 'secretjs';
import { CosmosTxV1Beta1Tx } from '@injectivelabs/sdk-ts';
export { SigningStargateClient, QueryClient, setupIbcExtension, Tendermint34Client, };
export declare const generateTransferMsg: (txMsg: TX_MSG_TYPE, channel: number, sourceAddress: string, destAddress: string, amount: string, assetId: string, memo: string, timeout: number) => {
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
export declare const getCosmosTimeoutTimestamp: (seconds: number) => number;
export declare const getSigner: (chainId: string, keplr: Keplr, supportLedger?: boolean) => OfflineAminoSigner;
export declare const getCosmosClient: ({ chainId, rpc, keplr, feeAssetId, gasPrice, supportLedger, }: {
    chainId: string;
    rpc: string;
    keplr: Keplr;
    feeAssetId: string;
    gasPrice: string;
    supportLedger: boolean;
}) => Promise<SigningStargateClient>;
export declare const getCosmosBlockHeight: ({ client, extra, }: {
    client: SigningStargateClient;
    extra: number;
}) => Promise<number>;
export declare const getSecretClient: ({ keplr, signer, address, }: {
    keplr: Keplr;
    signer: OfflineAminoSigner;
    address: string;
}) => Promise<SecretNetworkClient>;
export declare const broadcastTx: ({ chainId, txRaw, keplr, }: {
    chainId: string;
    txRaw: CosmosTxV1Beta1Tx.TxRaw;
    keplr: Keplr;
}) => Promise<string>;
