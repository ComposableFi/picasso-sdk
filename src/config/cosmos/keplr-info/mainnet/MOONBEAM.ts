export const MOONBEAM = {
  enabled: true,
  handler: 'POLKADOT',
  config: {
    endpoint: ['wss://wss.api.moonbeam.network'],
    chain_type: 'PARA_CHAIN',
    chainId: 'moonbeam',
    dotChainId: '2004',
    assetId: '79228162514264337593543950376',
    ss58_format: 0,
    name: 'Moonbeam',

    general_index: '204507659831918931608354793288110796652', // usdt id in statemine
  },
  hops: {
    COMPOSABLE: {
      type: 'XCM',
      xcmType: 'polkadotXcm.limitedReserveTransferAssets',
      version: 'V2',
      tokens: ['79228162514264337593543950376'],
    },
  },
};
