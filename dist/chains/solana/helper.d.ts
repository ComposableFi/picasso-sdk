import * as anchor from '@coral-xyz/anchor';
import { BorshSchema } from 'borsher';
/**@description get connection of solana */
export declare const getConnection: (endpoint: string) => anchor.web3.Connection;
export declare const getPublicKey: (address: string) => anchor.web3.PublicKey;
export declare const isNativeSolanaAsset: (minimalDenom: string) => boolean;
export declare function hexToBytes(hex: string): number[];
/**@description Tokenmint is derived from hashedDenom */
export declare const getTokenMint: (hashedDenom: number[]) => string;
export declare const getBaseDenomFromTracePath: (denom: string) => string;
export declare const getSolanaAsset: (assetId: string, minimalDenom: string, isNative: boolean) => {
    denom: string;
    baseDenom: string;
    assetId: string;
    hashedDenom: number[];
};
export declare const getLatestBlockhash: (endpoint: string) => Promise<any>;
export declare const getSolanaTracePath: (denom: string, isNative: boolean) => {
    port_id: string;
    channel_id: string;
}[];
export declare const getSolanaGuestChainAccounts: (portId: string, channelId: string, hashedDenom: number[]) => {
    guestChainPDA: anchor.web3.PublicKey;
    triePDA: anchor.web3.PublicKey;
    ibcStoragePDA: anchor.web3.PublicKey;
    mintAuthorityPDA: anchor.web3.PublicKey;
    escrowAccountPDA: anchor.web3.PublicKey;
    feePDA: anchor.web3.PublicKey;
};
export declare function numberTo32ByteBuffer(num: bigint): Uint8Array;
export declare const msgTransferSchema: BorshSchema;
export declare const instructionSchema: BorshSchema;
//# sourceMappingURL=helper.d.ts.map