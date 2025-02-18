import type BN from 'big.js';
import type { EventEmitter } from 'events';
import type { EventLog } from 'web3-core';
import type { ContractOptions } from 'web3-eth-contract';
import type { BaseContract, BlockType, Callback, ContractEventLog, NonPayableTransactionObject } from './types';
export interface EventOptions {
    filter?: object;
    fromBlock?: BlockType;
    topics?: string[];
}
export type RoleTransferred = ContractEventLog<{
    role: string;
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
    2: string;
}>;
export interface Ics20BankABI extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): Ics20BankABI;
    clone(): Ics20BankABI;
    methods: {
        OWNER_ROLE(): NonPayableTransactionObject<string>;
        TRANSFER_MODULE_ROLE(): NonPayableTransactionObject<string>;
        balanceOf(account: string, id: string): NonPayableTransactionObject<string>;
        burn(account: string, id: string, amount: number | string | BN): NonPayableTransactionObject<void>;
        denomEqualsNativeToken(id: string | number[]): NonPayableTransactionObject<boolean>;
        getNativeTokenDenom(): NonPayableTransactionObject<string>;
        init(nativeTokenDenom: string): NonPayableTransactionObject<void>;
        mint(account: string, id: string, amount: number | string | BN): NonPayableTransactionObject<void>;
        queryTokenContractFromDenom(id: string): NonPayableTransactionObject<string>;
        renounceRole(id: string | number[]): NonPayableTransactionObject<void>;
        role(id: string | number[]): NonPayableTransactionObject<string>;
        tokenSetDecimals(token: string, precision: number | string | BN): NonPayableTransactionObject<void>;
        tokenSetName(token: string, name: string): NonPayableTransactionObject<void>;
        tokenSetSymbol(token: string, symbol: string): NonPayableTransactionObject<void>;
        tokenTransferOwnership(token: string, account: string): NonPayableTransactionObject<void>;
        transfer(to: string, id: string, amount: number | string | BN): NonPayableTransactionObject<void>;
        transferFrom(from: string, to: string, id: string, amount: number | string | BN): NonPayableTransactionObject<void>;
        transferRole(id: string | number[], newOwner: string): NonPayableTransactionObject<void>;
        unwhitelistToken(token: string): NonPayableTransactionObject<void>;
        whitelistToken(token: string, denom: string): NonPayableTransactionObject<void>;
    };
    events: {
        RoleTransferred(cb?: Callback<RoleTransferred>): EventEmitter;
        RoleTransferred(options?: EventOptions, cb?: Callback<RoleTransferred>): EventEmitter;
        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
    };
    once(event: 'RoleTransferred', cb: Callback<RoleTransferred>): void;
    once(event: 'RoleTransferred', options: EventOptions, cb: Callback<RoleTransferred>): void;
}
//# sourceMappingURL=Ics20BankABI.d.ts.map