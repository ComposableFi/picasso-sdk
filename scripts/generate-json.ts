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
  chainType: 'cosmos' | 'polkadot' | 'ethereum' | 'solana';
  chainId: string;
  chainName: string;
  rest?: string;
  rpc: string;

  channelMap: {
    [key: string]: {
      chainId: string;
      destinationId: number;
      tokens: string[];
    };
  };

  chainSymbolImageUrl: string;
  polkadot?: {
    ss58Format: number;
    isParachain: boolean;
    relayChain: 'polkadot' | 'kusama';
    hops: {
      [key: string]: {
        type: 'xcm';
        xcmType: string;
        version: string;
        tokens: string[];
      };
    };
  };
  cosmos?: {
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
      isFee: boolean;
      gasPriceStep?: {
        low: number;
        average: number;
        high: number;
      };
    };
    ethereum?: {
      isFee: boolean;

      minimalDenom: string;
      erc20Address: string;
      fromCosmosFee: number;
      minimumTransfer: number;
    };
    solana?: {
      isFee: boolean;

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
    cosmos: {
      gasPriceStep?: {
        low: number;
        average: number;
        high: number;
      };
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

    const polkadotMap = {
      PICASSO: {
        chainId: '2087',
      },
      POLKADOT: {
        chainId: '',
      },
      KUSAMA: {
        chainId: '',
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
    for (const file of chainFiles) {
      if (file.endsWith('.ts')) {
        const chainModule = require(path.join(mainnetPath, file));
        const chainData = (chainModule.default || chainModule)[
          file.split('.')[0]
        ];

        let refinedChannelMap = channelMapData[chainData?.chainId || ''];

        //TODO: 지우고 역으로 찾아서 넣어야 함. 다른 스크립트 생성해야 함.
        let transformedData: CustomChainInfo | {} = {};
        //cosmos case
        if (chainData?.rest) {
          const {
            chainId,
            chainName,
            currencies,
            chainSymbolImageUrl,
            feeCurrencies,
            nodeProvider,
            rest,
            rpc,
            stakeCurrency,
            features,
            ...others
          } = chainData || {};
          transformedData = {
            chainId,
            rest,
            rpc,
            chainName,
            chainSymbolImageUrl,
            cosmos: others,
            chainType: 'cosmos',
            channelMap: refinedChannelMap,

            currencies: currencies?.map((currency) => {
              const picassoAssetId = Object.keys(
                crossChainData['dotsama']
              ).find(
                (key) =>
                  crossChainData['dotsama'][key]?.denom ===
                    currency?.coinDenom &&
                  crossChainData['dotsama'][key]?.['network'] !== 'COMPOSABLE'
              );

              const composableAssetId = Object.keys(
                crossChainData['dotsama']
              ).find(
                (key) =>
                  crossChainData['dotsama'][key]?.denom ===
                    currency?.coinDenom &&
                  crossChainData['dotsama'][key]?.['network'] === 'COMPOSABLE'
              );

              //ethereum
              const ethereumInfo = ethereumAssetsData?.[currency.coinDenom];
              const erc20Address = ethereumInfo?.erc20Address || '';
              const ethereumFromCosmosFee =
                ethereumInfo?.cosmosToEthereumFee || 0;
              const ethereumMinimumTransfer =
                ethereumInfo?.minimumTransfer || 0;

              const ethereumMinimalDenom =
                crossChainData['ethereum']?.[erc20Address]?.minimalDenom || '';

              //solana
              const solanaInfo = solanaAssetsData?.[currency.coinDenom];
              const mintAddress = solanaInfo?.mintAddress || '';
              const solanaFromCosmosFee = solanaInfo?.cosmosToSolanaFee || 0;
              const solanaMinimumTransfer = solanaInfo?.minimumTransfer || 0;
              const displayDecimals =
                solanaInfo?.realDecimals ||
                crossChainData['solana'][mintAddress]?.decimals ||
                0;

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
                ethereum: erc20Address
                  ? {
                      minimalDenom: ethereumMinimalDenom,
                      erc20Address, // replace with actual value
                      fromCosmosFee: ethereumFromCosmosFee, // replace with actual value
                      minimumTransfer: ethereumMinimumTransfer, // replace with actual value
                    }
                  : {},
                solana: mintAddress
                  ? {
                      mintAddress, // replace with actual value
                      minimalDenom: solanaMinimalDenom,
                      minimumTransfer: solanaMinimumTransfer, // replace with actual value
                      fromCosmosFee: solanaFromCosmosFee, // replace with actual value
                      displayDecimals, // replace with actual value
                    }
                  : {},
              };
            }),
            feeCurrencies: feeCurrencies?.map((feeCurrency) => {
              const { gasPriceStep, ...others } = feeCurrency;
              return {
                ...others,
                cosmos: {
                  gasPriceStep,
                },
              };
            }),
          };
          //polkadot case
        } else if (chainData?.handler === 'POLKADOT') {
          const {
            chainId,
            chainName,
            currencies,
            chainSymbolImageUrl,
            feeCurrencies,
            nodeProvider,
            rest,
            rpc,
            stakeCurrency,
            features,
            ...others
          } = chainData || {};
          let refinedHops = {};
          for (const key in chainData.hops) {
            refinedHops[polkadotMap[key]?.chainId] = chainData.hops[key];
          }
          const tokensArray: any = Object.values(chainData.hops).reduce(
            (acc: string[], item: any) => {
              if (item.tokens) {
                acc.push(...item.tokens);
              }
              return acc;
            },
            []
          );
          const dotAssetInfo =
            crossChainData['dotsama'][chainData.config?.assetId || ''];

          const coinGeckoIdForFee =
            coingeckoData.find(
              (coin) =>
                coin.name.toUpperCase() === dotAssetInfo.denom.toUpperCase()
            )?.id || '';
          transformedData = {
            chainId: chainData.config?.dotChainId,
            rest: '',
            rpc: chainData.config.endpoint[0],
            chainName: chainData.config?.name,
            chainSymbolImageUrl: '',
            chainType: 'polkadot',
            polkadot: {
              ss58Format: chainData.config?.ss58_format,
              isParachain: chainData.config?.chain_type === 'PARACHAIN',
              relayChain: Object.keys(chainData.hops).includes('COMPOSABLE')
                ? 'polkadot'
                : 'kusama',
              hops: refinedHops,
            },
            channelMap: refinedChannelMap,

            currencies: tokensArray?.map((currency) => {
              const picassoAssetId = Object.keys(
                crossChainData['dotsama']
              ).find(
                (key) =>
                  key === currency &&
                  crossChainData['dotsama'][key]?.['network'] !== 'COMPOSABLE'
              );

              const composableAssetId = Object.keys(
                crossChainData['dotsama']
              ).find(
                (key) =>
                  key === currency &&
                  crossChainData['dotsama'][key]?.['network'] === 'COMPOSABLE'
              );

              const denom = crossChainData['dotsama'][currency]?.denom || '';
              const decimal =
                crossChainData['dotsama'][currency]?.decimals || '';
              //ethereum
              const ethereumInfo = ethereumAssetsData?.[denom];
              const erc20Address = ethereumInfo?.erc20Address || '';
              const ethereumFromCosmosFee =
                ethereumInfo?.cosmosToEthereumFee || 0;
              const ethereumMinimumTransfer =
                ethereumInfo?.minimumTransfer || 0;

              const ethereumMinimalDenom =
                crossChainData['ethereum']?.[erc20Address]?.minimalDenom || '';

              //solana
              const solanaInfo = solanaAssetsData?.[denom];
              const mintAddress = solanaInfo?.mintAddress || '';
              const solanaFromCosmosFee = solanaInfo?.cosmosToSolanaFee || 0;
              const solanaMinimumTransfer = solanaInfo?.minimumTransfer || 0;
              const displayDecimals =
                solanaInfo?.realDecimals ||
                crossChainData['solana'][mintAddress]?.decimals ||
                0;

              const solanaMinimalDenom =
                crossChainData['solana'][mintAddress]?.minimalDenom || '';

              //cosmos
              const cosmosKey = Object.keys(crossChainData['cosmos'])?.find(
                (key) => crossChainData['cosmos'][key].denom === denom
              );

              const cosmosInfo: any = crossChainData['cosmos'][cosmosKey];
              const coinGeckoId =
                coingeckoData.find(
                  (coin) =>
                    coin.name.toUpperCase() === denom.toUpperCase() ||
                    (coin.name === 'BNC' && denom.includes('BNC_'))
                )?.id || '';
              return {
                coinDenom: denom,
                coinDecimals: decimal,
                coinImageUrl: '',

                coinGeckoId: coinGeckoId,
                cosmos: cosmosInfo?.minimalDenom
                  ? { minimalDenom: cosmosInfo.minimalDenom }
                  : {},
                polkadot: {
                  picassoAssetId, // replace with actual value
                  composableAssetId, // replace with actual value
                },
                ethereum: erc20Address
                  ? {
                      minimalDenom: ethereumMinimalDenom,
                      erc20Address, // replace with actual value
                      fromCosmosFee: ethereumFromCosmosFee, // replace with actual value
                      minimumTransfer: ethereumMinimumTransfer, // replace with actual value
                    }
                  : {},
                solana: mintAddress
                  ? {
                      mintAddress, // replace with actual value
                      minimalDenom: solanaMinimalDenom,
                      minimumTransfer: solanaMinimumTransfer, // replace with actual value
                      fromCosmosFee: solanaFromCosmosFee, // replace with actual value
                      displayDecimals, // replace with actual value
                    }
                  : {},
              };
            }),
            feeCurrencies: [
              {
                coinDenom: dotAssetInfo.denom,
                coinDecimals: dotAssetInfo.decimals,
                coinImageUrl: '',
                coinMinimalDenom: '',
                coinGeckoId: coinGeckoIdForFee,
              },
            ],
          };
        } else if (chainData?.handler === 'SOLANA') {
          const {
            chainId,
            chainName,
            currencies,
            chainSymbolImageUrl,
            feeCurrencies,
            nodeProvider,
            rest,
            rpc,
            stakeCurrency,
            features,
            ...others
          } = chainData || {};

          const solanaAssets = Object.keys(crossChainData)['solana'];

          transformedData = {
            chainId,
            rest,
            rpc,
            chainName,
            chainSymbolImageUrl,
            cosmos: others,
            chainType: 'cosmos',
            channelMap: refinedChannelMap,

            currencies: solanaAssets?.map((currency) => {
              const picassoAssetId = Object.keys(
                crossChainData['dotsama']
              ).find(
                (key) =>
                  crossChainData['dotsama'][key]?.denom ===
                    crossChainData[currency]?.denom &&
                  crossChainData['dotsama'][key]?.['network'] !== 'COMPOSABLE'
              );

              const composableAssetId = Object.keys(
                crossChainData['dotsama']
              ).find(
                (key) =>
                  crossChainData['dotsama'][key]?.denom ===
                    crossChainData[currency]?.denom &&
                  crossChainData['dotsama'][key]?.['network'] === 'COMPOSABLE'
              );

              //ethereum
              const ethereumAssetId = Object.keys(
                crossChainData['ethereum']
              ).find(
                (key) =>
                  crossChainData['ethereum'][key]?.denom.toUpperCase() ===
                  crossChainData[currency]?.denom.toUpperCase()
              );
              const erc20Address = ethereumAssetId || '';
              const ethereumInfo = ethereumAssetsData?.[erc20Address];
              const ethereumFromCosmosFee =
                ethereumInfo?.cosmosToEthereumFee || 0;
              const ethereumMinimumTransfer =
                ethereumInfo?.minimumTransfer || 0;

              const ethereumMinimalDenom =
                crossChainData['ethereum']?.[erc20Address]?.minimalDenom || '';

              //solana

              const solanaInfo = solanaAssetsData?.[currency];
              const mintAddress = solanaInfo?.mintAddress || '';
              const solanaFromCosmosFee = solanaInfo?.cosmosToSolanaFee || 0;
              const solanaMinimumTransfer = solanaInfo?.minimumTransfer || 0;
              const displayDecimals =
                solanaInfo?.realDecimals ||
                crossChainData['solana'][mintAddress]?.decimals ||
                0;

              const solanaMinimalDenom =
                crossChainData['solana'][mintAddress]?.minimalDenom || '';

              const coinGeckoId =
                coingeckoData.find(
                  (coin) =>
                    coin.name.toUpperCase() ===
                    crossChainData[currency]?.denom?.toUpperCase()
                )?.id || '';
              return {
                ...currency,
                coinGeckoId: coinGeckoId,
                cosmos: { minimalDenom: currency.coinMinimalDenom },
                polkadot: {
                  picassoAssetId,
                  composableAssetId,
                },
                ethereum: erc20Address
                  ? {
                      minimalDenom: ethereumMinimalDenom,
                      erc20Address, // replace with actual value
                      fromCosmosFee: ethereumFromCosmosFee, // replace with actual value
                      minimumTransfer: ethereumMinimumTransfer, // replace with actual value
                    }
                  : {},
                solana: mintAddress
                  ? {
                      mintAddress, // replace with actual value
                      minimalDenom: solanaMinimalDenom,
                      minimumTransfer: solanaMinimumTransfer, // replace with actual value
                      fromCosmosFee: solanaFromCosmosFee, // replace with actual value
                      displayDecimals, // replace with actual value
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
