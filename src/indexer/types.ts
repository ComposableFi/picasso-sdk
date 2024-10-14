interface IndexerResult {
  totalCount: number;
  countPerPage: number;
}

export interface IbcEventsResponses extends IndexerResult {
  ibcEvents: IbcEventsResponse[];
  totalCount: number;
  countPerPage: number;
}

export type TxHash = string;
/*
TransferSuccess
TransferFailed
TransferTimeout
TransferPending
 */
export type TransferState =
  | 'TransferSuccess'
  | 'TransferFailed'
  | 'TransferTimeout'
  | 'TransferPending'
  | 'TransferMaintenance'
  | 'send_packet';

export type Path = {
  origin: string;
  destination: string;
};

export interface IbcEventsResponse {
  id: number;
  sequence: `${number}`; // ibc - number / xcm - messageHash or blockNumber
  //  derived from https://github.com/ComposableFi/composable-indexer/blob/53ccb34791601eb1097e25e698cd470370cd9dd5/apps/api-server/src/routes/ibcEvent.ts#L66-L68
  //   but no guarantee that this will not have other types in the future
  type: 'ibc' | 'xcm';
  //  https://github.com/ComposableFi/composable-indexer/blob/53ccb34791601eb1097e25e698cd470370cd9dd5/apps/indexer/src/polkadot/xcm_parser.ts#L29
  status: TransferState;
  realStatus: string;
  sourceChannel: `channel-${number}`;
  destinationChannel: `channel-${number}`;
  fromChainId: string;
  fromAssetId: string;
  fromBlockHash: string;
  fromFee: `${number}`;
  fromFeeAssetId: string;
  fromAddress: string;
  fromTimestamp: `${bigint}`;
  toChainId: string;
  toBlockHash: string;
  toFee: `${number}` | null;
  toFeeAssetId: `${number}` | null;
  toAddress: string;
  toTimestamp: `${bigint}`;
  nextSequence: `${number}` | null;
  data: {
    denom: string;
    memo: string;
    amount: `${bigint}`;
    sender: string;
    txHash: TxHash;
    receiver: string;
    errorMessage: null | string;
  };
  amount: {
    assetId: string;
    assetName?: string;
    decimals?: number;
    amount: string;
  };
  createdAt: string;
}

export interface MemoStructure {
  forward: {
    substrate?: boolean;
    receiver: string;
    channel: `channel-${bigint}`;
    timeout: number;
    retries: number;
    port: string;
    next?: string;
  };
}
