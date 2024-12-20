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
exports.polkadotTransfer = exports.buildStatusInfo = void 0;
exports.transferXcm = transferXcm;
exports.transferIbc = transferIbc;
var util_crypto_1 = require("@polkadot/util-crypto");
var type_builder_1 = require("./type-builder");
var helper_1 = require("./helper");
var config_1 = require("../../config");
var common_1 = require("../common");
// import { makeIbcToCosmos, makeIbcToPolkadot, getDefaultTxHeight } from './ibc';
function signAndSendTransfer(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var _c, account, signerOption;
        var _this = this;
        var api = _b.api, apiTo = _b.apiTo, fromAddress = _b.fromAddress, toAddress = _b.toAddress, extrinsic = _b.extrinsic, isIbc = _b.isIbc, filter = _b.filter, signer = _b.signer;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, (0, helper_1.getSignAndSendParams)(fromAddress, signer)];
                case 1:
                    _c = _d.sent(), account = _c.account, signerOption = _c.signerOption;
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var state = { isFailedTxShown: false };
                            extrinsic
                                .signAndSend(account, signerOption, function (result) { return __awaiter(_this, void 0, void 0, function () {
                                var dispatchError, status, events, _a, txHash, sequence, errorMessage, decoded, docs, name_1, section, errorResult, found, header, _b, result_1, found_1, result_2, header, _c, result_3;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            dispatchError = result.dispatchError, status = result.status, events = result.events;
                                            _a = (0, exports.buildStatusInfo)(result.txHash.toString(), JSON.parse(JSON.stringify(events))), txHash = _a.txHash, sequence = _a.sequence;
                                            // Handle dispatch errors
                                            if (dispatchError) {
                                                errorMessage = void 0;
                                                if (dispatchError.isModule) {
                                                    decoded = api.registry.findMetaError(dispatchError.asModule);
                                                    docs = decoded.docs, name_1 = decoded.name, section = decoded.section;
                                                    errorMessage = "".concat(section, ".").concat(name_1, ": ").concat(docs.join(' '));
                                                }
                                                else {
                                                    errorMessage = dispatchError.toString();
                                                }
                                                if ((result === null || result === void 0 ? void 0 : result.txHash) && !state.isFailedTxShown) {
                                                    state.isFailedTxShown = true;
                                                }
                                                errorResult = {
                                                    destAddress: toAddress,
                                                    txHash: txHash,
                                                    sequence: sequence,
                                                    status: 'error',
                                                    currentHopIndex: 0,
                                                    message: errorMessage,
                                                };
                                                return [2 /*return*/, reject(errorResult)];
                                            }
                                            found = JSON.parse(JSON.stringify(events)).find(function (e) { var _a, _b; return (_b = (_a = e.event) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.find(function (data) { var _a; return ((_a = data['incomplete']) === null || _a === void 0 ? void 0 : _a.length) > 0; }); });
                                            if (found) {
                                                return [2 /*return*/, reject({
                                                        destAddress: toAddress,
                                                        txHash: txHash,
                                                        sequence: sequence,
                                                        status: 'error',
                                                        message: 'Transfer incomplete',
                                                    })];
                                            }
                                            if (!status) return [3 /*break*/, 9];
                                            if (!isIbc) return [3 /*break*/, 4];
                                            if (!apiTo) return [3 /*break*/, 2];
                                            return [4 /*yield*/, apiTo.rpc.chain.getHeader()];
                                        case 1:
                                            _b = _d.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _b = null;
                                            _d.label = 3;
                                        case 3:
                                            header = _b;
                                            result_1 = {
                                                destAddress: toAddress,
                                                txHash: txHash,
                                                sequence: sequence,
                                                currentHopIndex: 0,
                                                status: 'pending',
                                                latestBlockNumber: header ? header.number.toNumber() : -1, // For COSMOS
                                            };
                                            return [2 /*return*/, resolve(result_1)];
                                        case 4:
                                            if (!filter) return [3 /*break*/, 5];
                                            found_1 = events.find(function (e) { return filter(e.event); });
                                            if (!found_1 && !state.isFailedTxShown) {
                                                state.isFailedTxShown = true;
                                                return [2 /*return*/, reject({
                                                        destAddress: toAddress,
                                                        txHash: txHash,
                                                        sequence: sequence,
                                                        status: 'error',
                                                    })];
                                            }
                                            if (found_1 && found_1.event.data.find(function (x) { return x['isComplete']; })) {
                                                result_2 = {
                                                    destAddress: toAddress,
                                                    txHash: txHash,
                                                    sequence: sequence,
                                                    currentHopIndex: 0,
                                                    status: 'success',
                                                };
                                                return [2 /*return*/, resolve(result_2)];
                                            }
                                            return [3 /*break*/, 9];
                                        case 5:
                                            if (!apiTo) return [3 /*break*/, 7];
                                            return [4 /*yield*/, apiTo.rpc.chain.getHeader()];
                                        case 6:
                                            _c = _d.sent();
                                            return [3 /*break*/, 8];
                                        case 7:
                                            _c = null;
                                            _d.label = 8;
                                        case 8:
                                            header = _c;
                                            result_3 = {
                                                destAddress: toAddress,
                                                txHash: txHash,
                                                sequence: sequence,
                                                status: 'success',
                                                currentHopIndex: 0,
                                                latestBlockNumber: header ? header.number.toNumber() : -1,
                                            };
                                            return [2 /*return*/, resolve(result_3)];
                                        case 9: return [2 /*return*/];
                                    }
                                });
                            }); })
                                .catch(function (e) {
                                console.log('errorSDKSignAndSend', e);
                                return reject({
                                    fromAddress: fromAddress,
                                    destAddress: toAddress,
                                    txHash: 'NONE',
                                    sequence: 'NONE',
                                    status: 'error',
                                    errorMessage: e.toString(),
                                });
                            });
                        })];
            }
        });
    });
}
var buildStatusInfo = function (txHash, events) {
    if (!events)
        return { txHash: txHash, sequence: 'NONE' };
    var packet = events
        .filter(function (d) { return d.event && d.event.data && typeof d.event.data[0] !== 'string'; })
        .reduce(function (a, e) { return a.concat(e.event.data[0]); }, []);
    for (var i = 0; i < packet.length; i++) {
        if (packet[i].ok &&
            packet[i].ok.sendPacket &&
            packet[i].ok.sendPacket.sequence) {
            var sequence = packet[i].ok.sendPacket.sequence;
            return { txHash: txHash, sequence: sequence };
        }
    }
    return { txHash: txHash, sequence: 'NONE' };
};
exports.buildStatusInfo = buildStatusInfo;
function transferXcm(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var _c, fromSs58Format, isFromParachain, _d, toSs58Format, isToParachain, _e, xcmType, version, ethreumlish, convertedToAddr, convertedFromAddr, result, e_1;
        var fromChainId = _b.fromChainId, toChainId = _b.toChainId, fromAddress = _b.fromAddress, toAddress = _b.toAddress, amount = _b.amount, assetId = _b.assetId, signer = _b.signer, fromApi = _b.fromApi, toApi = _b.toApi;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 2, , 3]);
                    _c = config_1.networks[fromChainId].polkadot, fromSs58Format = _c.ss58Format, isFromParachain = _c.isParachain;
                    _d = config_1.networks[toChainId].polkadot, toSs58Format = _d.ss58Format, isToParachain = _d.isParachain;
                    _e = (0, common_1.getXcmInfo)(fromChainId, toChainId), xcmType = _e.xcmType, version = _e.version;
                    console.log('xcmTypeSDK', xcmType, version);
                    ethreumlish = ['2004', '2023'];
                    convertedToAddr = ethreumlish.includes(toChainId)
                        ? toAddress
                        : (0, util_crypto_1.encodeAddress)((0, util_crypto_1.decodeAddress)(toAddress), toSs58Format);
                    convertedFromAddr = ethreumlish.includes(fromChainId)
                        ? fromAddress
                        : (0, util_crypto_1.encodeAddress)((0, util_crypto_1.decodeAddress)(fromAddress), fromSs58Format);
                    // Ensure transferMedium is defined
                    if (!xcmType || !version)
                        return [2 /*return*/];
                    result = void 0;
                    // Handle different transfer mediums
                    if (xcmType === 'xcmPallet.reserveTransferAssets') {
                        if (version === 'V1') {
                            result = (0, type_builder_1.buildXcmPalletTransferV1)(fromApi, toChainId, convertedToAddr, amount);
                        }
                        else {
                            result = (0, type_builder_1.buildXcmPalletTransferV2)(fromApi, toChainId, convertedToAddr, amount);
                        }
                    }
                    else if (xcmType === 'xTokens.transfer') {
                        if (version === 'V2') {
                            if (assetId === '32' &&
                                toChainId === '2087' &&
                                fromChainId === '2001') {
                                result = (0, type_builder_1.buildXTokensTransferV2)(fromApi, convertedToAddr, assetId, amount, toChainId, 'VToken', 'AccountId32');
                            }
                            else if (assetId === '31' &&
                                toChainId === '2087' &&
                                fromChainId === '2001') {
                                result = (0, type_builder_1.buildXTokensTransferV2)(fromApi, convertedToAddr, assetId, amount, toChainId, 'Native', 'AccountId32');
                            }
                            else if (fromChainId === '2030' && assetId === '33') {
                                result = (0, type_builder_1.buildXTokensTransferV2)(fromApi, convertedToAddr, assetId, amount, toChainId, 'Native', 'AccountId32');
                            }
                            else if (fromChainId === '2030' && assetId === '34') {
                                result = (0, type_builder_1.buildXTokensTransferV2)(fromApi, convertedToAddr, '0', amount, toChainId, 'VToken2', 'AccountId32');
                            }
                            else if (toChainId === '2004' || toChainId === '2023') {
                                result = (0, type_builder_1.buildXTokensTransferV2)(fromApi, convertedToAddr, assetId, amount, toChainId, 'AssetId', 'AccountKey20');
                            }
                            else if (fromChainId === '2004' || fromChainId === '2023') {
                                result = (0, type_builder_1.buildXTokensMoonbeamTransferV2)(fromApi, convertedToAddr, assetId, amount, toChainId);
                            }
                            else {
                                result = (0, type_builder_1.buildXTokensTransferV2)(fromApi, convertedToAddr, assetId, amount, toChainId, 'AssetId', 'AccountId32');
                            }
                        }
                        else {
                            if (fromChainId === '2125') {
                                result = (0, type_builder_1.buildXTokensTransferV3X2)(fromApi, convertedToAddr, '0', amount, toChainId);
                            }
                            else {
                                result = (0, type_builder_1.buildXTokensTransferV3)(fromApi, convertedToAddr, assetId, amount);
                            }
                        }
                    }
                    else if (xcmType === 'polkadotXcm.limitedReserveTransferAssets') {
                        if (version === 'V2') {
                            result = (0, type_builder_1.buildPolkadotXcmTransferV2)(fromApi, convertedToAddr, toChainId, assetId, amount, fromChainId === '1000' ? '1984' : '' // only for statemine
                            );
                        }
                        else {
                            result = (0, type_builder_1.buildPolkadotXcmTransferV3)(fromApi, convertedToAddr, toChainId, amount);
                        }
                    }
                    else if (xcmType === 'xcmPallet.limitedReserveTransferAssets') {
                        result = (0, type_builder_1.buildXcmLimitedReserveTransferV2)(fromApi, convertedToAddr, toChainId, assetId, amount);
                    }
                    else if (xcmType === 'xTokens.transferMultiasset') {
                        result = (0, type_builder_1.buildXcmVersionedMultiAssetV3)(fromApi, convertedToAddr, toChainId, amount, '1984', '');
                    }
                    return [4 /*yield*/, signAndSendTransfer({
                            api: fromApi,
                            apiTo: toApi,
                            fromAddress: convertedFromAddr,
                            toAddress: convertedToAddr,
                            extrinsic: result(),
                            isIbc: false,
                            filter: isFromParachain ? null : fromApi.events.xcmPallet.Attempted.is,
                            signer: signer,
                        })];
                case 1: 
                // Call signAndSendTransfer with the appropriate parameters
                return [2 /*return*/, _f.sent()];
                case 2:
                    e_1 = _f.sent();
                    console.log('errorSDK', e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function transferIbc(_a) {
    return __awaiter(this, arguments, void 0, function (_b
    // networkFrom: NetworkType,
    // networkTo: NetworkType,
    // fromAddress: string,
    // toAddress: string,
    // amount: string,
    // assetId: string,
    // feeAmount: string,
    // gas: string,
    // transferMedium: TransferApi | undefined,
    // memo: string,
    // config: any,
    ) {
        var _c, _d, _e, fromSs58Format, _f, toChainType, _g, _h, _j, toSs58Format, convertedFromAddr, convertedToAddr, extrinsic;
        var fromChainId = _b.fromChainId, toChainId = _b.toChainId, fromAddress = _b.fromAddress, toAddress = _b.toAddress, amount = _b.amount, assetId = _b.assetId, signer = _b.signer, sourceChannel = _b.sourceChannel, memo = _b.memo, fromApi = _b.fromApi, toApi = _b.toApi, destinationHeight = _b.destinationHeight;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    if (!assetId)
                        throw 'assetId not found';
                    if (!sourceChannel)
                        throw 'sourceChannel not found';
                    _c = config_1.networks[fromChainId].polkadot, _d = _c === void 0 ? {} : _c, _e = _d.ss58Format, fromSs58Format = _e === void 0 ? 0 : _e;
                    _f = config_1.networks[toChainId], toChainType = _f.chainType, _g = _f.polkadot, _h = _g === void 0 ? {} : _g, _j = _h.ss58Format, toSs58Format = _j === void 0 ? 0 : _j;
                    convertedFromAddr = (0, util_crypto_1.encodeAddress)((0, util_crypto_1.decodeAddress)(fromAddress), fromSs58Format);
                    convertedToAddr = '';
                    convertedToAddr =
                        config_1.networks[toChainId].chainType === 'polkadot'
                            ? (0, util_crypto_1.encodeAddress)((0, util_crypto_1.decodeAddress)(toAddress), toSs58Format)
                            : toAddress;
                    // const defaultHeight = getPolkadotBlockHeight(height, chainType);
                    extrinsic =
                        toChainType === 'polkadot'
                            ? (0, helper_1.makeIbcToPolkadot)({
                                api: fromApi,
                                toAddress: convertedToAddr,
                                sourceChannel: Number(sourceChannel),
                                assetId: assetId,
                                amount: amount,
                                destinationHeight: destinationHeight,
                                memo: memo,
                            })
                            : (0, helper_1.makeIbcToCosmos)({
                                api: fromApi,
                                toAddress: convertedToAddr,
                                sourceChannel: Number(sourceChannel),
                                assetId: assetId,
                                amount: amount,
                                destinationHeight: destinationHeight,
                                memo: memo,
                            });
                    return [4 /*yield*/, signAndSendTransfer({
                            api: fromApi,
                            apiTo: toApi,
                            fromAddress: convertedFromAddr,
                            toAddress: convertedToAddr,
                            extrinsic: extrinsic,
                            isIbc: true,
                            filter: null,
                            signer: signer,
                        })];
                case 1: return [2 /*return*/, _k.sent()];
            }
        });
    });
}
var polkadotTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var _c;
    var fromChainId = _b.fromChainId, toChainId = _b.toChainId, fromAddress = _b.fromAddress, toAddress = _b.toAddress, amount = _b.amount, assetId = _b.assetId, signer = _b.signer, memo = _b.memo, sourceChannel = _b.sourceChannel, fromApi = _b.fromApi, toApi = _b.toApi, destinationHeight = _b.destinationHeight;
    return __generator(this, function (_d) {
        try {
            if (((_c = (0, common_1.getXcmInfo)(fromChainId, toChainId)) === null || _c === void 0 ? void 0 : _c.type) === 'XCM')
                return [2 /*return*/, transferXcm({
                        fromApi: fromApi,
                        toApi: toApi,
                        fromChainId: fromChainId,
                        toChainId: toChainId,
                        fromAddress: fromAddress,
                        toAddress: toAddress,
                        amount: amount,
                        assetId: assetId,
                        signer: signer,
                    })];
            return [2 /*return*/, transferIbc({
                    fromChainId: fromChainId,
                    toChainId: toChainId,
                    fromAddress: fromAddress,
                    toAddress: toAddress,
                    amount: amount,
                    assetId: assetId,
                    signer: signer,
                    sourceChannel: sourceChannel,
                    memo: memo,
                    destinationHeight: destinationHeight,
                    fromApi: fromApi,
                    toApi: toApi,
                })];
        }
        catch (err) {
            console.error(err);
        }
        return [2 /*return*/];
    });
}); };
exports.polkadotTransfer = polkadotTransfer;
