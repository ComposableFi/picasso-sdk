export const TINKERNET = {
  enabled: true,
  handler: 'POLKADOT',
  config: {
    endpoint: ['wss://tinkernet-rpc.dwellir.com'],
    chain_type: 'PARA_CHAIN',
    chainId: 'tinkernet',
    dotChainId: '2125',
    assetId: '2125',
    ss58_format: 117,
    name: 'Tinkernet',
  },
  hops: {
    PICASSO: {
      type: 'XCM',
      xcmType: 'xTokens.transfer',
      version: 'V2',
      tokens: ['2125'], // ['BNC_KSM', 'vKSM'],
    },
  },
};
