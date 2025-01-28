"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chains_1 = require("../chains");
var globals_1 = require("@jest/globals");
(0, globals_1.describe)('buildIbcPath', function () {
    (0, globals_1.it)('should return the correct path for osmosis-1 to ethereum', function () {
        var result = (0, chains_1.buildIbcPath)('osmosis-1', 'ethereum');
        (0, globals_1.expect)(result).toEqual([
            { chainId: 'osmosis-1', channelId: 1279 },
            { chainId: 'centauri-1', channelId: 52 },
        ]);
    });
    (0, globals_1.it)('should return the correct path for agoric-3 to centauri-1', function () {
        var result = (0, chains_1.buildIbcPath)('agoric-3', 'centauri-1');
        (0, globals_1.expect)(result).toEqual([{ chainId: 'agoric-3', channelId: 55 }]);
    });
    (0, globals_1.it)('should return the null for solana to 2019', function () {
        var result = (0, chains_1.buildIbcPath)('solana', '2019');
        (0, globals_1.expect)(result).toEqual(null);
    });
    (0, globals_1.it)('should return the correct path for solana to osmosis-1', function () {
        var result = (0, chains_1.buildIbcPath)('solana', 'osmosis-1');
        (0, globals_1.expect)(result).toEqual([
            { chainId: 'solana', channelId: 1 },
            { chainId: 'centauri-1', channelId: 3 },
        ]);
    });
});
(0, globals_1.describe)('getAllowedTokensForPath', function () {
    (0, globals_1.it)('should return the correct path for polkadot to ethereum', function () {
        (0, globals_1.expect)((0, chains_1.getAllowedTokensForPath)('polkadot', 'osmosis-1')).toEqual(['DOT']);
    });
});
(0, globals_1.describe)('getSupportedType', function () {
    (0, globals_1.it)('should return pfm for solana and ethereum', function () {
        (0, globals_1.expect)((0, chains_1.getSupportedType)('solana', 'ethereum')).toBe('pfm');
    });
    (0, globals_1.it)('should return channel for solana and osmosis-1', function () {
        (0, globals_1.expect)((0, chains_1.getSupportedType)('solana', 'centauri-1')).toBe('channel');
    });
    (0, globals_1.it)('should return multihop for osmosis-1 and 2087', function () {
        (0, globals_1.expect)((0, chains_1.getSupportedType)('osmosis-1', '2087')).toBe('multihop');
    });
    (0, globals_1.it)('should return channel for 2087 and 2019', function () {
        (0, globals_1.expect)((0, chains_1.getSupportedType)('2087', '2019')).toBe('channel');
    });
    (0, globals_1.it)('should return channel for pacific-1 and osmosis-1', function () {
        (0, globals_1.expect)((0, chains_1.getSupportedType)('pacific-1', 'osmosis-1')).toBe('channel');
    });
    (0, globals_1.it)('should return multihop for pacific-1 and ethereum', function () {
        (0, globals_1.expect)((0, chains_1.getSupportedType)('pacific-1', 'ethereum')).toBe('multihop');
    });
    (0, globals_1.it)('should return multihop for kusama asset hub and ethereum', function () {
        (0, globals_1.expect)((0, chains_1.getSupportedType)('1000', 'ethereum')).toBe(undefined);
    });
});
(0, globals_1.describe)('createForwardPathRecursive', function () {
    (0, globals_1.test)('should create the correct forward structure for a valid ibcPath and destination', function () {
        var ibcPath = [
            { chainId: 'osmosis-1', channelId: 1279, receiver: 'centauri-address' },
            { chainId: 'centauri-1', channelId: 52, receiver: 'ethereum-address' },
        ];
        var result = (0, chains_1.createForwardPathRecursive)(ibcPath);
        console.log(result);
        var expectedOutput = {
            forward: {
                receiver: 'centauri-address',
                port: 'transfer',
                channel: 'channel-1279',
                timeout: chains_1.TIMEOUT_IBC_MAX,
                retries: 0,
                next: {
                    forward: {
                        receiver: 'ethereum-address',
                        port: 'transfer',
                        channel: 'channel-52',
                        timeout: chains_1.TIMEOUT_IBC_MAX,
                        retries: 0,
                    },
                },
            },
        };
        (0, globals_1.expect)(JSON.stringify(result, null, 2)).toBe(JSON.stringify(expectedOutput, null, 2));
    });
    (0, globals_1.describe)('getExplorerUrl', function () {
        (0, globals_1.test)('should return correct URL for Mintscan explorer', function () {
            var chainId = 'osmosis-1';
            var txHash = '1234567890ABCDEF';
            var address = 'osmo1abcdefghijklmnop';
            (0, globals_1.expect)((0, chains_1.getExplorerUrl)(chainId, 'tx', txHash)).toBe('https://www.mintscan.io/osmosis/tx/1234567890ABCDEF');
            (0, globals_1.expect)((0, chains_1.getExplorerUrl)(chainId, 'address', address)).toBe('https://www.mintscan.io/osmosis/address/osmo1abcdefghijklmnop');
        });
        (0, globals_1.test)('should return correct URL for Subscan explorer', function () {
            var chainId = '2006';
            var txHash = '0x1234567890ABCDEF';
            var address = '5CGUvruJMqB1VMkqMvfcx9fHVgTLc73fgYMRhzghZQVWfPTw';
            (0, globals_1.expect)((0, chains_1.getExplorerUrl)(chainId, 'tx', txHash)).toBe('https://astar.subscan.io/extrinsic/0x1234567890ABCDEF');
            (0, globals_1.expect)((0, chains_1.getExplorerUrl)(chainId, 'address', address)).toBe('https://astar.subscan.io/account/5CGUvruJMqB1VMkqMvfcx9fHVgTLc73fgYMRhzghZQVWfPTw');
        });
        (0, globals_1.test)('should return correct URL for Solscan explorer', function () {
            var chainId = 'solana';
            var txHash = '3m7sDC5k3wUPBdRUkJpYXZyDvuMsaQqHoFKrMndomJJx';
            var address = 'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq';
            (0, globals_1.expect)((0, chains_1.getExplorerUrl)(chainId, 'tx', txHash)).toBe('https://solscan.io/tx/3m7sDC5k3wUPBdRUkJpYXZyDvuMsaQqHoFKrMndomJJx');
            (0, globals_1.expect)((0, chains_1.getExplorerUrl)(chainId, 'address', address)).toBe('https://solscan.io/address/CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq');
        });
        (0, globals_1.test)('should return correct URL for Etherscan explorer', function () {
            var chainId = 'ethereum';
            var txHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
            var address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
            (0, globals_1.expect)((0, chains_1.getExplorerUrl)(chainId, 'tx', txHash)).toBe('https://etherscan.io/tx/0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef');
            (0, globals_1.expect)((0, chains_1.getExplorerUrl)(chainId, 'address', address)).toBe('https://etherscan.io/address/0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
        });
        (0, globals_1.test)('should return empty string for unsupported explorer type', function () {
            var chainId = 'unsupported-chain';
            var txHash = '1234567890';
            var address = 'unsupported-address';
            (0, globals_1.expect)((0, chains_1.getExplorerUrl)(chainId, 'tx', txHash)).toBe('');
            (0, globals_1.expect)((0, chains_1.getExplorerUrl)(chainId, 'address', address)).toBe('');
        });
    });
    (0, globals_1.test)('should handle a single hop correctly', function () {
        var ibcPath = [
            {
                chainId: 'centauri-1',
                channelId: 52,
                receiver: 'sei-destination-address',
            },
        ];
        var result = (0, chains_1.createForwardPathRecursive)(ibcPath);
        var expectedOutput = {
            forward: {
                receiver: 'sei-destination-address',
                port: 'transfer',
                channel: 'channel-52',
                timeout: chains_1.TIMEOUT_IBC_MAX,
                retries: 0,
            },
        };
        (0, globals_1.expect)(JSON.stringify(result, null, 2)).toBe(JSON.stringify(expectedOutput, null, 2));
    });
});
(0, globals_1.describe)('getChainIdsByChannels', function () {
    (0, globals_1.test)('should return correct chain IDs for given channel IDs', function () {
        var channels = [1279, 71];
        var expectedChainIds = ['osmosis-1', 'centauri-1', 'solana'];
        var result = (0, chains_1.getChainIdsByChannels)(channels);
        (0, globals_1.expect)(result).toEqual(expectedChainIds);
    });
});
(0, globals_1.describe)('getChannelIdsFromMemo', function () {
    (0, globals_1.test)('should extract correct channel ID from memo', function () {
        var memo = '{"forward":{"receiver":"6ijw2nSoson3ft9kajLKc3zFiYccB2V1PbsSUJfjrKS6","port":"transfer","channel":"channel-71","timeout":6000000000000,"retries":0}}';
        var result = (0, chains_1.getChannelIdsFromMemo)(memo);
        (0, globals_1.expect)(result).toEqual({
            channels: [71],
            finalReceiver: '6ijw2nSoson3ft9kajLKc3zFiYccB2V1PbsSUJfjrKS6',
        });
    });
});
(0, globals_1.describe)('getNetworkFromAddress', function () {
    (0, globals_1.test)('should correctly detect Solana address', function () {
        var solanaAddress = '1ryziZbFQW4fcWck9wW4vU4KD4qxPHKhmAht6pXPFWo';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(solanaAddress)).toBe('solana');
    });
    (0, globals_1.test)('should correctly detect Picasso bech32 address', function () {
        var picassoAddress = 'pica1src4utrx6llsteqd7wf5qcuxcgjg6s8tle8kvq';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(picassoAddress)).toBe('centauri-1');
    });
    (0, globals_1.test)('should correctly detect Osmosis bech32 address', function () {
        var osmosisAddress = 'osmo1src4utrx6llsteqd7wf5qcuxcgjg6s8tv7hr74';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(osmosisAddress)).toBe('osmosis-1');
    });
    (0, globals_1.test)('should correctly detect Ethereum address', function () {
        var ethereumAddress = '0x46762bdE09C1a1c566c3efD959368455Bf20c354';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(ethereumAddress)).toBe('ethereum');
    });
    (0, globals_1.test)('should correctly detect Picasso SS58 address', function () {
        var picassoSS58Address = '5wFJF7twuHuSfUwK6tJFfHAbi55ubDx38QYSa5JfpDMNKuqU';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(picassoSS58Address)).toBe('2087');
    });
});
(0, globals_1.describe)('getNetworkFromAddress', function () {
    (0, globals_1.test)('should correctly detect Picasso kusama address', function () {
        var picassoKusamaAddress = '5vBK5vCSwqiQSYD7rePoodc3koQjvvYpJDZDRdrHLDAeoVTs';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(picassoKusamaAddress)).toBe('2087');
    });
    (0, globals_1.test)('should correctly detect Astar address', function () {
        var astarAddress = 'XYHiGNi33ERZxQi1DgmByuMKT7oWrquzqBSMZZ2xb1CRLxa';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(astarAddress)).toBe('2006');
    });
    (0, globals_1.test)('should correctly detect Solana address', function () {
        var solanaAddress = '1ryziZbFQW4fcWck9wW4vU4KD4qxPHKhmAht6pXPFWo';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(solanaAddress)).toBe('solana');
    });
    (0, globals_1.test)('should correctly detect error address', function () {
        var solanaAddress = '1ryziZbFQW4fcWck9wW4vU4KD4Wo';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(solanaAddress)).toBe('');
    });
    (0, globals_1.test)('should correctly detect Ethereum address', function () {
        var ethereumAddress = '0x345cEF3e1DC8221BE6D94B933bF09Ca8de6Beb68';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(ethereumAddress)).toBe('ethereum');
    });
    (0, globals_1.test)('should correctly detect Picasso cosmos address', function () {
        var picassoCosmosAddress = 'pica1src4utrx6llsteqd7wf5qcuxcgjg6s8tle8kvq';
        (0, globals_1.expect)((0, chains_1.getNetworkFromAddress)(picassoCosmosAddress)).toBe('centauri-1');
    });
});
