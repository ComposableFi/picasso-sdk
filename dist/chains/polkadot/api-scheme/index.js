"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToDecimalStr = exports.polkadotApiRpc = exports.polkadotApiTypes = exports.PALLET_TYPE_ID = exports.PALLET_ID = exports.ENDPOINT = void 0;
exports.concatU8a = concatU8a;
var util_1 = require("@polkadot/util");
var definitions = __importStar(require("./definitions"));
exports.ENDPOINT = (_a = process.env.NEXT_PUBLIC_ENDPOINT) !== null && _a !== void 0 ? _a : 'wss://rpc.composablenodes.tech';
exports.PALLET_ID = 'modl';
exports.PALLET_TYPE_ID = (0, util_1.stringToU8a)(exports.PALLET_ID);
exports.polkadotApiTypes = Object.keys(definitions)
    .filter(function (key) { return Object.keys(definitions[key].types).length > 0; })
    .reduce(function (accumulator, key) { return (__assign(__assign({}, accumulator), definitions[key].types)); }, {});
exports.polkadotApiRpc = Object.keys(definitions)
    .filter(function (k) {
    if (!definitions[k].rpc) {
        return false;
    }
    return Object.keys(definitions[k].rpc).length > 0;
})
    .reduce(function (accumulator, key) {
    var _a;
    return (__assign(__assign({}, accumulator), (_a = {}, _a[key] = definitions[key].rpc, _a)));
}, {});
function concatU8a(a, b) {
    var c = new Uint8Array(a.length + b.length);
    c.set(a);
    c.set(b, a.length);
    return c;
}
var hexToDecimalStr = function (hex) {
    return BigInt(hex).toString(10);
};
exports.hexToDecimalStr = hexToDecimalStr;
