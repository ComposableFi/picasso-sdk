export interface CrosschainAsset {
  chainId: string;
  decimals: number;
  network?: string;
  minimalDenom: string;
  denom: string;
  imageUrl?: string;
  realDecimals?: number; // only used at solana, because it is restricted not to use more than 9
}
