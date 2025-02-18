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
export type Approval = ContractEventLog<{
    owner: string;
    spender: string;
    value: string;
    0: string;
    1: string;
    2: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
}>;
export type SetDecimals = ContractEventLog<{
    precision: string;
    0: string;
}>;
export type SetName = ContractEventLog<{
    name: string;
    0: string;
}>;
export type SetSymbol = ContractEventLog<{
    symbol: string;
    0: string;
}>;
export type Transfer = ContractEventLog<{
    from: string;
    to: string;
    value: string;
    0: string;
    1: string;
    2: string;
}>;
export interface Erc20ABI extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): Erc20ABI;
    clone(): Erc20ABI;
    methods: {
        allowance(owner: string, spender: string): NonPayableTransactionObject<string>;
        approve(spender: string, value: number | string | BN): NonPayableTransactionObject<boolean>;
        balanceOf(account: string): NonPayableTransactionObject<string>;
        burn(account: string, amount: number | string | BN): NonPayableTransactionObject<void>;
        decimals(): NonPayableTransactionObject<string>;
        mint(account: string, amount: number | string | BN): NonPayableTransactionObject<void>;
        name(): NonPayableTransactionObject<string>;
        owner(): NonPayableTransactionObject<string>;
        renounceOwnership(): NonPayableTransactionObject<void>;
        setDecimals(newDecimals: number | string | BN): NonPayableTransactionObject<void>;
        setName(newName: string): NonPayableTransactionObject<void>;
        setSymbol(newSymbol: string): NonPayableTransactionObject<void>;
        symbol(): NonPayableTransactionObject<string>;
        totalSupply(): NonPayableTransactionObject<string>;
        transfer(to: string, value: number | string | BN): NonPayableTransactionObject<boolean>;
        transferFrom(from: string, to: string, value: number | string | BN): NonPayableTransactionObject<boolean>;
        transferOwnership(newOwner: string): NonPayableTransactionObject<void>;
    };
    events: {
        Approval(cb?: Callback<Approval>): EventEmitter;
        Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;
        OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
        OwnershipTransferred(options?: EventOptions, cb?: Callback<OwnershipTransferred>): EventEmitter;
        SetDecimals(cb?: Callback<SetDecimals>): EventEmitter;
        SetDecimals(options?: EventOptions, cb?: Callback<SetDecimals>): EventEmitter;
        SetName(cb?: Callback<SetName>): EventEmitter;
        SetName(options?: EventOptions, cb?: Callback<SetName>): EventEmitter;
        SetSymbol(cb?: Callback<SetSymbol>): EventEmitter;
        SetSymbol(options?: EventOptions, cb?: Callback<SetSymbol>): EventEmitter;
        Transfer(cb?: Callback<Transfer>): EventEmitter;
        Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;
        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
    };
    once(event: 'Approval', cb: Callback<Approval>): void;
    once(event: 'Approval', options: EventOptions, cb: Callback<Approval>): void;
    once(event: 'OwnershipTransferred', cb: Callback<OwnershipTransferred>): void;
    once(event: 'OwnershipTransferred', options: EventOptions, cb: Callback<OwnershipTransferred>): void;
    once(event: 'SetDecimals', cb: Callback<SetDecimals>): void;
    once(event: 'SetDecimals', options: EventOptions, cb: Callback<SetDecimals>): void;
    once(event: 'SetName', cb: Callback<SetName>): void;
    once(event: 'SetName', options: EventOptions, cb: Callback<SetName>): void;
    once(event: 'SetSymbol', cb: Callback<SetSymbol>): void;
    once(event: 'SetSymbol', options: EventOptions, cb: Callback<SetSymbol>): void;
    once(event: 'Transfer', cb: Callback<Transfer>): void;
    once(event: 'Transfer', options: EventOptions, cb: Callback<Transfer>): void;
}
//# sourceMappingURL=Erc20ABI.d.ts.map