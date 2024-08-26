"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chains_1 = require("../chains");
describe('buildIbcPath', function () {
    it('should return the correct path for osmosis-1 to ethereum', function () {
        var result = (0, chains_1.buildIbcPath)('osmosis-1', 'ethereum');
        expect(result).toEqual([
            { chainId: 'osmosis-1', channelId: 1279 },
            { chainId: 'centauri-1', channelId: 52 },
        ]);
    });
    it('should return the null for solana to 2019', function () {
        var result = (0, chains_1.buildIbcPath)('solana', '2019');
        expect(result).toEqual(null);
    });
    it('should return the correct path for solana to osmosis-1', function () {
        var result = (0, chains_1.buildIbcPath)('solana', 'osmosis-1');
        expect(result).toEqual([
            { chainId: 'solana', channelId: 1 },
            { chainId: 'centauri-1', channelId: 3 },
        ]);
    });
});
describe('getSupportedType', function () {
    it('should return pfm for solana and ethereum', function () {
        expect((0, chains_1.getSupportedType)('solana', 'ethereum')).toBe('pfm');
    });
    it('should return channel for solana and osmosis-1', function () {
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
    it('should return multihop for pacific-1 and ethereum', function () {
        expect((0, chains_1.getSupportedType)('pacific-1', 'ethereum')).toBe('multihop');
    });
    it('should return multihop for kusama asset hub and ethereum', function () {
        expect((0, chains_1.getSupportedType)('1000', 'ethereum')).toBe(undefined);
    });
});
