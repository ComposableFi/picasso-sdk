import fs from 'fs';
import path from 'path';

const mainnetPath = path.resolve(
  __dirname,
  '../src/config/cosmos/keplr-info/mainnet'
);

const crossChainAssetsPath = path.resolve(
  __dirname,
  '../src/config/crossChainAssets.ts'
);
const solanaAssetsPath = path.resolve(
  __dirname,
  '../src/config/solanaAssets.ts'
);
const ethereumAssetsPath = path.resolve(
  __dirname,
  '../src/config/ethereumAssets.ts'
);

const channelMapPath = path.resolve(__dirname, '../src/config/channelMap.ts');
const tokensPerChannelPath = path.resolve(
  __dirname,
  '../src/config/tokensPerChannel.ts'
);

const coingeckoPath = path.resolve(__dirname, '../src/config/coinGecko.ts');

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

async function importModule(modulePath: string) {
  return await import(modulePath);
}

async function processChainFiles() {
  try {
    //cross chain asset file
    const crossChainAssetsModule = await importModule(crossChainAssetsPath);
    const solanaAssetsModule = await importModule(solanaAssetsPath);
    const ethereumAssetsModule = await importModule(ethereumAssetsPath);
    const channelMapModule = await importModule(channelMapPath);
    const tokensPerChannelModule = await importModule(tokensPerChannelPath);
    const coingeckoModule = await importModule(coingeckoPath);
    const crossChainData =
      crossChainAssetsModule.default || crossChainAssetsModule;
    const solanaAssetsData = solanaAssetsModule.default || solanaAssetsModule;
    const ethereumAssetsData =
      ethereumAssetsModule.default || ethereumAssetsModule;

    const channelMapData = channelMapModule.default || channelMapModule;
    const tokensPerChannelData =
      tokensPerChannelModule.default || tokensPerChannelModule;

    const coingeckoData = coingeckoModule.default || coingeckoModule;

    console.log(
      'chainFiles',
      channelMapData,
      tokensPerChannelData
      // crossChainData,
      // solanaAssetsData,
      // ethereumAssetsData
    );

    for (const file of chainFiles) {
      if (file.endsWith('.ts')) {
        const chainModule = require(path.join(mainnetPath, file));
        const chainData = (chainModule.default || chainModule)[
          file.split('.')[0]
        ];

        let refinedChannelMap = channelMapData[chainData?.chainId || ''];

        //TODO: 지우고 역으로 찾아서 넣어야 함. 다른 스크립트 생성해야 함.

        const transformedData: CustomChainInfo = {
          ...chainData,
          chainType: 'cosmos',
          channelMap: refinedChannelMap,
          cosmos: {
            bip44: chainData.bip44,
            bech32Config: chainData.bech32Config,
          },
          currencies: chainData.currencies?.map((currency) => {
            const picassoAssetId = Object.keys(crossChainData['dotsama']).find(
              (key) =>
                crossChainData['dotsama'][key]?.denom === currency?.coinDenom &&
                crossChainData['dotsama'][key]?.['network'] !== 'COMPOSABLE'
            );

            const composableAssetId = Object.keys(
              crossChainData['dotsama']
            ).find(
              (key) =>
                crossChainData['dotsama'][key]?.denom === currency?.coinDenom &&
                crossChainData['dotsama'][key]?.['network'] === 'COMPOSABLE'
            );

            //ethereum
            const ethereumInfo = ethereumAssetsData?.[currency.coinDenom];
            const erc20Address = ethereumInfo?.erc20Address || '';
            const ethereumFromCosmosFee =
              ethereumInfo?.cosmosToEthereumFee || 0;
            const ethereumMinimumTransfer = ethereumInfo?.minimumTransfer || 0;

            const ethereumMinimalDenom =
              crossChainData['ethereum']?.[erc20Address]?.minimalDenom || '';

            //solana
            const solanaInfo = solanaAssetsData?.[currency.coinDenom];
            const mintAddress = solanaInfo?.mintAddress || '';
            const solanaFromCosmosFee = solanaInfo?.cosmosToSolanaFee || 0;
            const solanaMinimumTransfer = solanaInfo?.minimumTransfer || 0;
            const displayDecimals = solanaInfo?.realDecimals || 0;

            const solanaMinimalDenom =
              crossChainData['solana'][mintAddress]?.minimalDenom || '';

            const coinGeckoId =
              coingeckoData.find(
                (coin) =>
                  coin.name.toUpperCase() === currency.coinDenom.toUpperCase()
              )?.id ||
              currency?.coinGeckoId ||
              '';
            return {
              ...currency,
              coinGeckoId: coinGeckoId,
              cosmos: { minimalDenom: currency.coinMinimalDenom },
              polkadot: {
                picassoAssetId, // replace with actual value
                composableAssetId, // replace with actual value
              },
              ethereum: {
                minimalDenom: ethereumMinimalDenom,
                erc20Address, // replace with actual value
                fromCosmosFee: ethereumFromCosmosFee, // replace with actual value
                minimumTransfer: ethereumMinimumTransfer, // replace with actual value
              },
              solana: {
                mintAddress, // replace with actual value
                minimalDenom: solanaMinimalDenom + 1,
                minimumTransfer: solanaMinimumTransfer, // replace with actual value
                fromCosmosFee: solanaFromCosmosFee, // replace with actual value
                displayDecimals, // replace with actual value
              },
            };
          }),
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
  } catch (e) {
    console.error(e);
    throw e;
  }
}
processChainFiles().catch(console.error);
