// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
import type { Bytes, Option, Struct, u32 } from '@polkadot/types-codec';

import type { CustomRpcBalance } from '../common';
import type { ComposableTraitsCurrencyRational64, XcmV1MultiLocation } from '../crowdloanRewards';

/** @name Asset */
export interface Asset extends Struct {
	readonly name: Bytes;
	readonly id: Text;
	readonly decimals: u32;
	readonly ratio: Option<ComposableTraitsCurrencyRational64>;
	readonly foreignId: Option<XcmV1MultiLocation>;
	readonly existentialDeposit: CustomRpcBalance;
}
