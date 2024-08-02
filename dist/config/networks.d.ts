declare const networks: {
    readonly "1000": {
        readonly name: "Kusama Asset Hub";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/kusamaassethub.svg";
        readonly rpc: "wss://statemine-rpc.dwellir.com";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "1000";
        readonly feeAssetId: "USDT Kusama";
        readonly polkadot: {
            readonly ss58Format: 2;
            readonly isParachain: false;
            readonly relayChain: "kusama";
            readonly hops: {
                readonly "2087": {
                    readonly type: "XCM";
                    readonly xcmType: "polkadotXcm.limitedReserveTransferAssets";
                    readonly version: "V2";
                    readonly tokens: readonly ["130"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2087"];
    };
    readonly "2001": {
        readonly name: "BiFrost Kusama";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BiFrostKusama.svg";
        readonly rpc: "wss://bifrost-rpc.liebi.com/ws";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "2001";
        readonly feeAssetId: "BNC_KSM";
        readonly polkadot: {
            readonly ss58Format: 6;
            readonly isParachain: false;
            readonly relayChain: "kusama";
            readonly hops: {
                readonly "2087": {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V2";
                    readonly tokens: readonly ["31", "32"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2087"];
    };
    readonly "2004": {
        readonly name: "Moonbeam";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/moonbeam.svg";
        readonly rpc: "wss://wss.api.moonbeam.network";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "2004";
        readonly feeAssetId: "GLMR";
        readonly polkadot: {
            readonly ss58Format: 0;
            readonly isParachain: false;
            readonly relayChain: "polkadot";
            readonly hops: {
                readonly "2019": {
                    readonly type: "XCM";
                    readonly xcmType: "polkadotXcm.limitedReserveTransferAssets";
                    readonly version: "V2";
                    readonly tokens: readonly ["79228162514264337593543950376"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2019"];
    };
    readonly "2006": {
        readonly name: "astar";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astar.svg";
        readonly rpc: "wss://rpc.astar.network";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "2006";
        readonly feeAssetId: "ASTR";
        readonly polkadot: {
            readonly ss58Format: 5;
            readonly isParachain: false;
            readonly relayChain: "polkadot";
            readonly hops: {
                readonly "2019": {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V2";
                    readonly tokens: readonly ["79228162514264337593543952342"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2019"];
    };
    readonly "2007": {
        readonly name: "Shiden";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/shiden.svg";
        readonly rpc: "wss://shiden-rpc.dwellir.com";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "2007";
        readonly feeAssetId: "SDN";
        readonly polkadot: {
            readonly ss58Format: 5;
            readonly isParachain: false;
            readonly relayChain: "kusama";
            readonly hops: {
                readonly "2087": {
                    readonly type: "XCM";
                    readonly xcmType: "polkadotXcm.limitedReserveTransferAssets";
                    readonly version: "V3";
                    readonly tokens: readonly ["2007"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2087"];
    };
    readonly "2019": {
        readonly name: "Composable";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/composable.svg";
        readonly rpc: "wss://rpc.composable.finance";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "2019";
        readonly feeAssetId: "DOT";
        readonly polkadot: {
            readonly ss58Format: 50;
            readonly isParachain: false;
            readonly relayChain: "kusama";
            readonly hops: {
                readonly "2006": {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V2";
                    readonly tokens: readonly ["79228162514264337593543952342"];
                };
                readonly "2030": {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V2";
                    readonly tokens: readonly ["79228162514264337593543950369", "79228162514264337593543950370"];
                };
                readonly polkadot: {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V3";
                    readonly tokens: readonly ["79228162514264337593543950342"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2006", "2030", "polkadot", "2087"];
    };
    readonly "2023": {
        readonly name: "Moonriver";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/moonriver.svg";
        readonly rpc: "wss://moonriver-rpc.dwellir.com";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "2023";
        readonly feeAssetId: "MOVR";
        readonly polkadot: {
            readonly ss58Format: 0;
            readonly isParachain: false;
            readonly relayChain: "kusama";
            readonly hops: {
                readonly "2087": {
                    readonly type: "XCM";
                    readonly xcmType: "polkadotXcm.limitedReserveTransferAssets";
                    readonly version: "V2";
                    readonly tokens: readonly ["23"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2087"];
    };
    readonly "2030": {
        readonly name: "BiFrost Polkadot";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BiFrostPolkadot.svg";
        readonly rpc: "wss://hk.p.bifrost-rpc.liebi.com/ws";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "2030";
        readonly feeAssetId: "BNC_DOT";
        readonly polkadot: {
            readonly ss58Format: 6;
            readonly isParachain: false;
            readonly relayChain: "polkadot";
            readonly hops: {
                readonly "2019": {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V2";
                    readonly tokens: readonly ["79228162514264337593543950369", "79228162514264337593543950370"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2019"];
    };
    readonly "2087": {
        readonly name: "Picasso";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/Picasso.svg";
        readonly rpc: "wss://picasso-rpc.composable.finance";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "2087";
        readonly feeAssetId: "USDT Kusama";
        readonly polkadot: {
            readonly ss58Format: 49;
            readonly isParachain: false;
            readonly relayChain: "polkadot";
            readonly hops: {
                readonly "1000": {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transferMultiasset";
                    readonly version: "V3";
                    readonly tokens: readonly ["130"];
                };
                readonly "2001": {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V2";
                    readonly tokens: readonly ["31", "32"];
                };
                readonly "2125": {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V3";
                    readonly tokens: readonly ["2125"];
                };
                readonly kusama: {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V3";
                    readonly tokens: readonly ["4"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["1000", "2001", "2125", "kusama", "2019", "centauri-1"];
    };
    readonly "2124": {
        readonly name: "amplitude";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/amplitude.svg";
        readonly rpc: "wss://rpc-amplitude.pendulumchain.tech";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "2124";
        readonly feeAssetId: "";
        readonly polkadot: {
            readonly ss58Format: 56;
            readonly isParachain: false;
            readonly relayChain: "polkadot";
            readonly hops: {
                readonly "2019": {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V2";
                    readonly tokens: readonly ["0000"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2019"];
    };
    readonly "2125": {
        readonly name: "Tinkernet";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/tinkernet.svg";
        readonly rpc: "wss://tinkernet-rpc.dwellir.com";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "2125";
        readonly feeAssetId: "TNKR";
        readonly polkadot: {
            readonly ss58Format: 117;
            readonly isParachain: false;
            readonly relayChain: "kusama";
            readonly hops: {
                readonly "2087": {
                    readonly type: "XCM";
                    readonly xcmType: "xTokens.transfer";
                    readonly version: "V2";
                    readonly tokens: readonly ["2125"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2087"];
    };
    readonly "agoric-3": {
        readonly name: "Agoric";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/chain.png";
        readonly rpc: "https://agoric-cmp-rpc.polkachu.com";
        readonly rest: "https://agoric-cmp-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "agoric-3";
        readonly feeAssetId: "BLD";
        readonly cosmos: {
            readonly walletUrl: "https://wallet.keplr.app/chains/agoric";
            readonly walletUrlForStaking: "https://wallet.keplr.app/chains/agoric";
            readonly bip44: {
                readonly coinType: 564;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "agoric";
                readonly bech32PrefixAccPub: "agoricpub";
                readonly bech32PrefixValAddr: "agoricvaloper";
                readonly bech32PrefixValPub: "agoricvaloperpub";
                readonly bech32PrefixConsAddr: "agoricvalcons";
                readonly bech32PrefixConsPub: "agoricvalconspub";
            };
            readonly alternativeBIP44s: readonly [{
                readonly coinType: 118;
            }];
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "archway-1": {
        readonly name: "Archway";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/chain.png";
        readonly rpc: "https://rpc.mainnet.archway.io";
        readonly rest: "https://api.mainnet.archway.io";
        readonly chain_type: "cosmos";
        readonly chainId: "archway-1";
        readonly feeAssetId: "ARCH";
        readonly cosmos: {
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "archway";
                readonly bech32PrefixAccPub: "archwaypub";
                readonly bech32PrefixConsAddr: "archwayvalcons";
                readonly bech32PrefixConsPub: "archwayvalconspub";
                readonly bech32PrefixValAddr: "archwayvaloper";
                readonly bech32PrefixValPub: "archwayvaloperpub";
            };
            readonly bip44: {
                readonly coinType: 118;
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly celestia: {
        readonly name: "Celestia";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png";
        readonly rpc: "https://rpc.celestia.nodestake.top";
        readonly rest: "https://api.celestia.nodestake.top";
        readonly chain_type: "cosmos";
        readonly chainId: "celestia";
        readonly feeAssetId: "TIA";
        readonly cosmos: {
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "celestia";
                readonly bech32PrefixAccPub: "celestiapub";
                readonly bech32PrefixConsAddr: "celestiavalcons";
                readonly bech32PrefixConsPub: "celestiavalconspub";
                readonly bech32PrefixValAddr: "celestiavaloper";
                readonly bech32PrefixValPub: "celestiavaloperpub";
            };
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly walletUrlForStaking: "https://wallet.keplr.app/chains/celestia";
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "chihuahua-1": {
        readonly name: "Chihuahua";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png";
        readonly rpc: "https://chihuahua-rpc.polkachu.com";
        readonly rest: "https://chihuahua-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "chihuahua-1";
        readonly feeAssetId: "HUAHUA";
        readonly cosmos: {
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "chihuahua";
                readonly bech32PrefixAccPub: "chihuahuapub";
                readonly bech32PrefixValAddr: "chihuahuavaloper";
                readonly bech32PrefixValPub: "chihuahuavaloperpub";
                readonly bech32PrefixConsAddr: "chihuahuavalcons";
                readonly bech32PrefixConsPub: "chihuahuavalconspub";
            };
            readonly walletUrlForStaking: "https://wallet.keplr.app/chains/chihuahua";
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "coreum-mainnet-1": {
        readonly name: "Coreum";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/coreum-mainnet/chain.png";
        readonly rpc: "https://full-node.mainnet-1.coreum.dev:26657";
        readonly rest: "https://rest-coreum.ecostake.com";
        readonly chain_type: "cosmos";
        readonly chainId: "coreum-mainnet-1";
        readonly feeAssetId: "XRP";
        readonly cosmos: {
            readonly bip44: {
                readonly coinType: 990;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "core";
                readonly bech32PrefixAccPub: "corepub";
                readonly bech32PrefixValAddr: "corevaloper";
                readonly bech32PrefixValPub: "corevaloperpub";
                readonly bech32PrefixConsAddr: "corevalcons";
                readonly bech32PrefixConsPub: "corevalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "cosmoshub-4": {
        readonly name: "Cosmos Hub";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/chain.png";
        readonly rpc: "https://cosmos-cmp-rpc.polkachu.com";
        readonly rest: "https://cosmos-cmp-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "cosmoshub-4";
        readonly feeAssetId: "ATOM";
        readonly cosmos: {
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "cosmos";
                readonly bech32PrefixAccPub: "cosmospub";
                readonly bech32PrefixConsAddr: "cosmosvalcons";
                readonly bech32PrefixConsPub: "cosmosvalconspub";
                readonly bech32PrefixValAddr: "cosmosvaloper";
                readonly bech32PrefixValPub: "cosmosvaloperpub";
            };
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly walletUrlForStaking: "https://wallet.keplr.app/chains/cosmos-hub";
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "crescent-1": {
        readonly name: "Crescent Network";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crescent/chain.png";
        readonly rpc: "https://crescent-cmp-rpc.polkachu.com";
        readonly rest: "https://crescent-cmp-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "crescent-1";
        readonly feeAssetId: "CRE";
        readonly cosmos: {
            readonly walletUrl: "https://app.crescent.network/";
            readonly walletUrlForStaking: "https://app.crescent.network/staking";
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "cre";
                readonly bech32PrefixAccPub: "crepub";
                readonly bech32PrefixValAddr: "crevaloper";
                readonly bech32PrefixValPub: "crevaloperpub";
                readonly bech32PrefixConsAddr: "crevalcons";
                readonly bech32PrefixConsPub: "crevalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly ethereum: {
        readonly name: "Ethereum";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ethereum.svg";
        readonly rpc: "https://mainnet.infura.io/v3/a5d75c55a92a4e01b089047f19cc6bdd";
        readonly rest: "";
        readonly chain_type: "ethereum";
        readonly chainId: "ethereum";
        readonly feeAssetId: "ETH";
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "injective-1": {
        readonly name: "Injective";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/chain.png";
        readonly rpc: "https://injective-rpc.polkachu.com";
        readonly rest: "https://injective-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "injective-1";
        readonly feeAssetId: "INJ";
        readonly cosmos: {
            readonly bech32Config: {
                readonly bech32PrefixAccPub: "injpub";
                readonly bech32PrefixValPub: "injvaloperpub";
                readonly bech32PrefixAccAddr: "inj";
                readonly bech32PrefixConsPub: "injvalconspub";
                readonly bech32PrefixValAddr: "injvaloper";
                readonly bech32PrefixConsAddr: "injvalcons";
            };
            readonly bip44: {
                readonly coinType: 60;
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "kaiyo-1": {
        readonly name: "Kujira";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/chain.png";
        readonly rpc: "https://kujira-rpc.polkachu.com";
        readonly rest: "https://kujira-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "kaiyo-1";
        readonly feeAssetId: "KUJI";
        readonly cosmos: {
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "kujira";
                readonly bech32PrefixAccPub: "kujirapub";
                readonly bech32PrefixValAddr: "kujiravaloper";
                readonly bech32PrefixValPub: "kujiravaloperpub";
                readonly bech32PrefixConsAddr: "kujiravalcons";
                readonly bech32PrefixConsPub: "kujiravalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "neutron-1": {
        readonly name: "Neutron";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/chain.png";
        readonly rpc: "https://neutron-cmp-rpc.polkachu.com";
        readonly rest: "https://neutron-cmp-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "neutron-1";
        readonly feeAssetId: "ASTRO";
        readonly cosmos: {
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "neutron";
                readonly bech32PrefixAccPub: "neutronpub";
                readonly bech32PrefixValAddr: "neutronvaloper";
                readonly bech32PrefixValPub: "neutronvaloperpub";
                readonly bech32PrefixConsAddr: "neutronvalcons";
                readonly bech32PrefixConsPub: "neutronvalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "osmosis-1": {
        readonly name: "Osmosis";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/chain.png";
        readonly rpc: "https://osmosis-cmp-rpc.polkachu.com";
        readonly rest: "https://osmosis-cmp-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "osmosis-1";
        readonly feeAssetId: "OSMO";
        readonly cosmos: {
            readonly walletUrl: "https://app.osmosis.zone";
            readonly walletUrlForStaking: "https://wallet.keplr.app/chains/osmosis";
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "osmo";
                readonly bech32PrefixAccPub: "osmopub";
                readonly bech32PrefixValAddr: "osmovaloper";
                readonly bech32PrefixValPub: "osmovaloperpub";
                readonly bech32PrefixConsAddr: "osmovalcons";
                readonly bech32PrefixConsPub: "osmovalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["pacific-1", "centauri-1"];
    };
    readonly "quicksilver-2": {
        readonly name: "Quicksilver";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/chain.png";
        readonly rpc: "https://quicksilver-rpc.polkachu.com";
        readonly rest: "https://quicksilver-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "quicksilver-2";
        readonly feeAssetId: "QCK";
        readonly cosmos: {
            readonly walletUrlForStaking: "https://wallet.keplr.app/chains/quicksilver";
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "quick";
                readonly bech32PrefixAccPub: "quickpub";
                readonly bech32PrefixValAddr: "quickvaloper";
                readonly bech32PrefixValPub: "quickvaloperpub";
                readonly bech32PrefixConsAddr: "quickvalcons";
                readonly bech32PrefixConsPub: "quickvalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "secret-4": {
        readonly name: "Secret Network";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/chain.png";
        readonly rpc: "https://scrt.public-rpc.com";
        readonly rest: "https://lcd.mainnet.secretsaturn.net";
        readonly chain_type: "cosmos";
        readonly chainId: "secret-4";
        readonly feeAssetId: "SCRT";
        readonly cosmos: {
            readonly walletUrl: "https://wallet.keplr.app/chains/secret-network";
            readonly walletUrlForStaking: "https://wallet.keplr.app/chains/secret-network";
            readonly bip44: {
                readonly coinType: 529;
            };
            readonly alternativeBIP44s: readonly [{
                readonly coinType: 118;
            }];
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "secret";
                readonly bech32PrefixAccPub: "secretpub";
                readonly bech32PrefixValAddr: "secretvaloper";
                readonly bech32PrefixValPub: "secretvaloperpub";
                readonly bech32PrefixConsAddr: "secretvalcons";
                readonly bech32PrefixConsPub: "secretvalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "pacific-1": {
        readonly name: "Sei";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pacific/chain.png";
        readonly rpc: "https://sei-rpc.polkachu.com";
        readonly rest: "https://sei-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "pacific-1";
        readonly feeAssetId: "SEI";
        readonly cosmos: {
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "sei";
                readonly bech32PrefixAccPub: "seipub";
                readonly bech32PrefixValAddr: "seivaloper";
                readonly bech32PrefixValPub: "seivaloperpub";
                readonly bech32PrefixConsAddr: "seivalcons";
                readonly bech32PrefixConsPub: "seivalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["osmosis-1"];
    };
    readonly solana: {
        readonly name: "Solana";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/solana.svg";
        readonly rpc: "https://mainnet.helius-rpc.com/?api-key=65520d87-04b2-43a5-b5d5-35d5db0601b3";
        readonly rest: "";
        readonly chain_type: "solana";
        readonly chainId: "solana";
        readonly feeAssetId: "SOL";
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "stargaze-1": {
        readonly name: "Stargaze";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/chain.png";
        readonly rpc: "https://stargaze-cmp-rpc.polkachu.com";
        readonly rest: "https://stargaze-cmp-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "stargaze-1";
        readonly feeAssetId: "STARS";
        readonly cosmos: {
            readonly walletUrl: "https://wallet.keplr.app/chains/stargaze";
            readonly walletUrlForStaking: "https://wallet.keplr.app/chains/stargaze";
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "stars";
                readonly bech32PrefixAccPub: "starspub";
                readonly bech32PrefixValAddr: "starsvaloper";
                readonly bech32PrefixValPub: "starsvaloperpub";
                readonly bech32PrefixConsAddr: "starsvalcons";
                readonly bech32PrefixConsPub: "starsvalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "stride-1": {
        readonly name: "Stride";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/chain.png";
        readonly rpc: "https://stride-cmp-rpc.polkachu.com";
        readonly rest: "https://stride-cmp-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "stride-1";
        readonly feeAssetId: "stTIA";
        readonly cosmos: {
            readonly walletUrl: "https://wallet.keplr.app/chains/stride";
            readonly walletUrlForStaking: "https://wallet.keplr.app/chains/stride";
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "stride";
                readonly bech32PrefixAccPub: "stridepub";
                readonly bech32PrefixValAddr: "stridevaloper";
                readonly bech32PrefixValPub: "stridevaloperpub";
                readonly bech32PrefixConsAddr: "stridevalcons";
                readonly bech32PrefixConsPub: "stridevalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "umee-1": {
        readonly name: "UMEE";
        readonly image: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/chain.png";
        readonly rpc: "https://umee-cmp-rpc.polkachu.com";
        readonly rest: "https://umee-cmp-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "umee-1";
        readonly feeAssetId: "UMEE";
        readonly cosmos: {
            readonly walletUrl: "https://wallet.keplr.app/chains/umee";
            readonly walletUrlForStaking: "https://wallet.keplr.app/chains/umee";
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "umee";
                readonly bech32PrefixAccPub: "umeepub";
                readonly bech32PrefixValAddr: "umeevaloper";
                readonly bech32PrefixValPub: "umeevaloperpub";
                readonly bech32PrefixConsAddr: "umeevalcons";
                readonly bech32PrefixConsPub: "umeevalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["centauri-1"];
    };
    readonly "centauri-1": {
        readonly name: "centauri";
        readonly rpc: "https://picasso-rpc.polkachu.com";
        readonly rest: "https://picasso-api.polkachu.com";
        readonly chain_type: "cosmos";
        readonly chainId: "centauri-1";
        readonly feeAssetId: "PICA";
        readonly cosmos: {
            readonly bip44: {
                readonly coinType: 118;
            };
            readonly walletUrlForStaking: "https://explorer.nodestake.top/composable";
            readonly bech32Config: {
                readonly bech32PrefixAccAddr: "pica";
                readonly bech32PrefixAccPub: "picapub";
                readonly bech32PrefixValAddr: "picavaloper";
                readonly bech32PrefixValPub: "picavaloperpub";
                readonly bech32PrefixConsAddr: "picavalcons";
                readonly bech32PrefixConsPub: "picavalconspub";
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["chihuahua-1", "2087", "osmosis-1", "cosmoshub-4", "stride-1", "stargaze-1", "quicksilver-2", "crescent-1", "agoric-3", "secret-4", "neutron-1", "umee-1", "kaiyo-1", "injective-1", "celestia", "archway-1", "ethereum", "coreum-mainnet-1", "solana"];
    };
    readonly kusama: {
        readonly name: "Kusama";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/kusama.svg";
        readonly rpc: "wss://kusama-rpc.polkadot.io";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "kusama";
        readonly feeAssetId: "KSM";
        readonly polkadot: {
            readonly ss58Format: 2;
            readonly isParachain: false;
            readonly relayChain: "kusama";
            readonly hops: {
                readonly "2087": {
                    readonly type: "XCM";
                    readonly xcmType: "xcmPallet.reserveTransferAssets";
                    readonly version: "V2";
                    readonly tokens: readonly ["4"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2087"];
    };
    readonly polkadot: {
        readonly name: "Polkadot";
        readonly image: "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/Polkadot.svg";
        readonly rpc: "wss://rpc.polkadot.io";
        readonly rest: "";
        readonly chain_type: "polkadot";
        readonly chainId: "polkadot";
        readonly feeAssetId: "KSM";
        readonly polkadot: {
            readonly ss58Format: 0;
            readonly isParachain: false;
            readonly relayChain: "polkadot";
            readonly hops: {
                readonly "2019": {
                    readonly type: "XCM";
                    readonly xcmType: "xcmPallet.limitedReserveTransferAssets";
                    readonly version: "V2";
                    readonly tokens: readonly ["4"];
                };
            };
        };
        readonly enabled: true;
        readonly network_to: readonly ["2019"];
    };
};
export default networks;
//# sourceMappingURL=networks.d.ts.map