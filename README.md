# picasso-sdk
Picasso IBC sdk for cosmos, ethereum, solana, and polkadot

# How to use indexer 

## 1. Transaction with direct channel 
* You can query indexer API with txHash 
https://204.48.25.128/api/ibc_events?txHash=0F3DFE07428C1D600964B5FA9BF91A72EEEED0AFB628532864998B58F97B66A7

## 2. PFM Transaction via Picasso(Cosmos) 
* query by next hop's information 

[First hop] Composable -> Picasso (kusama)
https://204.48.25.128/api/ibc_events?fromBlockHash=0x2cfdd9d31db4c1c5b643c7b8a82cdf7e65fcd4b711fa2745e67ee448a69980db&sequence=4823

response: 
```
{
  ..., 
  toBlockHash : "0xde232ee07fb9d6c36f4f3c04ae3dca1be02890f4f2cbe369d730c25a2083e831",
  nextSequence : "21892"
}
```

[Second hop] Picasso (kusama) -> Picasso(Cosmos)
https://204.48.25.128/api/ibc_events?fromBlockHash=0xde232ee07fb9d6c36f4f3c04ae3dca1be02890f4f2cbe369d730c25a2083e831&sequence=21892

response: 
```
{
  ..., 
  toBlockHash : "C209A7397B3A0C139F5959C48035224AB7048718920CED667AB84DCFEF7FE4F4",
  nextSequence : "null" // query until nextSequence is null 
}
```
