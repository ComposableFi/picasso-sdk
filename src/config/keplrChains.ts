
// [GENERATED]
export const keplrChains = {
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
        "coinDenom": "BLD",
        "coinMinimalDenom": "ubld",
        "coinDecimals": 6,
        "coinGeckoId": "agoric",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
        "cosmos": {
          "minimalDenom": "ubld"
        },
        "polkadot": {
          "picassoAssetId": "18",
          "composableAssetId": "79228162514264337593543950354"
        },
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-13/ubld",
          "erc20Address": "0xfd11E3564691A99bF56A3545A86Af2aEb8416CA1",
          "fromCosmosFee": 165,
          "minimumTransfer": 400
        },
        "solana": {
          "mintAddress": "BtHCXVdDCRqDvuTfmsLK5gcz3WbSBNY5DxpzSxqAcouU",
          "minimalDenom": "transfer/channel-1/transfer/channel-13/ubld",
          "minimumTransfer": 200,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      },
      {
        "coinDenom": "IST",
        "coinMinimalDenom": "uist",
        "coinDecimals": 6,
        "coinGeckoId": "inter-stable-token",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png",
        "cosmos": {
          "minimalDenom": "uist"
        },
        "polkadot": {
          "picassoAssetId": "25",
          "composableAssetId": "79228162514264337593543950361"
        },
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-13/uist",
          "erc20Address": "0x7d1b634d825221E8d8f619c5FA06a3F57dAFd5C6",
          "fromCosmosFee": 20,
          "minimumTransfer": 50
        },
        "solana": {
          "mintAddress": "3bHxPkuJwztJyrZW2T6sZe8GkRjN1BXgw3ViHPcrQdCj",
          "minimalDenom": "transfer/channel-1/transfer/channel-13/uist",
          "minimumTransfer": 20,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "BLD",
        "coinMinimalDenom": "ubld",
        "coinDecimals": 6,
        "coinGeckoId": "agoric",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.03,
            "average": 0.05,
            "high": 0.07
          }
        }
      },
      {
        "coinDenom": "IST",
        "coinMinimalDenom": "uist",
        "coinDecimals": 6,
        "coinGeckoId": "inter-stable-token",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0034,
            "average": 0.007,
            "high": 0.02
          }
        }
      }
    ],
    "rest": "https://agoric-cmp-api.polkachu.com",
    "rpc": "https://agoric-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "BLD",
      "coinMinimalDenom": "ubld",
      "coinDecimals": 6,
      "coinGeckoId": "agoric",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
      "cosmos": {
        "minimalDenom": "ubld"
      },
      "polkadot": {
        "picassoAssetId": "18",
        "composableAssetId": "79228162514264337593543950354"
      },
      "ethereum": {
        "minimalDenom": "transfer/channel-2/transfer/channel-13/ubld",
        "erc20Address": "0xfd11E3564691A99bF56A3545A86Af2aEb8416CA1",
        "fromCosmosFee": 165,
        "minimumTransfer": 400
      },
      "solana": {
        "mintAddress": "BtHCXVdDCRqDvuTfmsLK5gcz3WbSBNY5DxpzSxqAcouU",
        "minimalDenom": "transfer/channel-1/transfer/channel-13/ubld",
        "minimumTransfer": 200,
        "fromCosmosFee": 0,
        "displayDecimals": 6
      }
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
        "coinMinimalDenom": "aarch",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
        "cosmos": {
          "minimalDenom": "aarch"
        },
        "polkadot": {},
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-50/aarch",
          "erc20Address": "0xA88bB3EB033F359FeF934Dd3b4b753847318072C",
          "fromCosmosFee": 0,
          "minimumTransfer": 600
        },
        "solana": {
          "mintAddress": "BxZEQoVDwPT1dGTSnLw4Qvm17up2vvvP88PCSYTncgnk",
          "minimalDenom": "transfer/channel-1/transfer/channel-50/aarch",
          "minimumTransfer": 240,
          "fromCosmosFee": 0,
          "displayDecimals": 9
        }
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 18,
        "coinDenom": "ARCH",
        "coinGeckoId": "archway",
        "coinMinimalDenom": "aarch",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 140000000000,
            "average": 196000000000,
            "high": 225400000000
          }
        }
      }
    ],
    "rest": "https://api.mainnet.archway.io",
    "rpc": "https://rpc.mainnet.archway.io",
    "stakeCurrency": {
      "coinDecimals": 18,
      "coinDenom": "ARCH",
      "coinGeckoId": "archway",
      "coinMinimalDenom": "aarch",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
      "cosmos": {
        "minimalDenom": "aarch"
      },
      "polkadot": {},
      "ethereum": {
        "minimalDenom": "transfer/channel-2/transfer/channel-50/aarch",
        "erc20Address": "0xA88bB3EB033F359FeF934Dd3b4b753847318072C",
        "fromCosmosFee": 0,
        "minimumTransfer": 600
      },
      "solana": {
        "mintAddress": "BxZEQoVDwPT1dGTSnLw4Qvm17up2vvvP88PCSYTncgnk",
        "minimalDenom": "transfer/channel-1/transfer/channel-50/aarch",
        "minimumTransfer": 240,
        "fromCosmosFee": 0,
        "displayDecimals": 9
      }
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
        "coinMinimalDenom": "utia",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
        "cosmos": {
          "minimalDenom": "utia"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
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
        "cosmos": {
          "gasPriceStep": {
            "low": 0.01,
            "average": 0.02,
            "high": 0.1
          }
        }
      }
    ],
    "rest": "https://api.celestia.nodestake.top",
    "rpc": "https://rpc.celestia.nodestake.top",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "TIA",
      "coinGeckoId": "celestia",
      "coinMinimalDenom": "utia",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
      "cosmos": {
        "minimalDenom": "utia"
      },
      "polkadot": {},
      "ethereum": {},
      "solana": {}
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
        "coinDenom": "PICA",
        "coinMinimalDenom": "ppica",
        "coinDecimals": 12,
        "coinGeckoId": "picasso",
        "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
        "cosmos": {
          "minimalDenom": "ppica"
        },
        "polkadot": {
          "picassoAssetId": "1"
        },
        "ethereum": {
          "minimalDenom": "transfer/channel-2/ppica",
          "erc20Address": "0xbb63a9b64a80e9338b8ea298c51765e57c4f159c",
          "fromCosmosFee": 2000,
          "minimumTransfer": 5000
        },
        "solana": {
          "mintAddress": "966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ",
          "minimalDenom": "transfer/channel-1/ppica",
          "minimumTransfer": 4000,
          "fromCosmosFee": 0,
          "displayDecimals": 9
        }
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "PICA",
        "coinMinimalDenom": "ppica",
        "coinDecimals": 12,
        "coinGeckoId": "unknown",
        "cosmos": {
          "gasPriceStep": {
            "low": 0,
            "average": 0,
            "high": 0
          }
        }
      }
    ],
    "rest": "https://picasso-api.polkachu.com",
    "rpc": "https://picasso-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "PICA",
      "coinMinimalDenom": "ppica",
      "coinDecimals": 12,
      "coinGeckoId": "picasso",
      "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
      "cosmos": {
        "minimalDenom": "ppica"
      },
      "polkadot": {
        "picassoAssetId": "1"
      },
      "ethereum": {
        "minimalDenom": "transfer/channel-2/ppica",
        "erc20Address": "0xbb63a9b64a80e9338b8ea298c51765e57c4f159c",
        "fromCosmosFee": 2000,
        "minimumTransfer": 5000
      },
      "solana": {
        "mintAddress": "966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ",
        "minimalDenom": "transfer/channel-1/ppica",
        "minimumTransfer": 4000,
        "fromCosmosFee": 0,
        "displayDecimals": 9
      }
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
        "coinDenom": "HUAHUA",
        "coinMinimalDenom": "uhuahua",
        "coinDecimals": 6,
        "coinGeckoId": "chihuahua-token",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
        "cosmos": {
          "minimalDenom": "uhuahua"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "HUAHUA",
        "coinMinimalDenom": "uhuahua",
        "coinDecimals": 6,
        "coinGeckoId": "chihuahua-token",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 500,
            "average": 1250,
            "high": 2000
          }
        }
      }
    ],
    "rest": "https://chihuahua-api.polkachu.com",
    "rpc": "https://chihuahua-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "HUAHUA",
      "coinMinimalDenom": "uhuahua",
      "coinDecimals": 6,
      "coinGeckoId": "chihuahua-token",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
      "cosmos": {
        "minimalDenom": "uhuahua"
      },
      "polkadot": {},
      "ethereum": {},
      "solana": {}
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
        "coinDenom": "XRP",
        "coinMinimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
        "coinDecimals": 6,
        "coinGeckoId": "ripple",
        "cosmos": {
          "minimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz"
        },
        "polkadot": {},
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
          "erc20Address": "0x628f76eab0c1298f7a24d337bbbf1ef8a1ea6a24",
          "fromCosmosFee": 35,
          "minimumTransfer": 94
        },
        "solana": {
          "mintAddress": "DD4Ew6YcPCiJvb9ZQyAktRvgtckubPLTcHdbaK4nVKUW",
          "minimalDenom": "transfer/channel-1/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
          "minimumTransfer": 0,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      },
      {
        "coinDenom": "CORE",
        "coinMinimalDenom": "ucore",
        "coinDecimals": 6,
        "coinGeckoId": "coreum",
        "cosmos": {
          "minimalDenom": "ucore"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "CORE",
        "coinMinimalDenom": "ucore",
        "coinDecimals": 6,
        "coinGeckoId": "coreum",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0625,
            "average": 0.0625,
            "high": 0.0625
          }
        }
      }
    ],
    "rest": "https://rest-coreum.ecostake.com",
    "rpc": "https://full-node.mainnet-1.coreum.dev:26657",
    "stakeCurrency": {
      "coinDenom": "XRP",
      "coinMinimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
      "coinDecimals": 6,
      "coinGeckoId": "ripple",
      "cosmos": {
        "minimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz"
      },
      "polkadot": {},
      "ethereum": {
        "minimalDenom": "transfer/channel-2/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
        "erc20Address": "0x628f76eab0c1298f7a24d337bbbf1ef8a1ea6a24",
        "fromCosmosFee": 35,
        "minimumTransfer": 94
      },
      "solana": {
        "mintAddress": "DD4Ew6YcPCiJvb9ZQyAktRvgtckubPLTcHdbaK4nVKUW",
        "minimalDenom": "transfer/channel-1/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
        "minimumTransfer": 0,
        "fromCosmosFee": 0,
        "displayDecimals": 6
      }
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
        "coinMinimalDenom": "uatom",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
        "cosmos": {
          "minimalDenom": "uatom"
        },
        "polkadot": {},
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-4/uatom",
          "erc20Address": "0x519ddEff5d142Fc177d95F24952eF3D2EDe530BC",
          "fromCosmosFee": 2,
          "minimumTransfer": 5
        },
        "solana": {
          "mintAddress": "9gjHXkUVtDEPfxXXT9Jj3ZbYbFzS4zN92ewsCH8zGUKc",
          "minimalDenom": "transfer/channel-1/transfer/channel-4/uatom",
          "minimumTransfer": 2,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "ATOM",
        "coinGeckoId": "cosmos",
        "coinMinimalDenom": "uatom",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
        "cosmos": {
          "gasPriceStep": {
            "average": 0.025,
            "high": 0.03,
            "low": 0.005
          }
        }
      }
    ],
    "rest": "https://cosmos-cmp-api.polkachu.com",
    "rpc": "https://cosmos-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "ATOM",
      "coinGeckoId": "cosmos",
      "coinMinimalDenom": "uatom",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
      "cosmos": {
        "minimalDenom": "uatom"
      },
      "polkadot": {},
      "ethereum": {
        "minimalDenom": "transfer/channel-2/transfer/channel-4/uatom",
        "erc20Address": "0x519ddEff5d142Fc177d95F24952eF3D2EDe530BC",
        "fromCosmosFee": 2,
        "minimumTransfer": 5
      },
      "solana": {
        "mintAddress": "9gjHXkUVtDEPfxXXT9Jj3ZbYbFzS4zN92ewsCH8zGUKc",
        "minimalDenom": "transfer/channel-1/transfer/channel-4/uatom",
        "minimumTransfer": 2,
        "fromCosmosFee": 0,
        "displayDecimals": 6
      }
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
        "coinDenom": "CRE",
        "coinMinimalDenom": "ucre",
        "coinDecimals": 6,
        "coinGeckoId": "crescent-network",
        "cosmos": {
          "minimalDenom": "ucre"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      },
      {
        "coinDenom": "bCRE",
        "coinMinimalDenom": "ubcre",
        "coinDecimals": 6,
        "coinGeckoId": "liquid-staking-crescent",
        "cosmos": {
          "minimalDenom": "ubcre"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "CRE",
        "coinMinimalDenom": "ucre",
        "coinDecimals": 6,
        "coinGeckoId": "crescent-network",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.01,
            "average": 0.025,
            "high": 0.03
          }
        }
      },
      {
        "coinDenom": "bCRE",
        "coinMinimalDenom": "ubcre",
        "coinDecimals": 6,
        "coinGeckoId": "liquid-staking-crescent",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0083,
            "average": 0.02075,
            "high": 0.0249
          }
        }
      },
      {
        "coinDenom": "ATOM",
        "coinMinimalDenom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        "coinDecimals": 6,
        "coinGeckoId": "cosmos",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.000063,
            "average": 0.0001575,
            "high": 0.000189
          }
        }
      },
      {
        "coinDenom": "USDC.grav",
        "coinMinimalDenom": "ibc/CD01034D6749F20AAC5330EF4FD8B8CA7C40F7527AB8C4A302FBD2A070852EE1",
        "coinDecimals": 6,
        "coinGeckoId": "usd-coin",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.000842,
            "average": 0.002105,
            "high": 0.002526
          }
        }
      },
      {
        "coinDenom": "USDC.axl",
        "coinMinimalDenom": "ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41",
        "coinDecimals": 6,
        "coinGeckoId": "usd-coin",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.000842,
            "average": 0.002105,
            "high": 0.002526
          }
        }
      },
      {
        "coinDenom": "IST",
        "coinMinimalDenom": "ibc/CA1261224952DF089EFD363D8DBB30A8AB6D8CD181E60EE9E68E432F8DE14FE3",
        "coinDecimals": 6,
        "coinGeckoId": "inter-stable-token",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.000842,
            "average": 0.002105,
            "high": 0.002526
          }
        }
      },
      {
        "coinDenom": "CMST",
        "coinMinimalDenom": "ibc/9EC8A1701813BB7B73BFED2496009ABB2C8BF187E6CDFA788D77F68E08BC05CD",
        "coinDecimals": 6,
        "coinGeckoId": "composite",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.000842,
            "average": 0.002105,
            "high": 0.002526
          }
        }
      },
      {
        "coinDenom": "JUNO",
        "coinMinimalDenom": "ibc/C814F0B662234E24248AE3B2FE2C1B54BBAF12934B757F6E7BC5AEC119963895",
        "coinDecimals": 6,
        "coinGeckoId": "juno-network",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.000568,
            "average": 0.00142,
            "high": 0.001704
          }
        }
      },
      {
        "coinDenom": "BLD",
        "coinMinimalDenom": "ibc/11F940BCDFD7CFBFD7EDA13F25DA95D308286D441209D780C9863FD4271514EB",
        "coinDecimals": 6,
        "coinGeckoId": "agoric",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.002,
            "average": 0.005,
            "high": 0.006
          }
        }
      },
      {
        "coinDenom": "CMDX",
        "coinMinimalDenom": "ibc/61DF64ADF65230540C14C63D64897BE08A3DC9A516A91425913F01240E2F432F",
        "coinDecimals": 6,
        "coinGeckoId": "comdex",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.008146,
            "average": 0.020365,
            "high": 0.024438
          }
        }
      },
      {
        "coinDenom": "GRAV",
        "coinMinimalDenom": "ibc/C950356239AD2A205DE09FDF066B1F9FF19A7CA7145EA48A5B19B76EE47E52F7",
        "coinDecimals": 6,
        "coinGeckoId": "graviton",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.065405,
            "average": 0.1635125,
            "high": 0.196215
          }
        }
      },
      {
        "coinDenom": "INJ",
        "coinMinimalDenom": "ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30",
        "coinDecimals": 18,
        "coinGeckoId": "injective-protocol",
        "cosmos": {
          "gasPriceStep": {
            "low": 3350000000,
            "average": 8375000000,
            "high": 10050000000
          }
        }
      },
      {
        "coinDenom": "LUNA",
        "coinMinimalDenom": "ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75",
        "coinDecimals": 6,
        "coinGeckoId": "terra-luna-2",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0004,
            "average": 0.001,
            "high": 0.0012
          }
        }
      },
      {
        "coinDenom": "LUNC",
        "coinMinimalDenom": "ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8",
        "coinDecimals": 6,
        "coinGeckoId": "terra-luna",
        "cosmos": {
          "gasPriceStep": {
            "low": 5,
            "average": 12.5,
            "high": 15
          }
        }
      },
      {
        "coinDenom": "stATOM",
        "coinMinimalDenom": "ibc/D64F87FAE0B35C1954DD7921BA7A2939705DE77CBF72B8002F2E3552EDE4DE52",
        "coinDecimals": 6,
        "coinGeckoId": "stride-staked-atom",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.00006,
            "average": 0.00015,
            "high": 0.00018
          }
        }
      },
      {
        "coinDenom": "OKT",
        "coinMinimalDenom": "ibc/764D1629980B02BAFF3D25BEE4FB1E0C5E350AFA252FDF66E68E10D2179A826A",
        "coinDecimals": 18,
        "coinGeckoId": "oec-token",
        "cosmos": {
          "gasPriceStep": {
            "low": 200000000,
            "average": 500000000,
            "high": 600000000
          }
        }
      },
      {
        "coinDenom": "AXL",
        "coinMinimalDenom": "ibc/0634D0993744740D675AD01E81156EAC945AEAAE17C074918DC7FF52F41B263E",
        "coinDecimals": 6,
        "coinGeckoId": "axelar",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0014,
            "average": 0.0035,
            "high": 0.0042
          }
        }
      }
    ],
    "rest": "https://crescent-cmp-api.polkachu.com",
    "rpc": "https://crescent-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "CRE",
      "coinMinimalDenom": "ucre",
      "coinDecimals": 6,
      "coinGeckoId": "crescent-network",
      "cosmos": {
        "minimalDenom": "ucre"
      },
      "polkadot": {},
      "ethereum": {},
      "solana": {}
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
        "coinDenom": "INJ",
        "coinDecimals": 18,
        "coinMinimalDenom": "inj",
        "coinGeckoId": "injective-protocol",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
        "cosmos": {
          "minimalDenom": "inj"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "INJ",
        "coinDecimals": 18,
        "coinMinimalDenom": "inj",
        "coinGeckoId": "injective-protocol",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 500000000,
            "average": 1000000000,
            "high": 1500000000
          }
        }
      }
    ],
    "rest": "https://injective-api.polkachu.com",
    "rpc": "https://injective-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "INJ",
      "coinDecimals": 18,
      "coinMinimalDenom": "inj",
      "coinGeckoId": "injective-protocol",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
      "cosmos": {
        "minimalDenom": "inj"
      },
      "polkadot": {},
      "ethereum": {},
      "solana": {}
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
        "coinDenom": "KUJI",
        "coinMinimalDenom": "ukuji",
        "coinDecimals": 6,
        "coinGeckoId": "kujira",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png",
        "cosmos": {
          "minimalDenom": "ukuji"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "KUJI",
        "coinMinimalDenom": "ukuji",
        "coinDecimals": 6,
        "coinGeckoId": "kujira",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png",
        "cosmos": {}
      },
      {
        "coinDenom": "USK",
        "coinMinimalDenom": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
        "coinDecimals": 6,
        "coinGeckoId": "usk",
        "cosmos": {}
      },
      {
        "coinDenom": "axlUSDC",
        "coinMinimalDenom": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
        "coinDecimals": 6,
        "coinGeckoId": "usd-coin",
        "cosmos": {}
      },
      {
        "coinDenom": "ATOM",
        "coinMinimalDenom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "coinDecimals": 6,
        "coinGeckoId": "cosmos",
        "cosmos": {}
      },
      {
        "coinDenom": "OSMO",
        "coinMinimalDenom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
        "coinDecimals": 6,
        "coinGeckoId": "osmosis",
        "cosmos": {}
      },
      {
        "coinDenom": "CMDX",
        "coinMinimalDenom": "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
        "coinDecimals": 6,
        "coinGeckoId": "comdex",
        "cosmos": {}
      },
      {
        "coinDenom": "EVMOS",
        "coinMinimalDenom": "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
        "coinDecimals": 6,
        "coinGeckoId": "evmos",
        "cosmos": {}
      },
      {
        "coinDenom": "JUNO",
        "coinMinimalDenom": "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
        "coinDecimals": 6,
        "coinGeckoId": "juno-network",
        "cosmos": {}
      },
      {
        "coinDenom": "SCRT",
        "coinMinimalDenom": "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
        "coinDecimals": 6,
        "coinGeckoId": "secret",
        "cosmos": {}
      },
      {
        "coinDenom": "STARS",
        "coinMinimalDenom": "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
        "coinDecimals": 6,
        "coinGeckoId": "stargaze",
        "cosmos": {}
      },
      {
        "coinDenom": "wAVAX",
        "coinMinimalDenom": "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
        "coinDecimals": 18,
        "coinGeckoId": "avalanche-2",
        "cosmos": {}
      },
      {
        "coinDenom": "wETH",
        "coinMinimalDenom": "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
        "coinDecimals": 18,
        "coinGeckoId": "ethereum",
        "cosmos": {}
      }
    ],
    "rest": "https://kujira-api.polkachu.com",
    "rpc": "https://kujira-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "KUJI",
      "coinMinimalDenom": "ukuji",
      "coinDecimals": 6,
      "coinGeckoId": "kujira",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png",
      "cosmos": {
        "minimalDenom": "ukuji"
      },
      "polkadot": {},
      "ethereum": {},
      "solana": {}
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
        "coinDenom": "ASTRO",
        "coinMinimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro",
        "coinDecimals": 6,
        "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astro.svg",
        "coinGeckoId": "astroport-fi",
        "cosmos": {
          "minimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {
          "mintAddress": "8knH1Z4kY6WaHRMZHMxe76d2Ar3kHhjz33t1eZRJSyET",
          "minimalDenom": "",
          "minimumTransfer": 0,
          "fromCosmosFee": 0,
          "displayDecimals": 0
        }
      },
      {
        "coinDenom": "NTRN",
        "coinMinimalDenom": "untrn",
        "coinDecimals": 6,
        "coinGeckoId": "neutron-3",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/untrn.png",
        "cosmos": {
          "minimalDenom": "untrn"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "NTRN",
        "coinMinimalDenom": "untrn",
        "coinDecimals": 6,
        "coinGeckoId": "neutron-3",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0053,
            "average": 0.0053,
            "high": 0.0053
          }
        }
      },
      {
        "coinDenom": "ATOM",
        "coinMinimalDenom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        "coinDecimals": 6,
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0008,
            "average": 0.0008,
            "high": 0.0008
          }
        }
      },
      {
        "coinDenom": "USDC",
        "coinMinimalDenom": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
        "coinDecimals": 6,
        "cosmos": {
          "gasPriceStep": {
            "low": 0.008,
            "average": 0.008,
            "high": 0.008
          }
        }
      },
      {
        "coinDenom": "wstETH",
        "coinMinimalDenom": "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
        "coinDecimals": 18,
        "cosmos": {
          "gasPriceStep": {
            "low": 2903231.6597,
            "average": 2903231.6597,
            "high": 2903231.6597
          }
        }
      },
      {
        "coinDenom": "DYDX",
        "coinMinimalDenom": "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130",
        "coinDecimals": 18,
        "cosmos": {
          "gasPriceStep": {
            "low": 2564102564.1026,
            "average": 2564102564.1026,
            "high": 2564102564.1026
          }
        }
      },
      {
        "coinDenom": "TIA",
        "coinMinimalDenom": "ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7",
        "coinDecimals": 6,
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0004,
            "average": 0.0004,
            "high": 0.0004
          }
        }
      },
      {
        "coinDenom": "stATOM",
        "coinMinimalDenom": "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
        "coinDecimals": 6,
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0006,
            "average": 0.0006,
            "high": 0.0006
          }
        }
      }
    ],
    "rest": "https://neutron-cmp-api.polkachu.com",
    "rpc": "https://neutron-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "ASTRO",
      "coinMinimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astro.svg",
      "coinGeckoId": "astroport-fi",
      "cosmos": {
        "minimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro"
      },
      "polkadot": {},
      "ethereum": {},
      "solana": {
        "mintAddress": "8knH1Z4kY6WaHRMZHMxe76d2Ar3kHhjz33t1eZRJSyET",
        "minimalDenom": "",
        "minimumTransfer": 0,
        "fromCosmosFee": 0,
        "displayDecimals": 0
      }
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
        "coinDenom": "OSMO",
        "coinMinimalDenom": "uosmo",
        "coinDecimals": 6,
        "coinGeckoId": "osmosis",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
        "cosmos": {
          "minimalDenom": "uosmo"
        },
        "polkadot": {},
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-3/uosmo",
          "erc20Address": "0x9243b3615ed297403c0cafa156c3fa16057526ca",
          "fromCosmosFee": 15,
          "minimumTransfer": 40
        },
        "solana": {
          "mintAddress": "EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM",
          "minimalDenom": "transfer/channel-1/transfer/channel-3/uosmo",
          "minimumTransfer": 20,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      },
      {
        "coinDenom": "milkTIA",
        "coinMinimalDenom": "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
        "coinDecimals": 6,
        "coinGeckoId": "milkyway-staked-tia",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/milktia.png",
        "cosmos": {
          "minimalDenom": "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "OSMO",
        "coinMinimalDenom": "uosmo",
        "coinDecimals": 6,
        "coinGeckoId": "osmosis",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0025,
            "average": 0.025,
            "high": 0.04
          }
        }
      }
    ],
    "rest": "https://osmosis-cmp-api.polkachu.com",
    "rpc": "https://osmosis-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "OSMO",
      "coinMinimalDenom": "uosmo",
      "coinDecimals": 6,
      "coinGeckoId": "osmosis",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
      "cosmos": {
        "minimalDenom": "uosmo"
      },
      "polkadot": {},
      "ethereum": {
        "minimalDenom": "transfer/channel-2/transfer/channel-3/uosmo",
        "erc20Address": "0x9243b3615ed297403c0cafa156c3fa16057526ca",
        "fromCosmosFee": 15,
        "minimumTransfer": 40
      },
      "solana": {
        "mintAddress": "EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM",
        "minimalDenom": "transfer/channel-1/transfer/channel-3/uosmo",
        "minimumTransfer": 20,
        "fromCosmosFee": 0,
        "displayDecimals": 6
      }
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
        "coinDenom": "QCK",
        "coinMinimalDenom": "uqck",
        "coinDecimals": 6,
        "coinGeckoId": "quicksilver",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
        "cosmos": {
          "minimalDenom": "uqck"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "QCK",
        "coinMinimalDenom": "uqck",
        "coinDecimals": 6,
        "coinGeckoId": "quicksilver",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0001,
            "average": 0.0001,
            "high": 0.00025
          }
        }
      }
    ],
    "rest": "https://quicksilver-api.polkachu.com",
    "rpc": "https://quicksilver-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "QCK",
      "coinMinimalDenom": "uqck",
      "coinDecimals": 6,
      "coinGeckoId": "quicksilver",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
      "cosmos": {
        "minimalDenom": "uqck"
      },
      "polkadot": {},
      "ethereum": {},
      "solana": {}
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
        "coinDenom": "SCRT",
        "coinMinimalDenom": "uscrt",
        "coinDecimals": 6,
        "coinGeckoId": "secret",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
        "cosmos": {
          "minimalDenom": "uscrt"
        },
        "polkadot": {},
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-14/uscrt",
          "erc20Address": "0xF7F00d598b2a651404993E93Df7AE16C3C736F3C",
          "fromCosmosFee": 34,
          "minimumTransfer": 80
        },
        "solana": {
          "mintAddress": "6bQZs6ZSaRoaYPsfLibM9ZhZa4Haj4xF5uFJ33Kduc3V",
          "minimalDenom": "transfer/channel-1/transfer/channel-14/uscrt",
          "minimumTransfer": 50,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      },
      {
        "coinDenom": "SILK",
        "coinMinimalDenom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
        "coinDecimals": 6,
        "coinGeckoId": "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2",
        "coinImageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg",
        "cosmos": {
          "minimalDenom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd"
        },
        "polkadot": {},
        "ethereum": {
          "minimalDenom": "0x854b8fc032a5b7828d8de72702f1fdd9bcfb3efa",
          "erc20Address": "0x854b8fc032a5b7828d8de72702f1fdd9bcfb3efa",
          "fromCosmosFee": 20,
          "minimumTransfer": 50
        },
        "solana": {
          "mintAddress": "Dcihw3DVQpxF7ri4fsdGaZWrwhtLgCvbkYHXWh1VdhQn",
          "minimalDenom": "transfer/channel-1/transfer/channel-26/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
          "minimumTransfer": 20,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      },
      {
        "coinDenom": "SHD",
        "coinMinimalDenom": "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
        "coinDecimals": 8,
        "coinGeckoId": "shade-protocol",
        "coinImageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg",
        "cosmos": {
          "minimalDenom": "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm"
        },
        "polkadot": {},
        "ethereum": {
          "minimalDenom": "",
          "erc20Address": "0x",
          "fromCosmosFee": 3,
          "minimumTransfer": 7
        },
        "solana": {
          "mintAddress": "4Atqy7XYeHXLD2thRJtDtBaRassB2Ff4ksefhvzLKxDQ",
          "minimalDenom": "transfer/channel-1/transfer/channel-26/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
          "minimumTransfer": 5,
          "fromCosmosFee": 0,
          "displayDecimals": 8
        }
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "SCRT",
        "coinMinimalDenom": "uscrt",
        "coinDecimals": 6,
        "coinGeckoId": "secret",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.05,
            "average": 0.1,
            "high": 0.25
          }
        }
      }
    ],
    "rest": "https://lcd.mainnet.secretsaturn.net",
    "rpc": "https://scrt.public-rpc.com",
    "stakeCurrency": {
      "coinDenom": "SCRT",
      "coinMinimalDenom": "uscrt",
      "coinDecimals": 6,
      "coinGeckoId": "secret",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
      "cosmos": {
        "minimalDenom": "uscrt"
      },
      "polkadot": {},
      "ethereum": {
        "minimalDenom": "transfer/channel-2/transfer/channel-14/uscrt",
        "erc20Address": "0xF7F00d598b2a651404993E93Df7AE16C3C736F3C",
        "fromCosmosFee": 34,
        "minimumTransfer": 80
      },
      "solana": {
        "mintAddress": "6bQZs6ZSaRoaYPsfLibM9ZhZa4Haj4xF5uFJ33Kduc3V",
        "minimalDenom": "transfer/channel-1/transfer/channel-14/uscrt",
        "minimumTransfer": 50,
        "fromCosmosFee": 0,
        "displayDecimals": 6
      }
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
        "coinDenom": "SEI",
        "coinMinimalDenom": "usei",
        "coinDecimals": 6,
        "coinGeckoId": "sei-network",
        "cosmos": {
          "minimalDenom": "usei"
        },
        "polkadot": {
          "picassoAssetId": "35"
        },
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-3/transfer/channel-782/usei",
          "erc20Address": "0x013AdDc6512432304c055CEc20bbb0f6AA5ed7d5",
          "fromCosmosFee": 27,
          "minimumTransfer": 50
        },
        "solana": {
          "mintAddress": "BajH8K75CHJrmT1hf6QGHSyY5r5tbJYSHrCb7uDNCF5S",
          "minimalDenom": "transfer/channel-1/transfer/channel-3/transfer/channel-782/usei",
          "minimumTransfer": 30,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "SEI",
        "coinMinimalDenom": "usei",
        "coinDecimals": 6,
        "coinGeckoId": "sei-network",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.1,
            "average": 0.2,
            "high": 0.3
          }
        }
      }
    ],
    "rest": "https://sei-api.polkachu.com",
    "rpc": "https://sei-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "SEI",
      "coinMinimalDenom": "usei",
      "coinDecimals": 6,
      "coinGeckoId": "sei-network",
      "cosmos": {
        "minimalDenom": "usei"
      },
      "polkadot": {
        "picassoAssetId": "35"
      },
      "ethereum": {
        "minimalDenom": "transfer/channel-2/transfer/channel-3/transfer/channel-782/usei",
        "erc20Address": "0x013AdDc6512432304c055CEc20bbb0f6AA5ed7d5",
        "fromCosmosFee": 27,
        "minimumTransfer": 50
      },
      "solana": {
        "mintAddress": "BajH8K75CHJrmT1hf6QGHSyY5r5tbJYSHrCb7uDNCF5S",
        "minimalDenom": "transfer/channel-1/transfer/channel-3/transfer/channel-782/usei",
        "minimumTransfer": 30,
        "fromCosmosFee": 0,
        "displayDecimals": 6
      }
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
        "coinDenom": "STARS",
        "coinMinimalDenom": "ustars",
        "coinDecimals": 6,
        "coinGeckoId": "stargaze",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
        "cosmos": {
          "minimalDenom": "ustars"
        },
        "polkadot": {},
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-6/ustars",
          "erc20Address": "0x59e0499554Cdcdfa90CCd96532e5aD5883a2a956",
          "fromCosmosFee": 875,
          "minimumTransfer": 2000
        },
        "solana": {
          "mintAddress": "HYaNBn8TQCpy1ohJAQ8V8GaLsRFrkudszgQU8uQpWNvB",
          "minimalDenom": "transfer/channel-1/transfer/channel-6/ustars",
          "minimumTransfer": 990,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "STARS",
        "coinMinimalDenom": "ustars",
        "coinDecimals": 6,
        "coinGeckoId": "stargaze",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 1,
            "average": 1.1,
            "high": 1.2
          }
        }
      }
    ],
    "rest": "https://stargaze-cmp-api.polkachu.com",
    "rpc": "https://stargaze-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "STARS",
      "coinMinimalDenom": "ustars",
      "coinDecimals": 6,
      "coinGeckoId": "stargaze",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
      "cosmos": {
        "minimalDenom": "ustars"
      },
      "polkadot": {},
      "ethereum": {
        "minimalDenom": "transfer/channel-2/transfer/channel-6/ustars",
        "erc20Address": "0x59e0499554Cdcdfa90CCd96532e5aD5883a2a956",
        "fromCosmosFee": 875,
        "minimumTransfer": 2000
      },
      "solana": {
        "mintAddress": "HYaNBn8TQCpy1ohJAQ8V8GaLsRFrkudszgQU8uQpWNvB",
        "minimalDenom": "transfer/channel-1/transfer/channel-6/ustars",
        "minimumTransfer": 990,
        "fromCosmosFee": 0,
        "displayDecimals": 6
      }
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
        "coinDenom": "stTIA",
        "coinMinimalDenom": "stutia",
        "coinDecimals": 6,
        "coinGeckoId": "stride-staked-tia",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/sttia.png",
        "cosmos": {
          "minimalDenom": "stutia"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      },
      {
        "coinDenom": "STRD",
        "coinMinimalDenom": "ustrd",
        "coinDecimals": 6,
        "coinGeckoId": "stride",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
        "cosmos": {
          "minimalDenom": "ustrd"
        },
        "polkadot": {},
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-5/ustrd",
          "erc20Address": "0x3f8Bb8634Ca4A61Aa23cd0DF00C3152E0eaF9587",
          "fromCosmosFee": 7,
          "minimumTransfer": 17
        },
        "solana": {
          "mintAddress": "FjK5ms55rMZY42NUKnAayUjA8Q1nA2jhYwkHZUY7KwvE",
          "minimalDenom": "transfer/channel-1/transfer/channel-5/ustrd",
          "minimumTransfer": 11,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      },
      {
        "coinDenom": "stATOM",
        "coinMinimalDenom": "stuatom",
        "coinDecimals": 6,
        "coinGeckoId": "stride-staked-atom",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuatom.png",
        "cosmos": {
          "minimalDenom": "stuatom"
        },
        "polkadot": {},
        "ethereum": {
          "minimalDenom": "transfer/channel-2/transfer/channel-5/stuatom",
          "erc20Address": "0xA534115DA1C1e51Cb2C6E8bC1fBA23A5189a1de2",
          "fromCosmosFee": 2,
          "minimumTransfer": 5
        },
        "solana": {
          "mintAddress": "8aHZdc7qrKAPMey7B6VHx3U3xWFBs7BZhdLAYqZBQwea",
          "minimalDenom": "transfer/channel-1/transfer/channel-5/stuatom",
          "minimumTransfer": 2,
          "fromCosmosFee": 0,
          "displayDecimals": 6
        }
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "STRD",
        "coinMinimalDenom": "ustrd",
        "coinDecimals": 6,
        "coinGeckoId": "stride",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.005,
            "average": 0.005,
            "high": 0.05
          }
        }
      },
      {
        "coinDenom": "ATOM",
        "coinMinimalDenom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "coinDecimals": 6,
        "coinGeckoId": "cosmos",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0001,
            "average": 0.001,
            "high": 0.01
          }
        }
      },
      {
        "coinDenom": "OSMO",
        "coinMinimalDenom": "ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34",
        "coinDecimals": 6,
        "coinGeckoId": "osmosis",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/uosmo.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.001,
            "average": 0.01,
            "high": 0.1
          }
        }
      },
      {
        "coinDenom": "stOSMO",
        "coinMinimalDenom": "stuosmo",
        "coinDecimals": 6,
        "coinGeckoId": "stride-staked-osmo",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.001,
            "average": 0.01,
            "high": 0.1
          }
        }
      },
      {
        "coinDenom": "stATOM",
        "coinMinimalDenom": "stuatom",
        "coinDecimals": 6,
        "coinGeckoId": "stride-staked-atom",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.0001,
            "average": 0.001,
            "high": 0.01
          }
        }
      },
      {
        "coinDenom": "INJ",
        "coinMinimalDenom": "ibc/A7454562FF29FE068F42F9DE4805ABEF54F599D1720B345D6518D9B5C64EA6D2",
        "coinDecimals": 18,
        "coinGeckoId": "injective-protocol",
        "cosmos": {
          "gasPriceStep": {
            "low": 500000000,
            "average": 500000000,
            "high": 500000000
          }
        }
      },
      {
        "coinDenom": "stINJ",
        "coinMinimalDenom": "stinj",
        "coinDecimals": 18,
        "coinGeckoId": "stride-staked-injective",
        "cosmos": {
          "gasPriceStep": {
            "low": 500000000,
            "average": 500000000,
            "high": 500000000
          }
        }
      },
      {
        "coinDenom": "EVMOS",
        "coinMinimalDenom": "ibc/4B322204B4F59D770680FE4D7A565DDC3F37BFF035474B717476C66A4F83DD72",
        "coinDecimals": 18,
        "coinGeckoId": "evmos",
        "cosmos": {
          "gasPriceStep": {
            "low": 20000000000,
            "average": 20000000000,
            "high": 20000000000
          }
        }
      },
      {
        "coinDenom": "stEVMOS",
        "coinMinimalDenom": "staevmos",
        "coinDecimals": 18,
        "cosmos": {
          "gasPriceStep": {
            "low": 20000000000,
            "average": 20000000000,
            "high": 20000000000
          }
        }
      },
      {
        "coinDenom": "TIA",
        "coinMinimalDenom": "ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801",
        "coinDecimals": 6,
        "coinGeckoId": "celestia",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.01,
            "average": 0.01,
            "high": 0.01
          }
        }
      },
      {
        "coinDenom": "stTIA",
        "coinMinimalDenom": "stutia",
        "coinDecimals": 6,
        "coinGeckoId": "stride-staked-tia",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.01,
            "average": 0.01,
            "high": 0.01
          }
        }
      },
      {
        "coinDenom": "DYDX",
        "coinMinimalDenom": "ibc/561C70B20188A047BFDE6F9946BDDC5D8AC172B9BE04FF868DFABF819E5A9CCE",
        "coinDecimals": 18,
        "coinGeckoId": "dydx-chain",
        "cosmos": {
          "gasPriceStep": {
            "low": 15000000000,
            "average": 15000000000,
            "high": 15000000000
          }
        }
      },
      {
        "coinDenom": "stDYDX",
        "coinMinimalDenom": "stadydx",
        "coinDecimals": 18,
        "coinGeckoId": "stride-staked-dydx",
        "cosmos": {
          "gasPriceStep": {
            "low": 15000000000,
            "average": 15000000000,
            "high": 15000000000
          }
        }
      },
      {
        "coinDenom": "DYM",
        "coinMinimalDenom": "ibc/E1C22332C083574F3418481359733BA8887D171E76C80AD9237422AEABB66018",
        "coinDecimals": 18,
        "coinGeckoId": "dymension",
        "cosmos": {
          "gasPriceStep": {
            "low": 15000000000,
            "average": 15000000000,
            "high": 50000000000
          }
        }
      },
      {
        "coinDenom": "stDYM",
        "coinMinimalDenom": "stadym",
        "coinDecimals": 18,
        "cosmos": {
          "gasPriceStep": {
            "low": 15000000000,
            "average": 15000000000,
            "high": 50000000000
          }
        }
      },
      {
        "coinDenom": "stSAGA",
        "coinMinimalDenom": "stusaga",
        "coinDecimals": 6,
        "cosmos": {
          "gasPriceStep": {
            "low": 0.01,
            "average": 0.01,
            "high": 0.01
          }
        }
      },
      {
        "coinDenom": "SAGA",
        "coinMinimalDenom": "ibc/520D9C4509027DE66C737A1D6A6021915A3071E30DBA8F758B46532B060D7AA5",
        "coinDecimals": 6,
        "cosmos": {
          "gasPriceStep": {
            "low": 0.01,
            "average": 0.01,
            "high": 0.01
          }
        }
      }
    ],
    "rest": "https://stride-cmp-api.polkachu.com",
    "rpc": "https://stride-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "stTIA",
      "coinMinimalDenom": "stutia",
      "coinDecimals": 6,
      "coinGeckoId": "stride-staked-tia",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/sttia.png",
      "cosmos": {
        "minimalDenom": "stutia"
      },
      "polkadot": {},
      "ethereum": {},
      "solana": {}
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
        "coinDenom": "UMEE",
        "coinMinimalDenom": "uumee",
        "coinDecimals": 6,
        "coinGeckoId": "umee",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
        "cosmos": {
          "minimalDenom": "uumee"
        },
        "polkadot": {},
        "ethereum": {},
        "solana": {}
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDenom": "UMEE",
        "coinMinimalDenom": "uumee",
        "coinDecimals": 6,
        "coinGeckoId": "umee",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
        "cosmos": {
          "gasPriceStep": {
            "low": 0.06,
            "average": 0.1,
            "high": 0.14
          }
        }
      }
    ],
    "rest": "https://umee-cmp-api.polkachu.com",
    "rpc": "https://umee-cmp-rpc.polkachu.com",
    "stakeCurrency": {
      "coinDenom": "UMEE",
      "coinMinimalDenom": "uumee",
      "coinDecimals": 6,
      "coinGeckoId": "umee",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
      "cosmos": {
        "minimalDenom": "uumee"
      },
      "polkadot": {},
      "ethereum": {},
      "solana": {}
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/umee"
  }
} ;

