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
var dataDir = path.join(__dirname, '../config/json');
var ethereumOutputFilePath = path.join(__dirname, '../config/ethereumAssets.ts');
var solanaOutputFilePath = path.join(__dirname, '../config/solanaAssets.ts');
var tokensPerChannelOutputFilePath = path.join(__dirname, '../config/tokensPerChannel.ts');
var coinGeckoOutputFilePath = path.join(__dirname, '../config/coinGecko.ts');
var crossChainAssetsOutputFilePath = path.join(__dirname, '../config/crossChainAssets.ts');
var networksOutputFilePath = path.join(__dirname, '../config/networks.ts');
var processFiles = function () {
    var ethereumAssets = {};
    var solanaAssets = {};
    var tokensPerChannel = {};
    var coinGeckoAssets = [];
    var crossChainAssets = {
        cosmos: {},
        solana: {},
        ethereum: {},
        dotsama: {},
    };
    var networks = {};
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
        .sort(function (a, b) { return Number(a.birthtime) - Number(b.birthtime); }) // 생성 날짜 기준 오름차순 정렬
        .map(function (fileInfo) { return fileInfo.file; }); // 정렬 후 파일 이름만 추출
    files.forEach(function (file) {
        var _a, _b;
        var filePath = path.join(dataDir, file);
        var data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        // generate networks
        networks[data.chainId] = {
            name: data.chainName,
            image: data.chainSymbolImageUrl,
            rpc: data.rpc,
            rest: data.rest,
            chain_type: data.chainType,
            chainId: data.chainId,
            feeAssetId: (_a = data.currencies[0]) === null || _a === void 0 ? void 0 : _a.coinDenom,
            polkadot: data.polkadot,
            cosmos: data.cosmos,
            enabled: data.enabled,
            network_to: __spreadArray(__spreadArray([], __read((((_b = data.polkadot) === null || _b === void 0 ? void 0 : _b['hops']) ? Object.keys(data.polkadot['hops']) : [])), false), __read(Object.values(data.channelMap || {}).map(function (item) { return item.chainId; })), false),
        };
        // generate tokensPerChannel.ts
        if (data.channelMap) {
            tokensPerChannel[data.chainId] = data.channelMap;
        }
        // generate ethereumAssets.ts
        data.currencies.forEach(function (currency) {
            var _a, _b;
            var coinDenom = currency.coinDenom, ethereum = currency.ethereum, solana = currency.solana;
            if (currency.ethereum) {
                if (ethereum.erc20Address) {
                    ethereumAssets[coinDenom] = {
                        erc20Address: ethereum.erc20Address,
                        cosmosToEthereumFee: ethereum.fromCosmosFee,
                        minimumTransfer: ethereum.minimumTransfer,
                    };
                    crossChainAssets.ethereum[ethereum.erc20Address] = {
                        chainId: data.chainId,
                        decimals: currency.coinDecimals,
                        minimalDenom: currency.cosmos.minimalDenom,
                        denom: coinDenom,
                        imageUrl: currency.coinImageUrl,
                    };
                }
            }
            // generate solanaAssets.ts
            if (currency.solana) {
                var mintAddress = solana.mintAddress || '';
                if (mintAddress) {
                    solanaAssets[currency.coinDenom] = {
                        mintAddress: mintAddress,
                        minimumTransfer: solana.minimumTransfer,
                    };
                    crossChainAssets.solana[mintAddress] = {
                        chainId: data.chainId,
                        decimals: currency.coinDecimals,
                        minimalDenom: currency.cosmos.minimalDenom,
                        denom: coinDenom,
                        imageUrl: currency.coinImageUrl,
                    };
                }
            }
            // generate dotsamaAssets.ts
            if (currency.polkadot) {
                var _c = currency.polkadot || {}, picassoAssetId = _c.picassoAssetId, composableAssetId = _c.composableAssetId;
                if ((_a = currency.polkadot) === null || _a === void 0 ? void 0 : _a.picassoAssetId) {
                    crossChainAssets['dotsama'][picassoAssetId] = {
                        chainId: data.chainId,
                        decimals: currency.coinDecimals,
                        minimalDenom: currency.cosmos.minimalDenom,
                        denom: coinDenom,
                        imageUrl: currency.coinImageUrl,
                    };
                }
                if ((_b = currency.polkadot) === null || _b === void 0 ? void 0 : _b.composableAssetId) {
                    crossChainAssets['dotsama'][composableAssetId] = {
                        chainId: data.chainId,
                        decimals: currency.coinDecimals,
                        minimalDenom: currency.cosmos.minimalDenom,
                        denom: coinDenom,
                        imageUrl: currency.coinImageUrl,
                    };
                }
            }
            // generate cosmosAssets.ts
            if (currency.cosmos) {
                crossChainAssets.cosmos[currency.cosmos.minimalDenom] = {
                    chainId: data.chainId,
                    decimals: currency.coinDecimals,
                    minimalDenom: currency.cosmos.minimalDenom,
                    denom: coinDenom,
                    imageUrl: currency.coinImageUrl,
                };
            }
            // generate coingecko.ts
            if (currency.coinGeckoId) {
                coinGeckoAssets.push({
                    name: currency.coinDenom,
                    id: currency.coinGeckoId,
                });
            }
        });
    });
    // ethereumAssets.ts 파일로 저장
    var ethereumOutputDir = path.dirname(ethereumOutputFilePath);
    if (!fs.existsSync(ethereumOutputDir)) {
        fs.mkdirSync(ethereumOutputDir);
    }
    var ethereumOutputContent = "\n// [FAST TRACK] Add info for assets on ethereum network here\nconst ethereumAssets = ".concat(JSON.stringify(ethereumAssets, null, 2), " as const;\n\nexport default ethereumAssets;\n");
    fs.writeFileSync(ethereumOutputFilePath, ethereumOutputContent, 'utf-8');
    console.log('ethereumAssets.ts has been created');
    // solanaAssets.ts 파일로 저장
    var solanaOutputDir = path.dirname(solanaOutputFilePath);
    if (!fs.existsSync(solanaOutputDir)) {
        fs.mkdirSync(solanaOutputDir);
    }
    var solanaOutputContent = "\n// [FAST TRACK] Add info for assets on solana network here\nconst solanaAssets = ".concat(JSON.stringify(solanaAssets, null, 2), " as const;\n\nexport default solanaAssets;\n");
    fs.writeFileSync(solanaOutputFilePath, solanaOutputContent, 'utf-8');
    console.log('solanaAssets.ts has been created');
    // tokensPerChannel.ts 파일로 저장
    var tokensPerChannelOutputDir = path.dirname(tokensPerChannelOutputFilePath);
    if (!fs.existsSync(tokensPerChannelOutputDir)) {
        fs.mkdirSync(tokensPerChannelOutputDir);
    }
    var tokensPerChannelOutputContent = "\n// [FAST TRACK] Add asset here to enable transferring from one network to another\nconst tokensPerChannel = ".concat(JSON.stringify(tokensPerChannel, null, 2), " as const;\n\nexport default tokensPerChannel;\n");
    fs.writeFileSync(tokensPerChannelOutputFilePath, tokensPerChannelOutputContent, 'utf-8');
    console.log('tokensPerChannel.ts has been created');
    var networksOutputDir = path.dirname(networksOutputFilePath);
    if (!fs.existsSync(networksOutputDir)) {
        fs.mkdirSync(networksOutputDir);
    }
    var networksOutputContent = "\n  // [FAST TRACK] Add info for networks here\n  const networks = ".concat(JSON.stringify(networks, null, 2), " as const;\n  \n  export default networks;\n  ");
    fs.writeFileSync(networksOutputFilePath, networksOutputContent, 'utf-8');
    console.log('networks.ts has been created');
    // coinGecko.ts 파일로 저장
    var coinGeckoOutputDir = path.dirname(coinGeckoOutputFilePath);
    if (!fs.existsSync(coinGeckoOutputDir)) {
        fs.mkdirSync(coinGeckoOutputDir);
    }
    var coinGeckoOutputContent = "\n // [FAST TRACK] Add asset info here to display the USD price from CoinGecko in our UI\n const coinGecko = ".concat(JSON.stringify(coinGeckoAssets, null, 2), " as const;\n \n export default coinGecko;\n ");
    fs.writeFileSync(coinGeckoOutputFilePath, coinGeckoOutputContent, 'utf-8');
    console.log('coinGecko.ts has been created');
    var crossChainAssetsOutputContent = "\n// [FAST TRACK] Add cross-chain asset info here\nconst crossChainAssets = ".concat(JSON.stringify(crossChainAssets, null, 2), " as const;\n\nexport default crossChainAssets;\n");
    fs.writeFileSync(crossChainAssetsOutputFilePath, crossChainAssetsOutputContent, 'utf-8');
    console.log('crossChainAssets.ts has been created');
};
processFiles();
