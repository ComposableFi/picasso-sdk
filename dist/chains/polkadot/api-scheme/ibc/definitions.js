"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rpc: {
        queryBalanceWithAddress: {
            description: 'Get the balance with address',
            params: [
                {
                    name: 'addr',
                    type: 'AccountId32'
                },
                {
                    name: 'asset_id',
                    type: 'CurrencyId'
                }
            ],
            type: 'BTreeMap<SafeRpcWrapper<AssetId>, SafeRpcWrapper<Balance>>'
        },
        clientUpdateTimeAndHeight: {
            description: '',
            params: []
        },
        generateConnectionHandshakeProof: {
            description: '',
            params: []
        },
        queryChannel: {
            description: '',
            params: []
        },
        queryChannelClient: {
            description: '',
            params: []
        },
        queryChannels: {
            description: '',
            params: []
        },
        queryClientConsensusState: {
            description: '',
            params: []
        },
        queryClientState: {
            description: '',
            params: []
        },
        queryClients: {
            description: '',
            params: []
        },
        queryConnection: {
            description: '',
            params: []
        },
        queryConnectionChannels: {
            description: '',
            params: []
        },
        queryConnectionUsingClient: {
            description: '',
            params: []
        },
        queryConnections: {
            description: '',
            params: []
        },
        queryDenomTrace: {
            description: '',
            params: []
        },
        queryDenomTraces: {
            description: '',
            params: []
        },
        queryEvents: {
            description: '',
            params: []
        },
        queryLatestHeight: {
            description: '',
            params: []
        },
        queryNewlyCreatedClient: {
            description: '',
            params: []
        },
        queryNextSeqRecv: {
            description: '',
            params: []
        },
        queryPacketAcknowledgement: {
            description: '',
            params: [
                {
                    name: 'channelId',
                    type: 'Vec<u8>'
                },
                {
                    name: 'portId',
                    type: 'Vec<u8>'
                },
                {
                    name: 'seq',
                    type: 'u64'
                }
            ]
        },
        queryPacketAcknowledgements: {
            description: '',
            params: []
        },
        queryPacketCommitment: {
            description: '',
            params: []
        },
        queryPacketCommitments: {
            description: '',
            params: []
        },
        queryPacketReceipt: {
            description: '',
            params: []
        },
        queryProof: {
            description: '',
            params: []
        },
        queryRecvPackets: {
            description: '',
            params: []
        },
        querySendPackets: {
            description: '',
            params: []
        },
        queryUnreceivedAcknowledgement: {
            description: '',
            params: []
        },
        queryUnreceivedPackets: {
            description: '',
            params: []
        },
        queryUpgradedClient: {
            description: '',
            params: []
        },
        queryUpgradedConnectionState: {
            description: '',
            params: []
        }
    },
    types: {}
};
