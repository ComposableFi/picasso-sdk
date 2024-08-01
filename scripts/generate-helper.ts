import * as fs from 'fs';
import * as path from 'path';
import { CrosschainAsset } from '../src/config/types';

interface EthereumAsset {
  erc20Address: string;
  cosmosToEthereumFee: number;
  minimumTransfer: number;
}

interface SolanaAsset {
  mintAddress: string;
  minimumTransfer: number;
}
interface TokenPerChannel {
  chainId: string;
  destinationId: number;
  tokens: string[];
}
interface CoinGeckoAsset {
  name: string;
  id: string;
}

interface CrossChainAssets {
  cosmos: Record<string, CrosschainAsset>;
  solana: Record<string, CrosschainAsset>;
  ethereum: Record<string, CrosschainAsset>;
  dotsama: Record<string, CrosschainAsset>;
}

const dataDir = path.join(
  __dirname,
  '../src/config/cosmos/keplr-info/mainnet/json'
);
const ethereumOutputFilePath = path.join(
  __dirname,
  '../src/config/cosmos/keplr-info/mainnet/helper/ethereumAssets.ts'
);
const solanaOutputFilePath = path.join(
  __dirname,
  '../src/config/cosmos/keplr-info/mainnet/helper/solanaAssets.ts'
);

const tokensPerChannelOutputFilePath = path.join(
  __dirname,
  '../src/config/cosmos/keplr-info/mainnet/helper/tokensPerChannel.ts'
);
const coinGeckoOutputFilePath = path.join(
  __dirname,
  '../src/config/cosmos/keplr-info/mainnet/helper/coinGecko.ts'
);
const crossChainAssetsOutputFilePath = path.join(
  __dirname,
  '../src/config/cosmos/keplr-info/mainnet/helper/crossChainAssets.ts'
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
    dotsama: {},
  };

  // 폴더 내의 모든 JSON 파일 읽기
  const files = fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith('.json'));

  files.forEach((file) => {
    const filePath = path.join(dataDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    // tokensPerChannel 정보 추출
    if (data.channelMap) {
      tokensPerChannel[data.chainId] = data.channelMap;
    }
    // Ethereum 에셋 정보 추출
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
          };
        }
      }

      // Solana 에셋 정보 추출
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
          };
        }
      }
      // Dotsama 에셋 정보 추출
      if (currency.polkadot) {
        const { picassoAssetId, composableAssetId } =
          currency.polkadot?.picassoAssetId;
        if (currency.polkadot?.picassoAssetId) {
          crossChainAssets['dotsama'][picassoAssetId] = {
            chainId: data.chainId,
            decimals: currency.coinDecimals,
            minimalDenom: currency.cosmos.minimalDenom,
            denom: coinDenom,
          };
        }
        if (currency.polkadot?.composableAssetId) {
          crossChainAssets['dotsama'][composableAssetId] = {
            chainId: data.chainId,
            decimals: currency.coinDecimals,
            minimalDenom: currency.cosmos.minimalDenom,
            denom: coinDenom,
          };
        }
      }
      // Cosmos 에셋 정보 추출
      if (currency.cosmos) {
        crossChainAssets.cosmos[currency.cosmos.minimalDenom] = {
          chainId: data.chainId,
          decimals: currency.coinDecimals,
          minimalDenom: currency.cosmos.minimalDenom,
          denom: coinDenom,
        };
      }

      // CoinGecko 에셋 정보 추출
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
// [FAST TRACK] Add info for assets on ethereum network here
const ethereumAssets = ${JSON.stringify(ethereumAssets, null, 2)} as const;

export default ethereumAssets;
`;

  fs.writeFileSync(ethereumOutputFilePath, ethereumOutputContent, 'utf-8');
  console.log('ethereumAssets.ts 파일이 생성되었습니다.');

  // solanaAssets.ts 파일로 저장
  const solanaOutputDir = path.dirname(solanaOutputFilePath);
  if (!fs.existsSync(solanaOutputDir)) {
    fs.mkdirSync(solanaOutputDir);
  }

  const solanaOutputContent = `
// [FAST TRACK] Add info for assets on solana network here
const solanaAssets = ${JSON.stringify(solanaAssets, null, 2)} as const;

export default solanaAssets;
`;

  fs.writeFileSync(solanaOutputFilePath, solanaOutputContent, 'utf-8');
  console.log('solanaAssets.ts 파일이 생성되었습니다.');

  // tokensPerChannel.ts 파일로 저장
  const tokensPerChannelOutputDir = path.dirname(
    tokensPerChannelOutputFilePath
  );
  if (!fs.existsSync(tokensPerChannelOutputDir)) {
    fs.mkdirSync(tokensPerChannelOutputDir);
  }
  const tokensPerChannelOutputContent = `
// [FAST TRACK] Add asset here to enable transferring from one network to another
const tokensPerChannel = ${JSON.stringify(tokensPerChannel, null, 2)} as const;

export default tokensPerChannel;
`;

  fs.writeFileSync(
    tokensPerChannelOutputFilePath,
    tokensPerChannelOutputContent,
    'utf-8'
  );
  console.log('tokensPerChannel.ts 파일이 생성되었습니다.');

  // coinGecko.ts 파일로 저장
  const coinGeckoOutputDir = path.dirname(coinGeckoOutputFilePath);
  if (!fs.existsSync(coinGeckoOutputDir)) {
    fs.mkdirSync(coinGeckoOutputDir);
  }

  const coinGeckoOutputContent = `
 // [FAST TRACK] Add asset info here to display the USD price from CoinGecko in our UI
 const coinGecko = ${JSON.stringify(coinGeckoAssets, null, 2)} as const;
 
 export default coinGecko;
 `;

  fs.writeFileSync(coinGeckoOutputFilePath, coinGeckoOutputContent, 'utf-8');
  console.log('coinGecko.ts 파일이 생성되었습니다.');
};

processFiles();
