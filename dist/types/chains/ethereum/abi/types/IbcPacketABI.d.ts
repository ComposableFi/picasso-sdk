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
export type AcknowledgePacket = ContractEventLog<{
    packet: [
        string,
        string,
        string,
        string,
        string,
        string,
        [
            string,
            string
        ],
        string
    ];
    acknowledgement: string;
    0: [string, string, string, string, string, string, [string, string], string];
    1: string;
}>;
export type RecvPacket = ContractEventLog<{
    sequence: string;
    source_port: string;
    source_channel: string;
    destination_port: string;
    destination_channel: string;
    data: string;
    timeout_height: [string, string];
    timeout_timestamp: string;
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: [string, string];
    7: string;
}>;
export type SendPacket = ContractEventLog<{
    sequence: string;
    sourcePort: string;
    sourceChannel: string;
    sourcePortRaw: string;
    sourceChannelRaw: string;
    timeoutHeight: [string, string];
    timeoutTimestamp: string;
    data: string;
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: [string, string];
    6: string;
    7: string;
}>;
export type TimeoutPacket = ContractEventLog<{
    packet: [
        string,
        string,
        string,
        string,
        string,
        string,
        [
            string,
            string
        ],
        string
    ];
    0: [string, string, string, string, string, string, [string, string], string];
}>;
export type WriteAcknowledgement = ContractEventLog<{
    destinationPortId: string;
    destinationChannel: string;
    sequence: string;
    destinationPortIdRaw: string;
    destinationChannelRaw: string;
    acknowledgement: string;
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
}>;
export interface IbcPacketABI extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): IbcPacketABI;
    clone(): IbcPacketABI;
    methods: {
        acknowledgePacket(msg_: [
            [
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
            ],
            string | number[],
            string | number[],
            [
                number | string | BN,
                number | string | BN
            ]
        ]): NonPayableTransactionObject<void>;
        recvPacket(msg_: [
            [
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
            ],
            string | number[],
            [
                number | string | BN,
                number | string | BN
            ]
        ]): NonPayableTransactionObject<void>;
        sendPacket(sourcePort: string, sourceChannel: string, timeoutHeight: [number | string | BN, number | string | BN], timeoutTimestamp: number | string | BN, data: string | number[]): NonPayableTransactionObject<string>;
        writeAcknowledgement(destinationPortId: string, destinationChannel: string, sequence: number | string | BN, acknowledgement: string | number[]): NonPayableTransactionObject<void>;
    };
    events: {
        AcknowledgePacket(cb?: Callback<AcknowledgePacket>): EventEmitter;
        AcknowledgePacket(options?: EventOptions, cb?: Callback<AcknowledgePacket>): EventEmitter;
        RecvPacket(cb?: Callback<RecvPacket>): EventEmitter;
        RecvPacket(options?: EventOptions, cb?: Callback<RecvPacket>): EventEmitter;
        SendPacket(cb?: Callback<SendPacket>): EventEmitter;
        SendPacket(options?: EventOptions, cb?: Callback<SendPacket>): EventEmitter;
        TimeoutPacket(cb?: Callback<TimeoutPacket>): EventEmitter;
        TimeoutPacket(options?: EventOptions, cb?: Callback<TimeoutPacket>): EventEmitter;
        WriteAcknowledgement(cb?: Callback<WriteAcknowledgement>): EventEmitter;
        WriteAcknowledgement(options?: EventOptions, cb?: Callback<WriteAcknowledgement>): EventEmitter;
        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
    };
    once(event: 'AcknowledgePacket', cb: Callback<AcknowledgePacket>): void;
    once(event: 'AcknowledgePacket', options: EventOptions, cb: Callback<AcknowledgePacket>): void;
    once(event: 'RecvPacket', cb: Callback<RecvPacket>): void;
    once(event: 'RecvPacket', options: EventOptions, cb: Callback<RecvPacket>): void;
    once(event: 'SendPacket', cb: Callback<SendPacket>): void;
    once(event: 'SendPacket', options: EventOptions, cb: Callback<SendPacket>): void;
    once(event: 'TimeoutPacket', cb: Callback<TimeoutPacket>): void;
    once(event: 'TimeoutPacket', options: EventOptions, cb: Callback<TimeoutPacket>): void;
    once(event: 'WriteAcknowledgement', cb: Callback<WriteAcknowledgement>): void;
    once(event: 'WriteAcknowledgement', options: EventOptions, cb: Callback<WriteAcknowledgement>): void;
}
//# sourceMappingURL=IbcPacketABI.d.ts.map