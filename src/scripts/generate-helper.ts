import * as fs from 'fs';
import * as path from 'path';
import {
  ChainInfo,
  CoinGeckoAsset,
  CrosschainAsset,
  CrossChainAssets,
  EthereumAsset,
  NetworkInfo,
  SolanaAsset,
  TokenPerChannel,
} from '../config/types';
import { buildIbcPath } from '../chains';

const dataDir = path.join(__dirname, '../config/json');
const ethereumOutputFilePath = path.join(
  __dirname,
  '../config/ethereumAssets.ts'
);
const solanaOutputFilePath = path.join(__dirname, '../config/solanaAssets.ts');

const tokensPerChannelOutputFilePath = path.join(
  __dirname,
  '../config/tokensPerChannel.ts'
);
const coinGeckoOutputFilePath = path.join(__dirname, '../config/coinGecko.ts');
const crossChainAssetsOutputFilePath = path.join(
  __dirname,
  '../config/crossChainAssets.ts'
);

const networksOutputFilePath = path.join(__dirname, '../config/networks.ts');
const keplrChainsOutputFilePath = path.join(
  __dirname,
  '../config/keplrChains.ts'
);

const processFiles = () => {
  const ethereumAssets: Record<string, EthereumAsset> = {};
  const solanaAssets: Record<string, SolanaAsset> = {};
  const tokensPerChannel: Record<string, TokenPerChannel> = {};
  const coinGeckoAssets: CoinGeckoAsset[] = [];
  const crossChainAssets: CrossChainAssets = {
    cosmos: {},
    solana: {},
    ethereum: {},
    polkadot: {},
  };

  const networks: Record<string, NetworkInfo> = {};
  const keplrChains: Record<string, ChainInfo> = {};
  const files = fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(dataDir, file);
      const stats = fs.statSync(filePath);
      return {
        file,
        birthtime: stats.birthtime,
      };
    })
    .sort((a, b) => Number(a.birthtime) - Number(b.birthtime)) // 생성 날짜 기준 오름차순 정렬
    .map((fileInfo) => fileInfo.file); // 정렬 후 파일 이름만 추출

  files.forEach((file) => {
    const filePath = path.join(dataDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    // generate networks

    networks[data.chainId] = {
      name: data.chainName || '',
      image: data.chainSymbolImageUrl || '',
      rpc: data.rpc || '',
      rest: data.rest || '',
      chainType: data.chainType || '',
      chainId: data.chainId || '',
      feeAssetId: data.currencies[0]?.coinDenom || '',
      polkadot: data.polkadot || undefined,
      cosmos: data.cosmos || undefined,
      enabled: data.enabled || false,
      network_to: [
        ...(data.polkadot?.['hops'] ? Object.keys(data.polkadot['hops']) : []),
        ...Object.values(data.channelMap || {}).map(
          (item: any) => item.chainId
        ),
      ],
    };

    if (data.chainType === 'cosmos') {
      keplrChains[data.chainId] = {
        bech32Config: data.cosmos.bech32Config,
        bip44: data.cosmos.bip44,
        chainId: data.chainId,
        chainName: data.chainName,
        chainSymbolImageUrl: data.chainSymbolImageUrl,
        currencies: data.currencies.map((item) => ({
          coinDecimals: item.coinDecimals,
          coinDenom: item.coinDenom,
          coinGeckoId: item.coinGeckoId,
          coinImageUrl: item.coinImageUrl,
          coinMinimalDenom: item.coinMinimalDenom,
        })),
        features: [],
        feeCurrencies: data.feeCurrencies.map((item) => ({
          coinDecimals: item.coinDecimals,
          coinDenom: item.coinDenom,
          coinGeckoId: item.coinGeckoId,
          coinImageUrl: item.coinImageUrl,
          gasPriceStep: item.cosmos.gasPriceStep,
          coinMinimalDenom: item.coinMinimalDenom,
        })),
        rest: data.rest,
        rpc: data.rpc,
        stakeCurrency: {
          coinDecimals: data.currencies[0].coinDecimals,
          coinDenom: data.currencies[0].coinDenom,
          coinGeckoId: data.currencies[0].coinGeckoId,
          coinMinimalDenom: data.currencies[0].coinMinimalDenom,
          coinImageUrl: data.currencies[0].coinImageUrl,
        },
        walletUrlForStaking: data.cosmos.walletUrlForStaking,
      };
    }
    // generate tokensPerChannel.ts
    if (data.channelMap) {
      tokensPerChannel[data.chainId] = data.channelMap;
    }
    // generate ethereumAssets.ts
    data.currencies.forEach((currency: any) => {
      const { coinDenom, ethereum, solana } = currency;
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
            imageUrl: currency?.coinImageUrl || '',
          };
        }
      }

      // generate solanaAssets.ts
      if (solana) {
        const mintAddress = solana.mintAddress || '';
        if (mintAddress) {
          solanaAssets[currency.coinDenom] = {
            mintAddress: mintAddress,
            minimumTransfer: solana.minimumTransfer,
          };

          const decimals =
            currency.coinDecimals > 9 ? 9 : currency.coinDecimals || 0;
          const realDecimals = currency.coinDecimals || 0;

          crossChainAssets.solana[mintAddress] = {
            chainId: data.chainId || '',
            decimals,
            minimalDenom: currency.solana.minimalDenom || '',
            denom: coinDenom || '',
            realDecimals,
            imageUrl: currency.coinImageUrl || '',
          };
        }
      }
      // generate polkadotAssets.ts
      if (currency.polkadot) {
        const { picassoAssetId, composableAssetId } = currency.polkadot || {};
        if (currency.polkadot?.picassoAssetId) {
          crossChainAssets['polkadot'][picassoAssetId] = {
            chainId: data.chainId,
            decimals: currency.coinDecimals || 0,
            minimalDenom: currency.cosmos.minimalDenom || picassoAssetId,
            denom: coinDenom,
            imageUrl: currency.coinImageUrl,
          };
        }
        if (currency.polkadot?.composableAssetId) {
          crossChainAssets['polkadot'][composableAssetId] = {
            chainId: data.chainId,
            decimals: currency.coinDecimals,
            minimalDenom: currency.cosmos.minimalDenom || composableAssetId,
            denom: coinDenom,
            imageUrl: currency.coinImageUrl,
          };
        }
      }
      // generate cosmosAssets.ts
      if (currency.cosmos) {
        crossChainAssets.cosmos[currency.cosmos.minimalDenom] = {
          chainId: data.chainId || '',
          decimals: currency.coinDecimals || '',
          minimalDenom: currency.cosmos.minimalDenom || '',
          denom: coinDenom || '',
          imageUrl: currency.coinImageUrl || '',
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
  const ethereumOutputDir = path.dirname(ethereumOutputFilePath);
  if (!fs.existsSync(ethereumOutputDir)) {
    fs.mkdirSync(ethereumOutputDir);
  }

  const ethereumOutputContent = `
// [GENERATED]
import { EthereumAsset } from './types';

export const ethereumAssets :Record<string, EthereumAsset>= ${JSON.stringify(ethereumAssets, null, 2)};

`;

  fs.writeFileSync(ethereumOutputFilePath, ethereumOutputContent, 'utf-8');
  console.log('ethereumAssets.ts has been created');

  // solanaAssets.ts 파일로 저장
  const solanaOutputDir = path.dirname(solanaOutputFilePath);
  if (!fs.existsSync(solanaOutputDir)) {
    fs.mkdirSync(solanaOutputDir);
  }

  const solanaOutputContent = `
// [GENERATED]
import { SolanaAsset } from "./types";

export const solanaAssets:Record<string, SolanaAsset> = ${JSON.stringify(solanaAssets, null, 2)};

`;

  fs.writeFileSync(solanaOutputFilePath, solanaOutputContent, 'utf-8');
  console.log('solanaAssets.ts has been created');

  // tokensPerChannel.ts 파일로 저장
  const tokensPerChannelOutputDir = path.dirname(
    tokensPerChannelOutputFilePath
  );
  if (!fs.existsSync(tokensPerChannelOutputDir)) {
    fs.mkdirSync(tokensPerChannelOutputDir);
  }
  const tokensPerChannelOutputContent = `
// [GENERATED]
import { TokenPerChannel } from './types';

export const tokensPerChannel : Record<
  string,
  Record<string, TokenPerChannel>
> = ${JSON.stringify(tokensPerChannel, null, 2)} ;

`;

  fs.writeFileSync(
    tokensPerChannelOutputFilePath,
    tokensPerChannelOutputContent,
    'utf-8'
  );
  console.log('tokensPerChannel.ts has been created');

  const networksOutputDir = path.dirname(networksOutputFilePath);
  if (!fs.existsSync(networksOutputDir)) {
    fs.mkdirSync(networksOutputDir);
  }
  const networksOutputContent = `
// [GENERATED]
import { NetworkInfo } from './types';
 export const networks: Record<string, NetworkInfo> = ${JSON.stringify(networks, null, 2)};
  
  `;

  fs.writeFileSync(networksOutputFilePath, networksOutputContent, 'utf-8');
  console.log('networks.ts has been created');
  // coinGecko.ts 파일로 저장
  const coinGeckoOutputDir = path.dirname(coinGeckoOutputFilePath);
  if (!fs.existsSync(coinGeckoOutputDir)) {
    fs.mkdirSync(coinGeckoOutputDir);
  }

  const coinGeckoOutputContent = `
  // [GENERATED]
import { CoinGeckoAsset } from './types';

 export const coinGecko: CoinGeckoAsset[] = ${JSON.stringify(coinGeckoAssets, null, 2)} ;
 
 `;

  fs.writeFileSync(coinGeckoOutputFilePath, coinGeckoOutputContent, 'utf-8');
  console.log('coinGecko.ts has been created');

  const crossChainAssetsOutputContent = `
// [GENERATED]
import { CrossChainAssets } from "./types";
export const crossChainAssets :CrossChainAssets= ${JSON.stringify(crossChainAssets, null, 2)} ;

`;

  fs.writeFileSync(
    crossChainAssetsOutputFilePath,
    crossChainAssetsOutputContent,
    'utf-8'
  );
  console.log('crossChainAssets.ts has been created');

  const keplrChainsOutputContent = `
// [GENERATED]
import { ChainInfo } from "@keplr-wallet/types";

export const keplrChains :Record<string, ChainInfo>= ${JSON.stringify(keplrChains, null, 2)} ;

`;

  fs.writeFileSync(
    keplrChainsOutputFilePath,
    keplrChainsOutputContent,
    'utf-8'
  );
  console.log('keplrChains.ts has been created');
};
processFiles();
