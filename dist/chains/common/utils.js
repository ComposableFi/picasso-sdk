"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeOut = exports.memoBuilder = exports.TIMEOUT_IBC_MAX = exports.emitter = void 0;
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var big_js_1 = __importDefault(require("big.js"));
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
    return new big_js_1.default(minutesLater.getTime()).mul(1000000).toNumber();
};
exports.getTimeOut = getTimeOut;
