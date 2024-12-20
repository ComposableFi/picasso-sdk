"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keplrChains = void 0;
exports.keplrChains = {
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
                "coinMinimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "NTRN",
                "coinGeckoId": "neutron-3",
                "coinMinimalDenom": "untrn"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "NTRN",
                "coinGeckoId": "neutron-3",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/untrn.png",
                "gasPriceStep": {
                    "low": 0.0008,
                    "average": 0.0008,
                    "high": 0.0008
                },
                "coinMinimalDenom": "untrn"
            }
        ],
        "rest": "https://neutron-cmp-api.polkachu.com",
        "rpc": "https://neutron-cmp-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "NTRN",
            "coinGeckoId": "neutron-3",
            "coinMinimalDenom": "untrn",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/untrn.png"
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
                "coinMinimalDenom": "uosmo"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "milkTIA",
                "coinGeckoId": "milkyway-staked-tia",
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
                "coinMinimalDenom": "ubld"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "IST",
                "coinGeckoId": "inter-stable-token",
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
        "chainName": "Picasso",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
        "currencies": [
            {
                "coinDecimals": 12,
                "coinDenom": "PICA",
                "coinGeckoId": "picasso",
                "coinMinimalDenom": "ppica"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 12,
                "coinDenom": "PICA",
                "coinGeckoId": "picasso",
                "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
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
                "coinDenom": "COREUM",
                "coinGeckoId": "coreum",
                "coinMinimalDenom": "ucore"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "COREUM",
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
            "coinDenom": "COREUM",
            "coinGeckoId": "coreum",
            "coinMinimalDenom": "ucore"
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
                "coinMinimalDenom": "uscrt"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "SILK",
                "coinGeckoId": "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2",
                "coinMinimalDenom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd"
            },
            {
                "coinDecimals": 8,
                "coinDenom": "SHD",
                "coinGeckoId": "shade-protocol",
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
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/chains/sei.svg",
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
                "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sei.svg",
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
            "coinMinimalDenom": "usei",
            "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sei.svg"
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
                "coinMinimalDenom": "stutia"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "STRD",
                "coinGeckoId": "stride",
                "coinMinimalDenom": "ustrd"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "stATOM",
                "coinGeckoId": "stride-staked-atom",
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
            }
        ],
        "rest": "https://stride-cmp-api.polkachu.com",
        "rpc": "https://stride-cmp-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "STRD",
            "coinGeckoId": "stride",
            "coinMinimalDenom": "ustrd",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/stride"
    }
};
