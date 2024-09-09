"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainHops = exports.WsProvider = exports.ApiPromise = void 0;
var api_1 = require("@polkadot/api");
Object.defineProperty(exports, "ApiPromise", { enumerable: true, get: function () { return api_1.ApiPromise; } });
Object.defineProperty(exports, "WsProvider", { enumerable: true, get: function () { return api_1.WsProvider; } });
exports.ChainHops = ['CosmosIbc', 'SubstrateIbc', 'SubstrateXcm'];
