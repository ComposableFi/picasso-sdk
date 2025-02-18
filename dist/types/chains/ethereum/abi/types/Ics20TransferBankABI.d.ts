import type BN from 'big.js';
import type { EventEmitter } from 'events';
import type { EventLog } from 'web3-core';
import type { ContractOptions } from 'web3-eth-contract';
import type { BaseContract, BlockType, Callback, NonPayableTransactionObject, PayableTransactionObject } from './types';
export interface EventOptions {
    filter?: object;
    fromBlock?: BlockType;
    topics?: string[];
}
export interface Ics20TransferBankABI extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): Ics20TransferBankABI;
    clone(): Ics20TransferBankABI;
    methods: {
        ICS20_VERSION(): NonPayableTransactionObject<string>;
        balanceOf(account: string, id: string): NonPayableTransactionObject<string>;
        getMinTokenSendAmount(denom: string): NonPayableTransactionObject<string>;
        ibcAddress(): NonPayableTransactionObject<string>;
        init(ibcHandler_: string, bank_: string, minTimeoutTimestamp_: number | string | BN, feePercentage_: number | string | BN, feeConnector_: string): NonPayableTransactionObject<void>;
        onAcknowledgementPacket(packet: [
            number | string | BN,
            string,
            string,
            string,
            string,
            string | number[],
            [
                number | string | BN,
                number | string | BN
            ],
            number | string | BN
        ], acknowledgement: string | number[], arg2: string): NonPayableTransactionObject<void>;
        onChanCloseConfirm(portId: string, channelId: string): NonPayableTransactionObject<void>;
        onChanCloseInit(portId: string, channelId: string): NonPayableTransactionObject<void>;
        onChanOpenAck(portId: string, channelId: string, counterpartyVersion: string): NonPayableTransactionObject<void>;
        onChanOpenConfirm(portId: string, channelId: string): NonPayableTransactionObject<void>;
        onChanOpenInit(order: number | string | BN, connectionHops: string[], portId: string, channelId: string, counterparty: [string, string], version: string): NonPayableTransactionObject<string>;
        onChanOpenTry(order: number | string | BN, connectionHops: string[], portId: string, channelId: string, counterparty: [string, string], version: string, counterpartyVersion: string): NonPayableTransactionObject<string>;
        onRecvPacket(packet: [
            number | string | BN,
            string,
            string,
            string,
            string,
            string | number[],
            [
                number | string | BN,
                number | string | BN
            ],
            number | string | BN
        ], arg1: string): NonPayableTransactionObject<string>;
        onTimeoutPacket(packet: [
            number | string | BN,
            string,
            string,
            string,
            string,
            string | number[],
            [
                number | string | BN,
                number | string | BN
            ],
            number | string | BN
        ], arg1: string): NonPayableTransactionObject<void>;
        sendTransfer(denom: string, amount: number | string | BN, receiver: string, sourcePort: string, sourceChannel: string, timeoutHeight: number | string | BN, timeoutTimestamp: number | string | BN, memo: string): NonPayableTransactionObject<void>;
        sendTransferNativeToken(receiver: string, sourcePort: string, sourceChannel: string, timeoutHeight: number | string | BN, timeoutTimestamp: number | string | BN, memo: string): PayableTransactionObject<void>;
        setFeeCollector(feeCollector: string): NonPayableTransactionObject<void>;
        setFeePercentage(percentage: number | string | BN): NonPayableTransactionObject<void>;
        setMinTimeoutTimestamp(minTimeoutTimestamp: number | string | BN): NonPayableTransactionObject<void>;
        setMinTokenSendAmount(denom: string, minTokenAmount: number | string | BN): NonPayableTransactionObject<void>;
    };
    events: {
        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
    };
}
//# sourceMappingURL=Ics20TransferBankABI.d.ts.map