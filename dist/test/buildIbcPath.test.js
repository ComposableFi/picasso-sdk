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
