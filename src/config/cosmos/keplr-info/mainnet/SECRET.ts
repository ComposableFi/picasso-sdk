import { type ChainInfo as KeplrChainInfo } from '@keplr-wallet/types';
import { ReadonlyDeep } from "type-fest";

export const SECRET = {
  "rpc": "https://scrt.public-rpc.com",
  "rest": "https://lcd.mainnet.secretsaturn.net",
  "chainId": "secret-4",
  "chainName": "Secret Network",
  "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/chain.png",
  "stakeCurrency": {
    "coinDenom": "SCRT",
    "coinMinimalDenom": "uscrt",
    "coinDecimals": 6,
    "coinGeckoId": "secret",
    "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png"
  },
  "walletUrl": "https://wallet.keplr.app/chains/secret-network",
  "walletUrlForStaking": "https://wallet.keplr.app/chains/secret-network",
  "bip44": {
    "coinType": 529
  },
  "alternativeBIP44s": [
    {
      "coinType": 118
    }
  ],
  "bech32Config": {
    "bech32PrefixAccAddr": "secret",
    "bech32PrefixAccPub": "secretpub",
    "bech32PrefixValAddr": "secretvaloper",
    "bech32PrefixValPub": "secretvaloperpub",
    "bech32PrefixConsAddr": "secretvalcons",
    "bech32PrefixConsPub": "secretvalconspub"
  },
  "currencies": [
    {
      "coinDenom": "SCRT",
      "coinMinimalDenom": "uscrt",
      "coinDecimals": 6,
      "coinGeckoId": "secret",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "SCRT",
      "coinMinimalDenom": "uscrt",
      "coinDecimals": 6,
      "coinGeckoId": "secret",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
      "gasPriceStep": {
        "low": 0.05,
        "average": 0.1,
        "high": 0.25
      }
    }
  ],
  "features": [
    "secretwasm",
    "authz-msg-revoke-fixed"
  ]
} as const satisfies ReadonlyDeep<KeplrChainInfo>;