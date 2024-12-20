"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.networks = void 0;
exports.networks = {
    "1000": {
        "name": "Kusama Asset Hub",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/kusamaassethub.svg",
        "rpc": "wss://statemine-rpc.dwellir.com",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "1000",
        "feeAssetId": "4",
        "polkadot": {
            "ss58Format": 2,
            "isParachain": true,
            "relayChain": "kusama",
            "hops": {
                "2087": {
                    "type": "XCM",
                    "xcmType": "polkadotXcm.limitedReserveTransferAssets",
                    "version": "V2",
                    "tokens": [
                        "130"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://assethub-kusama.subscan.io"
            }
        ],
        "network_to": [
            "2087"
        ]
    },
    "2001": {
        "name": "BiFrost Kusama",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BiFrostKusama.svg",
        "rpc": "wss://bifrost-rpc.liebi.com/ws",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2001",
        "feeAssetId": "31",
        "polkadot": {
            "ss58Format": 6,
            "isParachain": true,
            "relayChain": "kusama",
            "hops": {
                "2087": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "31",
                        "32"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://bifrost-kusama.subscan.io"
            }
        ],
        "network_to": [
            "2087"
        ]
    },
    "2004": {
        "name": "Moonbeam",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/chains/moonbeam.svg",
        "rpc": "wss://wss.api.moonbeam.network",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2004",
        "feeAssetId": "79228162514264337593543950376",
        "polkadot": {
            "ss58Format": 0,
            "isParachain": true,
            "relayChain": "polkadot",
            "hops": {
                "2019": {
                    "type": "XCM",
                    "xcmType": "polkadotXcm.limitedReserveTransferAssets",
                    "version": "V2",
                    "tokens": [
                        "79228162514264337593543950376"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://moonbeam.subscan.io"
            }
        ],
        "network_to": [
            "2019"
        ]
    },
    "2006": {
        "name": "astar",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astar.svg",
        "rpc": "wss://rpc.astar.network",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2006",
        "feeAssetId": "79228162514264337593543952342",
        "polkadot": {
            "ss58Format": 5,
            "isParachain": true,
            "relayChain": "polkadot",
            "hops": {
                "2019": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "79228162514264337593543952342"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://astar.subscan.io"
            }
        ],
        "network_to": [
            "2019"
        ]
    },
    "2007": {
        "name": "Shiden",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/shiden.svg",
        "rpc": "wss://shiden-rpc.dwellir.com",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2007",
        "feeAssetId": "2007",
        "polkadot": {
            "ss58Format": 5,
            "isParachain": true,
            "relayChain": "kusama",
            "hops": {
                "2087": {
                    "type": "XCM",
                    "xcmType": "polkadotXcm.limitedReserveTransferAssets",
                    "version": "V3",
                    "tokens": [
                        "2007"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://shiden.subscan.io"
            }
        ],
        "network_to": [
            "2087"
        ]
    },
    "2019": {
        "name": "Composable",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/composable.svg",
        "rpc": "wss://rpc.composable.finance",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2019",
        "feeAssetId": "",
        "polkadot": {
            "ss58Format": 50,
            "isParachain": true,
            "relayChain": "polkadot",
            "hops": {
                "2006": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "79228162514264337593543952342"
                    ]
                },
                "2030": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "79228162514264337593543950369",
                        "79228162514264337593543950370"
                    ]
                },
                "polkadot": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V3",
                    "tokens": [
                        "79228162514264337593543950342"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://composable.subscan.io"
            }
        ],
        "network_to": [
            "2006",
            "2030",
            "polkadot",
            "2087"
        ]
    },
    "2023": {
        "name": "Moonriver",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/moonriver.svg",
        "rpc": "wss://moonriver-rpc.dwellir.com",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2023",
        "feeAssetId": "23",
        "polkadot": {
            "ss58Format": 0,
            "isParachain": true,
            "relayChain": "kusama",
            "hops": {
                "2087": {
                    "type": "XCM",
                    "xcmType": "polkadotXcm.limitedReserveTransferAssets",
                    "version": "V2",
                    "tokens": [
                        "23"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://moonriver.subscan.io"
            }
        ],
        "network_to": [
            "2087"
        ]
    },
    "2030": {
        "name": "BiFrost Polkadot",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BiFrostPolkadot.svg",
        "rpc": "wss://hk.p.bifrost-rpc.liebi.com/ws",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2030",
        "feeAssetId": "79228162514264337593543950369",
        "polkadot": {
            "ss58Format": 6,
            "isParachain": true,
            "relayChain": "polkadot",
            "hops": {
                "2019": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "79228162514264337593543950369",
                        "79228162514264337593543950370"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://bifrost.subscan.io"
            }
        ],
        "network_to": [
            "2019"
        ]
    },
    "2087": {
        "name": "Picasso kusama",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/Picasso.svg",
        "rpc": "wss://picasso-rpc.composable.finance",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2087",
        "feeAssetId": "",
        "polkadot": {
            "ss58Format": 49,
            "isParachain": true,
            "relayChain": "polkadot",
            "hops": {
                "1000": {
                    "type": "XCM",
                    "xcmType": "xTokens.transferMultiasset",
                    "version": "V3",
                    "tokens": [
                        "130"
                    ]
                },
                "2001": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "31",
                        "32"
                    ]
                },
                "2125": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V3",
                    "tokens": [
                        "2125"
                    ]
                },
                "kusama": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V3",
                    "tokens": [
                        "4"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://picasso.subscan.io"
            }
        ],
        "network_to": [
            "1000",
            "2001",
            "2125",
            "kusama",
            "2019",
            "centauri-1"
        ]
    },
    "chihuahua-1": {
        "name": "Chihuahua",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
        "rpc": "https://chihuahua-rpc.polkachu.com",
        "rest": "https://chihuahua-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "chihuahua-1",
        "feeAssetId": "uhuahua",
        "cosmos": {
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "chihuahua",
                "bech32PrefixAccPub": "chihuahuapub",
                "bech32PrefixValAddr": "chihuahuavaloper",
                "bech32PrefixValPub": "chihuahuavaloperpub",
                "bech32PrefixConsAddr": "chihuahuavalcons",
                "bech32PrefixConsPub": "chihuahuavalconspub"
            },
            "walletUrlForStaking": "https://wallet.keplr.app/chains/chihuahua"
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/chihuahua"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "injective-1": {
        "name": "Injective",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/chain.png",
        "rpc": "https://injective-rpc.polkachu.com",
        "rest": "https://injective-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "injective-1",
        "feeAssetId": "inj",
        "cosmos": {
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
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/injective"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "kaiyo-1": {
        "name": "Kujira",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/chain.png",
        "rpc": "https://kujira-rpc.polkachu.com",
        "rest": "https://kujira-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "kaiyo-1",
        "feeAssetId": "ukuji",
        "cosmos": {
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "kujira",
                "bech32PrefixAccPub": "kujirapub",
                "bech32PrefixValAddr": "kujiravaloper",
                "bech32PrefixValPub": "kujiravaloperpub",
                "bech32PrefixConsAddr": "kujiravalcons",
                "bech32PrefixConsPub": "kujiravalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "pingPub",
                "url": "https://ping.pub/kujira"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "quicksilver-2": {
        "name": "Quicksilver",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/chain.png",
        "rpc": "https://quicksilver-rpc.polkachu.com",
        "rest": "https://quicksilver-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "quicksilver-2",
        "feeAssetId": "uqck",
        "cosmos": {
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
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "pingPub",
                "url": "https://ping.pub/quicksilver"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "celestia": {
        "name": "Celestia",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
        "rpc": "https://rpc.celestia.nodestake.top",
        "rest": "https://api.celestia.nodestake.top",
        "chainType": "cosmos",
        "chainId": "celestia",
        "feeAssetId": "utia",
        "cosmos": {
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
            "walletUrlForStaking": "https://wallet.keplr.app/chains/celestia"
        },
        "enabled": false,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/celestia"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "crescent-1": {
        "name": "Crescent Network",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crescent/chain.png",
        "rpc": "https://crescent-cmp-rpc.polkachu.com",
        "rest": "https://crescent-cmp-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "crescent-1",
        "feeAssetId": "ucre",
        "cosmos": {
            "walletUrl": "https://app.crescent.network/",
            "walletUrlForStaking": "https://app.crescent.network/staking",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "cre",
                "bech32PrefixAccPub": "crepub",
                "bech32PrefixValAddr": "crevaloper",
                "bech32PrefixValPub": "crevaloperpub",
                "bech32PrefixConsAddr": "crevalcons",
                "bech32PrefixConsPub": "crevalconspub"
            }
        },
        "enabled": false,
        "explorer": [
            {
                "type": "pingPub",
                "url": "https://ping.pub/crescent"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "umee-1": {
        "name": "UMEE",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/chain.png",
        "rpc": "https://umee-cmp-rpc.polkachu.com",
        "rest": "https://umee-cmp-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "umee-1",
        "feeAssetId": "uumee",
        "cosmos": {
            "walletUrl": "https://wallet.keplr.app/chains/umee",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/umee",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "umee",
                "bech32PrefixAccPub": "umeepub",
                "bech32PrefixValAddr": "umeevaloper",
                "bech32PrefixValPub": "umeevaloperpub",
                "bech32PrefixConsAddr": "umeevalcons",
                "bech32PrefixConsPub": "umeevalconspub"
            }
        },
        "enabled": false,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/umee"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "kusama": {
        "name": "Kusama",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/kusama.svg",
        "rpc": "wss://kusama-rpc.polkadot.io",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "kusama",
        "feeAssetId": "4",
        "polkadot": {
            "ss58Format": 2,
            "isParachain": false,
            "relayChain": "kusama",
            "hops": {
                "2087": {
                    "type": "XCM",
                    "xcmType": "xcmPallet.reserveTransferAssets",
                    "version": "V2",
                    "tokens": [
                        "4"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://kusama.subscan.io"
            }
        ],
        "network_to": [
            "2087"
        ]
    },
    "archway-1": {
        "name": "Archway",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/chain.png",
        "rpc": "https://rpc.mainnet.archway.io",
        "rest": "https://api.mainnet.archway.io",
        "chainType": "cosmos",
        "chainId": "archway-1",
        "feeAssetId": "aarch",
        "cosmos": {
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
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/archway"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "neutron-1": {
        "name": "Neutron",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/chain.png",
        "rpc": "https://neutron-cmp-rpc.polkachu.com",
        "rest": "https://neutron-cmp-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "neutron-1",
        "feeAssetId": "untrn",
        "cosmos": {
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "neutron",
                "bech32PrefixAccPub": "neutronpub",
                "bech32PrefixValAddr": "neutronvaloper",
                "bech32PrefixValPub": "neutronvaloperpub",
                "bech32PrefixConsAddr": "neutronvalcons",
                "bech32PrefixConsPub": "neutronvalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/neutron"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "osmosis-1": {
        "name": "Osmosis",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/chain.png",
        "rpc": "https://osmosis-cmp-rpc.polkachu.com",
        "rest": "https://osmosis-cmp-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "osmosis-1",
        "feeAssetId": "uosmo",
        "cosmos": {
            "walletUrl": "https://app.osmosis.zone",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/osmosis",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "osmo",
                "bech32PrefixAccPub": "osmopub",
                "bech32PrefixValAddr": "osmovaloper",
                "bech32PrefixValPub": "osmovaloperpub",
                "bech32PrefixConsAddr": "osmovalcons",
                "bech32PrefixConsPub": "osmovalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/osmosis"
            }
        ],
        "network_to": [
            "pacific-1",
            "centauri-1"
        ]
    },
    "polkadot": {
        "name": "Polkadot",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/Polkadot.svg",
        "rpc": "wss://rpc.polkadot.io",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "polkadot",
        "feeAssetId": "79228162514264337593543950342",
        "polkadot": {
            "ss58Format": 0,
            "isParachain": false,
            "relayChain": "polkadot",
            "hops": {
                "2019": {
                    "type": "XCM",
                    "xcmType": "xcmPallet.limitedReserveTransferAssets",
                    "version": "V2",
                    "tokens": [
                        "4"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://polkadot.subscan.io"
            }
        ],
        "network_to": [
            "2019"
        ]
    },
    "agoric-3": {
        "name": "Agoric",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/chain.png",
        "rpc": "https://agoric-cmp-rpc.polkachu.com",
        "rest": "https://agoric-cmp-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "agoric-3",
        "feeAssetId": "ubld",
        "cosmos": {
            "walletUrl": "https://wallet.keplr.app/chains/agoric",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/agoric",
            "bip44": {
                "coinType": 564
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "agoric",
                "bech32PrefixAccPub": "agoricpub",
                "bech32PrefixValAddr": "agoricvaloper",
                "bech32PrefixValPub": "agoricvaloperpub",
                "bech32PrefixConsAddr": "agoricvalcons",
                "bech32PrefixConsPub": "agoricvalconspub"
            },
            "alternativeBIP44s": [
                {
                    "coinType": 118
                }
            ]
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/agoric"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "centauri-1": {
        "name": "Picasso",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
        "rpc": "https://picasso-rpc.polkachu.com",
        "rest": "https://picasso-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "centauri-1",
        "feeAssetId": "ppica",
        "cosmos": {
            "bip44": {
                "coinType": 118
            },
            "walletUrlForStaking": "https://explorer.nodestake.top/composable",
            "bech32Config": {
                "bech32PrefixAccAddr": "pica",
                "bech32PrefixAccPub": "picapub",
                "bech32PrefixValAddr": "picavaloper",
                "bech32PrefixValPub": "picavaloperpub",
                "bech32PrefixConsAddr": "picavalcons",
                "bech32PrefixConsPub": "picavalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "pingPub",
                "url": "https://ping.pub/picasso"
            }
        ],
        "network_to": [
            "chihuahua-1",
            "2087",
            "osmosis-1",
            "cosmoshub-4",
            "stride-1",
            "stargaze-1",
            "quicksilver-2",
            "crescent-1",
            "agoric-3",
            "secret-4",
            "neutron-1",
            "umee-1",
            "kaiyo-1",
            "injective-1",
            "celestia",
            "archway-1",
            "ethereum",
            "coreum-mainnet-1",
            "solana"
        ]
    },
    "coreum-mainnet-1": {
        "name": "Coreum",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/coreum-mainnet/chain.png",
        "rpc": "https://full-node.mainnet-1.coreum.dev:26657",
        "rest": "https://rest-coreum.ecostake.com",
        "chainType": "cosmos",
        "chainId": "coreum-mainnet-1",
        "feeAssetId": "ucore",
        "cosmos": {
            "bip44": {
                "coinType": 990
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "core",
                "bech32PrefixAccPub": "corepub",
                "bech32PrefixValAddr": "corevaloper",
                "bech32PrefixValPub": "corevaloperpub",
                "bech32PrefixConsAddr": "corevalcons",
                "bech32PrefixConsPub": "corevalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/coreum"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "cosmoshub-4": {
        "name": "Cosmos Hub",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/chain.png",
        "rpc": "https://cosmos-cmp-rpc.polkachu.com",
        "rest": "https://cosmos-cmp-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "cosmoshub-4",
        "feeAssetId": "uatom",
        "cosmos": {
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
            "walletUrlForStaking": "https://wallet.keplr.app/chains/cosmos-hub"
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/cosmos"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "ethereum": {
        "name": "Ethereum",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ethereum.svg",
        "rpc": "https://mainnet.infura.io/v3/a5d75c55a92a4e01b089047f19cc6bdd",
        "rest": "",
        "chainType": "ethereum",
        "chainId": "ethereum",
        "feeAssetId": "ETH",
        "enabled": true,
        "explorer": [
            {
                "type": "etherscan",
                "url": "https://etherscan.io"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "secret-4": {
        "name": "Secret Network",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/chain.png",
        "rpc": "https://scrt.public-rpc.com",
        "rest": "https://lcd.mainnet.secretsaturn.net",
        "chainType": "cosmos",
        "chainId": "secret-4",
        "feeAssetId": "uscrt",
        "cosmos": {
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
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/secret"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "pacific-1": {
        "name": "Sei",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/chains/sei.svg",
        "rpc": "https://sei-rpc.polkachu.com",
        "rest": "https://sei-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "pacific-1",
        "feeAssetId": "usei",
        "cosmos": {
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "sei",
                "bech32PrefixAccPub": "seipub",
                "bech32PrefixValAddr": "seivaloper",
                "bech32PrefixValPub": "seivaloperpub",
                "bech32PrefixConsAddr": "seivalcons",
                "bech32PrefixConsPub": "seivalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/sei"
            }
        ],
        "network_to": [
            "osmosis-1"
        ]
    },
    "solana": {
        "name": "Solana",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/solana.svg",
        "rpc": "https://mainnet.helius-rpc.com/?api-key=29886ba4-5153-4e0d-8405-d45f81f6b9e9",
        "rest": "",
        "chainType": "solana",
        "chainId": "solana",
        "feeAssetId": "SOL",
        "enabled": true,
        "explorer": [
            {
                "type": "solscan",
                "url": "https://solscan.io"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "stargaze-1": {
        "name": "Stargaze",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/chain.png",
        "rpc": "https://stargaze-cmp-rpc.polkachu.com",
        "rest": "https://stargaze-cmp-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "stargaze-1",
        "feeAssetId": "ustars",
        "cosmos": {
            "walletUrl": "https://wallet.keplr.app/chains/stargaze",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/stargaze",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "stars",
                "bech32PrefixAccPub": "starspub",
                "bech32PrefixValAddr": "starsvaloper",
                "bech32PrefixValPub": "starsvaloperpub",
                "bech32PrefixConsAddr": "starsvalcons",
                "bech32PrefixConsPub": "starsvalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/stargaze"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "stride-1": {
        "name": "Stride",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/chain.png",
        "rpc": "https://stride-cmp-rpc.polkachu.com",
        "rest": "https://stride-cmp-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "stride-1",
        "feeAssetId": "ustrd",
        "cosmos": {
            "walletUrl": "https://wallet.keplr.app/chains/stride",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/stride",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "stride",
                "bech32PrefixAccPub": "stridepub",
                "bech32PrefixValAddr": "stridevaloper",
                "bech32PrefixValPub": "stridevaloperpub",
                "bech32PrefixConsAddr": "stridevalcons",
                "bech32PrefixConsPub": "stridevalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/stride"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    }
};
