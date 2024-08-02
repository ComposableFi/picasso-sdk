
// [FAST TRACK] Add cross-chain asset info here
const crossChainAssets = {
  "cosmos": {
    "ubld": {
      "chainId": "agoric-3",
      "decimals": 6,
      "minimalDenom": "ubld",
      "denom": "BLD",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png"
    },
    "uist": {
      "chainId": "agoric-3",
      "decimals": 6,
      "minimalDenom": "uist",
      "denom": "IST",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png"
    },
    "aarch": {
      "chainId": "archway-1",
      "decimals": 18,
      "minimalDenom": "aarch",
      "denom": "ARCH",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png"
    },
    "utia": {
      "chainId": "celestia",
      "decimals": 6,
      "minimalDenom": "utia",
      "denom": "TIA",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png"
    },
    "uhuahua": {
      "chainId": "chihuahua-1",
      "decimals": 6,
      "minimalDenom": "uhuahua",
      "denom": "HUAHUA",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png"
    },
    "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz": {
      "chainId": "coreum-mainnet-1",
      "decimals": 6,
      "minimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
      "denom": "XRP"
    },
    "ucore": {
      "chainId": "coreum-mainnet-1",
      "decimals": 6,
      "minimalDenom": "ucore",
      "denom": "CORE"
    },
    "uatom": {
      "chainId": "cosmoshub-4",
      "decimals": 6,
      "minimalDenom": "uatom",
      "denom": "ATOM",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png"
    },
    "ucre": {
      "chainId": "crescent-1",
      "decimals": 6,
      "minimalDenom": "ucre",
      "denom": "CRE"
    },
    "ubcre": {
      "chainId": "crescent-1",
      "decimals": 6,
      "minimalDenom": "ubcre",
      "denom": "bCRE"
    },
    "wei": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "wei",
      "denom": "ETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ETH.svg"
    },
    "0x6b175474e89094c44da98b954eedeac495271d0f": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "denom": "DAI",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/dai.svg"
    },
    "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
      "denom": "FXS",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/fxs.svg"
    },
    "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32",
      "denom": "sFRAX",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sFRAX.svg"
    },
    "0xac3e018457b222d93114458476f3e3416abbe38f": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xac3e018457b222d93114458476f3e3416abbe38f",
      "denom": "sfrxETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sfrxETH.svg"
    },
    "0x57e114b691db790c35207b2e685d4a43181e6061": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x57e114b691db790c35207b2e685d4a43181e6061",
      "denom": "ENA",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ena.svg"
    },
    "0x853d955acef822db058eb8505911ed77f175b99e": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x853d955acef822db058eb8505911ed77f175b99e",
      "denom": "FRAX",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/frax.svg"
    },
    "0x5e8422345238f34275888049021821e8e08caa1f": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x5e8422345238f34275888049021821e8e08caa1f",
      "denom": "frxETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/frxeth.svg"
    },
    "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": {
      "chainId": "ethereum",
      "decimals": 8,
      "minimalDenom": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "denom": "wBTC",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wbtc.svg"
    },
    "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      "denom": "stETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/steth.svg"
    },
    "0xae78736cd615f374d3085123a210448e74fc6393": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xae78736cd615f374d3085123a210448e74fc6393",
      "denom": "rETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/reth.svg"
    },
    "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e",
      "denom": "crvUSD",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/crvusd.svg"
    },
    "0x04c154b66cb340f3ae24111cc767e0184ed00cc6": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x04c154b66cb340f3ae24111cc767e0184ed00cc6",
      "denom": "pxETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/pxeth.svg"
    },
    "0x35fa164735182de50811e8e2e824cfb9b6118ac2": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x35fa164735182de50811e8e2e824cfb9b6118ac2",
      "denom": "eETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/eeth.svg"
    },
    "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd": {
      "chainId": "secret-4",
      "decimals": 6,
      "minimalDenom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
      "denom": "SILK",
      "imageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg"
    },
    "0xbf5495efe5db9ce00f80364c8b423567e58d2110": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xbf5495efe5db9ce00f80364c8b423567e58d2110",
      "denom": "ezETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ezeth.svg"
    },
    "0x4c9edd5852cd905f086c759e8383e09bff1e68b3": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x4c9edd5852cd905f086c759e8383e09bff1e68b3",
      "denom": "USDe",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDe.svg"
    },
    "0x6982508145454ce325ddbe47a25d4ec3d2311933": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x6982508145454ce325ddbe47a25d4ec3d2311933",
      "denom": "PEPE",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/pepe.svg"
    },
    "0xdac17f958d2ee523a2206206994597c13d831ec7": {
      "chainId": "ethereum",
      "decimals": 6,
      "minimalDenom": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "denom": "USDT Ethereum",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTethereum.svg"
    },
    "0xd533a949740bb3306d119cc777fa900ba034cd52": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "denom": "CRV",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/crv.svg"
    },
    "inj": {
      "chainId": "injective-1",
      "decimals": 18,
      "minimalDenom": "inj",
      "denom": "INJ",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png"
    },
    "ukuji": {
      "chainId": "kaiyo-1",
      "decimals": 6,
      "minimalDenom": "ukuji",
      "denom": "KUJI",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png"
    },
    "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro": {
      "chainId": "neutron-1",
      "decimals": 6,
      "minimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro",
      "denom": "ASTRO",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astro.svg"
    },
    "untrn": {
      "chainId": "neutron-1",
      "decimals": 6,
      "minimalDenom": "untrn",
      "denom": "NTRN",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/untrn.png"
    },
    "uosmo": {
      "chainId": "osmosis-1",
      "decimals": 6,
      "minimalDenom": "uosmo",
      "denom": "OSMO",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png"
    },
    "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA": {
      "chainId": "osmosis-1",
      "decimals": 6,
      "minimalDenom": "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
      "denom": "milkTIA",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/milktia.png"
    },
    "uqck": {
      "chainId": "quicksilver-2",
      "decimals": 6,
      "minimalDenom": "uqck",
      "denom": "QCK",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png"
    },
    "uscrt": {
      "chainId": "secret-4",
      "decimals": 6,
      "minimalDenom": "uscrt",
      "denom": "SCRT",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png"
    },
    "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm": {
      "chainId": "secret-4",
      "decimals": 8,
      "minimalDenom": "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
      "denom": "SHD",
      "imageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg"
    },
    "usei": {
      "chainId": "pacific-1",
      "decimals": 6,
      "minimalDenom": "usei",
      "denom": "SEI"
    },
    "SOL": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "SOL",
      "denom": "SOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sol.svg"
    },
    "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
      "denom": "JitoSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jitosol.svg"
    },
    "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
      "denom": "mSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/mSOL.svg"
    },
    "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump": {
      "chainId": "solana",
      "decimals": 6,
      "minimalDenom": "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump",
      "denom": "WHINE",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/WHINE.svg"
    },
    "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj",
      "denom": "hausSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/hausSOL.svg"
    },
    "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
      "denom": "bSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/bSOL.svg"
    },
    "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp",
      "denom": "LST",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/LST.svg"
    },
    "BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA",
      "denom": "BLZE",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BLZE.svg"
    },
    "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt",
      "denom": "edgeSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/edgesol.svg"
    },
    "5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV",
      "denom": "cSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/csol.svg"
    },
    "3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h",
      "denom": "cmSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cmsol.svg"
    },
    "6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM",
      "denom": "cJitoSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cJitoSOL.svg"
    },
    "FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt",
      "denom": "cbSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cbSOL.svg"
    },
    "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h",
      "denom": "compassSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/compasssol.svg"
    },
    "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v",
      "denom": "jupSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jupsol.svg"
    },
    "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A",
      "denom": "hSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/hSOL.svg"
    },
    "So11111111111111111111111111111111111111112": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "So11111111111111111111111111111111111111112",
      "denom": "wSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wSOL.svg"
    },
    "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm": {
      "chainId": "solana",
      "decimals": 6,
      "minimalDenom": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
      "denom": "WIF",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/WIF.svg"
    },
    "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263": {
      "chainId": "solana",
      "decimals": 5,
      "minimalDenom": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
      "denom": "BONK",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BONK.svg"
    },
    "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB": {
      "chainId": "solana",
      "decimals": 6,
      "minimalDenom": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      "denom": "USDT Solana",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTsolana.svg"
    },
    "ustars": {
      "chainId": "stargaze-1",
      "decimals": 6,
      "minimalDenom": "ustars",
      "denom": "STARS",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png"
    },
    "undefined": {
      "chainId": "1000",
      "decimals": 6,
      "denom": "USDT Kusama",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTkusama.svg"
    },
    "stutia": {
      "chainId": "stride-1",
      "decimals": 6,
      "minimalDenom": "stutia",
      "denom": "stTIA",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/sttia.png"
    },
    "ustrd": {
      "chainId": "stride-1",
      "decimals": 6,
      "minimalDenom": "ustrd",
      "denom": "STRD",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png"
    },
    "stuatom": {
      "chainId": "stride-1",
      "decimals": 6,
      "minimalDenom": "stuatom",
      "denom": "stATOM",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuatom.png"
    },
    "uumee": {
      "chainId": "umee-1",
      "decimals": 6,
      "minimalDenom": "uumee",
      "denom": "UMEE",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png"
    },
    "ppica": {
      "chainId": "centauri-1",
      "decimals": 12,
      "minimalDenom": "ppica",
      "denom": "PICA",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg"
    }
  },
  "solana": {
    "BtHCXVdDCRqDvuTfmsLK5gcz3WbSBNY5DxpzSxqAcouU": {
      "chainId": "agoric-3",
      "decimals": 6,
      "minimalDenom": "ubld",
      "denom": "BLD",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png"
    },
    "3bHxPkuJwztJyrZW2T6sZe8GkRjN1BXgw3ViHPcrQdCj": {
      "chainId": "agoric-3",
      "decimals": 6,
      "minimalDenom": "uist",
      "denom": "IST",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png"
    },
    "BxZEQoVDwPT1dGTSnLw4Qvm17up2vvvP88PCSYTncgnk": {
      "chainId": "archway-1",
      "decimals": 18,
      "minimalDenom": "aarch",
      "denom": "ARCH",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png"
    },
    "DD4Ew6YcPCiJvb9ZQyAktRvgtckubPLTcHdbaK4nVKUW": {
      "chainId": "coreum-mainnet-1",
      "decimals": 6,
      "minimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
      "denom": "XRP"
    },
    "9gjHXkUVtDEPfxXXT9Jj3ZbYbFzS4zN92ewsCH8zGUKc": {
      "chainId": "cosmoshub-4",
      "decimals": 6,
      "minimalDenom": "uatom",
      "denom": "ATOM",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png"
    },
    "8knH1Z4kY6WaHRMZHMxe76d2Ar3kHhjz33t1eZRJSyET": {
      "chainId": "neutron-1",
      "decimals": 6,
      "minimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro",
      "denom": "ASTRO",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astro.svg"
    },
    "EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM": {
      "chainId": "osmosis-1",
      "decimals": 6,
      "minimalDenom": "uosmo",
      "denom": "OSMO",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png"
    },
    "6bQZs6ZSaRoaYPsfLibM9ZhZa4Haj4xF5uFJ33Kduc3V": {
      "chainId": "secret-4",
      "decimals": 6,
      "minimalDenom": "uscrt",
      "denom": "SCRT",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png"
    },
    "Dcihw3DVQpxF7ri4fsdGaZWrwhtLgCvbkYHXWh1VdhQn": {
      "chainId": "secret-4",
      "decimals": 6,
      "minimalDenom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
      "denom": "SILK",
      "imageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg"
    },
    "4Atqy7XYeHXLD2thRJtDtBaRassB2Ff4ksefhvzLKxDQ": {
      "chainId": "secret-4",
      "decimals": 8,
      "minimalDenom": "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
      "denom": "SHD",
      "imageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg"
    },
    "BajH8K75CHJrmT1hf6QGHSyY5r5tbJYSHrCb7uDNCF5S": {
      "chainId": "pacific-1",
      "decimals": 6,
      "minimalDenom": "usei",
      "denom": "SEI"
    },
    "SOL": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "SOL",
      "denom": "SOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sol.svg"
    },
    "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
      "denom": "JitoSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jitosol.svg"
    },
    "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
      "denom": "mSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/mSOL.svg"
    },
    "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump": {
      "chainId": "solana",
      "decimals": 6,
      "minimalDenom": "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump",
      "denom": "WHINE",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/WHINE.svg"
    },
    "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj",
      "denom": "hausSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/hausSOL.svg"
    },
    "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
      "denom": "bSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/bSOL.svg"
    },
    "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp",
      "denom": "LST",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/LST.svg"
    },
    "BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA",
      "denom": "BLZE",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BLZE.svg"
    },
    "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt",
      "denom": "edgeSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/edgesol.svg"
    },
    "5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV",
      "denom": "cSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/csol.svg"
    },
    "3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h",
      "denom": "cmSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cmsol.svg"
    },
    "6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM",
      "denom": "cJitoSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cJitoSOL.svg"
    },
    "FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt",
      "denom": "cbSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cbSOL.svg"
    },
    "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h",
      "denom": "compassSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/compasssol.svg"
    },
    "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v",
      "denom": "jupSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jupsol.svg"
    },
    "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A",
      "denom": "hSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/hSOL.svg"
    },
    "So11111111111111111111111111111111111111112": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "So11111111111111111111111111111111111111112",
      "denom": "wSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wSOL.svg"
    },
    "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm": {
      "chainId": "solana",
      "decimals": 6,
      "minimalDenom": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
      "denom": "WIF",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/WIF.svg"
    },
    "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263": {
      "chainId": "solana",
      "decimals": 5,
      "minimalDenom": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
      "denom": "BONK",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BONK.svg"
    },
    "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB": {
      "chainId": "solana",
      "decimals": 6,
      "minimalDenom": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      "denom": "USDT Solana",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTsolana.svg"
    },
    "HYaNBn8TQCpy1ohJAQ8V8GaLsRFrkudszgQU8uQpWNvB": {
      "chainId": "stargaze-1",
      "decimals": 6,
      "minimalDenom": "ustars",
      "denom": "STARS",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png"
    },
    "FjK5ms55rMZY42NUKnAayUjA8Q1nA2jhYwkHZUY7KwvE": {
      "chainId": "stride-1",
      "decimals": 6,
      "minimalDenom": "ustrd",
      "denom": "STRD",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png"
    },
    "8aHZdc7qrKAPMey7B6VHx3U3xWFBs7BZhdLAYqZBQwea": {
      "chainId": "stride-1",
      "decimals": 6,
      "minimalDenom": "stuatom",
      "denom": "stATOM",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuatom.png"
    },
    "966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ": {
      "chainId": "centauri-1",
      "decimals": 12,
      "minimalDenom": "ppica",
      "denom": "PICA",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg"
    },
    "vbJ16tHqqVKvLq8rgWeGboJvSCoeFjSYYvH77czoT9J": {
      "chainId": "2019",
      "decimals": 10,
      "denom": "DOT",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/DOT.svg"
    },
    "9m8kq5qhocfckRkRnhbAroPmR8zYaXugpyinpkpLnv12": {
      "chainId": "polkadot",
      "decimals": 12,
      "denom": "KSM",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/KSM.svg"
    }
  },
  "ethereum": {
    "0xfd11E3564691A99bF56A3545A86Af2aEb8416CA1": {
      "chainId": "agoric-3",
      "decimals": 6,
      "minimalDenom": "ubld",
      "denom": "BLD",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png"
    },
    "0x7d1b634d825221E8d8f619c5FA06a3F57dAFd5C6": {
      "chainId": "agoric-3",
      "decimals": 6,
      "minimalDenom": "uist",
      "denom": "IST",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png"
    },
    "0xA88bB3EB033F359FeF934Dd3b4b753847318072C": {
      "chainId": "archway-1",
      "decimals": 18,
      "minimalDenom": "aarch",
      "denom": "ARCH",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png"
    },
    "0x628f76eab0c1298f7a24d337bbbf1ef8a1ea6a24": {
      "chainId": "coreum-mainnet-1",
      "decimals": 6,
      "minimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
      "denom": "XRP"
    },
    "0x519ddEff5d142Fc177d95F24952eF3D2EDe530BC": {
      "chainId": "cosmoshub-4",
      "decimals": 6,
      "minimalDenom": "uatom",
      "denom": "ATOM",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png"
    },
    "ETH": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "wei",
      "denom": "ETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ETH.svg"
    },
    "0x6b175474e89094c44da98b954eedeac495271d0f": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "denom": "DAI",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/dai.svg"
    },
    "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
      "denom": "FXS",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/fxs.svg"
    },
    "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32",
      "denom": "sFRAX",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sFRAX.svg"
    },
    "0xac3e018457b222d93114458476f3e3416abbe38f": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xac3e018457b222d93114458476f3e3416abbe38f",
      "denom": "sfrxETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sfrxETH.svg"
    },
    "0x57e114b691db790c35207b2e685d4a43181e6061": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x57e114b691db790c35207b2e685d4a43181e6061",
      "denom": "ENA",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ena.svg"
    },
    "0x853d955acef822db058eb8505911ed77f175b99e": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x853d955acef822db058eb8505911ed77f175b99e",
      "denom": "FRAX",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/frax.svg"
    },
    "0x5e8422345238f34275888049021821e8e08caa1f": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x5e8422345238f34275888049021821e8e08caa1f",
      "denom": "frxETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/frxeth.svg"
    },
    "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": {
      "chainId": "ethereum",
      "decimals": 8,
      "minimalDenom": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "denom": "wBTC",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wbtc.svg"
    },
    "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      "denom": "stETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/steth.svg"
    },
    "0xae78736cd615f374d3085123a210448e74fc6393": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xae78736cd615f374d3085123a210448e74fc6393",
      "denom": "rETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/reth.svg"
    },
    "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e",
      "denom": "crvUSD",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/crvusd.svg"
    },
    "0x04c154b66cb340f3ae24111cc767e0184ed00cc6": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x04c154b66cb340f3ae24111cc767e0184ed00cc6",
      "denom": "pxETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/pxeth.svg"
    },
    "0x35fa164735182de50811e8e2e824cfb9b6118ac2": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x35fa164735182de50811e8e2e824cfb9b6118ac2",
      "denom": "eETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/eeth.svg"
    },
    "0x854b8fc032a5b7828d8de72702f1fdd9bcfb3efa": {
      "chainId": "secret-4",
      "decimals": 6,
      "minimalDenom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
      "denom": "SILK",
      "imageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg"
    },
    "0xbf5495efe5db9ce00f80364c8b423567e58d2110": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xbf5495efe5db9ce00f80364c8b423567e58d2110",
      "denom": "ezETH",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ezeth.svg"
    },
    "0x4c9edd5852cd905f086c759e8383e09bff1e68b3": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x4c9edd5852cd905f086c759e8383e09bff1e68b3",
      "denom": "USDe",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDe.svg"
    },
    "0x6982508145454ce325ddbe47a25d4ec3d2311933": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0x6982508145454ce325ddbe47a25d4ec3d2311933",
      "denom": "PEPE",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/pepe.svg"
    },
    "0xdac17f958d2ee523a2206206994597c13d831ec7": {
      "chainId": "ethereum",
      "decimals": 6,
      "minimalDenom": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "denom": "USDT Ethereum",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTethereum.svg"
    },
    "0xd533a949740bb3306d119cc777fa900ba034cd52": {
      "chainId": "ethereum",
      "decimals": 18,
      "minimalDenom": "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "denom": "CRV",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/crv.svg"
    },
    "0x9243b3615ed297403c0cafa156c3fa16057526ca": {
      "chainId": "osmosis-1",
      "decimals": 6,
      "minimalDenom": "uosmo",
      "denom": "OSMO",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png"
    },
    "0xF7F00d598b2a651404993E93Df7AE16C3C736F3C": {
      "chainId": "secret-4",
      "decimals": 6,
      "minimalDenom": "uscrt",
      "denom": "SCRT",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png"
    },
    "0x": {
      "chainId": "secret-4",
      "decimals": 8,
      "minimalDenom": "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
      "denom": "SHD",
      "imageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg"
    },
    "0x013AdDc6512432304c055CEc20bbb0f6AA5ed7d5": {
      "chainId": "pacific-1",
      "decimals": 6,
      "minimalDenom": "usei",
      "denom": "SEI"
    },
    "0xBe90556468e5eE2A15Da99a5C0e045ED0B142143": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
      "denom": "JitoSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jitosol.svg"
    },
    "0xDa7Fa7248F62e051ccA4Af2522439A61d3976462": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
      "denom": "mSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/mSOL.svg"
    },
    "0xc0732030f4DB63cfE0323dd87b497AE4Ecb43CEc": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
      "denom": "bSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/bSOL.svg"
    },
    "0x247dB9746755CF119d3AD68A6f8f60E7E650BFa1": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp",
      "denom": "LST",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/LST.svg"
    },
    "0x3d078B97918eDe947aF59E679eceF9fd87C32082": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt",
      "denom": "edgeSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/edgesol.svg"
    },
    "0x5cD8cd3c5e8780cCBc74277f22b099FEFd04F5ef": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v",
      "denom": "jupSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jupsol.svg"
    },
    "0x963b37d30eee26d0D94C1E5a42Aa5B1371494cA2": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A",
      "denom": "hSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/hSOL.svg"
    },
    "0xd1D82d3Ab815E0B47e38EC2d666c5b8AA05Ae501": {
      "chainId": "solana",
      "decimals": 9,
      "minimalDenom": "So11111111111111111111111111111111111111112",
      "denom": "wSOL",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wSOL.svg"
    },
    "0xCF7e6742266aD5a76ee042e26d3F766c34195E5f": {
      "chainId": "solana",
      "decimals": 6,
      "minimalDenom": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
      "denom": "WIF",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/WIF.svg"
    },
    "0x4aeF9BD3fBb09d8f374436D9ec25711A1Be9BaCb": {
      "chainId": "solana",
      "decimals": 5,
      "minimalDenom": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
      "denom": "BONK",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BONK.svg"
    },
    "0x58efE15C0404aB22F87E4495D71f6f2077e862bE": {
      "chainId": "solana",
      "decimals": 6,
      "minimalDenom": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      "denom": "USDT Solana",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTsolana.svg"
    },
    "0x59e0499554Cdcdfa90CCd96532e5aD5883a2a956": {
      "chainId": "stargaze-1",
      "decimals": 6,
      "minimalDenom": "ustars",
      "denom": "STARS",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png"
    },
    "0x3f8Bb8634Ca4A61Aa23cd0DF00C3152E0eaF9587": {
      "chainId": "stride-1",
      "decimals": 6,
      "minimalDenom": "ustrd",
      "denom": "STRD",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png"
    },
    "0xA534115DA1C1e51Cb2C6E8bC1fBA23A5189a1de2": {
      "chainId": "stride-1",
      "decimals": 6,
      "minimalDenom": "stuatom",
      "denom": "stATOM",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuatom.png"
    },
    "0xbb63a9b64a80e9338b8ea298c51765e57c4f159c": {
      "chainId": "centauri-1",
      "decimals": 12,
      "minimalDenom": "ppica",
      "denom": "PICA",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg"
    },
    "0x21c2c96Dbfa137E23946143c71AC8330F9B44001": {
      "chainId": "2019",
      "decimals": 10,
      "denom": "DOT",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/DOT.svg"
    },
    "0xB44D6C324A6c15127F1451465f1E1DbC39142A60": {
      "chainId": "polkadot",
      "decimals": 12,
      "denom": "KSM",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/KSM.svg"
    }
  },
  "dotsama": {
    "1": {
      "chainId": "centauri-1",
      "decimals": 12,
      "minimalDenom": "ppica",
      "denom": "PICA",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg"
    },
    "4": {
      "chainId": "polkadot",
      "decimals": 12,
      "denom": "KSM",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/KSM.svg"
    },
    "18": {
      "chainId": "agoric-3",
      "decimals": 6,
      "minimalDenom": "ubld",
      "denom": "BLD",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png"
    },
    "23": {
      "chainId": "2023",
      "decimals": 18,
      "denom": "MOVR",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/MOVR.svg"
    },
    "25": {
      "chainId": "agoric-3",
      "decimals": 6,
      "minimalDenom": "uist",
      "denom": "IST",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png"
    },
    "31": {
      "chainId": "2001",
      "decimals": 12,
      "denom": "BNC_KSM",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BNC_KSM.svg"
    },
    "32": {
      "chainId": "2001",
      "decimals": 12,
      "denom": "vKSM",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/vKSM.svg"
    },
    "35": {
      "chainId": "pacific-1",
      "decimals": 6,
      "minimalDenom": "usei",
      "denom": "SEI"
    },
    "130": {
      "chainId": "1000",
      "decimals": 6,
      "denom": "USDT Kusama",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTkusama.svg"
    },
    "2007": {
      "chainId": "2007",
      "decimals": 18,
      "denom": "SDN",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/SDN.svg"
    },
    "2125": {
      "chainId": "2125",
      "decimals": 12,
      "denom": "TNKR",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/TNKR.svg"
    },
    "79228162514264337593543950354": {
      "chainId": "agoric-3",
      "decimals": 6,
      "minimalDenom": "ubld",
      "denom": "BLD",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png"
    },
    "79228162514264337593543950361": {
      "chainId": "agoric-3",
      "decimals": 6,
      "minimalDenom": "uist",
      "denom": "IST",
      "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png"
    },
    "79228162514264337593543952342": {
      "chainId": "2019",
      "decimals": 18,
      "denom": "ASTR",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ASTR.svg"
    },
    "79228162514264337593543950342": {
      "chainId": "2019",
      "decimals": 10,
      "denom": "DOT",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/DOT.svg"
    },
    "79228162514264337593543950369": {
      "chainId": "2030",
      "decimals": 12,
      "denom": "BNC_DOT",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BNC_DOT.svg"
    },
    "79228162514264337593543950370": {
      "chainId": "2030",
      "decimals": 10,
      "denom": "vDOT",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/vDOT.svg"
    },
    "79228162514264337593543950376": {
      "chainId": "2004",
      "decimals": 18,
      "denom": "GLMR",
      "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/GLMR.svg"
    }
  }
} as const;

export default crossChainAssets;
