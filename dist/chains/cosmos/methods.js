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
exports.cosmosTransfer = void 0;
var constants_1 = require("./constants");
var helper_1 = require("./helper");
var cosmosTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var client, msg, refinedFee, generalResponse, ex_1;
    var sourceChannel = _b.sourceChannel, sourceAddress = _b.sourceAddress, destAddress = _b.destAddress, amount = _b.amount, assetId = _b.assetId, fee = _b.fee, chainId = _b.chainId, rpc = _b.rpc, memo = _b.memo, timeout = _b.timeout, _c = _b.txMsg, txMsg = _c === void 0 ? constants_1.TX_MSG : _c, keplr = _b.keplr, gasPrice = _b.gasPrice, gas = _b.gas, feeAssetId = _b.feeAssetId;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, helper_1.getCosmosClient)({
                    chainId: chainId,
                    rpc: rpc,
                    keplr: keplr,
                    supportLedger: !memo,
                    feeAssetId: feeAssetId,
                    gasPrice: gasPrice,
                })];
            case 1:
                client = _d.sent();
                msg = (0, helper_1.generateTransferMsg)(txMsg, sourceChannel, sourceAddress, destAddress, amount, assetId, memo, timeout);
                // await client.simulate(sourceAddress, [msg], memo);
                // To avoid keplr or leap overrides custom fee from FE (mostly it is set to 'auto'
                if (keplr) {
                    keplr.defaultOptions = {
                        sign: {
                            preferNoSetFee: fee !== 'auto',
                        },
                    };
                }
                refinedFee = fee === 'auto'
                    ? 'auto'
                    : {
                        amount: [
                            {
                                amount: fee,
                                denom: feeAssetId,
                            },
                        ],
                        gas: gas,
                    };
                _d.label = 2;
            case 2:
                _d.trys.push([2, 4, , 5]);
                return [4 /*yield*/, client.signAndBroadcast(sourceAddress, [msg], refinedFee)];
            case 3:
                generalResponse = _d.sent();
                return [2 /*return*/, generalResponse.transactionHash]; // Query indexer by this txHash
            case 4:
                ex_1 = _d.sent();
                console.error(ex_1, 'cosmosError');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.cosmosTransfer = cosmosTransfer;
