export interface CrosschainAsset {
    chainId: string;
    decimals: number;
    minimalDenom: string;
    denom: string;
    realDecimals?: number;
}
declare const crossChainAssets: {
    readonly cosmos: {
        readonly [x: string]: {
            readonly chainId: "centauri-1";
            readonly decimals: 12;
            readonly minimalDenom: "ppica";
            readonly denom: "PICA";
        } | {
            readonly chainId: "chihuahua-1";
            readonly decimals: 6;
            readonly minimalDenom: "uhuahua";
            readonly denom: "HUAHUA";
        } | {
            readonly chainId: "osmosis-1";
            readonly decimals: 6;
            readonly minimalDenom: "uosmo";
            readonly denom: "OSMO";
        } | {
            readonly chainId: "stride-1";
            readonly decimals: 6;
            readonly minimalDenom: "stutia";
            readonly denom: "stTIA";
        } | {
            readonly chainId: "osmosis-1";
            readonly decimals: 6;
            readonly minimalDenom: "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA";
            readonly denom: "milkTIA";
        } | {
            readonly chainId: "neutron-1";
            readonly decimals: 6;
            readonly minimalDenom: "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro";
            readonly denom: "ASTRO";
        } | {
            readonly chainId: "coreum-mainnet-1";
            readonly decimals: 6;
            readonly minimalDenom: "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz";
            readonly denom: "XRP";
        } | {
            readonly chainId: "cosmoshub-4";
            readonly decimals: 6;
            readonly minimalDenom: "uatom";
            readonly denom: "ATOM";
        } | {
            readonly chainId: "stride-1";
            readonly decimals: 6;
            readonly minimalDenom: "ustrd";
            readonly denom: "STRD";
        } | {
            readonly chainId: "stride-1";
            readonly decimals: 6;
            readonly minimalDenom: "stuatom";
            readonly denom: "stATOM";
        } | {
            readonly chainId: "stargaze-1";
            readonly decimals: 6;
            readonly minimalDenom: "ustars";
            readonly denom: "STARS";
        } | {
            readonly chainId: "crescent-1";
            readonly decimals: 6;
            readonly minimalDenom: "ucre";
            readonly denom: "CRE";
        } | {
            readonly chainId: "secret-4";
            readonly decimals: 6;
            readonly minimalDenom: "uscrt";
            readonly denom: "SCRT";
        } | {
            readonly chainId: "neutron-1";
            readonly decimals: 6;
            readonly minimalDenom: "untrn";
            readonly denom: "NTRN";
        } | {
            readonly chainId: "umee-1";
            readonly decimals: 6;
            readonly minimalDenom: "uumee";
            readonly denom: "UMEE";
        } | {
            readonly chainId: "agoric-3";
            readonly decimals: 6;
            readonly minimalDenom: "ubld";
            readonly denom: "BLD";
        } | {
            readonly chainId: "crescent-1";
            readonly decimals: 6;
            readonly minimalDenom: "ubcre";
            readonly denom: "bCRE";
        } | {
            readonly chainId: "agoric-3";
            readonly decimals: 6;
            readonly minimalDenom: "uist";
            readonly denom: "IST";
        } | {
            readonly chainId: "pacific-1";
            readonly decimals: 6;
            readonly minimalDenom: "usei";
            readonly denom: "SEI";
        } | {
            readonly chainId: "celestia";
            readonly decimals: 6;
            readonly minimalDenom: "utia";
            readonly denom: "TIA";
        } | {
            readonly chainId: "kaiyo-1";
            readonly decimals: 6;
            readonly minimalDenom: "ukuji";
            readonly denom: "KUJI";
        } | {
            readonly chainId: "quicksilver-2";
            readonly decimals: 6;
            readonly minimalDenom: "uqck";
            readonly denom: "QCK";
        } | {
            readonly chainId: "injective-1";
            readonly decimals: 18;
            readonly minimalDenom: "inj";
            readonly denom: "INJ";
        } | {
            readonly chainId: "coreum-mainnet-1";
            readonly decimals: 6;
            readonly minimalDenom: "ucore";
            readonly denom: "COREUM";
        } | {
            readonly chainId: "archway-1";
            readonly decimals: 18;
            readonly minimalDenom: "aarch";
            readonly denom: "ARCH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "DAI";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: "wei";
            readonly denom: "ETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "FXS";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "sFRAX";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "sfrxETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "ENA";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "FRAX";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "frxETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 8;
            readonly minimalDenom: string;
            readonly denom: "wBTC";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "stETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "rETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "crvUSD";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "pxETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "eETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "ezETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "USDe";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "PEPE";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: string;
            readonly denom: "USDT Ethereum";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "CRV";
        } | {
            readonly chainId: "solana";
            readonly denom: "wSOL";
            readonly minimalDenom: "So11111111111111111111111111111111111111112";
            readonly decimals: 9;
        } | {
            readonly chainId: "solana";
            readonly denom: "USDT Solana";
            readonly minimalDenom: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB";
            readonly decimals: 6;
        } | {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm";
            readonly denom: "WIF";
        } | {
            readonly chainId: "solana";
            readonly decimals: 5;
            readonly minimalDenom: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263";
            readonly denom: "BONK";
        } | {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump";
            readonly denom: "WHINE";
        };
        readonly ppica: {
            readonly chainId: "centauri-1";
            readonly decimals: 12;
            readonly minimalDenom: "ppica";
            readonly denom: "PICA";
        };
        readonly uhuahua: {
            readonly chainId: "chihuahua-1";
            readonly decimals: 6;
            readonly minimalDenom: "uhuahua";
            readonly denom: "HUAHUA";
        };
        readonly uosmo: {
            readonly chainId: "osmosis-1";
            readonly decimals: 6;
            readonly minimalDenom: "uosmo";
            readonly denom: "OSMO";
        };
        readonly stutia: {
            readonly chainId: "stride-1";
            readonly decimals: 6;
            readonly minimalDenom: "stutia";
            readonly denom: "stTIA";
        };
        readonly 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA': {
            readonly chainId: "osmosis-1";
            readonly decimals: 6;
            readonly minimalDenom: "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA";
            readonly denom: "milkTIA";
        };
        readonly 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro': {
            readonly chainId: "neutron-1";
            readonly decimals: 6;
            readonly minimalDenom: "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro";
            readonly denom: "ASTRO";
        };
        readonly 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz': {
            readonly chainId: "coreum-mainnet-1";
            readonly decimals: 6;
            readonly minimalDenom: "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz";
            readonly denom: "XRP";
        };
        readonly uatom: {
            readonly chainId: "cosmoshub-4";
            readonly decimals: 6;
            readonly minimalDenom: "uatom";
            readonly denom: "ATOM";
        };
        readonly ustrd: {
            readonly chainId: "stride-1";
            readonly decimals: 6;
            readonly minimalDenom: "ustrd";
            readonly denom: "STRD";
        };
        readonly stuatom: {
            readonly chainId: "stride-1";
            readonly decimals: 6;
            readonly minimalDenom: "stuatom";
            readonly denom: "stATOM";
        };
        readonly ustars: {
            readonly chainId: "stargaze-1";
            readonly decimals: 6;
            readonly minimalDenom: "ustars";
            readonly denom: "STARS";
        };
        readonly ucre: {
            readonly chainId: "crescent-1";
            readonly decimals: 6;
            readonly minimalDenom: "ucre";
            readonly denom: "CRE";
        };
        readonly uscrt: {
            readonly chainId: "secret-4";
            readonly decimals: 6;
            readonly minimalDenom: "uscrt";
            readonly denom: "SCRT";
        };
        readonly untrn: {
            readonly chainId: "neutron-1";
            readonly decimals: 6;
            readonly minimalDenom: "untrn";
            readonly denom: "NTRN";
        };
        readonly uumee: {
            readonly chainId: "umee-1";
            readonly decimals: 6;
            readonly minimalDenom: "uumee";
            readonly denom: "UMEE";
        };
        readonly ubld: {
            readonly chainId: "agoric-3";
            readonly decimals: 6;
            readonly minimalDenom: "ubld";
            readonly denom: "BLD";
        };
        readonly ubcre: {
            readonly chainId: "crescent-1";
            readonly decimals: 6;
            readonly minimalDenom: "ubcre";
            readonly denom: "bCRE";
        };
        readonly uist: {
            readonly chainId: "agoric-3";
            readonly decimals: 6;
            readonly minimalDenom: "uist";
            readonly denom: "IST";
        };
        readonly usei: {
            readonly chainId: "pacific-1";
            readonly decimals: 6;
            readonly minimalDenom: "usei";
            readonly denom: "SEI";
        };
        readonly utia: {
            readonly chainId: "celestia";
            readonly decimals: 6;
            readonly minimalDenom: "utia";
            readonly denom: "TIA";
        };
        readonly ukuji: {
            readonly chainId: "kaiyo-1";
            readonly decimals: 6;
            readonly minimalDenom: "ukuji";
            readonly denom: "KUJI";
        };
        readonly uqck: {
            readonly chainId: "quicksilver-2";
            readonly decimals: 6;
            readonly minimalDenom: "uqck";
            readonly denom: "QCK";
        };
        readonly inj: {
            readonly chainId: "injective-1";
            readonly decimals: 18;
            readonly minimalDenom: "inj";
            readonly denom: "INJ";
        };
        readonly ucore: {
            readonly chainId: "coreum-mainnet-1";
            readonly decimals: 6;
            readonly minimalDenom: "ucore";
            readonly denom: "COREUM";
        };
        readonly aarch: {
            readonly chainId: "archway-1";
            readonly decimals: 18;
            readonly minimalDenom: "aarch";
            readonly denom: "ARCH";
        };
        readonly wei: {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: "wei";
            readonly denom: "ETH";
        };
        readonly So11111111111111111111111111111111111111112: {
            readonly chainId: "solana";
            readonly denom: "wSOL";
            readonly minimalDenom: "So11111111111111111111111111111111111111112";
            readonly decimals: 9;
        };
        readonly Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
            readonly chainId: "solana";
            readonly denom: "USDT Solana";
            readonly minimalDenom: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB";
            readonly decimals: 6;
        };
        readonly EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm";
            readonly denom: "WIF";
        };
        readonly DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263: {
            readonly chainId: "solana";
            readonly decimals: 5;
            readonly minimalDenom: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263";
            readonly denom: "BONK";
        };
        readonly ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump";
            readonly denom: "WHINE";
        };
    };
    readonly dotsama: {
        readonly '1': {
            readonly chainId: "2087";
            readonly denom: "PICA";
            readonly minimalDenom: "ppica";
            readonly decimals: 12;
        };
        readonly '4': {
            readonly chainId: "2087";
            readonly minimalDenom: "uKSM";
            readonly denom: "KSM";
            readonly decimals: 12;
        };
        readonly '44': {
            readonly chainId: "2124";
            readonly minimalDenom: "AMPE";
            readonly denom: "AMPE";
            readonly decimals: 12;
        };
        readonly '45': {
            readonly chainId: "2124";
            readonly minimalDenom: "XLM";
            readonly denom: "XLM";
            readonly decimals: 12;
        };
        readonly '18': {
            readonly chainId: "2087";
            readonly decimals: 6;
            readonly minimalDenom: "uBLD";
            readonly denom: "BLD";
        };
        readonly '20': {
            readonly chainId: "2087";
            readonly minimalDenom: "ulsKSM";
            readonly denom: "Liquid Staked Kusama";
            readonly decimals: 12;
        };
        readonly '23': {
            readonly chainId: "2023";
            readonly decimals: 18;
            readonly minimalDenom: "uMOVR";
            readonly denom: "MOVR";
        };
        readonly '25': {
            readonly chainId: "2087";
            readonly minimalDenom: "uIST";
            readonly denom: "IST";
            readonly decimals: 6;
        };
        readonly '31': {
            readonly chainId: "2001";
            readonly denom: "BNC_KSM";
            readonly minimalDenom: "uBNC_KSM";
            readonly decimals: 12;
        };
        readonly '32': {
            readonly chainId: "2001";
            readonly denom: "vKSM";
            readonly minimalDenom: "uvksm";
            readonly decimals: 12;
        };
        readonly '35': {
            readonly chainId: "pacific-1";
            readonly denom: "SEI";
            readonly minimalDenom: "uSEI";
            readonly decimals: 6;
        };
        readonly '40': {
            readonly chainId: "2023";
            readonly decimals: 18;
            readonly minimalDenom: "uGLMR";
            readonly denom: "GLMR";
        };
        readonly '130': {
            readonly chainId: "2087";
            readonly decimals: 6;
            readonly minimalDenom: "uUSDT Kusama";
            readonly denom: "USDT Kusama";
        };
        readonly '149': {
            readonly chainId: "2087";
            readonly decimals: 6;
            readonly minimalDenom: "uUSDT Polkadot";
            readonly denom: "USDT Polkadot";
        };
        readonly '2006': {
            readonly chainId: "2006";
            readonly decimals: 18;
            readonly minimalDenom: "uASTR";
            readonly denom: "ASTR";
        };
        readonly '2007': {
            readonly chainId: "2007";
            readonly decimals: 18;
            readonly minimalDenom: "uSDN";
            readonly denom: "SDN";
        };
        readonly '2125': {
            readonly chainId: "2125";
            readonly decimals: 12;
            readonly minimalDenom: "uTNKR";
            readonly denom: "TNKR";
        };
        readonly '167283': {
            readonly chainId: "2023";
            readonly decimals: 18;
            readonly minimalDenom: "uMOVR";
            readonly denom: "MOVR";
        };
        readonly '792281': {
            readonly chainId: "2023";
            readonly decimals: 18;
            readonly minimalDenom: "uGLMR";
            readonly denom: "GLMR";
        };
        readonly '79228162514264337593543950342': {
            readonly chainId: "2019";
            readonly decimals: 10;
            readonly minimalDenom: "uDOT";
            readonly denom: "DOT";
        };
        readonly '79228162514264337593543950351': {
            readonly chainId: "2019";
            readonly decimals: 10;
            readonly minimalDenom: "ulsDOT";
            readonly denom: "lsDOT";
        };
        readonly '79228162514264337593543950354': {
            readonly chainId: "2019";
            readonly decimals: 6;
            readonly minimalDenom: "uBLD";
            readonly denom: "BLD";
        };
        readonly '79228162514264337593543950361': {
            readonly chainId: "2019";
            readonly decimals: 6;
            readonly minimalDenom: "uIST";
            readonly denom: "IST";
        };
        readonly '79228162514264337593543950369': {
            readonly chainId: "2019";
            readonly decimals: 12;
            readonly minimalDenom: "uBNC_DOT";
            readonly denom: "BNC_DOT";
        };
        readonly '79228162514264337593543950370': {
            readonly chainId: "2019";
            readonly decimals: 10;
            readonly minimalDenom: "uvdot";
            readonly denom: "vDOT";
        };
        readonly '79228162514264337593543950376': {
            readonly chainId: "2023";
            readonly decimals: 18;
            readonly minimalDenom: "uGLMR";
            readonly denom: "GLMR";
        };
        readonly '79228162514264337593543952342': {
            readonly chainId: "2006";
            readonly decimals: 18;
            readonly minimalDenom: "uASTR";
            readonly denom: "ASTR";
        };
    };
    readonly solana: {
        readonly SOL: {
            readonly chainId: "solana";
            readonly denom: "SOL";
            readonly minimalDenom: "SOL";
            readonly decimals: 9;
            readonly realDecimals: 9;
        };
        readonly J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly realDecimals: 9;
            readonly minimalDenom: "JitoSOL";
            readonly denom: "JitoSOL";
        };
        readonly mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly realDecimals: 9;
            readonly minimalDenom: "mSOL";
            readonly denom: "mSOL";
        };
        readonly ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly realDecimals: 6;
            readonly minimalDenom: "WHINE";
            readonly denom: "WHINE";
        };
        readonly HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly realDecimals: 9;
            readonly minimalDenom: "hausSOL";
            readonly denom: "hausSOL";
        };
        readonly bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly realDecimals: 9;
            readonly minimalDenom: "bSOL";
            readonly denom: "bSOL";
        };
        readonly LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly realDecimals: 9;
            readonly minimalDenom: "LST";
            readonly denom: "LST";
        };
        readonly BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "BLZE";
            readonly denom: "BLZE";
        };
        readonly edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "edgeSOL";
            readonly denom: "edgeSOL";
        };
        readonly '5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV': {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "cSOL";
            readonly denom: "cSOL";
        };
        readonly '3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h': {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "cmSOL";
            readonly denom: "cmSOL";
        };
        readonly '6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM': {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "cJitoSOL";
            readonly denom: "cJitoSOL";
        };
        readonly FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "cbSOL";
            readonly denom: "cbSOL";
        };
        readonly Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "compassSOL";
            readonly denom: "compassSOL";
        };
        readonly jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "jupSOL";
            readonly denom: "jupSOL";
        };
        readonly he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "hSOL";
            readonly denom: "hSOL";
        };
        readonly So11111111111111111111111111111111111111112: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "wSOL";
            readonly denom: "wSOL";
        };
        readonly EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "WIF";
            readonly denom: "WIF";
        };
        readonly DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263: {
            readonly chainId: "solana";
            readonly decimals: 5;
            readonly minimalDenom: "BONK";
            readonly denom: "BONK";
        };
        readonly Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "USDT Solana";
            readonly denom: "USDT Solana";
        };
        readonly "6SYCn6Hj4X3XV6dzRk8vXa1UyZc4SBvAT7p3e1AcATAx": {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "DAI";
            readonly realDecimals: 18;
        };
        readonly EXZbXNMbdTbMYpr9J5MUDv29XnWfxLZYyCCtk2tCy7XV: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-52/wei";
            readonly denom: "ETH";
            readonly realDecimals: 18;
        };
        readonly EHzGKxauSbvLD5xfX4P9StBdQWmyroferGg9aR6oDU9v: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "USDT Ethereum";
        };
        readonly "4tjtYi8dCVkE539ANy3qUHhKdqkjzqhn2iW4WSZMfMa6": {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "CRV";
            readonly realDecimals: 18;
        };
        readonly GrkjmJt3KECe6Yi11LZxY88BJ69KyQnRtC6EioFAF1rD: {
            readonly chainId: "solana";
            readonly decimals: 8;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "wBTC";
        };
        readonly urez9EJo4YNdpQQxw6xrLfF1J3EqJSaVwPGHFNG338B: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "rETH";
            readonly realDecimals: 18;
        };
        readonly EuBHrXZJa6ZNg6dfhiotxRoHpVpMg6ZsgNc6ZKJ9iUe2: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "crvUSD";
            readonly realDecimals: 18;
        };
        readonly A9zVTbwXTwMA3WsYbB7mGKmDZp3UPfd64sjZfZQ8Lk49: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "FRAX";
            readonly realDecimals: 18;
        };
        readonly "6jnTywpWt1u6Jh65FTSgUVDxv7Kyfp3f1mwH426LXmB7": {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "FXS";
            readonly realDecimals: 18;
        };
        readonly Go2RiPCxrU3dWH7cs52pm2Q2R45HB2ACbYBZsx1vadZd: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "frxETH";
            readonly realDecimals: 18;
        };
        readonly E5Lz7Bi1KZD9VTYXsCZhkWDiztkNzPoX7Jk71xbTkEoA: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "sfrxETH";
            readonly realDecimals: 18;
        };
        readonly "3AvDivzbMjfin9hSVUBjdYerKroX8jQuNyDVebdRiULE": {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "sFRAX";
            readonly realDecimals: 18;
        };
        readonly B1cm3Wf5ZNUdgZ1eaXaNdiy9DCmQudfmspRMBb2TqDjb: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "pxETH";
            readonly realDecimals: 18;
        };
        readonly CqzASJJsEA1TDvjCahP9pa7wPjqFEdouup6g5eNV71uv: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "eETH";
            readonly realDecimals: 18;
        };
        readonly Aa34MLrb7GfT5uMXnpT9oKnj11gGcXMq61b5kBzTvbnW: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "ENA";
            readonly realDecimals: 18;
        };
        readonly GM4RuF5gLcytcq36wNJkX3UBYRKP9hQwJyyRWm6d6o47: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "USDe";
            readonly realDecimals: 18;
        };
        readonly uVYDrZeCeq5T5RBHZZWHfsG12SDCm4MPHX2h8iAcXRh: {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: `transfer/channel-1/transfer/channel-52/${string}`;
            readonly denom: "PEPE";
            readonly realDecimals: 18;
        };
        readonly "966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ": {
            readonly chainId: "solana";
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-1/ppica";
            readonly denom: "PICA";
            readonly realDecimals: 12;
        };
        readonly EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-3/uosmo";
            readonly denom: "OSMO";
        };
        readonly "9gjHXkUVtDEPfxXXT9Jj3ZbYbFzS4zN92ewsCH8zGUKc": {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-4/uatom";
            readonly denom: "ATOM";
        };
        readonly "8aHZdc7qrKAPMey7B6VHx3U3xWFBs7BZhdLAYqZBQwea": {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-5/stuatom";
            readonly denom: "stATOM";
        };
        readonly "3bHxPkuJwztJyrZW2T6sZe8GkRjN1BXgw3ViHPcrQdCj": {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-13/uist";
            readonly denom: "IST";
        };
        readonly BajH8K75CHJrmT1hf6QGHSyY5r5tbJYSHrCb7uDNCF5S: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-3/transfer/channel-782/usei";
            readonly denom: "SEI";
        };
        readonly "6bQZs6ZSaRoaYPsfLibM9ZhZa4Haj4xF5uFJ33Kduc3V": {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-14/uscrt";
            readonly denom: "SCRT";
        };
        readonly HYaNBn8TQCpy1ohJAQ8V8GaLsRFrkudszgQU8uQpWNvB: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-6/ustars";
            readonly denom: "STARS";
        };
        readonly BtHCXVdDCRqDvuTfmsLK5gcz3WbSBNY5DxpzSxqAcouU: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-13/ubld";
            readonly denom: "BLD";
        };
        readonly FjK5ms55rMZY42NUKnAayUjA8Q1nA2jhYwkHZUY7KwvE: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-5/ustrd";
            readonly denom: "STRD";
        };
        readonly "4Atqy7XYeHXLD2thRJtDtBaRassB2Ff4ksefhvzLKxDQ": {
            readonly chainId: "solana";
            readonly decimals: 8;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-26/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm";
            readonly denom: "SHD";
        };
        readonly Dcihw3DVQpxF7ri4fsdGaZWrwhtLgCvbkYHXWh1VdhQn: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-26/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd";
            readonly denom: "SILK";
        };
        readonly vbJ16tHqqVKvLq8rgWeGboJvSCoeFjSYYvH77czoT9J: {
            readonly chainId: "solana";
            readonly realDecimals: 10;
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-2/transfer/channel-15/79228162514264337593543950342";
            readonly denom: "DOT";
        };
        readonly "9m8kq5qhocfckRkRnhbAroPmR8zYaXugpyinpkpLnv12": {
            readonly chainId: "solana";
            readonly realDecimals: 12;
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-2/4";
            readonly denom: "KSM";
        };
        readonly BxZEQoVDwPT1dGTSnLw4Qvm17up2vvvP88PCSYTncgnk: {
            readonly chainId: "solana";
            readonly realDecimals: 18;
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-50/aarch";
            readonly denom: "ARCH";
        };
        readonly "4wQAZCwoJbBmxHNzg8bK7JqDr8x2YdrFfkBpmAdtuHyE": {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-56/ucore";
            readonly denom: "COREUM";
        };
        readonly DD4Ew6YcPCiJvb9ZQyAktRvgtckubPLTcHdbaK4nVKUW: {
            readonly chainId: "solana";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-1/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz";
            readonly denom: "XRP";
        };
    };
    readonly ethereum: {
        readonly [x: string]: {
            readonly chainId: "ethereum";
            readonly denom: "ETH";
            readonly minimalDenom: "ETH";
            readonly decimals: 18;
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 12;
            readonly minimalDenom: "transfer/channel-2/ppica";
            readonly denom: "PICA";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "DAI";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-3/uosmo";
            readonly denom: "OSMO";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "FXS";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "sFRAX";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "sfrxETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "ENA";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "FRAX";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "frxETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 8;
            readonly minimalDenom: string;
            readonly denom: "wBTC";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "stETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "rETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "crvUSD";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "pxETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "eETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: string;
            readonly denom: "SILK";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 8;
            readonly minimalDenom: string;
            readonly denom: "SHD";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "ezETH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "USDe";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "PEPE";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: string;
            readonly denom: "USDT Ethereum";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: string;
            readonly denom: "CRV";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-4/uatom";
            readonly denom: "ATOM";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-6/ustars";
            readonly denom: "STARS";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-13/uist";
            readonly denom: "IST";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-5/stuatom";
            readonly denom: "stATOM";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-13/ubld";
            readonly denom: "BLD";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-3/transfer/channel-782/usei";
            readonly denom: "SEI";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 18;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-50/aarch";
            readonly denom: "ARCH";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-14/uscrt";
            readonly denom: "SCRT";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-5/ustrd";
            readonly denom: "STRD";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 10;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-2/transfer/channel-15/79228162514264337593543950342";
            readonly denom: "DOT";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 12;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-2/4";
            readonly denom: "KSM";
        } | {
            readonly chainId: "ethereum";
            readonly denom: "SOL";
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/So11111111111111111111111111111111111111112";
            readonly decimals: 9;
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn";
            readonly denom: "JitoSOL";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So";
            readonly denom: "mSOL";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1";
            readonly denom: "bSOL";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp";
            readonly denom: "LST";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt";
            readonly denom: "edgeSOL";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v";
            readonly denom: "jupSOL";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A";
            readonly denom: "hSOL";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 9;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/So11111111111111111111111111111111111111112";
            readonly denom: "wSOL";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm";
            readonly denom: "WIF";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 5;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263";
            readonly denom: "BONK";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-71/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB";
            readonly denom: "USDT Solana";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-56/ucore";
            readonly denom: "COREUM";
        } | {
            readonly chainId: "ethereum";
            readonly decimals: 6;
            readonly minimalDenom: "transfer/channel-2/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz";
            readonly denom: "XRP";
        };
        readonly ETH: {
            readonly chainId: "ethereum";
            readonly denom: "ETH";
            readonly minimalDenom: "ETH";
            readonly decimals: 18;
        };
    };
};
export default crossChainAssets;
//# sourceMappingURL=crossChainAssets.d.ts.map