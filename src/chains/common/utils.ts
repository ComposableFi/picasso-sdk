import EventEmitter from 'eventemitter3';
import { WalletApiEvents } from './types';
import Big from 'big.js';

export const emitter = new EventEmitter<WalletApiEvents>();
export const TIMEOUT_IBC_MAX = 6000000000000;

export const memoBuilder = ({
  destChannel,
  destAddress,
}: {
  destChannel: number;
  destAddress: string;
}) => {
  return JSON.stringify({
    forward: {
      receiver: destAddress,
      port: 'transfer',
      channel: `channel-${destChannel}`,
      timeout: TIMEOUT_IBC_MAX,
      retries: 0,
    },
  });
};

/**@description Plus mininutes. Default : 10  */
export const getTimeOut = (plusMin: number = 30) => {
  const now = new Date();
  const minutesLater = new Date(now.getTime() + plusMin * 60 * 1000);
  return new Big(minutesLater.getTime()).mul(1000000).toNumber();
};
