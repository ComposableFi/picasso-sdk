import { ExplorerType } from '../chains/common/types';

export { type ChainInfo } from '@keplr-wallet/types';

export interface CrosschainAsset {
  chainId: string;
  decimals: number;
  minimalDenom: string;
  denom: string;
  imageUrl?: string;
  codeHash?: string;
  realDecimals?: number; // only used at solana, because it is restricted not to use more than 9
  ratio?: { n: string; d: string };
  currentChainId?: string; // current network.
}

export interface EthereumAsset {
  erc20Address: string;
  cosmosToEthereumFee: number;
  minimumTransfer: number;
}

export interface SolanaAsset {
  mintAddress: string;
  minimumTransfer: number;
  fromCosmosFee: number;
}
export interface TokenPerChannel {
  chainId: string;
  destinationId: number;
  tokens: string[];
}
export interface CoinGeckoAsset {
  name: string;
  id: string;
}
export interface CrossChainAssets {
  cosmos: Record<string, CrosschainAsset>;
  solana: Record<string, CrosschainAsset>;
  ethereum: Record<string, CrosschainAsset>;
  polkadot: Record<string, CrosschainAsset>;
}
export interface NetworkInfo {
  explorer: {
    type: ExplorerType;
    url: string;
  }[];
  name: string;
  image: string;
  rpc: string;
  rest?: string;
  chainType: 'polkadot' | 'solana' | 'ethereum' | 'cosmos';
  chainId: string;
  feeAssetId: string;
  polkadot?: {
    ss58Format: number;
    isParachain: boolean;
    relayChain: 'polkadot' | 'kusama';
    hops: {
      [key: string]: {
        type: 'XCM';
        xcmType: string;
        version: string;
        tokens: string[];
      };
    };
  };

  cosmos?: {
    walletUrl?: string;
    walletUrlForStaking?: string;

    bip44: { coinType: number };
    bech32Config: {
      bech32PrefixAccAddr: string;
      bech32PrefixAccPub: string;
      bech32PrefixValAddr: string;
      bech32PrefixValPub: string;
      bech32PrefixConsAddr: string;
      bech32PrefixConsPub: string;
    };
    alternativeBIP44s?: [
      {
        coinType: number;
      },
    ];
  };
  enabled: boolean;
  network_to?: string[];
}

export type TransferType = 'multihop' | 'pfm' | 'xcm' | 'channel';
