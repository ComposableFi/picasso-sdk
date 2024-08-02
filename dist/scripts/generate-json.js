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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var imageList_1 = require("./imageList");
var IMG_URL_BASE = 'https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens';
var mainnetPath = path_1.default.resolve(__dirname, '../src/config/cosmos/keplr-info/mainnet');
var crossChainAssetsPath = path_1.default.resolve(__dirname, '../src/config/crossChainAssets.ts');
var solanaAssetsPath = path_1.default.resolve(__dirname, '../src/config/solanaAssets.ts');
var ethereumAssetsPath = path_1.default.resolve(__dirname, '../src/config/ethereumAssets.ts');
var channelMapPath = path_1.default.resolve(__dirname, '../src/config/channelMap.ts');
var tokensPerChannelPath = path_1.default.resolve(__dirname, '../src/config/tokensPerChannel.ts');
var coingeckoPath = path_1.default.resolve(__dirname, '../src/config/coinGecko.ts');
// const chainFiles = fs.readdirSync(mainnetPath);
var chainFiles = fs_1.default
    .readdirSync(mainnetPath)
    .filter(function (file) { return file.endsWith('.ts') && file !== 'index.ts'; });
function importModule(modulePath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve("".concat(modulePath)).then(function (s) { return __importStar(require(s)); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
var getImageUrl = function (input) {
    var refinedInput = input.replace(/ /g, '');
    var tokenFileName = imageList_1.imageList.find(function (key) { return key.split('.svg')[0].toUpperCase() === refinedInput.toUpperCase(); });
    var tokenFileSimilarName_A = imageList_1.imageList.find(function (key) {
        return key.split('.svg')[0].toUpperCase().includes(refinedInput.toUpperCase());
    });
    var tokenFileSimilarName_B = imageList_1.imageList.find(function (key) {
        return refinedInput.toUpperCase().includes(key.split('.svg')[0].toUpperCase());
    });
    var fileName = tokenFileName || tokenFileSimilarName_A || tokenFileSimilarName_B;
    return fileName ? IMG_URL_BASE + '/' + fileName : '';
};
function processChainFiles() {
    return __awaiter(this, void 0, void 0, function () {
        var crossChainAssetsModule, solanaAssetsModule, ethereumAssetsModule, channelMapModule, tokensPerChannelModule, coingeckoModule, crossChainData_1, solanaAssetsData_1, ethereumAssetsData_1, channelMapData, tokensPerChannelData, coingeckoData_1, polkadotMap, _loop_1, chainFiles_1, chainFiles_1_1, file, e_1;
        var e_2, _a;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    _o.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, importModule(crossChainAssetsPath)];
                case 1:
                    crossChainAssetsModule = _o.sent();
                    return [4 /*yield*/, importModule(solanaAssetsPath)];
                case 2:
                    solanaAssetsModule = _o.sent();
                    return [4 /*yield*/, importModule(ethereumAssetsPath)];
                case 3:
                    ethereumAssetsModule = _o.sent();
                    return [4 /*yield*/, importModule(channelMapPath)];
                case 4:
                    channelMapModule = _o.sent();
                    return [4 /*yield*/, importModule(tokensPerChannelPath)];
                case 5:
                    tokensPerChannelModule = _o.sent();
                    return [4 /*yield*/, importModule(coingeckoPath)];
                case 6:
                    coingeckoModule = _o.sent();
                    crossChainData_1 = crossChainAssetsModule.default || crossChainAssetsModule;
                    solanaAssetsData_1 = solanaAssetsModule.default || solanaAssetsModule;
                    ethereumAssetsData_1 = ethereumAssetsModule.default || ethereumAssetsModule;
                    channelMapData = channelMapModule.default || channelMapModule;
                    tokensPerChannelData = tokensPerChannelModule.default || tokensPerChannelModule;
                    coingeckoData_1 = coingeckoModule.default || coingeckoModule;
                    polkadotMap = {
                        PICASSO: {
                            chainId: '2087',
                        },
                        POLKADOT: {
                            chainId: 'polkadot',
                        },
                        KUSAMA: {
                            chainId: 'kusama',
                        },
                        COMPOSABLE: {
                            chainId: '2019',
                        },
                        STATEMINE: {
                            chainId: '1000',
                        },
                        TINKERNET: {
                            chainId: '2125',
                        },
                        BIFROST_KUSAMA: {
                            chainId: '2001',
                        },
                        BIFROST_POLKADOT: {
                            chainId: '2030',
                        },
                        ASTAR: {
                            chainId: '2006',
                        },
                        SHIDEN: {
                            chainId: '2007',
                        },
                        AMPLITUDE: {
                            chainId: '2124',
                        },
                        MOONBEAM: {
                            chainId: '2004',
                        },
                        MOONRIVER: {
                            chainId: '2023',
                        },
                    };
                    _loop_1 = function (file) {
                        if (file.endsWith('.ts')) {
                            var chainModule = require(path_1.default.join(mainnetPath, file));
                            var chainData = (chainModule.default || chainModule)[file.split('.')[0]];
                            var refinedChannelMap = channelMapData[(chainData === null || chainData === void 0 ? void 0 : chainData.chainId) || ''];
                            //TODO: 지우고 역으로 찾아서 넣어야 함. 다른 스크립트 생성해야 함.
                            var transformedData = {};
                            //cosmos case
                            if (chainData === null || chainData === void 0 ? void 0 : chainData.rest) {
                                var _p = chainData || {}, chainId_1 = _p.chainId, chainName = _p.chainName, currencies_1 = _p.currencies, chainSymbolImageUrl = _p.chainSymbolImageUrl, feeCurrencies = _p.feeCurrencies, nodeProvider = _p.nodeProvider, rest = _p.rest, rpc = _p.rpc, stakeCurrency = _p.stakeCurrency, features = _p.features, others = __rest(_p, ["chainId", "chainName", "currencies", "chainSymbolImageUrl", "feeCurrencies", "nodeProvider", "rest", "rpc", "stakeCurrency", "features"]);
                                var cosmosAssets = Object.keys(crossChainData_1['cosmos']).filter(function (key) { return crossChainData_1['cosmos'][key].chainId === chainId_1; });
                                transformedData = {
                                    chainId: chainId_1,
                                    rest: rest,
                                    rpc: rpc,
                                    chainName: chainName,
                                    chainSymbolImageUrl: chainSymbolImageUrl,
                                    cosmos: others,
                                    chainType: 'cosmos',
                                    channelMap: refinedChannelMap,
                                    currencies: cosmosAssets === null || cosmosAssets === void 0 ? void 0 : cosmosAssets.map(function (minimalDenom) {
                                        var _a, _b, _c, _d, _e;
                                        var currency = currencies_1.find(function (item) {
                                            return item.coinMinimalDenom.toUpperCase() ===
                                                minimalDenom.toUpperCase();
                                        });
                                        if (!currency) {
                                            console.log('thereIsNo', minimalDenom);
                                            return;
                                        }
                                        var picassoAssetId = Object.keys(crossChainData_1['dotsama']).find(function (key) {
                                            var _a, _b;
                                            return ((_a = crossChainData_1['dotsama'][key]) === null || _a === void 0 ? void 0 : _a.denom) ===
                                                (currency === null || currency === void 0 ? void 0 : currency.coinDenom) &&
                                                ((_b = crossChainData_1['dotsama'][key]) === null || _b === void 0 ? void 0 : _b['network']) !== 'COMPOSABLE';
                                        });
                                        var composableAssetId = Object.keys(crossChainData_1['dotsama']).find(function (key) {
                                            var _a, _b;
                                            return ((_a = crossChainData_1['dotsama'][key]) === null || _a === void 0 ? void 0 : _a.denom) ===
                                                (currency === null || currency === void 0 ? void 0 : currency.coinDenom) &&
                                                ((_b = crossChainData_1['dotsama'][key]) === null || _b === void 0 ? void 0 : _b['network']) === 'COMPOSABLE';
                                        });
                                        //ethereum
                                        var ethereumInfo = ethereumAssetsData_1 === null || ethereumAssetsData_1 === void 0 ? void 0 : ethereumAssetsData_1[currency.coinDenom];
                                        var erc20Address = (ethereumInfo === null || ethereumInfo === void 0 ? void 0 : ethereumInfo.erc20Address) || '';
                                        var ethereumFromCosmosFee = (ethereumInfo === null || ethereumInfo === void 0 ? void 0 : ethereumInfo.cosmosToEthereumFee) || 0;
                                        var ethereumMinimumTransfer = (ethereumInfo === null || ethereumInfo === void 0 ? void 0 : ethereumInfo.minimumTransfer) || 0;
                                        var ethereumMinimalDenom = ((_b = (_a = crossChainData_1['ethereum']) === null || _a === void 0 ? void 0 : _a[erc20Address]) === null || _b === void 0 ? void 0 : _b.minimalDenom) || '';
                                        //solana
                                        var solanaInfo = solanaAssetsData_1 === null || solanaAssetsData_1 === void 0 ? void 0 : solanaAssetsData_1[currency.coinDenom];
                                        var mintAddress = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.mintAddress) || '';
                                        var solanaFromCosmosFee = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.cosmosToSolanaFee) || 0;
                                        var solanaMinimumTransfer = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.minimumTransfer) || 0;
                                        var displayDecimals = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.realDecimals) ||
                                            ((_c = crossChainData_1['solana'][mintAddress]) === null || _c === void 0 ? void 0 : _c.decimals) ||
                                            0;
                                        var solanaMinimalDenom = ((_d = crossChainData_1['solana'][mintAddress]) === null || _d === void 0 ? void 0 : _d.minimalDenom) || '';
                                        var coinGeckoId = ((_e = coingeckoData_1.find(function (coin) {
                                            return coin.name.toUpperCase() === currency.coinDenom.toUpperCase();
                                        })) === null || _e === void 0 ? void 0 : _e.id) ||
                                            (currency === null || currency === void 0 ? void 0 : currency.coinGeckoId) ||
                                            '';
                                        return __assign(__assign({}, currency), { coinGeckoId: coinGeckoId, cosmos: { minimalDenom: currency.coinMinimalDenom }, polkadot: {
                                                picassoAssetId: picassoAssetId, // replace with actual value
                                                composableAssetId: composableAssetId,
                                            }, ethereum: erc20Address
                                                ? {
                                                    minimalDenom: ethereumMinimalDenom,
                                                    erc20Address: erc20Address, // replace with actual value
                                                    fromCosmosFee: ethereumFromCosmosFee, // replace with actual value
                                                    minimumTransfer: ethereumMinimumTransfer, // replace with actual value
                                                }
                                                : {}, solana: mintAddress
                                                ? {
                                                    mintAddress: mintAddress, // replace with actual value
                                                    minimalDenom: solanaMinimalDenom,
                                                    minimumTransfer: solanaMinimumTransfer, // replace with actual value
                                                    fromCosmosFee: solanaFromCosmosFee, // replace with actual value
                                                    displayDecimals: displayDecimals,
                                                }
                                                : {} });
                                    }),
                                    feeCurrencies: feeCurrencies === null || feeCurrencies === void 0 ? void 0 : feeCurrencies.map(function (feeCurrency) {
                                        var gasPriceStep = feeCurrency.gasPriceStep, others = __rest(feeCurrency, ["gasPriceStep"]);
                                        return __assign(__assign({}, others), { cosmos: {
                                                gasPriceStep: gasPriceStep,
                                            } });
                                    }),
                                };
                                //polkadot case
                            }
                            else if ((chainData === null || chainData === void 0 ? void 0 : chainData.handler) === 'POLKADOT') {
                                var polkadotIbcChannelMap = {};
                                var refinedHops = {};
                                polkadotIbcChannelMap =
                                    channelMapData[((_b = chainData.config) === null || _b === void 0 ? void 0 : _b.dotChainId) || ''];
                                for (var key in chainData.hops) {
                                    if (((_c = polkadotMap[key]) === null || _c === void 0 ? void 0 : _c.chainId) &&
                                        chainData.hops[key].type !== 'IBC') {
                                        refinedHops[(_d = polkadotMap[key]) === null || _d === void 0 ? void 0 : _d.chainId] = chainData.hops[key];
                                    }
                                }
                                var tokensArray = Object.values(chainData.hops).reduce(function (acc, item) {
                                    if (item.tokens) {
                                        acc.push.apply(acc, __spreadArray([], __read(item.tokens), false));
                                    }
                                    return acc;
                                }, []);
                                var dotAssetInfo_1 = crossChainData_1['dotsama'][((_e = chainData.config) === null || _e === void 0 ? void 0 : _e.assetId) || ''];
                                var coinGeckoIdForFee = ((_f = coingeckoData_1.find(function (coin) {
                                    return coin.name.toUpperCase() === dotAssetInfo_1.denom.toUpperCase();
                                })) === null || _f === void 0 ? void 0 : _f.id) || '';
                                transformedData = {
                                    chainId: (_g = chainData.config) === null || _g === void 0 ? void 0 : _g.dotChainId,
                                    rest: '',
                                    rpc: chainData.config.endpoint[0],
                                    chainName: (_h = chainData.config) === null || _h === void 0 ? void 0 : _h.name,
                                    channelMap: polkadotIbcChannelMap,
                                    chainSymbolImageUrl: getImageUrl((_j = chainData.config) === null || _j === void 0 ? void 0 : _j.name),
                                    chainType: 'polkadot',
                                    polkadot: {
                                        ss58Format: (_k = chainData.config) === null || _k === void 0 ? void 0 : _k.ss58_format,
                                        isParachain: ((_l = chainData.config) === null || _l === void 0 ? void 0 : _l.chain_type) === 'PARACHAIN',
                                        relayChain: Object.keys(chainData.hops).includes('COMPOSABLE')
                                            ? 'polkadot'
                                            : 'kusama',
                                        hops: refinedHops,
                                    },
                                    currencies: tokensArray === null || tokensArray === void 0 ? void 0 : tokensArray.map(function (currency) {
                                        var _a, _b, _c, _d, _e, _f, _g, _h;
                                        var picassoAssetId = Object.keys(crossChainData_1['dotsama']).find(function (key) {
                                            var _a;
                                            return key === currency &&
                                                ((_a = crossChainData_1['dotsama'][key]) === null || _a === void 0 ? void 0 : _a['network']) !== 'COMPOSABLE';
                                        });
                                        var composableAssetId = Object.keys(crossChainData_1['dotsama']).find(function (key) {
                                            var _a;
                                            return key === currency &&
                                                ((_a = crossChainData_1['dotsama'][key]) === null || _a === void 0 ? void 0 : _a['network']) === 'COMPOSABLE';
                                        });
                                        var denom = ((_a = crossChainData_1['dotsama'][currency]) === null || _a === void 0 ? void 0 : _a.denom) || '';
                                        var decimal = ((_b = crossChainData_1['dotsama'][currency]) === null || _b === void 0 ? void 0 : _b.decimals) || '';
                                        //ethereum
                                        var ethereumInfo = ethereumAssetsData_1 === null || ethereumAssetsData_1 === void 0 ? void 0 : ethereumAssetsData_1[denom];
                                        var erc20Address = (ethereumInfo === null || ethereumInfo === void 0 ? void 0 : ethereumInfo.erc20Address) || '';
                                        var ethereumFromCosmosFee = (ethereumInfo === null || ethereumInfo === void 0 ? void 0 : ethereumInfo.cosmosToEthereumFee) || 0;
                                        var ethereumMinimumTransfer = (ethereumInfo === null || ethereumInfo === void 0 ? void 0 : ethereumInfo.minimumTransfer) || 0;
                                        var ethereumMinimalDenom = ((_d = (_c = crossChainData_1['ethereum']) === null || _c === void 0 ? void 0 : _c[erc20Address]) === null || _d === void 0 ? void 0 : _d.minimalDenom) || '';
                                        //solana
                                        var solanaInfo = solanaAssetsData_1 === null || solanaAssetsData_1 === void 0 ? void 0 : solanaAssetsData_1[denom];
                                        var mintAddress = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.mintAddress) || '';
                                        var solanaFromCosmosFee = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.cosmosToSolanaFee) || 0;
                                        var solanaMinimumTransfer = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.minimumTransfer) || 0;
                                        var displayDecimals = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.realDecimals) ||
                                            ((_e = crossChainData_1['solana'][mintAddress]) === null || _e === void 0 ? void 0 : _e.decimals) ||
                                            0;
                                        var solanaMinimalDenom = ((_f = crossChainData_1['solana'][mintAddress]) === null || _f === void 0 ? void 0 : _f.minimalDenom) || '';
                                        //cosmos
                                        var cosmosKey = (_g = Object.keys(crossChainData_1['cosmos'])) === null || _g === void 0 ? void 0 : _g.find(function (key) { return crossChainData_1['cosmos'][key].denom === denom; });
                                        var cosmosInfo = crossChainData_1['cosmos'][cosmosKey];
                                        var coinGeckoId = ((_h = coingeckoData_1.find(function (coin) {
                                            return coin.name.toUpperCase() === denom.toUpperCase() ||
                                                (coin.name === 'BNC' && denom.includes('BNC_'));
                                        })) === null || _h === void 0 ? void 0 : _h.id) || '';
                                        return {
                                            coinDenom: denom,
                                            coinDecimals: decimal,
                                            coinImageUrl: getImageUrl(denom),
                                            coinGeckoId: coinGeckoId,
                                            cosmos: (cosmosInfo === null || cosmosInfo === void 0 ? void 0 : cosmosInfo.minimalDenom)
                                                ? { minimalDenom: cosmosInfo.minimalDenom }
                                                : {},
                                            polkadot: {
                                                picassoAssetId: picassoAssetId, // replace with actual value
                                                composableAssetId: composableAssetId,
                                            },
                                            ethereum: erc20Address
                                                ? {
                                                    minimalDenom: ethereumMinimalDenom,
                                                    erc20Address: erc20Address, // replace with actual value
                                                    fromCosmosFee: ethereumFromCosmosFee, // replace with actual value
                                                    minimumTransfer: ethereumMinimumTransfer, // replace with actual value
                                                }
                                                : {},
                                            solana: mintAddress
                                                ? {
                                                    mintAddress: mintAddress, // replace with actual value
                                                    minimalDenom: solanaMinimalDenom,
                                                    minimumTransfer: solanaMinimumTransfer, // replace with actual value
                                                    fromCosmosFee: solanaFromCosmosFee, // replace with actual value
                                                    displayDecimals: displayDecimals,
                                                }
                                                : {},
                                        };
                                    }),
                                    feeCurrencies: [
                                        {
                                            coinDenom: dotAssetInfo_1.denom,
                                            coinDecimals: dotAssetInfo_1.decimals,
                                            coinImageUrl: getImageUrl(dotAssetInfo_1.denom),
                                            coinMinimalDenom: '',
                                            coinGeckoId: coinGeckoIdForFee,
                                        },
                                    ],
                                };
                            }
                            else if ((chainData === null || chainData === void 0 ? void 0 : chainData.handler) === 'SOLANA') {
                                var _q = chainData || {}, chainId = _q.chainId, chainName = _q.chainName, currencies = _q.currencies, feeCurrencies = _q.feeCurrencies, nodeProvider = _q.nodeProvider, rest = _q.rest, rpc = _q.rpc, stakeCurrency = _q.stakeCurrency, features = _q.features, others = __rest(_q, ["chainId", "chainName", "currencies", "feeCurrencies", "nodeProvider", "rest", "rpc", "stakeCurrency", "features"]);
                                var solanaAssets = Object.keys(crossChainData_1['solana']).filter(function (currency) {
                                    return !crossChainData_1['solana'][currency].minimalDenom.includes('channel-');
                                });
                                transformedData = {
                                    chainId: chainId,
                                    rest: rest,
                                    rpc: rpc,
                                    chainName: chainName,
                                    chainSymbolImageUrl: 'https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/solana.svg',
                                    chainType: 'solana',
                                    channelMap: refinedChannelMap,
                                    currencies: solanaAssets === null || solanaAssets === void 0 ? void 0 : solanaAssets.map(function (currency) {
                                        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                                        //get image
                                        var denom = ((_a = crossChainData_1['solana'][currency]) === null || _a === void 0 ? void 0 : _a.denom) || '';
                                        var picassoAssetId = Object.keys(crossChainData_1['dotsama']).find(function (key) {
                                            var _a, _b;
                                            return denom === ((_a = crossChainData_1['dotsama'][key]) === null || _a === void 0 ? void 0 : _a.denom) &&
                                                ((_b = crossChainData_1['dotsama'][key]) === null || _b === void 0 ? void 0 : _b['network']) !== 'COMPOSABLE';
                                        });
                                        var composableAssetId = Object.keys(crossChainData_1['dotsama']).find(function (key) {
                                            var _a, _b;
                                            return denom === ((_a = crossChainData_1['dotsama'][key]) === null || _a === void 0 ? void 0 : _a.denom) &&
                                                ((_b = crossChainData_1['dotsama'][key]) === null || _b === void 0 ? void 0 : _b['network']) === 'COMPOSABLE';
                                        });
                                        //cosmos
                                        var cosmosKey = (_b = Object.keys(crossChainData_1['cosmos'])) === null || _b === void 0 ? void 0 : _b.find(function (item) {
                                            return crossChainData_1['cosmos'][item].denom.toUpperCase() ===
                                                denom.toUpperCase();
                                        });
                                        var cosmosMinimalDenom = ((_c = crossChainData_1['cosmos'][cosmosKey]) === null || _c === void 0 ? void 0 : _c.minimalDenom) || '';
                                        //solana
                                        var solanaInfo = solanaAssetsData_1 === null || solanaAssetsData_1 === void 0 ? void 0 : solanaAssetsData_1[denom];
                                        var solanaFromCosmosFee = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.cosmosToSolanaFee) || 0;
                                        var solanaMinimumTransfer = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.minimumTransfer) || 0;
                                        var displayDecimals = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.realDecimals) ||
                                            ((_d = crossChainData_1['solana'][currency]) === null || _d === void 0 ? void 0 : _d.decimals) ||
                                            0;
                                        var solanaMinimalDenom = ((_e = crossChainData_1['solana'][currency]) === null || _e === void 0 ? void 0 : _e.minimalDenom) || '';
                                        //ethereum
                                        var ethereumAssetId = Object.keys(crossChainData_1['ethereum']).find(function (key) {
                                            var _a, _b;
                                            return ((_a = crossChainData_1['ethereum'][key]) === null || _a === void 0 ? void 0 : _a.denom.toUpperCase()) ===
                                                ((_b = crossChainData_1['solana'][currency]) === null || _b === void 0 ? void 0 : _b.denom.toUpperCase());
                                        });
                                        var erc20Address = ethereumAssetId || '';
                                        var ethereumInfo = ethereumAssetsData_1 === null || ethereumAssetsData_1 === void 0 ? void 0 : ethereumAssetsData_1[denom];
                                        var ethereumFromCosmosFee = (ethereumInfo === null || ethereumInfo === void 0 ? void 0 : ethereumInfo.cosmosToEthereumFee) || 0;
                                        var ethereumMinimumTransfer = (ethereumInfo === null || ethereumInfo === void 0 ? void 0 : ethereumInfo.minimumTransfer) || 0;
                                        var ethereumMinimalDenom = ((_g = (_f = crossChainData_1['ethereum']) === null || _f === void 0 ? void 0 : _f[erc20Address]) === null || _g === void 0 ? void 0 : _g.minimalDenom) || '';
                                        var coinGeckoId = ((_h = coingeckoData_1.find(function (coin) {
                                            var _a, _b;
                                            return coin.name.toUpperCase() ===
                                                ((_b = (_a = crossChainData_1['solana'][currency]) === null || _a === void 0 ? void 0 : _a.denom) === null || _b === void 0 ? void 0 : _b.toUpperCase());
                                        })) === null || _h === void 0 ? void 0 : _h.id) || '';
                                        return {
                                            coinImageUrl: getImageUrl(denom),
                                            coinDecimals: ((_j = crossChainData_1['solana'][currency]) === null || _j === void 0 ? void 0 : _j.decimals) || 0,
                                            coinDenom: denom,
                                            coinGeckoId: coinGeckoId,
                                            cosmos: {
                                                minimalDenom: cosmosMinimalDenom,
                                            },
                                            polkadot: {
                                                picassoAssetId: picassoAssetId,
                                                composableAssetId: composableAssetId,
                                            },
                                            ethereum: erc20Address
                                                ? {
                                                    minimalDenom: ethereumMinimalDenom,
                                                    erc20Address: erc20Address, // replace with actual value
                                                    fromCosmosFee: ethereumFromCosmosFee, // replace with actual value
                                                    minimumTransfer: ethereumMinimumTransfer, // replace with actual value
                                                }
                                                : {},
                                            solana: currency
                                                ? {
                                                    mintAddress: currency, // replace with actual value
                                                    minimalDenom: solanaMinimalDenom,
                                                    minimumTransfer: solanaMinimumTransfer, // replace with actual value
                                                    fromCosmosFee: solanaFromCosmosFee, // replace with actual value
                                                    displayDecimals: displayDecimals,
                                                }
                                                : {},
                                        };
                                    }),
                                    feeCurrencies: [
                                        {
                                            coinDenom: 'SOL',
                                            coinMinimalDenom: 'sol',
                                            coinDecimals: 9,
                                            coinGeckoId: 'solana',
                                        },
                                    ],
                                };
                            }
                            else if ((chainData === null || chainData === void 0 ? void 0 : chainData.handler) === 'ETHEREUM') {
                                var _r = chainData || {}, chainId = _r.chainId, chainName = _r.chainName, currencies = _r.currencies, rest = _r.rest, rpc = _r.rpc, others = __rest(_r, ["chainId", "chainName", "currencies", "rest", "rpc"]);
                                // it should be native asset
                                var ethereumAssets = Object.keys(crossChainData_1['ethereum']).filter(function (currency) {
                                    return !crossChainData_1['ethereum'][currency].minimalDenom.includes('channel-');
                                });
                                transformedData = {
                                    chainId: chainId,
                                    rest: rest,
                                    rpc: rpc,
                                    chainName: chainName,
                                    chainSymbolImageUrl: 'https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ethereum.svg',
                                    chainType: 'ethereum',
                                    channelMap: refinedChannelMap,
                                    currencies: ethereumAssets === null || ethereumAssets === void 0 ? void 0 : ethereumAssets.map(function (currency) {
                                        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                                        var denom = ((_a = crossChainData_1['ethereum'][currency]) === null || _a === void 0 ? void 0 : _a.denom) || '';
                                        var picassoAssetId = Object.keys(crossChainData_1['dotsama']).find(function (key) {
                                            var _a, _b;
                                            return denom === ((_a = crossChainData_1['dotsama'][key]) === null || _a === void 0 ? void 0 : _a.denom) &&
                                                ((_b = crossChainData_1['dotsama'][key]) === null || _b === void 0 ? void 0 : _b['network']) !== 'COMPOSABLE';
                                        });
                                        var composableAssetId = Object.keys(crossChainData_1['dotsama']).find(function (key) {
                                            var _a, _b;
                                            return denom === ((_a = crossChainData_1['dotsama'][key]) === null || _a === void 0 ? void 0 : _a.denom) &&
                                                ((_b = crossChainData_1['dotsama'][key]) === null || _b === void 0 ? void 0 : _b['network']) === 'COMPOSABLE';
                                        });
                                        //et
                                        var ethereumInfo = ethereumAssetsData_1 === null || ethereumAssetsData_1 === void 0 ? void 0 : ethereumAssetsData_1[denom || ''];
                                        var ethereumFromCosmosFee = (ethereumInfo === null || ethereumInfo === void 0 ? void 0 : ethereumInfo.cosmosToEthereumFee) || 0;
                                        var ethereumMinimumTransfer = (ethereumInfo === null || ethereumInfo === void 0 ? void 0 : ethereumInfo.minimumTransfer) || 0;
                                        var ethereumMinimalDenom = ((_c = (_b = crossChainData_1['ethereum']) === null || _b === void 0 ? void 0 : _b[currency]) === null || _c === void 0 ? void 0 : _c.minimalDenom) || '';
                                        //cosmos
                                        var cosmosKey = (_d = Object.keys(crossChainData_1['cosmos'])) === null || _d === void 0 ? void 0 : _d.find(function (item) { return crossChainData_1['cosmos'][item].denom === denom; });
                                        //solana
                                        var solanaAssetId = Object.keys(crossChainData_1['solana']).find(function (key) {
                                            var _a;
                                            return ((_a = crossChainData_1['solana'][key]) === null || _a === void 0 ? void 0 : _a.denom.toUpperCase()) ===
                                                denom.toUpperCase();
                                        });
                                        var solanaInfo = solanaAssetsData_1 === null || solanaAssetsData_1 === void 0 ? void 0 : solanaAssetsData_1[solanaAssetId];
                                        var solanaFromCosmosFee = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.cosmosToSolanaFee) || 0;
                                        var solanaMinimumTransfer = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.minimumTransfer) || 0;
                                        var displayDecimals = (solanaInfo === null || solanaInfo === void 0 ? void 0 : solanaInfo.realDecimals) ||
                                            ((_e = crossChainData_1['solana'][solanaAssetId]) === null || _e === void 0 ? void 0 : _e.decimals) ||
                                            0;
                                        var solanaMinimalDenom = ((_f = crossChainData_1['solana'][solanaAssetId]) === null || _f === void 0 ? void 0 : _f.minimalDenom) || '';
                                        var coinGeckoId = ((_g = coingeckoData_1.find(function (coin) { return coin.name.toUpperCase() === (denom === null || denom === void 0 ? void 0 : denom.toUpperCase()); })) === null || _g === void 0 ? void 0 : _g.id) || '';
                                        return {
                                            coinImageUrl: getImageUrl(denom),
                                            coinDecimals: ((_h = crossChainData_1['ethereum'][currency]) === null || _h === void 0 ? void 0 : _h.decimals) || 0,
                                            coinDenom: denom || 0,
                                            coinGeckoId: coinGeckoId,
                                            cosmos: {
                                                minimalDenom: (_j = crossChainData_1['cosmos'][cosmosKey]) === null || _j === void 0 ? void 0 : _j.minimalDenom,
                                            },
                                            polkadot: {
                                                picassoAssetId: picassoAssetId,
                                                composableAssetId: composableAssetId,
                                            },
                                            ethereum: currency
                                                ? {
                                                    minimalDenom: ethereumMinimalDenom,
                                                    erc20Address: currency, // replace with actual value
                                                    fromCosmosFee: ethereumFromCosmosFee, // replace with actual value
                                                    minimumTransfer: ethereumMinimumTransfer, // replace with actual value
                                                }
                                                : {},
                                            solana: solanaAssetId
                                                ? {
                                                    currency: currency, // replace with actual value
                                                    minimalDenom: solanaMinimalDenom,
                                                    minimumTransfer: solanaMinimumTransfer, // replace with actual value
                                                    fromCosmosFee: solanaFromCosmosFee, // replace with actual value
                                                    displayDecimals: displayDecimals,
                                                }
                                                : {},
                                        };
                                    }),
                                    feeCurrencies: [
                                        {
                                            coinDenom: 'ETH',
                                            coinMinimalDenom: 'wei',
                                            coinDecimals: 18,
                                            coinGeckoId: 'ethereum',
                                        },
                                    ],
                                };
                            }
                            fs_1.default.writeFileSync(path_1.default.join(mainnetPath + '/json', ((chainData === null || chainData === void 0 ? void 0 : chainData.chainName) || ((_m = chainData.config) === null || _m === void 0 ? void 0 : _m.name))
                                .replace(/ /g, '')
                                .toLowerCase() + '.json'), JSON.stringify(__assign({ enabled: true }, transformedData), null, 2));
                        }
                    };
                    try {
                        for (chainFiles_1 = __values(chainFiles), chainFiles_1_1 = chainFiles_1.next(); !chainFiles_1_1.done; chainFiles_1_1 = chainFiles_1.next()) {
                            file = chainFiles_1_1.value;
                            _loop_1(file);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (chainFiles_1_1 && !chainFiles_1_1.done && (_a = chainFiles_1.return)) _a.call(chainFiles_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return [3 /*break*/, 8];
                case 7:
                    e_1 = _o.sent();
                    console.error(e_1);
                    throw e_1;
                case 8: return [2 /*return*/];
            }
        });
    });
}
processChainFiles().catch(console.error);
