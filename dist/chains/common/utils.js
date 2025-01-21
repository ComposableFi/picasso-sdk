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
exports.getNetworkFromAddress = exports.getEthereumAddressNetwork = exports.getSolanaAddressNetwork = exports.getCosmosAddressNetwork = exports.getPolkadotAddressNetwork = exports.getExplorerUrl = exports.getXcmInfo = exports.getSourceChannel = exports.getChannelIdsFromMemo = exports.createForwardPathRecursive = exports.convertAddressToStr = exports.convertCosmosAddress = exports.getPolkadotAddressStr = exports.getSupportedType = exports.getChainIdsByChannels = exports.channelList = exports.getAllowedTokensForPath = exports.buildIbcPath = exports.getForbiddenChains = exports.findSourceChannelId = exports.getTimeOut = exports.memoBuilder = exports.emitter = void 0;
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var big_js_1 = __importDefault(require("big.js"));
var config_1 = require("../../config");
var encoding_1 = require("@cosmjs/encoding");
var util_crypto_1 = require("@polkadot/util-crypto");
var cosmos_1 = require("../cosmos");
exports.emitter = new eventemitter3_1.default();
var bech32_1 = require("bech32");
var solana_1 = require("../solana");
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
    return new big_js_1.default(minutesLater.getTime()).mul(1000000).toNumber();
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
/**@description Function to find the shortest path with channel information */
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
/**@description Function to find the allowed tokens for the entire path */
var getAllowedTokensForPath = function (originChainId, destinationChainId) {
    var _a, _b, _c, _d;
    var result = (0, exports.buildIbcPath)(originChainId, destinationChainId);
    console.log(result);
    var supportedType = (0, exports.getSupportedType)(originChainId, destinationChainId);
    if (supportedType === 'xcm') {
        var xcmInfo = (0, exports.getXcmInfo)(originChainId, destinationChainId);
        return xcmInfo.tokens;
    }
    if (!!supportedType) {
        return result.reduce(function (acc, item) {
            if (acc.length > 0) {
                acc = acc.filter(function (token) {
                    return config_1.tokensPerChannel[item.chainId][item.channelId].tokens.includes(token);
                });
            }
            else {
                acc = __spreadArray([], __read(config_1.tokensPerChannel[item.chainId][item.channelId].tokens), false);
            }
            return acc;
        }, []);
    }
    if (((_b = (_a = config_1.networks === null || config_1.networks === void 0 ? void 0 : config_1.networks[originChainId]) === null || _a === void 0 ? void 0 : _a.polkadot) === null || _b === void 0 ? void 0 : _b.relayChain) === 'polkadot' ||
        ((_d = (_c = config_1.networks === null || config_1.networks === void 0 ? void 0 : config_1.networks[destinationChainId]) === null || _c === void 0 ? void 0 : _c.polkadot) === null || _d === void 0 ? void 0 : _d.relayChain) === 'polkadot')
        return ['DOT'];
    return [];
};
exports.getAllowedTokensForPath = getAllowedTokensForPath;
exports.channelList = Object.values(config_1.networks);
var getChainIdsByChannels = function (channels) {
    var _a, _b;
    var chainIdsByChannels = Object.keys(config_1.tokensPerChannel);
    var chainIds = channels.map(function (channel, i) {
        if (i === 0) {
            return chainIdsByChannels.find(function (chainId) {
                return Object.keys((config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[chainId]) || {}).some(function (v) { var _a; return v === ((_a = channels[i]) === null || _a === void 0 ? void 0 : _a.toString()); });
            });
        }
        return chainIdsByChannels.find(function (chainId) {
            return Object.keys((config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[chainId]) || {}).some(function (v) { return v === (channel === null || channel === void 0 ? void 0 : channel.toString()); });
        });
    });
    var lastChannel = channels[channels.length - 1];
    var lastChainId = (_b = (_a = Object.values(config_1.tokensPerChannel).find(function (v) { var _a; return !!((_a = v === null || v === void 0 ? void 0 : v[lastChannel.toString()]) === null || _a === void 0 ? void 0 : _a.chainId); })) === null || _a === void 0 ? void 0 : _a[lastChannel.toString()]) === null || _b === void 0 ? void 0 : _b.chainId;
    if (lastChainId)
        chainIds.push(lastChainId);
    return chainIds;
};
exports.getChainIdsByChannels = getChainIdsByChannels;
// Example usage
/**@description If it returns undefined, that means it is not supported */
var getSupportedType = function (fromChainId, toChainId) {
    var _a, _b, _c, _d, _e, _f;
    if (fromChainId === toChainId || !fromChainId || !toChainId)
        return;
    if ((0, exports.getSourceChannel)(fromChainId, toChainId))
        return 'channel';
    //XCM tx
    if (((_a = config_1.networks[fromChainId]) === null || _a === void 0 ? void 0 : _a.polkadot) &&
        ((_b = config_1.networks[toChainId]) === null || _b === void 0 ? void 0 : _b.polkadot) &&
        ((_d = (_c = config_1.networks[fromChainId]) === null || _c === void 0 ? void 0 : _c.polkadot) === null || _d === void 0 ? void 0 : _d.relayChain) ===
            ((_f = (_e = config_1.networks[toChainId]) === null || _e === void 0 ? void 0 : _e.polkadot) === null || _f === void 0 ? void 0 : _f.relayChain))
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
        var data_1 = (0, encoding_1.fromBech32)(address).data;
        return (0, encoding_1.toBech32)(newPrefix, data_1);
    }
    catch (e) {
        throw new Error('유효하지 않은 Bech32 주소입니다.');
    }
};
exports.convertCosmosAddress = convertCosmosAddress;
/**@description When it comes to Cosmos network, coinType should be 114 to use this converter*/
var convertAddressToStr = function (address, fromChainId) {
    var _a, _b, _c;
    if (!config_1.networks[fromChainId])
        return address;
    if (address.startsWith('0x')) {
        // 2004: moonbeam, 2023:moonriver
        if (['ethereum', 'solana', '2004', '2023'].some(function (v) { return v === fromChainId; })) {
            return address;
        }
        else if (((_a = config_1.networks[origin]) === null || _a === void 0 ? void 0 : _a.chainType) === 'polkadot' &&
            ((_c = (_b = config_1.networks[origin]) === null || _b === void 0 ? void 0 : _b.polkadot) === null || _c === void 0 ? void 0 : _c.ss58Format)) {
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
            forward: {
                receiver: ibcPath[index].receiver,
                port: 'transfer',
                channel: "channel-".concat(ibcPath[index].channelId),
                timeout: timeout,
                retries: 0,
            },
        };
    }
    return {
        forward: {
            receiver: ibcPath[index].receiver,
            port: 'transfer',
            channel: "channel-".concat(ibcPath[index].channelId),
            timeout: timeout,
            retries: 0,
            next: (0, exports.createForwardPathRecursive)(ibcPath, index + 1),
        },
    };
};
exports.createForwardPathRecursive = createForwardPathRecursive;
var getChannelIdsFromMemo = function (memo) {
    var memoObj;
    try {
        memoObj = JSON.parse(memo);
    }
    catch (e) {
        return { channels: [], finalReceiver: '' };
    }
    var findInfos = function (obj) {
        if (!obj || typeof obj !== 'object')
            return { channels: [], finalReceiver: '' };
        var channels = [];
        var finalReceiver = obj.receiver;
        if (obj.channel && typeof obj.channel === 'string') {
            var channelId = obj.channel.split('-')[1];
            if (channelId)
                channels.push(Number(channelId));
        }
        if (obj.next) {
            var next = findInfos(obj.next);
            channels = channels === null || channels === void 0 ? void 0 : channels.concat(next === null || next === void 0 ? void 0 : next.channels);
            finalReceiver = next === null || next === void 0 ? void 0 : next.finalReceiver;
        }
        return { channels: channels, finalReceiver: finalReceiver };
    };
    var _a = findInfos(memoObj.forward), channels = _a.channels, finalReceiver = _a.finalReceiver;
    if (channels.length > 0) {
        return { channels: channels, finalReceiver: finalReceiver };
    }
    return { channels: [], finalReceiver: '' };
};
exports.getChannelIdsFromMemo = getChannelIdsFromMemo;
var getSourceChannel = function (fromChainId, toChainId) {
    if (config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[fromChainId])
        return Object.keys(config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[fromChainId]).find(function (key) { var _a; return ((_a = config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[fromChainId][key]) === null || _a === void 0 ? void 0 : _a.chainId) === toChainId; });
};
exports.getSourceChannel = getSourceChannel;
var getXcmInfo = function (fromChainId, toChainId) {
    var _a, _b, _c;
    return (_c = (_b = (_a = config_1.networks === null || config_1.networks === void 0 ? void 0 : config_1.networks[fromChainId]) === null || _a === void 0 ? void 0 : _a.polkadot) === null || _b === void 0 ? void 0 : _b.hops) === null || _c === void 0 ? void 0 : _c[toChainId];
};
exports.getXcmInfo = getXcmInfo;
var getExplorerUrl = function (chainId, infoType, info) {
    var _a, _b;
    var explorer = (_b = (_a = config_1.networks[chainId]) === null || _a === void 0 ? void 0 : _a.explorer) === null || _b === void 0 ? void 0 : _b[0];
    if (!explorer || !['tx', 'address'].includes(infoType)) {
        return '';
    }
    switch (explorer.type) {
        case 'mintscan':
        case 'solscan':
        case 'etherscan':
            return "".concat(explorer.url, "/").concat(infoType, "/").concat(info);
        case 'pingPub':
            return "".concat(explorer.url, "/").concat(infoType === 'tx' ? 'tx' : 'account', "/").concat(info);
        case 'subscan':
            return "".concat(explorer.url, "/").concat(infoType === 'tx' ? 'extrinsic' : 'account', "/").concat(info);
        default:
            return '';
    }
};
exports.getExplorerUrl = getExplorerUrl;
var getPolkadotAddressNetwork = function (accountId) {
    var _a;
    try {
        return (((_a = Object.values(config_1.networks).find(function (v) {
            var _a;
            var encoded = (0, util_crypto_1.encodeAddress)((0, util_crypto_1.decodeAddress)(accountId), (_a = v.polkadot) === null || _a === void 0 ? void 0 : _a.ss58Format);
            if (encoded === accountId)
                return v.chainId;
        })) === null || _a === void 0 ? void 0 : _a.chainId) || '');
    }
    catch (e) {
        return '';
    }
};
exports.getPolkadotAddressNetwork = getPolkadotAddressNetwork;
var getCosmosAddressNetwork = function (accountId) {
    var found = '';
    try {
        var decoded_1 = bech32_1.bech32.decode(accountId);
        Object.values(config_1.keplrChains).forEach(function (v) {
            if (v.bech32Config.bech32PrefixAccAddr === decoded_1.prefix)
                found = v.chainId;
        });
        return found;
    }
    catch (e) {
        return found;
    }
};
exports.getCosmosAddressNetwork = getCosmosAddressNetwork;
var getSolanaAddressNetwork = function (accountId) {
    try {
        (0, solana_1.getPublicKey)(accountId); //triggers error if not valid
        return 'solana';
    }
    catch (e) {
        return '';
    }
};
exports.getSolanaAddressNetwork = getSolanaAddressNetwork;
var getEthereumAddressNetwork = function (accountId) {
    if (accountId.startsWith('0x')) {
        return 'ethereum';
    }
    return '';
};
exports.getEthereumAddressNetwork = getEthereumAddressNetwork;
var getNetworkFromAddress = function (address) {
    var ethereumNetwork = (0, exports.getEthereumAddressNetwork)(address);
    var cosmosNetwork = (0, exports.getCosmosAddressNetwork)(address);
    var solanaNetwork = (0, exports.getSolanaAddressNetwork)(address);
    var polkadotNetwork = (0, exports.getPolkadotAddressNetwork)(address);
    return (ethereumNetwork || cosmosNetwork || solanaNetwork || polkadotNetwork || '');
};
exports.getNetworkFromAddress = getNetworkFromAddress;
