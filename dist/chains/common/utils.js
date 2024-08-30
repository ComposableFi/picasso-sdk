"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createForwardPathRecursive = exports.convertAddressToStr = exports.convertCosmosAddress = exports.getPolkadotAddressStr = exports.getSupportedType = exports.buildIbcPath = exports.getForbiddenChains = exports.findSourceChannelId = exports.getTimeOut = exports.memoBuilder = exports.emitter = void 0;
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var big_js_1 = __importDefault(require("big.js"));
var config_1 = require("../../config");
var encoding_1 = require("@cosmjs/encoding");
var util_crypto_1 = require("@polkadot/util-crypto");
var cosmos_1 = require("../cosmos");
exports.emitter = new eventemitter3_1.default();
var memoBuilder = function (_a) {
    var destChannel = _a.destChannel, destAddress = _a.destAddress;
    return JSON.stringify({
        forward: {
            receiver: destAddress,
            port: 'transfer',
            channel: "channel-".concat(destChannel),
            timeout: cosmos_1.TIMEOUT_IBC_MAX,
            retries: 0,
        },
    });
};
exports.memoBuilder = memoBuilder;
/**@description Plus mininutes. Default : 10  */
var getTimeOut = function (plusMin) {
    if (plusMin === void 0) { plusMin = 30; }
    var now = new Date();
    var minutesLater = new Date(now.getTime() + plusMin * 60 * 1000);
    return new big_js_1.default(minutesLater.getTime()).mul(1000000).toFixed();
};
exports.getTimeOut = getTimeOut;
var findSourceChannelId = function (sourceChainId, destChainId) {
    return Object.keys(config_1.networks[sourceChainId]).find(function (key) { return key === destChainId; });
};
exports.findSourceChannelId = findSourceChannelId;
var getForbiddenChains = function (fromChainId, toChainId) {
    if (fromChainId === toChainId ||
        (fromChainId === 'solana' &&
            config_1.networks[toChainId].chainType === 'polkadot') ||
        (fromChainId === 'ethereum' && config_1.networks[toChainId].chainType === 'polkadot'))
        return true;
    return false;
};
exports.getForbiddenChains = getForbiddenChains;
// Function to find the shortest path with channel information
var buildIbcPath = function (fromChainId, toChainId) {
    if ((0, exports.getForbiddenChains)(fromChainId, toChainId))
        return null;
    // Set to keep track of visited chains
    var visited = new Set();
    // Initialize the queue for BFS traversal
    // The queue stores [current chain, path] where path includes both chain and channel
    var queue = [[fromChainId, []]];
    // Start BFS
    while (queue.length > 0) {
        // Get the first element from the queue
        var _a = __read(queue.shift(), 2), currentChainId = _a[0], path = _a[1];
        // If we reach the target chain, return the path
        if (currentChainId === toChainId) {
            return path;
        }
        // Mark the current chain as visited
        visited.add(currentChainId);
        // Iterate through all the connected chains of the current chain
        var connections = config_1.tokensPerChannel[currentChainId];
        if (connections) {
            for (var destinationId in connections) {
                var nextChainId = connections[destinationId].chainId;
                // Ensure that the chain has not been visited yet
                if (!visited.has(nextChainId)) {
                    // Add the next hop (with chain and channel info) to the path
                    var newPath = __spreadArray(__spreadArray([], __read(path), false), [
                        { chainId: currentChainId, channelId: Number(destinationId) },
                    ], false);
                    // Add the next chain and the updated path to the queue
                    queue.push([nextChainId, newPath]);
                }
            }
        }
    }
    // If we do not find a path to the target chain, return null
    return null;
};
exports.buildIbcPath = buildIbcPath;
// Example usage
/**@description If it returns undefined, that means it is not supported */
var getSupportedType = function (fromChainId, toChainId) {
    var _a, _b;
    if (fromChainId === toChainId || !fromChainId || !toChainId)
        return;
    if ((config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[fromChainId]) &&
        Object.values(config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[fromChainId]).find(function (item) { return (item === null || item === void 0 ? void 0 : item.chainId) === toChainId; }))
        return 'channel';
    //XCM tx
    if (config_1.networks[fromChainId].polkadot &&
        config_1.networks[toChainId].polkadot &&
        ((_a = config_1.networks[fromChainId].polkadot) === null || _a === void 0 ? void 0 : _a.relayChain) ===
            ((_b = config_1.networks[toChainId].polkadot) === null || _b === void 0 ? void 0 : _b.relayChain))
        return 'xcm';
    if ((0, exports.buildIbcPath)(fromChainId, toChainId)) {
        if (fromChainId === 'solana')
            return 'pfm';
        return 'multihop';
    }
    return;
};
exports.getSupportedType = getSupportedType;
var getPolkadotAddressStr = function (accountId, prefix) {
    try {
        return (0, util_crypto_1.encodeAddress)(accountId, prefix || 0);
    }
    catch (e) {
        return accountId;
    }
};
exports.getPolkadotAddressStr = getPolkadotAddressStr;
var convertCosmosAddress = function (address, newPrefix) {
    try {
        var data = (0, encoding_1.fromBech32)(address).data;
        return (0, encoding_1.toBech32)(newPrefix, data);
    }
    catch (e) {
        throw new Error('유효하지 않은 Bech32 주소입니다.');
    }
};
exports.convertCosmosAddress = convertCosmosAddress;
/**@description When it comes to Cosmos network, coinType should be 114 to use this converter*/
var convertAddressToStr = function (address, fromChainId) {
    var _a;
    if (address.startsWith('0x')) {
        // 2004: moonbeam, 2023:moonriver
        if (['ethereum', 'solana', '2004', '2023'].some(function (v) { return v === fromChainId; })) {
            return address;
        }
        else if (config_1.networks[origin].chainType === 'polkadot' &&
            ((_a = config_1.networks[origin].polkadot) === null || _a === void 0 ? void 0 : _a.ss58Format)) {
            return (0, exports.getPolkadotAddressStr)(address, Number(config_1.networks[origin].polkadot.ss58Format));
        }
        else if (config_1.networks[origin].chainType === 'cosmos' &&
            config_1.networks[origin].cosmos.bech32Config.bech32PrefixAccAddr) {
            return (0, exports.convertCosmosAddress)(address, config_1.networks[origin].cosmos.bech32Config.bech32PrefixAccAddr);
        }
        else {
            return address;
        }
    }
    return address;
};
exports.convertAddressToStr = convertAddressToStr;
var createForwardPathRecursive = function (ibcPath, index, timeout) {
    if (index === void 0) { index = 0; }
    if (timeout === void 0) { timeout = cosmos_1.TIMEOUT_IBC_MAX; }
    if (index === ibcPath.length - 1) {
        return {
            receiver: ibcPath[index].receiver,
            port: 'transfer',
            channel: "channel-".concat(ibcPath[index].channelId),
            timeout: timeout,
            retries: 0,
        };
    }
    return {
        receiver: ibcPath[index].receiver,
        port: 'transfer',
        channel: "channel-".concat(ibcPath[index].channelId),
        timeout: timeout,
        retries: 0,
        next: {
            forward: (0, exports.createForwardPathRecursive)(ibcPath, index + 1),
        },
    };
};
exports.createForwardPathRecursive = createForwardPathRecursive;
// 예시 데이터
var ibcPath = [
    { chainId: 'osmosis-1', channelId: 1279 },
    { chainId: 'centauri-1', channelId: 52 },
];
// 실행 예시
var result = (0, exports.createForwardPathRecursive)(ibcPath, 0);
console.log(JSON.stringify({ forward: result }, null, 2));
