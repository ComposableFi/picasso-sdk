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
exports.injectiveTransfer = exports.secretTransfer = exports.cosmosTransfer = void 0;
var constants_1 = require("./constants");
var helper_1 = require("./helper");
var secretjs_1 = require("secretjs");
var helper_2 = require("./helper");
var config_1 = require("../../config");
var sdk_ts_1 = require("@injectivelabs/sdk-ts");
var utils_1 = require("@injectivelabs/utils");
var cosmosTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var client, msg, refinedFee, injectiveResponse, generalResponse, ex_1;
    var sourceChannel = _b.sourceChannel, sourceAddress = _b.sourceAddress, destAddress = _b.destAddress, amount = _b.amount, assetId = _b.assetId, fee = _b.fee, chainId = _b.chainId, rpc = _b.rpc, memo = _b.memo, timeout = _b.timeout, _c = _b.txMsg, txMsg = _c === void 0 ? constants_1.TX_MSG : _c, keplr = _b.keplr, gasPrice = _b.gasPrice, gas = _b.gas, feeAssetId = _b.feeAssetId;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4, (0, helper_1.getCosmosClient)({
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
                _d.trys.push([2, 6, , 7]);
                if (!(chainId === 'injective-1')) return [3, 4];
                return [4, (0, exports.injectiveTransfer)({
                        generatedMsg: msg,
                        keplr: keplr,
                    })];
            case 3:
                injectiveResponse = _d.sent();
                return [2, injectiveResponse.txHash];
            case 4: return [4, client.signAndBroadcast(sourceAddress, [msg], refinedFee)];
            case 5:
                generalResponse = _d.sent();
                return [2, generalResponse.transactionHash];
            case 6:
                ex_1 = _d.sent();
                console.error(ex_1, 'cosmosError');
                return [3, 7];
            case 7: return [2];
        }
    });
}); };
exports.cosmosTransfer = cosmosTransfer;
var secretTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var refinedSecretAssetId, signer, client, rawLog, txHash, generalResponse, ex_2;
    var amount = _b.amount, secretAssetId = _b.secretAssetId, keplr = _b.keplr, sourceAddress = _b.sourceAddress, destAddress = _b.destAddress, sourceChannel = _b.sourceChannel, codeHash = _b.codeHash;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                refinedSecretAssetId = secretAssetId.split(':')[1];
                signer = (0, helper_1.getSigner)('secret-4', keplr);
                return [4, (0, helper_2.getSecretClient)({
                        keplr: keplr,
                        signer: signer,
                        address: sourceAddress,
                    })];
            case 1:
                client = _c.sent();
                _c.label = 2;
            case 2:
                _c.trys.push([2, 4, , 5]);
                return [4, client.tx.compute.executeContract({
                        contract_address: refinedSecretAssetId,
                        code_hash: codeHash,
                        sender: sourceAddress,
                        msg: {
                            send: {
                                recipient: 'secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
                                recipient_code_hash: 'f85b413b547b9460162958bafd51113ac266dac96a84c33b9150f68f045f2641',
                                amount: amount,
                                msg: (0, secretjs_1.toBase64)((0, secretjs_1.toUtf8)(JSON.stringify({
                                    channel: "channel-".concat(sourceChannel),
                                    remote_address: destAddress,
                                    timeout: 30 * 60,
                                }))),
                            },
                        },
                    }, {
                        gasLimit: 300000,
                        gasPriceInFeeDenom: 0.1,
                        feeDenom: 'uscrt',
                        feeGranter: '',
                        ibcTxsOptions: {
                            resolveResponses: true,
                            resolveResponsesCheckIntervalMs: 10000,
                            resolveResponsesTimeoutMs: 12 * 60 * 1000,
                        },
                    })];
            case 3:
                generalResponse = _c.sent();
                rawLog = generalResponse.rawLog;
                txHash = generalResponse.transactionHash;
                return [2, txHash];
            case 4:
                ex_2 = _c.sent();
                console.error(ex_2, 'secretError');
                return [3, 5];
            case 5: return [2];
        }
    });
}); };
exports.secretTransfer = secretTransfer;
var injectiveTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var chainId, restEndpoint, chainRestAuthApi, accountDetailsResponse, baseAccount, chainRestTendermintApi, latestBlock, latestHeight, timeoutHeight, msg, pubKeyResult, pubKey, signDoc, signer, result, txRaw, txHash, response;
    var _c;
    var generatedMsg = _b.generatedMsg, keplr = _b.keplr;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                chainId = 'injective-1';
                restEndpoint = config_1.networks[chainId].rest;
                chainRestAuthApi = new sdk_ts_1.ChainRestAuthApi(restEndpoint);
                return [4, chainRestAuthApi.fetchAccount(generatedMsg.value.sender)];
            case 1:
                accountDetailsResponse = _d.sent();
                baseAccount = sdk_ts_1.BaseAccount.fromRestApi(accountDetailsResponse);
                chainRestTendermintApi = new sdk_ts_1.ChainRestTendermintApi(restEndpoint);
                return [4, chainRestTendermintApi.fetchLatestBlock()];
            case 2:
                latestBlock = _d.sent();
                latestHeight = latestBlock.header.height;
                timeoutHeight = Number(latestHeight) + utils_1.DEFAULT_BLOCK_TIMEOUT_HEIGHT;
                msg = sdk_ts_1.MsgTransfer.fromJSON({
                    port: generatedMsg.value.sourcePort,
                    channelId: generatedMsg.value.sourceChannel,
                    timeout: generatedMsg.value.timeoutTimestamp,
                    memo: generatedMsg.value.memo,
                    height: {
                        revisionNumber: 0,
                        revisionHeight: 0,
                    },
                    amount: {
                        amount: generatedMsg.value.token.amount,
                        denom: generatedMsg.value.token.denom,
                    },
                    sender: generatedMsg.value.sender,
                    receiver: generatedMsg.value.receiver,
                });
                return [4, (keplr === null || keplr === void 0 ? void 0 : keplr.getKey(chainId))];
            case 3:
                pubKeyResult = (_c = (_d.sent())) === null || _c === void 0 ? void 0 : _c.pubKey;
                pubKey = Buffer.from(pubKeyResult).toString('base64');
                signDoc = (0, sdk_ts_1.createTransaction)({
                    pubKey: pubKey,
                    chainId: chainId,
                    fee: utils_1.DEFAULT_STD_FEE,
                    message: msg,
                    sequence: baseAccount.sequence,
                    timeoutHeight: timeoutHeight,
                    accountNumber: baseAccount.accountNumber,
                }).signDoc;
                signer = keplr.getOfflineSigner(chainId);
                return [4, (signer === null || signer === void 0 ? void 0 : signer.signDirect(generatedMsg.value.sender, signDoc))];
            case 4:
                result = _d.sent();
                if (!result) return [3, 7];
                txRaw = (0, sdk_ts_1.getTxRawFromTxRawOrDirectSignResponse)(result);
                return [4, (0, helper_1.broadcastTx)({ chainId: chainId, txRaw: txRaw, keplr: keplr })];
            case 5:
                txHash = _d.sent();
                console.log('injectiveHash:', txHash);
                if (!txHash) return [3, 7];
                return [4, new sdk_ts_1.TxRestClient(restEndpoint).fetchTxPoll(txHash)];
            case 6:
                response = _d.sent();
                console.log('injectiveResponse:', response);
                return [2, response];
            case 7: return [2];
        }
    });
}); };
exports.injectiveTransfer = injectiveTransfer;
