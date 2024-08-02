"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [FAST TRACK] Add info for assets on solana network here
var solanaAssets = {
    "BLD": {
        "mintAddress": "BtHCXVdDCRqDvuTfmsLK5gcz3WbSBNY5DxpzSxqAcouU",
        "minimumTransfer": 200
    },
    "IST": {
        "mintAddress": "3bHxPkuJwztJyrZW2T6sZe8GkRjN1BXgw3ViHPcrQdCj",
        "minimumTransfer": 20
    },
    "ARCH": {
        "mintAddress": "BxZEQoVDwPT1dGTSnLw4Qvm17up2vvvP88PCSYTncgnk",
        "minimumTransfer": 240
    },
    "XRP": {
        "mintAddress": "DD4Ew6YcPCiJvb9ZQyAktRvgtckubPLTcHdbaK4nVKUW",
        "minimumTransfer": 0
    },
    "ATOM": {
        "mintAddress": "9gjHXkUVtDEPfxXXT9Jj3ZbYbFzS4zN92ewsCH8zGUKc",
        "minimumTransfer": 2
    },
    "ASTRO": {
        "mintAddress": "8knH1Z4kY6WaHRMZHMxe76d2Ar3kHhjz33t1eZRJSyET",
        "minimumTransfer": 0
    },
    "OSMO": {
        "mintAddress": "EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM",
        "minimumTransfer": 20
    },
    "SCRT": {
        "mintAddress": "6bQZs6ZSaRoaYPsfLibM9ZhZa4Haj4xF5uFJ33Kduc3V",
        "minimumTransfer": 50
    },
    "SILK": {
        "mintAddress": "Dcihw3DVQpxF7ri4fsdGaZWrwhtLgCvbkYHXWh1VdhQn",
        "minimumTransfer": 20
    },
    "SHD": {
        "mintAddress": "4Atqy7XYeHXLD2thRJtDtBaRassB2Ff4ksefhvzLKxDQ",
        "minimumTransfer": 5
    },
    "SEI": {
        "mintAddress": "BajH8K75CHJrmT1hf6QGHSyY5r5tbJYSHrCb7uDNCF5S",
        "minimumTransfer": 30
    },
    "SOL": {
        "mintAddress": "SOL",
        "minimumTransfer": 0.2
    },
    "JitoSOL": {
        "mintAddress": "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
        "minimumTransfer": 0.2
    },
    "mSOL": {
        "mintAddress": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
        "minimumTransfer": 0.2
    },
    "WHINE": {
        "mintAddress": "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump",
        "minimumTransfer": 10
    },
    "hausSOL": {
        "mintAddress": "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj",
        "minimumTransfer": 0.2
    },
    "bSOL": {
        "mintAddress": "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
        "minimumTransfer": 0.2
    },
    "LST": {
        "mintAddress": "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp",
        "minimumTransfer": 0.2
    },
    "BLZE": {
        "mintAddress": "BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA",
        "minimumTransfer": 0
    },
    "edgeSOL": {
        "mintAddress": "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt",
        "minimumTransfer": 0.2
    },
    "cSOL": {
        "mintAddress": "5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV",
        "minimumTransfer": 0
    },
    "cmSOL": {
        "mintAddress": "3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h",
        "minimumTransfer": 0
    },
    "cJitoSOL": {
        "mintAddress": "6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM",
        "minimumTransfer": 0
    },
    "cbSOL": {
        "mintAddress": "FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt",
        "minimumTransfer": 0
    },
    "compassSOL": {
        "mintAddress": "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h",
        "minimumTransfer": 0
    },
    "jupSOL": {
        "mintAddress": "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v",
        "minimumTransfer": 0.2
    },
    "hSOL": {
        "mintAddress": "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A",
        "minimumTransfer": 0.2
    },
    "wSOL": {
        "mintAddress": "So11111111111111111111111111111111111111112",
        "minimumTransfer": 0.2
    },
    "WIF": {
        "mintAddress": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
        "minimumTransfer": 9
    },
    "BONK": {
        "mintAddress": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        "minimumTransfer": 1200000
    },
    "USDT Solana": {
        "mintAddress": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        "minimumTransfer": 30
    },
    "STARS": {
        "mintAddress": "HYaNBn8TQCpy1ohJAQ8V8GaLsRFrkudszgQU8uQpWNvB",
        "minimumTransfer": 990
    },
    "STRD": {
        "mintAddress": "FjK5ms55rMZY42NUKnAayUjA8Q1nA2jhYwkHZUY7KwvE",
        "minimumTransfer": 11
    },
    "stATOM": {
        "mintAddress": "8aHZdc7qrKAPMey7B6VHx3U3xWFBs7BZhdLAYqZBQwea",
        "minimumTransfer": 2
    },
    "PICA": {
        "mintAddress": "966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ",
        "minimumTransfer": 4000
    },
    "DOT": {
        "mintAddress": "vbJ16tHqqVKvLq8rgWeGboJvSCoeFjSYYvH77czoT9J",
        "minimumTransfer": 3
    },
    "KSM": {
        "mintAddress": "9m8kq5qhocfckRkRnhbAroPmR8zYaXugpyinpkpLnv12",
        "minimumTransfer": 0.7
    }
};
exports.default = solanaAssets;
