import type Web3 from 'web3';
/**@description etheruem transfer */
export declare const ethereumTransfer: ({ web3, amount, assetId, originAddress, destinationAddress, channel, minimalDenom, memo, }: {
    web3: Web3;
    amount: string;
    assetId: string;
    originAddress: string;
    destinationAddress: string;
    channel: number;
    minimalDenom: string;
    memo?: string;
}) => Promise<import("web3-core").TransactionReceipt>;
/**@description Ask approval */
export declare const approveErc20: ({ web3, account, amount, erc20TokenAddress, spenderContract, }: {
    web3: Web3;
    account: string;
    amount: string;
    erc20TokenAddress: string;
    spenderContract: string;
}) => Promise<import("web3-core").TransactionReceipt>;
//# sourceMappingURL=methods.d.ts.map