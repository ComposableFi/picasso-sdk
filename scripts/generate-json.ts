import fs from 'fs';
import path from 'path';
import { type ChainInfo as KeplrChainInfo } from '@keplr-wallet/types';
import { ReadonlyDeep } from 'type-fest';

const mainnetPath = path.resolve(
  __dirname,
  '../src/config/cosmos/keplr-info/mainnet'
);

interface CustomChainInfo {
  chainType: string;
  channelMap: { [key: string]: string };
  cosmos: {
    bip44: { coinType: number };
    bech32Config: {
      bech32PrefixAccAddr: string;
      bech32PrefixAccPub: string;
      bech32PrefixValAddr: string;
      bech32PrefixValPub: string;
      bech32PrefixConsAddr: string;
      bech32PrefixConsPub: string;
    };
  };
  currencies: Array<{
    coinDenom: string;
    coinDecimals: number;
    coinGeckoId: string;
    coinImageUrl: string;
    polkadot?: {
      picassoAssetId: string;
      composableAssetId: string;
    };
    cosmos: {
      minimalDenom: string;
    };
    ethereum?: {
      minimalDenom: string;
      erc20Address: string;
      fromCosmosFee: number;
      minimumTransfer: number;
    };
    solana?: {
      mintAddress: string;
      minimalDenom: string;
      minimumTransfer: number;
      fromCosmosFee: number;
      displayDecimals: number;
    };
  }>;
  feeCurrencies: Array<{
    coinDenom: string;
    coinMinimalDenom: string;
    coinDecimals: number;
    coinGeckoId: string;
    gasPriceStep: {
      low: number;
      average: number;
      high: number;
    };
  }>;
}

// const chainFiles = fs.readdirSync(mainnetPath);
const chainFiles = fs
  .readdirSync(mainnetPath)
  .filter((file) => file.endsWith('.ts') && file !== 'index.ts');

console.log(chainFiles, 'chainFiles');

for (const file of chainFiles) {
  if (file.endsWith('.ts')) {
    const chainModule = require(path.join(mainnetPath, file));
    const chainData = chainModule.default || chainModule;

    const transformedData: CustomChainInfo = {
      ...chainData,
      chainType: 'cosmos',
      channelMap: { '1': 'centauri-1', '5': '----' },
      cosmos: {
        bip44: chainData.bip44,
        bech32Config: chainData.bech32Config,
      },
      currencies: chainData.currencies?.map((currency) => ({
        ...currency,
        cosmos: { minimalDenom: currency.coinMinimalDenom },
        polkadot: {
          picassoAssetId: 'placeholder', // replace with actual value
          composableAssetId: 'placeholder', // replace with actual value
        },
        ethereum: {
          minimalDenom: `transfer/channel-2/transfer/channel-13/${currency.coinMinimalDenom}`,
          erc20Address: 'placeholder', // replace with actual value
          fromCosmosFee: 0, // replace with actual value
          minimumTransfer: 0, // replace with actual value
        },
        solana: {
          mintAddress: 'placeholder', // replace with actual value
          minimalDenom: `transfer/channel-1/transfer/channel-13/${currency.coinMinimalDenom}`,
          minimumTransfer: 0, // replace with actual value
          fromCosmosFee: 0, // replace with actual value
          displayDecimals: 6, // replace with actual value
        },
      })),
      feeCurrencies: chainData.feeCurrencies?.map((feeCurrency) => ({
        ...feeCurrency,
      })),
    };

    fs.writeFileSync(
      path.join(mainnetPath + '/json', file.replace('.ts', '.json')),
      JSON.stringify(transformedData, null, 2)
    );
  }
}
