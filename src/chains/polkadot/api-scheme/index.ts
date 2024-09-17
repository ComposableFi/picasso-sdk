import { stringToU8a } from '@polkadot/util';

import * as definitions from './definitions';

export const ENDPOINT =
  process.env.NEXT_PUBLIC_ENDPOINT ?? 'wss://rpc.composablenodes.tech';

export const PALLET_ID = 'modl';
export const PALLET_TYPE_ID = stringToU8a(PALLET_ID);
export const polkadotApiTypes = Object.keys(definitions)
  .filter((key) => Object.keys(definitions[key].types).length > 0)
  .reduce(
    (accumulator, key) => ({
      ...accumulator,
      ...definitions[key].types,
    }),
    {}
  );

export const polkadotApiRpc = Object.keys(definitions)
  .filter((k) => {
    if (!definitions[k].rpc) {
      return false;
    }
    return Object.keys(definitions[k].rpc).length > 0;
  })
  .reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: definitions[key].rpc,
    }),
    {}
  );

export function concatU8a(a: Uint8Array, b: Uint8Array): Uint8Array {
  const c = new Uint8Array(a.length + b.length);
  c.set(a);
  c.set(b, a.length);
  return c;
}

export const hexToDecimalStr = (hex: string) => {
  return BigInt(hex).toString(10);
};
