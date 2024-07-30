import { type ChainInfo as KeplrChainInfo } from '@keplr-wallet/types';
import { ReadonlyDeep } from "type-fest";

export const INJECTIVE = {
  "rpc": "https://injective-rpc.polkachu.com",
  "rest": "https://injective-api.polkachu.com",
  "chainId": "injective-1",
  "chainName": "Injective",
  "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/chain.png",
  "bech32Config": {
    "bech32PrefixAccPub": "injpub",
    "bech32PrefixValPub": "injvaloperpub",
    "bech32PrefixAccAddr": "inj",
    "bech32PrefixConsPub": "injvalconspub",
    "bech32PrefixValAddr": "injvaloper",
    "bech32PrefixConsAddr": "injvalcons"
  },
  "bip44": {
    "coinType": 60
  },
  "stakeCurrency": {
    "coinDenom": "INJ",
    "coinDecimals": 18,
    "coinMinimalDenom": "inj",
    "coinGeckoId": "injective-protocol",
    "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png"
  },
  "currencies": [
    {
      "coinDenom": "INJ",
      "coinDecimals": 18,
      "coinMinimalDenom": "inj",
      "coinGeckoId": "injective-protocol",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png"
    },
    {
      "coinDenom": "NINJA",
      "coinDecimals": 6,
      "coinMinimalDenom": "factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja",
      "coinGeckoId": "dog-wif-nuchucks",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/ninja.png"
    },
    {
      "coinDenom": "Talis",
      "coinDecimals": 6,
      "coinMinimalDenom": "factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/Talis",
      "coinGeckoId": "talis-protocol",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/talis.png"
    },
    {
      "coinDenom": "HAVA",
      "coinMinimalDenom": "factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/hava.png"
    },
    {
      "coinDenom": "KIRA",
      "coinDecimals": 6,
      "coinMinimalDenom": "factory/inj1xy3kvlr4q4wdd6lrelsrw2fk2ged0any44hhwq/KIRA",
      "coinGeckoId": "kira-the-injective-cat",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1xy3kvlr4q4wdd6lrelsrw2fk2ged0any44hhwq/KIRA.png"
    },
    {
      "coinDenom": "HDRO",
      "coinMinimalDenom": "factory/inj1etz0laas6h7vemg3qtd67jpr6lh8v7xz7gfzqw/hdro",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1etz0laas6h7vemg3qtd67jpr6lh8v7xz7gfzqw/hdro.png"
    },
    {
      "coinDenom": "QUNT",
      "coinDecimals": 6,
      "coinMinimalDenom": "factory/inj127l5a2wmkyvucxdlupqyac3y0v6wqfhq03ka64/qunt",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj127l5a2wmkyvucxdlupqyac3y0v6wqfhq03ka64/QUNT.png"
    },
    {
      "coinDenom": "HOUND",
      "coinDecimals": 6,
      "coinMinimalDenom": "factory/inj1nccncwqx5q22lf4uh83dhe89e3f0sh8kljf055/HOUND",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1nccncwqx5q22lf4uh83dhe89e3f0sh8kljf055/HOUND.png"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "INJ",
      "coinDecimals": 18,
      "coinMinimalDenom": "inj",
      "coinGeckoId": "injective-protocol",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
      "gasPriceStep": {
        "low": 500000000,
        "average": 1000000000,
        "high": 1500000000
      }
    }
  ],
  "features": [
    "eth-address-gen",
    "eth-key-sign",
    "cosmwasm"
  ]
} as const satisfies ReadonlyDeep<KeplrChainInfo>;