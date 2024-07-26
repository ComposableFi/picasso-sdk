import { type ChainInfo as KeplrChainInfo } from '@keplr-wallet/types';
import { ReadonlyDeep } from "type-fest";

export const CELESTIA = {
  "bech32Config": {
    "bech32PrefixAccAddr": "celestia",
    "bech32PrefixAccPub": "celestiapub",
    "bech32PrefixConsAddr": "celestiavalcons",
    "bech32PrefixConsPub": "celestiavalconspub",
    "bech32PrefixValAddr": "celestiavaloper",
    "bech32PrefixValPub": "celestiavaloperpub"
  },
  "bip44": {
    "coinType": 118
  },
  "chainId": "celestia",
  "chainName": "Celestia",
  "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
  "currencies": [
    {
      "coinDecimals": 6,
      "coinDenom": "TIA",
      "coinGeckoId": "celestia",
      "coinMinimalDenom": "utia",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png"
    }
  ],
  "features": [],
  "feeCurrencies": [
    {
      "coinDecimals": 6,
      "coinDenom": "TIA",
      "coinGeckoId": "celestia",
      "coinMinimalDenom": "utia",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
      "gasPriceStep": {
        "low": 0.01,
        "average": 0.02,
        "high": 0.1
      }
    }
  ],
  "rpc": "https://rpc.celestia.nodestake.top",
  "rest": "https://api.celestia.nodestake.top",
  "stakeCurrency": {
    "coinDecimals": 6,
    "coinDenom": "TIA",
    "coinGeckoId": "celestia",
    "coinMinimalDenom": "utia",
    "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/utia.png"
  },
  "walletUrlForStaking": "https://wallet.keplr.app/chains/celestia"
} as const satisfies ReadonlyDeep<KeplrChainInfo>;