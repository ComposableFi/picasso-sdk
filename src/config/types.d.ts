export interface CrosschainAsset {
  chainId: string;
  decimals: number;
  minimalDenom: string;
  denom: string;
  realDecimals?: number; // only used at solana, because it is restricted not to use more than 9
}
