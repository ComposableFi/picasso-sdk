import Web3 from 'web3';
import { type TransactionConfig } from 'web3-core';
import { type Contract } from 'web3-eth-contract';
import { type AbiItem } from 'web3-utils';
import { type Erc20ABI, type Ics20BankABI, type Ics20TransferBankABI } from './abi/types';
export declare const getWeb3: (endpoint: string) => Web3;
export declare const getContract: <T extends Contract>(web3: Web3, abi: AbiItem[] | AbiItem, contractAddress: string) => T;
export declare const getBankTransferContract: (web3: Web3) => Ics20TransferBankABI;
export declare const getBankContract: (web3: Web3) => Ics20BankABI;
export declare const getBlock: (web3: Web3, addedAmount?: number) => Promise<number | "0">;
export declare const getGasPrice: (web3: Web3) => Promise<any>;
export declare const getEthGasAmount: (web3: Web3, txConfig: Pick<TransactionConfig, "from" | "to" | "value" | "data">) => Promise<number | "0">;
export declare const getTransactionReceipt: (web3: Web3, txHash: string) => Promise<"" | import("web3-eth").TransactionReceipt>;
export declare const getEthSimulate: (web3: Web3, data: string, txObject: any) => void;
export declare const isValidAddress: (web3: Web3, account: string) => boolean;
export declare const getErc20Contract: (web3: Web3, erc20TokenAddress: string) => Erc20ABI;
/**@description get approved erc20 amount, returns wei */
export declare const getApprovedErc20: (web3: Web3, account: string, erc20TokenAddress: string, spenderContract?: string) => Promise<string>;
export declare const simulate: (web3: Web3, data: string, txObject: any) => void;
//# sourceMappingURL=helper.d.ts.map