
// [FAST TRACK] Add asset here to enable transferring from one network to another
const tokensPerChannel = {
  "agoric-3": {
    "55": {
      "chainId": "centauri-1",
      "destinationId": 13,
      "tokens": [
        "BLD",
        "IST"
      ]
    }
  },
  "archway-1": {
    "108": {
      "chainId": "centauri-1",
      "destinationId": 50,
      "tokens": [
        "ARCH"
      ]
    }
  },
  "celestia": {
    "12": {
      "chainId": "centauri-1",
      "destinationId": 38,
      "tokens": [
        "TIA"
      ]
    }
  },
  "chihuahua-1": {
    "62": {
      "chainId": "centauri-1",
      "destinationId": 0,
      "tokens": [
        "UHUAHUA"
      ]
    }
  },
  "coreum-mainnet-1": {
    "31": {
      "chainId": "centauri-1",
      "destinationId": 56,
      "tokens": [
        "COREUM",
        "XRP"
      ]
    }
  },
  "cosmoshub-4": {
    "617": {
      "chainId": "centauri-1",
      "destinationId": 4,
      "tokens": [
        "ATOM"
      ]
    }
  },
  "crescent-1": {
    "64": {
      "chainId": "centauri-1",
      "destinationId": 11,
      "tokens": [
        "CRE",
        "BCRE",
        "UCRE"
      ]
    }
  },
  "ethereum": {
    "2": {
      "chainId": "centauri-1",
      "destinationId": 52,
      "tokens": [
        "PICA",
        "ETH",
        "DAI",
        "FXS",
        "sFRAX",
        "sfrxETH",
        "OSMO",
        "ENA",
        "FRAX",
        "frxETH",
        "wBTC",
        "pxETH",
        "PEPE",
        "CRV",
        "rETH",
        "crvUSD",
        "eETH",
        "USDe",
        "USDT Ethereum",
        "stETH",
        "ATOM",
        "IST",
        "stATOM",
        "BLD",
        "SEI",
        "SCRT",
        "STRD"
      ]
    }
  },
  "injective-1": {
    "145": {
      "chainId": "centauri-1",
      "destinationId": 29,
      "tokens": [
        "INJ"
      ]
    }
  },
  "kaiyo-1": {
    "101": {
      "chainId": "centauri-1",
      "destinationId": 27,
      "tokens": [
        "KUJI"
      ]
    }
  },
  "neutron-1": {
    "17": {
      "chainId": "centauri-1",
      "destinationId": 18,
      "tokens": [
        "NTRN"
      ]
    }
  },
  "osmosis-1": {
    "782": {
      "chainId": "pacific-1",
      "destinationId": 0
    },
    "1279": {
      "chainId": "centauri-1",
      "destinationId": 3,
      "tokens": [
        "UOSMO",
        "USEI"
      ]
    }
  },
  "quicksilver-2": {
    "94": {
      "chainId": "centauri-1",
      "destinationId": 9,
      "tokens": [
        "QCK"
      ]
    }
  },
  "secret-4": {
    "80": {
      "chainId": "centauri-1",
      "destinationId": 14,
      "tokens": [
        "SCRT",
        "SILK",
        "SHD"
      ]
    }
  },
  "pacific-1": {
    "0": {
      "chainId": "osmosis-1",
      "destinationId": 782,
      "tokens": [
        "UOSMO",
        "USEI"
      ]
    }
  },
  "solana": {
    "1": {
      "chainId": "centauri-1",
      "destinationId": 71,
      "tokens": [
        "PICA",
        "OSMO",
        "SOL",
        "ETH",
        "wSOL",
        "WHINE",
        "LST",
        "bSOL",
        "JitoSOL",
        "edgeSOL",
        "hSOL",
        "jupSOL",
        "mSOL",
        "BONK",
        "WIF",
        "USDT Solana",
        "DAI",
        "USDT Ethereum",
        "CRV",
        "wBTC",
        "rETH",
        "crvUSD",
        "FRAX",
        "FXS",
        "frxETH",
        "sfrxETH",
        "sFRAX",
        "pxETH",
        "eETH",
        "ENA",
        "USDe",
        "PEPE",
        "ATOM",
        "stATOM",
        "IST",
        "SEI",
        "SCRT",
        "STARS",
        "BLD",
        "STRD",
        "SHD",
        "SILK",
        "DOT",
        "KSM",
        "XRP",
        "COREUM",
        "ASTRO"
      ]
    }
  },
  "stargaze-1": {
    "184": {
      "chainId": "centauri-1",
      "destinationId": 6,
      "tokens": [
        "STARS"
      ]
    }
  },
  "stride-1": {
    "134": {
      "chainId": "centauri-1",
      "destinationId": 5,
      "tokens": [
        "STRD",
        "stATOM"
      ]
    }
  },
  "umee-1": {
    "99": {
      "chainId": "centauri-1",
      "destinationId": 20,
      "tokens": [
        "UMEE"
      ]
    }
  }
} as const;

export default tokensPerChannel;
