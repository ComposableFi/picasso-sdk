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
exports.getSupportedType = exports.buildIbcPath = exports.findSourceChannelId = exports.getTimeOut = exports.memoBuilder = exports.TIMEOUT_IBC_MAX = exports.emitter = void 0;
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var big_js_1 = __importDefault(require("big.js"));
var config_1 = require("../../config");
exports.emitter = new eventemitter3_1.default();
exports.TIMEOUT_IBC_MAX = 6000000000000;
var memoBuilder = function (_a) {
    var destChannel = _a.destChannel, destAddress = _a.destAddress;
    return JSON.stringify({
        forward: {
            receiver: destAddress,
            port: 'transfer',
            channel: "channel-".concat(destChannel),
            timeout: exports.TIMEOUT_IBC_MAX,
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
// Function to find the shortest path with channel information
var buildIbcPath = function (fromChainId, toChainId) {
    // Set to keep track of visited chains
    var visited = new Set();
    // Initialize the queue for BFS traversal
    // The queue stores [current chain, path] where path includes both chain and channel
    var queue = [[fromChainId, []]];
    // Start BFS
    while (queue.length > 0) {
        // Get the first element from the queue
        var _a = __read(queue.shift(), 2), currentChainId = _a[0], path_1 = _a[1];
        // If we reach the target chain, return the path
        if (currentChainId === toChainId) {
            return path_1;
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
                    var newPath = __spreadArray(__spreadArray([], __read(path_1), false), [
                        { chainId: currentChainId, channelId: destinationId },
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
// 사용 예시
var path = (0, exports.buildIbcPath)('2087', 'ethereum');
console.log(path); // ['2087', 'centauri-1', 'ethereum'] 와 같은 결과가 나와야 함
/**@description If it returns undefined, that means it is not supported */
var getSupportedType = function (fromChainId, toChainId) { };
exports.getSupportedType = getSupportedType;
