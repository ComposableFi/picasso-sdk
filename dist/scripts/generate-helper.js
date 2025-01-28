"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var getFeeAssetId = function (data) {
    var _a, _b, _c, _d;
    var coin = data.currencies.filter(function (item) { return item.isCoin; });
    if (data.chainType === 'polkadot') {
        if (data.polkadot.relayChain === 'kusama')
            return ((_b = (_a = coin[0]) === null || _a === void 0 ? void 0 : _a.polkadot) === null || _b === void 0 ? void 0 : _b.picassoAssetId) || '';
        if (data.polkadot.relayChain === 'polkadot') {
            return ((_d = (_c = coin[0]) === null || _c === void 0 ? void 0 : _c.polkadot) === null || _d === void 0 ? void 0 : _d.composableAssetId) || '';
        }
    }
    if (data.chainType === 'cosmos')
        return coin[0].cosmos.minimalDenom;
    if (data.chainType === 'solana')
        return coin[0].solana.minimalDenom;
    if (data.chainType === 'ethereum')
        return coin[0].ethereum.minimalDenom;
};
var dataDir = path.join(__dirname, '../config/json');
var ethereumOutputFilePath = path.join(__dirname, '../config/ethereumAssets.ts');
var solanaOutputFilePath = path.join(__dirname, '../config/solanaAssets.ts');
var tokensPerChannelOutputFilePath = path.join(__dirname, '../config/tokensPerChannel.ts');
var coinGeckoOutputFilePath = path.join(__dirname, '../config/coinGecko.ts');
var crossChainAssetsOutputFilePath = path.join(__dirname, '../config/crossChainAssets.ts');
var networksOutputFilePath = path.join(__dirname, '../config/networks.ts');
var keplrChainsOutputFilePath = path.join(__dirname, '../config/keplrChains.ts');
var processFiles = function () {
    var ethereumAssets = {};
    var solanaAssets = {};
    var tokensPerChannel = {};
    var coinGeckoAssets = [];
    var crossChainAssets = {
        cosmos: {},
        solana: {},
        ethereum: {},
        polkadot: {},
    };
    var networks = {};
    var keplrChains = {};
    var files = fs
        .readdirSync(dataDir)
        .filter(function (file) { return file.endsWith('.json'); })
        .map(function (file) {
        var filePath = path.join(dataDir, file);
        var stats = fs.statSync(filePath);
        return {
            file: file,
            birthtime: stats.birthtime,
        };
    })
        .sort(function (a, b) { return Number(a.birthtime) - Number(b.birthtime); })
        .map(function (fileInfo) { return fileInfo.file; });
    files.forEach(function (file) {
        var _a;
        var filePath = path.join(dataDir, file);
        var data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        var coin = data.currencies.filter(function (item) { return item.isCoin; });
        networks[data.chainId] = {
            name: data.chainName || '',
            image: data.chainSymbolImageUrl || '',
            rpc: data.rpc || '',
            rest: data.rest || '',
            chainType: data.chainType || '',
            chainId: data.chainId || '',
            feeAssetId: getFeeAssetId(data) || '',
            polkadot: data.polkadot || undefined,
            cosmos: data.cosmos || undefined,
            enabled: data.enabled || false,
            explorer: data.explorer || [],
            network_to: __spreadArray(__spreadArray([], __read((((_a = data.polkadot) === null || _a === void 0 ? void 0 : _a['hops']) ? Object.keys(data.polkadot['hops']) : [])), false), __read(Object.values(data.channelMap || {}).map(function (item) { return item.chainId; })), false),
        };
        if (data.chainType === 'cosmos') {
            keplrChains[data.chainId] = {
                bech32Config: data.cosmos.bech32Config,
                bip44: data.cosmos.bip44,
                chainId: data.chainId,
                chainName: data.chainName,
                chainSymbolImageUrl: data.chainSymbolImageUrl,
                currencies: data.currencies.map(function (item) { return ({
                    coinDecimals: item.coinDecimals,
                    coinDenom: item.coinDenom,
                    coinGeckoId: item.coinGeckoId,
                    coinMinimalDenom: item.coinMinimalDenom,
                }); }),
                features: [],
                feeCurrencies: coin.map(function (item) { return ({
                    coinDecimals: item.coinDecimals,
                    coinDenom: item.coinDenom,
                    coinGeckoId: item.coinGeckoId,
                    coinImageUrl: item.coinImageUrl,
                    gasPriceStep: item.cosmos.gasPriceStep,
                    coinMinimalDenom: item.coinMinimalDenom,
                }); }),
                rest: data.rest,
                rpc: data.rpc,
                stakeCurrency: {
                    coinDecimals: coin[0].coinDecimals,
                    coinDenom: coin[0].coinDenom,
                    coinGeckoId: coin[0].coinGeckoId,
                    coinMinimalDenom: coin[0].coinMinimalDenom,
                    coinImageUrl: coin[0].coinImageUrl,
                },
                walletUrlForStaking: data.cosmos.walletUrlForStaking,
            };
        }
        if (data.channelMap) {
            tokensPerChannel[data.chainId] = data.channelMap;
        }
        data.currencies.forEach(function (currency) {
            var _a, _b;
            var coinDenom = currency.coinDenom, ethereum = currency.ethereum, solana = currency.solana;
            if (ethereum) {
                if (ethereum.erc20Address) {
                    ethereumAssets[coinDenom] = {
                        erc20Address: ethereum.erc20Address,
                        cosmosToEthereumFee: ethereum.fromCosmosFee,
                        minimumTransfer: ethereum.minimumTransfer,
                    };
                    crossChainAssets.ethereum[ethereum.erc20Address] = {
                        chainId: data.chainId || '',
                        decimals: currency.coinDecimals || 0,
                        minimalDenom: currency.ethereum.minimalDenom || '',
                        denom: coinDenom || '',
                        imageUrl: (currency === null || currency === void 0 ? void 0 : currency.coinImageUrl) || '',
                        currentChainId: 'ethereum',
                    };
                }
            }
            if (solana) {
                var mintAddress = solana.mintAddress || '';
                if (mintAddress) {
                    solanaAssets[currency.coinDenom] = {
                        mintAddress: mintAddress,
                        minimumTransfer: solana.minimumTransfer,
                        fromCosmosFee: solana.fromCosmosFee,
                    };
                    var decimals = currency.coinDecimals > 9 ? 9 : currency.coinDecimals || 0;
                    var realDecimals = currency.coinDecimals || 0;
                    crossChainAssets.solana[mintAddress] = {
                        chainId: data.chainId || '',
                        decimals: decimals,
                        minimalDenom: currency.solana.minimalDenom || '',
                        denom: coinDenom || '',
                        realDecimals: realDecimals,
                        imageUrl: currency.coinImageUrl || '',
                        currentChainId: 'solana',
                    };
                }
            }
            if (currency.polkadot) {
                var _c = currency.polkadot || {}, picassoAssetId = _c.picassoAssetId, composableAssetId = _c.composableAssetId;
                if ((_a = currency.polkadot) === null || _a === void 0 ? void 0 : _a.picassoAssetId) {
                    crossChainAssets['polkadot'][picassoAssetId] = {
                        chainId: data.chainId,
                        decimals: currency.coinDecimals || 0,
                        minimalDenom: currency.cosmos.minimalDenom || picassoAssetId,
                        denom: coinDenom,
                        imageUrl: currency.coinImageUrl,
                        ratio: currency.polkadot.ratio,
                        currentChainId: '2087',
                    };
                }
                if ((_b = currency.polkadot) === null || _b === void 0 ? void 0 : _b.composableAssetId) {
                    crossChainAssets['polkadot'][composableAssetId] = {
                        chainId: data.chainId,
                        decimals: currency.coinDecimals,
                        minimalDenom: currency.cosmos.minimalDenom || composableAssetId,
                        denom: coinDenom,
                        imageUrl: currency.coinImageUrl,
                        ratio: currency.polkadot.ratio,
                        currentChainId: '2019',
                    };
                }
            }
            if (currency.cosmos && currency.cosmos.minimalDenom) {
                crossChainAssets.cosmos[currency.cosmos.minimalDenom] = {
                    chainId: data.chainId || '',
                    decimals: currency.coinDecimals || '',
                    minimalDenom: currency.cosmos.minimalDenom || '',
                    denom: coinDenom || '',
                    imageUrl: currency.coinImageUrl || '',
                    codeHash: currency.codeHash || '',
                };
            }
            if (currency.coinGeckoId) {
                coinGeckoAssets.push({
                    name: currency.coinDenom,
                    id: currency.coinGeckoId,
                });
            }
        });
    });
    var ethereumOutputDir = path.dirname(ethereumOutputFilePath);
    if (!fs.existsSync(ethereumOutputDir)) {
        fs.mkdirSync(ethereumOutputDir);
    }
    var ethereumOutputContent = "\n// [GENERATED]\nimport { EthereumAsset } from './types';\n\nexport const ethereumAssets :Record<string, EthereumAsset>= ".concat(JSON.stringify(ethereumAssets, null, 2), ";\n\n");
    fs.writeFileSync(ethereumOutputFilePath, ethereumOutputContent, 'utf-8');
    console.log('ethereumAssets.ts has been created');
    var solanaOutputDir = path.dirname(solanaOutputFilePath);
    if (!fs.existsSync(solanaOutputDir)) {
        fs.mkdirSync(solanaOutputDir);
    }
    var solanaOutputContent = "\n// [GENERATED]\nimport { SolanaAsset } from \"./types\";\n\nexport const solanaAssets:Record<string, SolanaAsset> = ".concat(JSON.stringify(solanaAssets, null, 2), ";\n\n");
    fs.writeFileSync(solanaOutputFilePath, solanaOutputContent, 'utf-8');
    console.log('solanaAssets.ts has been created');
    var tokensPerChannelOutputDir = path.dirname(tokensPerChannelOutputFilePath);
    if (!fs.existsSync(tokensPerChannelOutputDir)) {
        fs.mkdirSync(tokensPerChannelOutputDir);
    }
    var tokensPerChannelOutputContent = "\n// [GENERATED]\nimport { TokenPerChannel } from './types';\n\nexport const tokensPerChannel : Record<\n  string,\n  Record<string, TokenPerChannel>\n> = ".concat(JSON.stringify(tokensPerChannel, null, 2), " ;\n\n");
    fs.writeFileSync(tokensPerChannelOutputFilePath, tokensPerChannelOutputContent, 'utf-8');
    console.log('tokensPerChannel.ts has been created');
    var networksOutputDir = path.dirname(networksOutputFilePath);
    if (!fs.existsSync(networksOutputDir)) {
        fs.mkdirSync(networksOutputDir);
    }
    var networksOutputContent = "\n// [GENERATED]\nimport { NetworkInfo } from './types';\n export const networks: Record<string, NetworkInfo> = ".concat(JSON.stringify(networks, null, 2), ";\n  \n  ");
    fs.writeFileSync(networksOutputFilePath, networksOutputContent, 'utf-8');
    console.log('networks.ts has been created');
    var coinGeckoOutputDir = path.dirname(coinGeckoOutputFilePath);
    if (!fs.existsSync(coinGeckoOutputDir)) {
        fs.mkdirSync(coinGeckoOutputDir);
    }
    var coinGeckoOutputContent = "\n  // [GENERATED]\nimport { CoinGeckoAsset } from './types';\n\n export const coinGecko: CoinGeckoAsset[] = ".concat(JSON.stringify(coinGeckoAssets, null, 2), " ;\n \n ");
    fs.writeFileSync(coinGeckoOutputFilePath, coinGeckoOutputContent, 'utf-8');
    console.log('coinGecko.ts has been created');
    var crossChainAssetsOutputContent = "\n// [GENERATED]\nimport { CrossChainAssets } from \"./types\";\nexport const crossChainAssets :CrossChainAssets= ".concat(JSON.stringify(crossChainAssets, null, 2), " ;\n\n");
    fs.writeFileSync(crossChainAssetsOutputFilePath, crossChainAssetsOutputContent, 'utf-8');
    console.log('crossChainAssets.ts has been created');
    var keplrChainsOutputContent = "\n// [GENERATED]\nimport { ChainInfo } from \"@keplr-wallet/types\";\n\nexport const keplrChains :Record<string, ChainInfo>= ".concat(JSON.stringify(keplrChains, null, 2), " ;\n\n");
    fs.writeFileSync(keplrChainsOutputFilePath, keplrChainsOutputContent, 'utf-8');
    console.log('keplrChains.ts has been created');
};
processFiles();
