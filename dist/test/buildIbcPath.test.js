"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chains_1 = require("../chains");
describe('buildIbcPath', function () {
    it('should return the correct path for 2019 to ethereum', function () {
        var result = (0, chains_1.buildIbcPath)('2019', 'ethereum');
        expect(result).toEqual([
            { chainId: '2019', channelId: '15' },
            { chainId: '2087', channelId: '17' },
            { chainId: 'centauri-1', channelId: '52' },
        ]);
    });
});
describe('getSupportedType', function () {
    it('should return multihop for solana and ethereum', function () {
        expect((0, chains_1.getSupportedType)('solana', 'ethereum')).toBe('pfm');
    });
    it('should return multihop for solana and osmosis-1', function () {
        expect((0, chains_1.getSupportedType)('solana', 'centauri-1')).toBe('channel');
    });
    it('should return multihop for osmosis-1 and 2087', function () {
        expect((0, chains_1.getSupportedType)('osmosis-1', '2087')).toBe('multihop');
    });
    it('should return channel for 2087 and 2019', function () {
        expect((0, chains_1.getSupportedType)('2087', '2019')).toBe('channel');
    });
    it('should return channel for pacific-1 and osmosis-1', function () {
        expect((0, chains_1.getSupportedType)('pacific-1', 'osmosis-1')).toBe('channel');
    });
});
