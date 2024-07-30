export const STATEMINT = {
  enabled: true,
  handler: 'POLKADOT',
  config: {
    endpoint: [
      'wss://rpc-asset-hub-polkadot.luckyfriday.io',
      'wss://statemint-rpc.dwellir.com',
    ],
    chain_type: 'PARA_CHAIN',
    chainId: 'statemint',
    dotChainId: '1000',
    assetId: '6',
    ss58_format: 0,
    name: 'Polkadot Asset Hub',

    general_index: '1984', // usdt id in statemine
  },
  hops: {
    COMPOSABLE: {
      type: 'XCM',
      xcmType: 'polkadotXcm.limitedReserveTransferAssets',
      version: 'V2',
      tokens: ['149'], // ['BNC_KSM', 'vKSM'],
    },
  },
};
