"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcastTx = exports.getSecretClient = exports.getCosmosBlockHeight = exports.getCosmosClient = exports.getSigner = exports.getCosmosTimeoutTimestamp = exports.generateTransferMsg = exports.Tendermint34Client = exports.setupIbcExtension = exports.QueryClient = exports.SigningStargateClient = void 0;
var stargate_1 = require("@cosmjs/stargate");
Object.defineProperty(exports, "SigningStargateClient", { enumerable: true, get: function () { return stargate_1.SigningStargateClient; } });
var tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
Object.defineProperty(exports, "Tendermint34Client", { enumerable: true, get: function () { return tendermint_rpc_1.Tendermint34Client; } });
var stargate_2 = require("@cosmjs/stargate");
Object.defineProperty(exports, "QueryClient", { enumerable: true, get: function () { return stargate_2.QueryClient; } });
Object.defineProperty(exports, "setupIbcExtension", { enumerable: true, get: function () { return stargate_2.setupIbcExtension; } });
var secretjs_1 = require("secretjs");
var config_1 = require("../../config");
var sdk_ts_1 = require("@injectivelabs/sdk-ts");
var generateTransferMsg = function (txMsg, channel, sourceAddress, destAddress, amount, assetId, memo, timeout) {
    var msg = {
        typeUrl: txMsg,
        value: {
            sourcePort: 'transfer',
            sourceChannel: "channel-".concat(channel),
            token: {
                denom: assetId,
                amount: amount,
            },
            sender: sourceAddress,
            receiver: destAddress,
            memo: memo,
            timeoutTimestamp: timeout, //  30~240 minutes
        },
    };
    return msg;
};
exports.generateTransferMsg = generateTransferMsg;
/** description the amount of seconds for timeout */
var getCosmosTimeoutTimestamp = function (seconds) {
    return new Date().getTime() * 1000000 + seconds * 1000 * 1000000;
};
exports.getCosmosTimeoutTimestamp = getCosmosTimeoutTimestamp;
/** @description chainId is from cosmos chain registry */
var getSigner = function (chainId, keplr, supportLedger) {
    if (supportLedger === void 0) { supportLedger = true; }
    return supportLedger
        ? keplr.getOfflineSignerOnlyAmino(chainId)
        : keplr.getOfflineSigner(chainId);
};
exports.getSigner = getSigner;
// export const keplr = (typeof window !== 'undefined') ? (window as any).keplr : undefined; // provider of cosmos wallet
var getCosmosClient = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var signer, finalClient;
    var chainId = _b.chainId, rpc = _b.rpc, keplr = _b.keplr, feeAssetId = _b.feeAssetId, gasPrice = _b.gasPrice, _c = _b.supportLedger, supportLedger = _c === void 0 ? true : _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                signer = (0, exports.getSigner)(chainId, keplr, supportLedger);
                return [4 /*yield*/, stargate_1.SigningStargateClient.connectWithSigner(rpc, signer, {
                        gasPrice: stargate_1.GasPrice.fromString("".concat(gasPrice).concat(feeAssetId)),
                    })];
            case 1:
                finalClient = _d.sent();
                return [2 /*return*/, finalClient];
        }
    });
}); };
exports.getCosmosClient = getCosmosClient;
var getCosmosBlockHeight = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var _c;
    var client = _b.client, _d = _b.extra, extra = _d === void 0 ? 100 : _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _c = Number;
                return [4 /*yield*/, client.getHeight()];
            case 1: return [2 /*return*/, _c.apply(void 0, [_e.sent()]) + extra];
        }
    });
}); };
exports.getCosmosBlockHeight = getCosmosBlockHeight;
var getSecretClient = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var secretChainId;
    var keplr = _b.keplr, signer = _b.signer, address = _b.address;
    return __generator(this, function (_c) {
        secretChainId = 'secret-4';
        if (!keplr) {
            console.error('keplr provider is required');
            return [2 /*return*/];
        }
        return [2 /*return*/, new secretjs_1.SecretNetworkClient({
                chainId: secretChainId,
                url: config_1.networks[secretChainId].rest || '',
                wallet: signer,
                walletAddress: address,
                //  NOTE : keep this in mind when integrating other wallets that potentially do not support this
                encryptionUtils: keplr.getEnigmaUtils(secretChainId), //  lets keplr handle the encryption
            })];
    });
}); };
exports.getSecretClient = getSecretClient;
var broadcastTx = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var result;
    var chainId = _b.chainId, txRaw = _b.txRaw, keplr = _b.keplr;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (keplr === null || keplr === void 0 ? void 0 : keplr.sendTx(chainId, sdk_ts_1.CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), 'sync'))];
            case 1:
                result = _c.sent();
                if (result && (result === null || result === void 0 ? void 0 : result.length) !== 0)
                    return [2 /*return*/];
                return [2 /*return*/, Buffer.from(result).toString('hex')];
        }
    });
}); };
exports.broadcastTx = broadcastTx;
