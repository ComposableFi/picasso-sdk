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
exports.getMultihopPath = exports.makeIbcToCosmos = exports.makeIbcToPolkadot = exports.getPolkadotBlockHeight = exports.getMultiApi = exports.base58Decode = exports.encodeAddress = exports.decodeAddress = void 0;
exports.getSubAccount = getSubAccount;
exports.getPaymentAsset = getPaymentAsset;
exports.setPaymentAsset = setPaymentAsset;
exports.getSignAndSendParams = getSignAndSendParams;
exports.signAndSend = signAndSend;
exports.getAvailableCoin = getAvailableCoin;
exports.getApi = getApi;
var api_1 = require("@polkadot/api");
var big_js_1 = __importDefault(require("big.js"));
var api_scheme_1 = require("./api-scheme");
var config_1 = require("../../config");
var util_1 = require("@polkadot/util");
var util_crypto_1 = require("@polkadot/util-crypto");
Object.defineProperty(exports, "decodeAddress", { enumerable: true, get: function () { return util_crypto_1.decodeAddress; } });
Object.defineProperty(exports, "encodeAddress", { enumerable: true, get: function () { return util_crypto_1.encodeAddress; } });
var util_crypto_2 = require("@polkadot/util-crypto");
Object.defineProperty(exports, "base58Decode", { enumerable: true, get: function () { return util_crypto_2.base58Decode; } });
function checkWalletIdForSigning(accountId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
function getSubAccount(api, poolId) {
    var palletId = api.consts.pablo.palletId.toU8a();
    var poolAccountId = api.createType('([u8; 4], [u8; 8], u64)', [
        api_scheme_1.PALLET_TYPE_ID,
        palletId,
        poolId,
    ]);
    var accountIdu8a = poolAccountId.toU8a();
    var poolAccount = (0, api_scheme_1.concatU8a)(accountIdu8a, new Uint8Array(32 - accountIdu8a.length).fill(0));
    return api.createType('AccountId32', poolAccount).toString();
}
function getPaymentAsset(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var accountId32, result;
        var api = _b.api, accountId = _b.accountId;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    accountId32 = api.createType('AccountId32', accountId);
                    return [4 /*yield*/, api.query.assetTxPayment.paymentAssets(accountId32)];
                case 1:
                    result = _c.sent();
                    return [2 /*return*/, result.toJSON()];
            }
        });
    });
}
function setPaymentAsset(_a) {
    return __awaiter(this, arguments, void 0, function (
    //   networkType: NetworkType,
    //   walletId: PolkadotWalletId,
    //   accountId: string,
    //   assetId: string,
    //   walletApi: WalletApi
    _b) {
        var asset;
        var accountId = _b.accountId, assetId = _b.assetId, signer = _b.signer, api = _b.api;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    asset = Number(assetId) === 1 ? null : api.createType('u128', assetId);
                    return [4 /*yield*/, signAndSend({
                            accountId: accountId,
                            extrinsics: [api.tx.assetTxPayment.setPaymentAsset(accountId, asset)],
                            filter: api.events.system.ExtrinsicSuccess.is,
                            onFailedTx: undefined,
                            api: api,
                            signer: signer,
                        })];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
function getSignAndSendParams(accountId, signer) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, checkWalletIdForSigning(accountId)];
                case 1:
                    _a.sent();
                    if (!signer)
                        throw new Error('No signer found');
                    return [2 /*return*/, {
                            account: accountId,
                            signerOption: { signer: signer },
                        }];
            }
        });
    });
}
function signAndSend(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var _c, account, signerOption;
        var accountId = _b.accountId, extrinsics = _b.extrinsics, filter = _b.filter, onFailedTx = _b.onFailedTx, api = _b.api, signer = _b.signer;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, getSignAndSendParams(accountId, signer)];
                case 1:
                    _c = _d.sent(), account = _c.account, signerOption = _c.signerOption;
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var state = { isFailedTxShown: false };
                            (extrinsics.length === 1 ? extrinsics[0] : api.tx.utility.batch(extrinsics))
                                .signAndSend(account, signerOption, function (result) {
                                var dispatchError = result.dispatchError, status = result.status, events = result.events;
                                if (dispatchError) {
                                    var errorMessage = void 0;
                                    if (dispatchError.isModule) {
                                        var decoded = api.registry.findMetaError(dispatchError.asModule);
                                        var docs = decoded.docs, name_1 = decoded.name, section = decoded.section;
                                        errorMessage = "".concat(section, ".").concat(name_1, ": ").concat(docs.join(' '));
                                    }
                                    else {
                                        errorMessage = dispatchError.toString();
                                    }
                                    if ((result === null || result === void 0 ? void 0 : result.txHash) && !state.isFailedTxShown) {
                                        if (onFailedTx) {
                                            onFailedTx(result, errorMessage);
                                        }
                                        state.isFailedTxShown = true;
                                    }
                                    return reject(state.isFailedTxShown ? null : errorMessage);
                                }
                                if (status.isInBlock || status.isFinalized) {
                                    var found = events.find(function (e) { return filter(e.event); });
                                    if (!found && !state.isFailedTxShown) {
                                        state.isFailedTxShown = true;
                                        if (onFailedTx) {
                                            onFailedTx(result);
                                        }
                                        return reject(null);
                                    }
                                    return resolve(result);
                                }
                                else {
                                    if (typeof window !== 'undefined')
                                        console.log('status', status);
                                }
                            })
                                .catch(function (e) {
                                var errors = e.toString().split(':');
                                reject(Error(errors[errors.length - 1]));
                            });
                        })];
            }
        });
    });
}
function getAvailableCoin(endpoint, accountId) {
    return __awaiter(this, void 0, void 0, function () {
        var api, accountId32, accountInfo, free, feeFrozen, getDecimal;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, getApi(endpoint)];
                case 1:
                    api = _c.sent();
                    accountId32 = api.createType('AccountId32', accountId);
                    return [4 /*yield*/, api.query.system.account(accountId32)];
                case 2:
                    accountInfo = (_c.sent()).toJSON();
                    free = (_a = accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.data) === null || _a === void 0 ? void 0 : _a['free'];
                    feeFrozen = (_b = accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.data) === null || _b === void 0 ? void 0 : _b['frozen'];
                    getDecimal = function (str) {
                        if (!str)
                            return 10;
                        if (str.toString().startsWith('0x'))
                            return 16;
                        return 10;
                    };
                    return [2 /*return*/, new big_js_1.default(parseInt(free, getDecimal(free)) || '0').minus(parseInt(feeFrozen, getDecimal(feeFrozen)) || 0)];
            }
        });
    });
}
function getApi(endpoint, option) {
    return __awaiter(this, void 0, void 0, function () {
        var wsProvider, api, ex_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wsProvider = new api_1.WsProvider(endpoint);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, api_1.ApiPromise.create(__assign({ provider: wsProvider, rpc: api_scheme_1.polkadotApiRpc, types: api_scheme_1.polkadotApiTypes, noInitWarn: false, throwOnConnect: true }, option))];
                case 2:
                    api = _a.sent();
                    return [4 /*yield*/, api.isReadyOrError];
                case 3:
                    _a.sent();
                    return [2 /*return*/, api];
                case 4:
                    ex_1 = _a.sent();
                    void wsProvider.disconnect();
                    throw ex_1;
                case 5: return [2 /*return*/];
            }
        });
    });
}
var getMultiApi = function (endpoints) {
    var promises = [];
    endpoints.forEach(function (api) {
        if (api.startsWith('wss://'))
            promises.push(getApi(api));
    });
    return Promise.all(promises);
};
exports.getMultiApi = getMultiApi;
var getPolkadotBlockHeight = function (api_2) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([api_2], __read(args_1), false), void 0, function (api, extra) {
        var height, _a;
        if (extra === void 0) { extra = 100; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = Number;
                    return [4 /*yield*/, api.query.system.number()];
                case 1:
                    height = _a.apply(void 0, [_b.sent()]);
                    return [2 /*return*/, height + extra];
            }
        });
    });
};
exports.getPolkadotBlockHeight = getPolkadotBlockHeight;
var makeIbcToPolkadot = function (_a) {
    var api = _a.api, toAddress = _a.toAddress, sourceChannel = _a.sourceChannel, assetId = _a.assetId, amount = _a.amount, destinationHeight = _a.destinationHeight, _b = _a.memo, memo = _b === void 0 ? '' : _b;
    if (memo === '') {
        return api.tx.ibc.transfer(api.createType('PalletIbcTransferParams', {
            to: { id: api.createType('AccountId32', toAddress) },
            sourceChannel: api.createType('u64', sourceChannel),
            timeout: {
                absolute: {
                    height: api.createType('u64', destinationHeight),
                },
            },
        }), api.createType('u128', assetId), api.createType('u128', amount), undefined);
    }
    return api.tx.ibc.transfer(api.createType('PalletIbcTransferParams', {
        to: { id: api.createType('AccountId32', toAddress) },
        sourceChannel: api.createType('u64', sourceChannel),
        timeout: {
            absolute: {
                height: api.createType('u64', destinationHeight),
            },
        },
    }), api.createType('u128', assetId), api.createType('u128', amount), api.createType('Text', memo));
};
exports.makeIbcToPolkadot = makeIbcToPolkadot;
var makeIbcToCosmos = function (_a) {
    var api = _a.api, toAddress = _a.toAddress, sourceChannel = _a.sourceChannel, assetId = _a.assetId, amount = _a.amount, destinationHeight = _a.destinationHeight, _b = _a.memo, memo = _b === void 0 ? '' : _b;
    if (memo === '') {
        return api.tx.ibc.transfer(api.createType('PalletIbcTransferParams', {
            to: { Raw: toAddress },
            sourceChannel: api.createType('u64', sourceChannel),
            timeout: {
                absolute: {
                    height: api.createType('u64', destinationHeight),
                },
            },
        }), api.createType('AssetId', assetId), api.createType('Balance', amount), undefined);
    }
    return api.tx.ibc.transfer(api.createType('PalletIbcTransferParams', {
        to: { Raw: toAddress },
        sourceChannel: api.createType('u64', sourceChannel),
        timeout: {
            absolute: {
                height: api.createType('u64', destinationHeight),
            },
        },
    }), api.createType('AssetId', assetId), api.createType('Balance', amount), api.createType('Text', memo));
};
exports.makeIbcToCosmos = makeIbcToCosmos;
var getMultihopPath = function (fromChainId, networkType // composable |picasso
) { return __awaiter(void 0, void 0, void 0, function () {
    var rpc, api, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                rpc = config_1.networks[networkType].rpc;
                return [4 /*yield*/, getApi(rpc)];
            case 1:
                api = _a.sent();
                return [4 /*yield*/, api.query.palletMultihopXcmIbc.routeIdToRoutePath.entries()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result.map(function (p) {
                        var paths = JSON.parse(JSON.stringify(p[1])).map(function (path) {
                            return __assign(__assign({}, path[0]), { chainId: path[1].startsWith('0x')
                                    ? chainNameMap[(0, util_1.hexToString)(path[1])]
                                    : path[1] });
                        });
                        var to = paths[paths.length - 1].chainId || 'NONE';
                        var route = {
                            fromChainId: fromChainId, // Join the characters into a string.
                            toChainId: to.toString(),
                            paraChain: fromChainId === 'kusama' ? undefined : networkType,
                            index: p[0][48], // currently p[0] is array of numbers - the 48th digit represents the actual index. but on the polkadot.js UI, this field is a simple integer.
                            paths: paths,
                        };
                        return route;
                    })];
        }
    });
}); };
exports.getMultihopPath = getMultihopPath;
// for batching tx - inside of route there's a chain name. need to match it with networkType
var chainNameMap = {
    polkadot: 'polkadot',
    picasso: '2087',
    composable: '2019',
    centauri: 'centauri-1',
    osmo: 'osmosis-1',
    cre: 'crescent-1',
    neutron: 'neutron-1',
    kujira: 'kaiyo-1',
    celestia: 'celestia',
    umee: 'umee-1',
    sei: 'pacific-1',
    secret: 'secret-4',
    quicksilver: 'quicksilver-2',
    inj: 'injective-1',
    agoric: 'agoric-3',
};
