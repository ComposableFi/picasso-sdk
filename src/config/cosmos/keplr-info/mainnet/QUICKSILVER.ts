import { type ChainInfo as KeplrChainInfo } from '@keplr-wallet/types';
import { ReadonlyDeep } from "type-fest";

export const QUICKSILVER = {
  "rpc": "https://quicksilver-rpc.polkachu.com",
  "rest": "https://quicksilver-api.polkachu.com",
  "chainId": "quicksilver-2",
  "chainName": "Quicksilver",
  "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/chain.png",
  "stakeCurrency": {
    "coinDenom": "QCK",
    "coinMinimalDenom": "uqck",
    "coinDecimals": 6,
    "coinGeckoId": "quicksilver",
    "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png"
  },
  "walletUrlForStaking": "https://wallet.keplr.app/chains/quicksilver",
  "bip44": {
    "coinType": 118
  },
  "bech32Config": {
    "bech32PrefixAccAddr": "quick",
    "bech32PrefixAccPub": "quickpub",
    "bech32PrefixValAddr": "quickvaloper",
    "bech32PrefixValPub": "quickvaloperpub",
    "bech32PrefixConsAddr": "quickvalcons",
    "bech32PrefixConsPub": "quickvalconspub"
  },
  "currencies": [
    {
      "coinDenom": "QCK",
      "coinMinimalDenom": "uqck",
      "coinDecimals": 6,
      "coinGeckoId": "quicksilver",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png"
    },
    {
      "coinDenom": "qSTARS",
      "coinMinimalDenom": "uqstars",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqstars.png"
    },
    {
      "coinDenom": "qATOM",
      "coinMinimalDenom": "uqatom",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqatom.png"
    },
    {
      "coinDenom": "qREGEN",
      "coinMinimalDenom": "uqregen",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqregen.png"
    },
    {
      "coinDenom": "qOSMO",
      "coinMinimalDenom": "uqosmo",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqosmo.png"
    },
    {
      "coinDenom": "qSOMM",
      "coinMinimalDenom": "uqsomm",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqsomm.png"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "QCK",
      "coinMinimalDenom": "uqck",
      "coinDecimals": 6,
      "coinGeckoId": "quicksilver",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
      "gasPriceStep": {
        "low": 0.0001,
        "average": 0.0001,
        "high": 0.00025
      }
    }
  ],
  "features": [
    "authz-msg-revoke-fixed"
  ]
} as const satisfies ReadonlyDeep<KeplrChainInfo>;