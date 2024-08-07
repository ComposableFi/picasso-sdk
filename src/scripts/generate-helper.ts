import * as fs from 'fs';
import * as path from 'path';
import {
  CoinGeckoAsset,
  CrosschainAsset,
  CrossChainAssets,
  EthereumAsset,
  NetworkInfo,
  SolanaAsset,
  TokenPerChannel,
} from '../config/types';

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

const processFiles = () => {
  const ethereumAssets: Record<string, EthereumAsset> = {};
  const solanaAssets: Record<string, SolanaAsset> = {};
  const tokensPerChannel: Record<string, TokenPerChannel> = {};
  const coinGeckoAssets: CoinGeckoAsset[] = [];
  const crossChainAssets: CrossChainAssets = {
    cosmos: {},
    solana: {},
    ethereum: {},
    dotsama: {},
  };
  const networks: Record<string, NetworkInfo> = {};
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
      chain_type: data.chainType || '',
      chainId: data.chainId || '',
      feeAssetId: data.currencies[0]?.coinDenom || '',
      polkadot: data.polkadot || {},
      cosmos: data.cosmos || {},
      enabled: data.enabled || false,
      network_to: [
        ...(data.polkadot?.['hops'] ? Object.keys(data.polkadot['hops']) : []),
        ...Object.values(data.channelMap || {}).map(
          (item: any) => item.chainId
        ),
      ],
    };

    // generate tokensPerChannel.ts
    if (data.channelMap) {
      tokensPerChannel[data.chainId] = data.channelMap;
    }
    // generate ethereumAssets.ts
    data.currencies.forEach((currency: any) => {
      const { coinDenom, ethereum, solana } = currency;
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
        const mintAddress = solana.mintAddress || '';
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
        const { picassoAssetId, composableAssetId } = currency.polkadot || {};
        if (currency.polkadot?.picassoAssetId) {
          crossChainAssets['dotsama'][picassoAssetId] = {
            chainId: data.chainId,
            decimals: currency.coinDecimals,
            minimalDenom: currency.cosmos.minimalDenom,
            denom: coinDenom,
            imageUrl: currency.coinImageUrl,
          };
        }
        if (currency.polkadot?.composableAssetId) {
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
  const ethereumOutputDir = path.dirname(ethereumOutputFilePath);
  if (!fs.existsSync(ethereumOutputDir)) {
    fs.mkdirSync(ethereumOutputDir);
  }

  const ethereumOutputContent = `
// [GENERATED]
export const ethereumAssets = ${JSON.stringify(ethereumAssets, null, 2)};

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
export const solanaAssets = ${JSON.stringify(solanaAssets, null, 2)};

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
export const tokensPerChannel = ${JSON.stringify(tokensPerChannel, null, 2)} ;

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

 export const networks = ${JSON.stringify(networks, null, 2)};
  
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

 export const coinGecko = ${JSON.stringify(coinGeckoAssets, null, 2)} ;
 
 `;

  fs.writeFileSync(coinGeckoOutputFilePath, coinGeckoOutputContent, 'utf-8');
  console.log('coinGecko.ts has been created');

  const crossChainAssetsOutputContent = `
// [GENERATED]
export const crossChainAssets = ${JSON.stringify(crossChainAssets, null, 2)} ;

`;

  fs.writeFileSync(
    crossChainAssetsOutputFilePath,
    crossChainAssetsOutputContent,
    'utf-8'
  );
  console.log('crossChainAssets.ts has been created');
};
processFiles();
