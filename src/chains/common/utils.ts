import EventEmitter from 'eventemitter3';
import { WalletApiEvents } from './types';
import Big from 'big.js';
import { networks, tokensPerChannel } from '../../config';

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
  return new Big(minutesLater.getTime()).mul(1000000).toFixed();
};

export const findSourceChannelId = (
  sourceChainId: string,
  destChainId: string
) => {
  return Object.keys(networks[sourceChainId]).find(
    (key) => key === destChainId
  ) as string | undefined;
};

interface TokenPerChannel {
  chainId: string;
  destinationId: number;
  tokens: string[];
}
interface Hop {
  chainId: string;
  channelId: string;
}

// Function to find the shortest path with channel information
export const buildIbcPath = (
  fromChainId: string,
  toChainId: string
): Hop[] | null => {
  // Set to keep track of visited chains
  const visited = new Set<string>();

  // Initialize the queue for BFS traversal
  // The queue stores [current chain, path] where path includes both chain and channel
  const queue: [string, Hop[]][] = [[fromChainId, []]];

  // Start BFS
  while (queue.length > 0) {
    // Get the first element from the queue
    const [currentChainId, path] = queue.shift()!;

    // If we reach the target chain, return the path
    if (currentChainId === toChainId) {
      return path;
    }

    // Mark the current chain as visited
    visited.add(currentChainId);

    // Iterate through all the connected chains of the current chain
    const connections = tokensPerChannel[currentChainId];
    if (connections) {
      for (const destinationId in connections) {
        const nextChainId = connections[destinationId].chainId;

        // Ensure that the chain has not been visited yet
        if (!visited.has(nextChainId)) {
          // Add the next hop (with chain and channel info) to the path
          const newPath: Hop[] = [
            ...path,
            { chainId: currentChainId, channelId: destinationId },
          ];

          // Add the next chain and the updated path to the queue
          queue.push([nextChainId, newPath]);
        }
      }
    }
  }

  // If we do not find a path to the target chain, return null
  return null;
};

// Example usage

// 사용 예시
const path = buildIbcPath('2087', 'ethereum');
console.log(path); // ['2087', 'centauri-1', 'ethereum'] 와 같은 결과가 나와야 함

/**@description If it returns undefined, that means it is not supported */
export const getSupportedType = (fromChainId: string, toChainId: string) => {};
