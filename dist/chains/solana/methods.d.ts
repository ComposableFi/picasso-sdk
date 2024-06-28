export declare const solanaTransfer: ({ quantity, accountId, destinationAddress, configAssetId, sourceChannelId, configDenom, endpoint, timeout, memo }: {
    quantity: string;
    accountId: string;
    destinationAddress: string;
    configAssetId: string;
    sourceChannelId: number;
    configDenom: string;
    endpoint: string;
    timeout: number;
    memo: string;
}) => Promise<{
    signature: string;
    status: "finalized" | "confirmed";
} | {
    signature: string;
    status: "processed";
}>;
//# sourceMappingURL=methods.d.ts.map