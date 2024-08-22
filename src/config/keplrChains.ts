
// [GENERATED]
import { ChainInfo } from "@keplr-wallet/types";

export const keplrChains :Record<string, ChainInfo>= {
  "agoric-3": {
    "bech32Config": {
      "bech32PrefixAccAddr": "agoric",
      "bech32PrefixAccPub": "agoricpub",
      "bech32PrefixValAddr": "agoricvaloper",
      "bech32PrefixValPub": "agoricvaloperpub",
      "bech32PrefixConsAddr": "agoricvalcons",
      "bech32PrefixConsPub": "agoricvalconspub"
    },
    "bip44": {
      "coinType": 564
    },
    "chainId": "agoric-3",
    "chainName": "Agoric",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "BLD",
        "coinGeckoId": "agoric",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
        "coinMinimalDenom": "ubld"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "IST",
        "coinGeckoId": "inter-stable-token",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png",
        "coinMinimalDenom": "uist"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "BLD",
        "coinGeckoId": "agoric",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
        "gasPriceStep": {
          "low": 0.03,
          "average": 0.05,
          "high": 0.07
        },
        "coinMinimalDenom": "ubld"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "IST",
        "coinGeckoId": "inter-stable-token",
        "gasPriceStep": {
          "low": 0.0034,
          "average": 0.007,
          "high": 0.02
        },
        "coinMinimalDenom": "uist"
      }
    ],
    "rest": "https://agoric-cmp-api.polkachu.com",
    "rpc": "https://agoric-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "BLD",
      "coinGeckoId": "agoric",
      "coinMinimalDenom": "ubld",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/agoric"
  },
  "archway-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "archway",
      "bech32PrefixAccPub": "archwaypub",
      "bech32PrefixConsAddr": "archwayvalcons",
      "bech32PrefixConsPub": "archwayvalconspub",
      "bech32PrefixValAddr": "archwayvaloper",
      "bech32PrefixValPub": "archwayvaloperpub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "archway-1",
    "chainName": "Archway",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/chain.png",
    "currencies": [
      {
        "coinDecimals": 18,
        "coinDenom": "ARCH",
        "coinGeckoId": "archway",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
        "coinMinimalDenom": "aarch"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 18,
        "coinDenom": "ARCH",
        "coinGeckoId": "archway",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
        "gasPriceStep": {
          "low": 140000000000,
          "average": 196000000000,
          "high": 225400000000
        },
        "coinMinimalDenom": "aarch"
      }
    ],
    "rest": "https://api.mainnet.archway.io",
    "rpc": "https://rpc.mainnet.archway.io",
    "stakeCurrency": {
      "coinDecimals": 18,
      "coinDenom": "ARCH",
      "coinGeckoId": "archway",
      "coinMinimalDenom": "aarch",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png"
    }
  },
  "celestia": {
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
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
        "coinMinimalDenom": "utia"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "TIA",
        "coinGeckoId": "celestia",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
        "gasPriceStep": {
          "low": 0.01,
          "average": 0.02,
          "high": 0.1
        },
        "coinMinimalDenom": "utia"
      }
    ],
    "rest": "https://api.celestia.nodestake.top",
    "rpc": "https://rpc.celestia.nodestake.top",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "TIA",
      "coinGeckoId": "celestia",
      "coinMinimalDenom": "utia",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/celestia"
  },
  "centauri-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "pica",
      "bech32PrefixAccPub": "picapub",
      "bech32PrefixValAddr": "picavaloper",
      "bech32PrefixValPub": "picavaloperpub",
      "bech32PrefixConsAddr": "picavalcons",
      "bech32PrefixConsPub": "picavalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "centauri-1",
    "chainName": "centauri",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
    "currencies": [
      {
        "coinDecimals": 12,
        "coinDenom": "PICA",
        "coinGeckoId": "picasso",
        "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
        "coinMinimalDenom": "ppica"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 12,
        "coinDenom": "PICA",
        "coinGeckoId": "unknown",
        "gasPriceStep": {
          "low": 0,
          "average": 0,
          "high": 0
        },
        "coinMinimalDenom": "ppica"
      }
    ],
    "rest": "https://picasso-api.polkachu.com",
    "rpc": "https://picasso-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 12,
      "coinDenom": "PICA",
      "coinGeckoId": "picasso",
      "coinMinimalDenom": "ppica",
      "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg"
    },
    "walletUrlForStaking": "https://explorer.nodestake.top/composable"
  },
  "chihuahua-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "chihuahua",
      "bech32PrefixAccPub": "chihuahuapub",
      "bech32PrefixValAddr": "chihuahuavaloper",
      "bech32PrefixValPub": "chihuahuavaloperpub",
      "bech32PrefixConsAddr": "chihuahuavalcons",
      "bech32PrefixConsPub": "chihuahuavalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "chihuahua-1",
    "chainName": "Chihuahua",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "HUAHUA",
        "coinGeckoId": "chihuahua-token",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
        "coinMinimalDenom": "uhuahua"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "HUAHUA",
        "coinGeckoId": "chihuahua-token",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
        "gasPriceStep": {
          "low": 500,
          "average": 1250,
          "high": 2000
        },
        "coinMinimalDenom": "uhuahua"
      }
    ],
    "rest": "https://chihuahua-api.polkachu.com",
    "rpc": "https://chihuahua-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "HUAHUA",
      "coinGeckoId": "chihuahua-token",
      "coinMinimalDenom": "uhuahua",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/chihuahua"
  },
  "coreum-mainnet-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "core",
      "bech32PrefixAccPub": "corepub",
      "bech32PrefixValAddr": "corevaloper",
      "bech32PrefixValPub": "corevaloperpub",
      "bech32PrefixConsAddr": "corevalcons",
      "bech32PrefixConsPub": "corevalconspub"
    },
    "bip44": {
      "coinType": 990
    },
    "chainId": "coreum-mainnet-1",
    "chainName": "Coreum",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/coreum-mainnet/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "XRP",
        "coinGeckoId": "ripple",
        "coinMinimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "CORE",
        "coinGeckoId": "coreum",
        "coinMinimalDenom": "ucore"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "CORE",
        "coinGeckoId": "coreum",
        "gasPriceStep": {
          "low": 0.0625,
          "average": 0.0625,
          "high": 0.0625
        },
        "coinMinimalDenom": "ucore"
      }
    ],
    "rest": "https://rest-coreum.ecostake.com",
    "rpc": "https://full-node.mainnet-1.coreum.dev:26657",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "XRP",
      "coinGeckoId": "ripple",
      "coinMinimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz"
    }
  },
  "cosmoshub-4": {
    "bech32Config": {
      "bech32PrefixAccAddr": "cosmos",
      "bech32PrefixAccPub": "cosmospub",
      "bech32PrefixConsAddr": "cosmosvalcons",
      "bech32PrefixConsPub": "cosmosvalconspub",
      "bech32PrefixValAddr": "cosmosvaloper",
      "bech32PrefixValPub": "cosmosvaloperpub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "cosmoshub-4",
    "chainName": "Cosmos Hub",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "ATOM",
        "coinGeckoId": "cosmos",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
        "coinMinimalDenom": "uatom"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "ATOM",
        "coinGeckoId": "cosmos",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
        "gasPriceStep": {
          "average": 0.025,
          "high": 0.03,
          "low": 0.005
        },
        "coinMinimalDenom": "uatom"
      }
    ],
    "rest": "https://cosmos-cmp-api.polkachu.com",
    "rpc": "https://cosmos-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "ATOM",
      "coinGeckoId": "cosmos",
      "coinMinimalDenom": "uatom",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/cosmos-hub"
  },
  "crescent-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "cre",
      "bech32PrefixAccPub": "crepub",
      "bech32PrefixValAddr": "crevaloper",
      "bech32PrefixValPub": "crevaloperpub",
      "bech32PrefixConsAddr": "crevalcons",
      "bech32PrefixConsPub": "crevalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "crescent-1",
    "chainName": "Crescent Network",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crescent/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "CRE",
        "coinGeckoId": "crescent-network",
        "coinMinimalDenom": "ucre"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "bCRE",
        "coinGeckoId": "liquid-staking-crescent",
        "coinMinimalDenom": "ubcre"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "CRE",
        "coinGeckoId": "crescent-network",
        "gasPriceStep": {
          "low": 0.01,
          "average": 0.025,
          "high": 0.03
        },
        "coinMinimalDenom": "ucre"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "bCRE",
        "coinGeckoId": "liquid-staking-crescent",
        "gasPriceStep": {
          "low": 0.0083,
          "average": 0.02075,
          "high": 0.0249
        },
        "coinMinimalDenom": "ubcre"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "ATOM",
        "coinGeckoId": "cosmos",
        "gasPriceStep": {
          "low": 0.000063,
          "average": 0.0001575,
          "high": 0.000189
        },
        "coinMinimalDenom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "USDC.grav",
        "coinGeckoId": "usd-coin",
        "gasPriceStep": {
          "low": 0.000842,
          "average": 0.002105,
          "high": 0.002526
        },
        "coinMinimalDenom": "ibc/CD01034D6749F20AAC5330EF4FD8B8CA7C40F7527AB8C4A302FBD2A070852EE1"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "USDC.axl",
        "coinGeckoId": "usd-coin",
        "gasPriceStep": {
          "low": 0.000842,
          "average": 0.002105,
          "high": 0.002526
        },
        "coinMinimalDenom": "ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "IST",
        "coinGeckoId": "inter-stable-token",
        "gasPriceStep": {
          "low": 0.000842,
          "average": 0.002105,
          "high": 0.002526
        },
        "coinMinimalDenom": "ibc/CA1261224952DF089EFD363D8DBB30A8AB6D8CD181E60EE9E68E432F8DE14FE3"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "CMST",
        "coinGeckoId": "composite",
        "gasPriceStep": {
          "low": 0.000842,
          "average": 0.002105,
          "high": 0.002526
        },
        "coinMinimalDenom": "ibc/9EC8A1701813BB7B73BFED2496009ABB2C8BF187E6CDFA788D77F68E08BC05CD"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "JUNO",
        "coinGeckoId": "juno-network",
        "gasPriceStep": {
          "low": 0.000568,
          "average": 0.00142,
          "high": 0.001704
        },
        "coinMinimalDenom": "ibc/C814F0B662234E24248AE3B2FE2C1B54BBAF12934B757F6E7BC5AEC119963895"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "BLD",
        "coinGeckoId": "agoric",
        "gasPriceStep": {
          "low": 0.002,
          "average": 0.005,
          "high": 0.006
        },
        "coinMinimalDenom": "ibc/11F940BCDFD7CFBFD7EDA13F25DA95D308286D441209D780C9863FD4271514EB"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "CMDX",
        "coinGeckoId": "comdex",
        "gasPriceStep": {
          "low": 0.008146,
          "average": 0.020365,
          "high": 0.024438
        },
        "coinMinimalDenom": "ibc/61DF64ADF65230540C14C63D64897BE08A3DC9A516A91425913F01240E2F432F"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "GRAV",
        "coinGeckoId": "graviton",
        "gasPriceStep": {
          "low": 0.065405,
          "average": 0.1635125,
          "high": 0.196215
        },
        "coinMinimalDenom": "ibc/C950356239AD2A205DE09FDF066B1F9FF19A7CA7145EA48A5B19B76EE47E52F7"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "INJ",
        "coinGeckoId": "injective-protocol",
        "gasPriceStep": {
          "low": 3350000000,
          "average": 8375000000,
          "high": 10050000000
        },
        "coinMinimalDenom": "ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "LUNA",
        "coinGeckoId": "terra-luna-2",
        "gasPriceStep": {
          "low": 0.0004,
          "average": 0.001,
          "high": 0.0012
        },
        "coinMinimalDenom": "ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "LUNC",
        "coinGeckoId": "terra-luna",
        "gasPriceStep": {
          "low": 5,
          "average": 12.5,
          "high": 15
        },
        "coinMinimalDenom": "ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "stATOM",
        "coinGeckoId": "stride-staked-atom",
        "gasPriceStep": {
          "low": 0.00006,
          "average": 0.00015,
          "high": 0.00018
        },
        "coinMinimalDenom": "ibc/D64F87FAE0B35C1954DD7921BA7A2939705DE77CBF72B8002F2E3552EDE4DE52"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "OKT",
        "coinGeckoId": "oec-token",
        "gasPriceStep": {
          "low": 200000000,
          "average": 500000000,
          "high": 600000000
        },
        "coinMinimalDenom": "ibc/764D1629980B02BAFF3D25BEE4FB1E0C5E350AFA252FDF66E68E10D2179A826A"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "AXL",
        "coinGeckoId": "axelar",
        "gasPriceStep": {
          "low": 0.0014,
          "average": 0.0035,
          "high": 0.0042
        },
        "coinMinimalDenom": "ibc/0634D0993744740D675AD01E81156EAC945AEAAE17C074918DC7FF52F41B263E"
      }
    ],
    "rest": "https://crescent-cmp-api.polkachu.com",
    "rpc": "https://crescent-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "CRE",
      "coinGeckoId": "crescent-network",
      "coinMinimalDenom": "ucre"
    },
    "walletUrlForStaking": "https://app.crescent.network/staking"
  },
  "injective-1": {
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
    "chainId": "injective-1",
    "chainName": "Injective",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/chain.png",
    "currencies": [
      {
        "coinDecimals": 18,
        "coinDenom": "INJ",
        "coinGeckoId": "injective-protocol",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
        "coinMinimalDenom": "inj"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 18,
        "coinDenom": "INJ",
        "coinGeckoId": "injective-protocol",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
        "gasPriceStep": {
          "low": 500000000,
          "average": 1000000000,
          "high": 1500000000
        },
        "coinMinimalDenom": "inj"
      }
    ],
    "rest": "https://injective-api.polkachu.com",
    "rpc": "https://injective-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 18,
      "coinDenom": "INJ",
      "coinGeckoId": "injective-protocol",
      "coinMinimalDenom": "inj",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png"
    }
  },
  "kaiyo-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "kujira",
      "bech32PrefixAccPub": "kujirapub",
      "bech32PrefixValAddr": "kujiravaloper",
      "bech32PrefixValPub": "kujiravaloperpub",
      "bech32PrefixConsAddr": "kujiravalcons",
      "bech32PrefixConsPub": "kujiravalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "kaiyo-1",
    "chainName": "Kujira",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "KUJI",
        "coinGeckoId": "kujira",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png",
        "coinMinimalDenom": "ukuji"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "KUJI",
        "coinGeckoId": "kujira",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png",
        "coinMinimalDenom": "ukuji"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "USK",
        "coinGeckoId": "usk",
        "coinMinimalDenom": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "axlUSDC",
        "coinGeckoId": "usd-coin",
        "coinMinimalDenom": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "ATOM",
        "coinGeckoId": "cosmos",
        "coinMinimalDenom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "OSMO",
        "coinGeckoId": "osmosis",
        "coinMinimalDenom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "CMDX",
        "coinGeckoId": "comdex",
        "coinMinimalDenom": "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "EVMOS",
        "coinGeckoId": "evmos",
        "coinMinimalDenom": "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "JUNO",
        "coinGeckoId": "juno-network",
        "coinMinimalDenom": "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "SCRT",
        "coinGeckoId": "secret",
        "coinMinimalDenom": "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "STARS",
        "coinGeckoId": "stargaze",
        "coinMinimalDenom": "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "wAVAX",
        "coinGeckoId": "avalanche-2",
        "coinMinimalDenom": "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "wETH",
        "coinGeckoId": "ethereum",
        "coinMinimalDenom": "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7"
      }
    ],
    "rest": "https://kujira-api.polkachu.com",
    "rpc": "https://kujira-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "KUJI",
      "coinGeckoId": "kujira",
      "coinMinimalDenom": "ukuji",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png"
    }
  },
  "neutron-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "neutron",
      "bech32PrefixAccPub": "neutronpub",
      "bech32PrefixValAddr": "neutronvaloper",
      "bech32PrefixValPub": "neutronvaloperpub",
      "bech32PrefixConsAddr": "neutronvalcons",
      "bech32PrefixConsPub": "neutronvalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "neutron-1",
    "chainName": "Neutron",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "ASTRO",
        "coinGeckoId": "astroport-fi",
        "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astro.svg",
        "coinMinimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "NTRN",
        "coinGeckoId": "neutron-3",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/untrn.png",
        "coinMinimalDenom": "untrn"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "NTRN",
        "coinGeckoId": "neutron-3",
        "gasPriceStep": {
          "low": 0.0053,
          "average": 0.0053,
          "high": 0.0053
        },
        "coinMinimalDenom": "untrn"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "ATOM",
        "gasPriceStep": {
          "low": 0.0008,
          "average": 0.0008,
          "high": 0.0008
        },
        "coinMinimalDenom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "USDC",
        "gasPriceStep": {
          "low": 0.008,
          "average": 0.008,
          "high": 0.008
        },
        "coinMinimalDenom": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "wstETH",
        "gasPriceStep": {
          "low": 2903231.6597,
          "average": 2903231.6597,
          "high": 2903231.6597
        },
        "coinMinimalDenom": "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "DYDX",
        "gasPriceStep": {
          "low": 2564102564.1026,
          "average": 2564102564.1026,
          "high": 2564102564.1026
        },
        "coinMinimalDenom": "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "TIA",
        "gasPriceStep": {
          "low": 0.0004,
          "average": 0.0004,
          "high": 0.0004
        },
        "coinMinimalDenom": "ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "stATOM",
        "gasPriceStep": {
          "low": 0.0006,
          "average": 0.0006,
          "high": 0.0006
        },
        "coinMinimalDenom": "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C"
      }
    ],
    "rest": "https://neutron-cmp-api.polkachu.com",
    "rpc": "https://neutron-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "ASTRO",
      "coinGeckoId": "astroport-fi",
      "coinMinimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro",
      "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astro.svg"
    }
  },
  "osmosis-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "osmo",
      "bech32PrefixAccPub": "osmopub",
      "bech32PrefixValAddr": "osmovaloper",
      "bech32PrefixValPub": "osmovaloperpub",
      "bech32PrefixConsAddr": "osmovalcons",
      "bech32PrefixConsPub": "osmovalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "osmosis-1",
    "chainName": "Osmosis",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "OSMO",
        "coinGeckoId": "osmosis",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
        "coinMinimalDenom": "uosmo"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "milkTIA",
        "coinGeckoId": "milkyway-staked-tia",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/milktia.png",
        "coinMinimalDenom": "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "OSMO",
        "coinGeckoId": "osmosis",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
        "gasPriceStep": {
          "low": 0.0025,
          "average": 0.025,
          "high": 0.04
        },
        "coinMinimalDenom": "uosmo"
      }
    ],
    "rest": "https://osmosis-cmp-api.polkachu.com",
    "rpc": "https://osmosis-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "OSMO",
      "coinGeckoId": "osmosis",
      "coinMinimalDenom": "uosmo",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/osmosis"
  },
  "quicksilver-2": {
    "bech32Config": {
      "bech32PrefixAccAddr": "quick",
      "bech32PrefixAccPub": "quickpub",
      "bech32PrefixValAddr": "quickvaloper",
      "bech32PrefixValPub": "quickvaloperpub",
      "bech32PrefixConsAddr": "quickvalcons",
      "bech32PrefixConsPub": "quickvalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "quicksilver-2",
    "chainName": "Quicksilver",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "QCK",
        "coinGeckoId": "quicksilver",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
        "coinMinimalDenom": "uqck"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "QCK",
        "coinGeckoId": "quicksilver",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
        "gasPriceStep": {
          "low": 0.0001,
          "average": 0.0001,
          "high": 0.00025
        },
        "coinMinimalDenom": "uqck"
      }
    ],
    "rest": "https://quicksilver-api.polkachu.com",
    "rpc": "https://quicksilver-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "QCK",
      "coinGeckoId": "quicksilver",
      "coinMinimalDenom": "uqck",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/quicksilver"
  },
  "secret-4": {
    "bech32Config": {
      "bech32PrefixAccAddr": "secret",
      "bech32PrefixAccPub": "secretpub",
      "bech32PrefixValAddr": "secretvaloper",
      "bech32PrefixValPub": "secretvaloperpub",
      "bech32PrefixConsAddr": "secretvalcons",
      "bech32PrefixConsPub": "secretvalconspub"
    },
    "bip44": {
      "coinType": 529
    },
    "chainId": "secret-4",
    "chainName": "Secret Network",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "SCRT",
        "coinGeckoId": "secret",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
        "coinMinimalDenom": "uscrt"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "SILK",
        "coinGeckoId": "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2",
        "coinImageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg",
        "coinMinimalDenom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd"
      },
      {
        "coinDecimals": 8,
        "coinDenom": "SHD",
        "coinGeckoId": "shade-protocol",
        "coinImageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg",
        "coinMinimalDenom": "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "SCRT",
        "coinGeckoId": "secret",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
        "gasPriceStep": {
          "low": 0.05,
          "average": 0.1,
          "high": 0.25
        },
        "coinMinimalDenom": "uscrt"
      }
    ],
    "rest": "https://lcd.mainnet.secretsaturn.net",
    "rpc": "https://scrt.public-rpc.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "SCRT",
      "coinGeckoId": "secret",
      "coinMinimalDenom": "uscrt",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/secret-network"
  },
  "pacific-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "sei",
      "bech32PrefixAccPub": "seipub",
      "bech32PrefixValAddr": "seivaloper",
      "bech32PrefixValPub": "seivaloperpub",
      "bech32PrefixConsAddr": "seivalcons",
      "bech32PrefixConsPub": "seivalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "pacific-1",
    "chainName": "Sei",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pacific/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "SEI",
        "coinGeckoId": "sei-network",
        "coinMinimalDenom": "usei"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "SEI",
        "coinGeckoId": "sei-network",
        "gasPriceStep": {
          "low": 0.1,
          "average": 0.2,
          "high": 0.3
        },
        "coinMinimalDenom": "usei"
      }
    ],
    "rest": "https://sei-api.polkachu.com",
    "rpc": "https://sei-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "SEI",
      "coinGeckoId": "sei-network",
      "coinMinimalDenom": "usei"
    }
  },
  "stargaze-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "stars",
      "bech32PrefixAccPub": "starspub",
      "bech32PrefixValAddr": "starsvaloper",
      "bech32PrefixValPub": "starsvaloperpub",
      "bech32PrefixConsAddr": "starsvalcons",
      "bech32PrefixConsPub": "starsvalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "stargaze-1",
    "chainName": "Stargaze",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "STARS",
        "coinGeckoId": "stargaze",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
        "coinMinimalDenom": "ustars"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "STARS",
        "coinGeckoId": "stargaze",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
        "gasPriceStep": {
          "low": 1,
          "average": 1.1,
          "high": 1.2
        },
        "coinMinimalDenom": "ustars"
      }
    ],
    "rest": "https://stargaze-cmp-api.polkachu.com",
    "rpc": "https://stargaze-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "STARS",
      "coinGeckoId": "stargaze",
      "coinMinimalDenom": "ustars",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/stargaze"
  },
  "stride-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "stride",
      "bech32PrefixAccPub": "stridepub",
      "bech32PrefixValAddr": "stridevaloper",
      "bech32PrefixValPub": "stridevaloperpub",
      "bech32PrefixConsAddr": "stridevalcons",
      "bech32PrefixConsPub": "stridevalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "stride-1",
    "chainName": "Stride",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "stTIA",
        "coinGeckoId": "stride-staked-tia",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/sttia.png",
        "coinMinimalDenom": "stutia"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "STRD",
        "coinGeckoId": "stride",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
        "coinMinimalDenom": "ustrd"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "stATOM",
        "coinGeckoId": "stride-staked-atom",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuatom.png",
        "coinMinimalDenom": "stuatom"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "STRD",
        "coinGeckoId": "stride",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
        "gasPriceStep": {
          "low": 0.005,
          "average": 0.005,
          "high": 0.05
        },
        "coinMinimalDenom": "ustrd"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "ATOM",
        "coinGeckoId": "cosmos",
        "gasPriceStep": {
          "low": 0.0001,
          "average": 0.001,
          "high": 0.01
        },
        "coinMinimalDenom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "OSMO",
        "coinGeckoId": "osmosis",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/uosmo.png",
        "gasPriceStep": {
          "low": 0.001,
          "average": 0.01,
          "high": 0.1
        },
        "coinMinimalDenom": "ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "stOSMO",
        "coinGeckoId": "stride-staked-osmo",
        "gasPriceStep": {
          "low": 0.001,
          "average": 0.01,
          "high": 0.1
        },
        "coinMinimalDenom": "stuosmo"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "stATOM",
        "coinGeckoId": "stride-staked-atom",
        "gasPriceStep": {
          "low": 0.0001,
          "average": 0.001,
          "high": 0.01
        },
        "coinMinimalDenom": "stuatom"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "INJ",
        "coinGeckoId": "injective-protocol",
        "gasPriceStep": {
          "low": 500000000,
          "average": 500000000,
          "high": 500000000
        },
        "coinMinimalDenom": "ibc/A7454562FF29FE068F42F9DE4805ABEF54F599D1720B345D6518D9B5C64EA6D2"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "stINJ",
        "coinGeckoId": "stride-staked-injective",
        "gasPriceStep": {
          "low": 500000000,
          "average": 500000000,
          "high": 500000000
        },
        "coinMinimalDenom": "stinj"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "EVMOS",
        "coinGeckoId": "evmos",
        "gasPriceStep": {
          "low": 20000000000,
          "average": 20000000000,
          "high": 20000000000
        },
        "coinMinimalDenom": "ibc/4B322204B4F59D770680FE4D7A565DDC3F37BFF035474B717476C66A4F83DD72"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "stEVMOS",
        "gasPriceStep": {
          "low": 20000000000,
          "average": 20000000000,
          "high": 20000000000
        },
        "coinMinimalDenom": "staevmos"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "TIA",
        "coinGeckoId": "celestia",
        "gasPriceStep": {
          "low": 0.01,
          "average": 0.01,
          "high": 0.01
        },
        "coinMinimalDenom": "ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "stTIA",
        "coinGeckoId": "stride-staked-tia",
        "gasPriceStep": {
          "low": 0.01,
          "average": 0.01,
          "high": 0.01
        },
        "coinMinimalDenom": "stutia"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "DYDX",
        "coinGeckoId": "dydx-chain",
        "gasPriceStep": {
          "low": 15000000000,
          "average": 15000000000,
          "high": 15000000000
        },
        "coinMinimalDenom": "ibc/561C70B20188A047BFDE6F9946BDDC5D8AC172B9BE04FF868DFABF819E5A9CCE"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "stDYDX",
        "coinGeckoId": "stride-staked-dydx",
        "gasPriceStep": {
          "low": 15000000000,
          "average": 15000000000,
          "high": 15000000000
        },
        "coinMinimalDenom": "stadydx"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "DYM",
        "coinGeckoId": "dymension",
        "gasPriceStep": {
          "low": 15000000000,
          "average": 15000000000,
          "high": 50000000000
        },
        "coinMinimalDenom": "ibc/E1C22332C083574F3418481359733BA8887D171E76C80AD9237422AEABB66018"
      },
      {
        "coinDecimals": 18,
        "coinDenom": "stDYM",
        "gasPriceStep": {
          "low": 15000000000,
          "average": 15000000000,
          "high": 50000000000
        },
        "coinMinimalDenom": "stadym"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "stSAGA",
        "gasPriceStep": {
          "low": 0.01,
          "average": 0.01,
          "high": 0.01
        },
        "coinMinimalDenom": "stusaga"
      },
      {
        "coinDecimals": 6,
        "coinDenom": "SAGA",
        "gasPriceStep": {
          "low": 0.01,
          "average": 0.01,
          "high": 0.01
        },
        "coinMinimalDenom": "ibc/520D9C4509027DE66C737A1D6A6021915A3071E30DBA8F758B46532B060D7AA5"
      }
    ],
    "rest": "https://stride-cmp-api.polkachu.com",
    "rpc": "https://stride-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "stTIA",
      "coinGeckoId": "stride-staked-tia",
      "coinMinimalDenom": "stutia",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/sttia.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/stride"
  },
  "umee-1": {
    "bech32Config": {
      "bech32PrefixAccAddr": "umee",
      "bech32PrefixAccPub": "umeepub",
      "bech32PrefixValAddr": "umeevaloper",
      "bech32PrefixValPub": "umeevaloperpub",
      "bech32PrefixConsAddr": "umeevalcons",
      "bech32PrefixConsPub": "umeevalconspub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "umee-1",
    "chainName": "UMEE",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "UMEE",
        "coinGeckoId": "umee",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
        "coinMinimalDenom": "uumee"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "UMEE",
        "coinGeckoId": "umee",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
        "gasPriceStep": {
          "low": 0.06,
          "average": 0.1,
          "high": 0.14
        },
        "coinMinimalDenom": "uumee"
      }
    ],
    "rest": "https://umee-cmp-api.polkachu.com",
    "rpc": "https://umee-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "UMEE",
      "coinGeckoId": "umee",
      "coinMinimalDenom": "uumee",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/umee"
  }
} ;

