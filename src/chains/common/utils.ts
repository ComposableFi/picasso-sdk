import EventEmitter from 'eventemitter3';
import { ExplorerType, WalletApiEvents } from './types';
import Big from 'big.js';
import {
  keplrChains,
  networks,
  tokensPerChannel,
  TransferType,
} from '../../config';
import { fromBech32, fromHex, toBech32 } from '@cosmjs/encoding';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';
import { TIMEOUT_IBC_MAX } from '../cosmos';
export const emitter = new EventEmitter<WalletApiEvents>();

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
  channelId: number;
  receiver?: string;
}

export const getForbiddenChains = (fromChainId: string, toChainId: string) => {
  if (
    fromChainId === toChainId ||
    (fromChainId === 'solana' &&
      networks[toChainId].chainType === 'polkadot') ||
    (fromChainId === 'ethereum' && networks[toChainId].chainType === 'polkadot')
  )
    return true;
  return false;
};
// Function to find the shortest path with channel information
export const buildIbcPath = (fromChainId: string, toChainId: string): Hop[] => {
  if (getForbiddenChains(fromChainId, toChainId)) return null;
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
            { chainId: currentChainId, channelId: Number(destinationId) },
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


export const channelList = Object.values(networks); 

export const getChainIdsByChannels= (channels: number[]):string[]  => {
  const chainIdsByChannels = Object.keys(tokensPerChannel);

  let chainIds = channels.map((channel, i) => {
    if(i===0){
     return  chainIdsByChannels.find(chaainId =>Object.keys(tokensPerChannel[chaainId]).some(v=>v===channels[i].toString()))
    }
    return chainIdsByChannels.find(chainId => 
      Object.keys(tokensPerChannel[chainId]).some(v => v === channel.toString())
    );
  });
  const lastChannel = channels[channels.length-1];

  const lastChainId = Object.values(tokensPerChannel).find(v=>!!v[lastChannel.toString()]?.chainId)[lastChannel.toString()]?.chainId

  if(lastChainId) chainIds.push(lastChainId)

  return chainIds;
};


// Example usage

/**@description If it returns undefined, that means it is not supported */
export const getSupportedType = (
  fromChainId: string,
  toChainId: string
): TransferType | undefined => {
  if (fromChainId === toChainId || !fromChainId || !toChainId) return;
  if (getSourceChannel(fromChainId, toChainId)) return 'channel';

  //XCM tx
  if (
    networks[fromChainId].polkadot &&
    networks[toChainId].polkadot &&
    networks[fromChainId].polkadot?.relayChain ===
      networks[toChainId].polkadot?.relayChain
  )
    return 'xcm';
  if (buildIbcPath(fromChainId, toChainId)) {
    if (fromChainId === 'solana') return 'pfm';

    return 'multihop';
  }
  return;
};

export const getPolkadotAddressStr = (
  accountId: string,
  prefix?: number
): string => {
  try {
    return encodeAddress(accountId, prefix || 0);
  } catch (e) {
    return accountId;
  }
};

export const convertCosmosAddress = (
  address: string,
  newPrefix: string
): string => {
  try {
    const { data } = fromBech32(address);

    return toBech32(newPrefix, data);
  } catch (e) {
    throw new Error('유효하지 않은 Bech32 주소입니다.');
  }
};

/**@description When it comes to Cosmos network, coinType should be 114 to use this converter*/
export const convertAddressToStr = (
  address: string,
  fromChainId: string
): string => {
  if (address.startsWith('0x')) {
    // 2004: moonbeam, 2023:moonriver
    if (['ethereum', 'solana', '2004', '2023'].some((v) => v === fromChainId)) {
      return address;
    } else if (
      networks[origin].chainType === 'polkadot' &&
      networks[origin].polkadot?.ss58Format
    ) {
      return getPolkadotAddressStr(
        address,
        Number(networks[origin].polkadot.ss58Format)
      );
    } else if (
      networks[origin].chainType === 'cosmos' &&
      networks[origin].cosmos.bech32Config.bech32PrefixAccAddr
    ) {
      return convertCosmosAddress(
        address,
        networks[origin].cosmos.bech32Config.bech32PrefixAccAddr
      );
    } else {
      return address;
    }
  }
  return address;
};

export const createForwardPathRecursive = (
  ibcPath: Hop[],
  index = 0,
  timeout = TIMEOUT_IBC_MAX
) => {
  if (index === ibcPath.length - 1) {
    return {
      forward: {
        receiver: ibcPath[index].receiver,
        port: 'transfer',
        channel: `channel-${ibcPath[index].channelId}`,
        timeout,
        retries: 0,
      },
    };
  }

  return {
    forward: {
      receiver: ibcPath[index].receiver,
      port: 'transfer',
      channel: `channel-${ibcPath[index].channelId}`,
      timeout,
      retries: 0,
      next: createForwardPathRecursive(ibcPath, index + 1),
    },
  };
};

export const getChannelIdsFromMemo = (memo:string): {channels:number[], finalReceiver:string} =>{


  const memoObj = JSON.parse(memo);

  const findInfos = (obj: any): {channels:number[], finalReceiver:string} => {
    if (!obj || typeof obj !== 'object') return {channels:[], finalReceiver:''};
    
    let channels: number[] = [];
    let finalReceiver = obj.receiver; 
    
    if (obj.channel && typeof obj.channel === 'string') {
      const channelId = obj.channel.split('-')[1];
      if (channelId) channels.push(Number(channelId));
    }
    
 
    if (obj.next) {
      const next = findInfos(obj.next);
      channels = channels.concat(next.channels);
      finalReceiver = next.finalReceiver; 
    }
    
    return {channels , finalReceiver};
  };

    
  const {channels , finalReceiver} = findInfos(memoObj.forward)
  if (channels.length > 0) {
    return { channels , finalReceiver};
  }
}
export const getSourceChannel = (fromChainId: string, toChainId: string) => {
  if (tokensPerChannel?.[fromChainId])
    return Object.keys(tokensPerChannel?.[fromChainId]).find(
      (key) => tokensPerChannel?.[fromChainId][key]?.chainId === toChainId
    );
};
export const getXcmInfo = (fromChainId: string, toChainId: string) => {
  return networks?.[fromChainId]?.polkadot?.hops?.[toChainId];
};

export const getExplorerUrl = (
  chainId: string,
  infoType: 'tx' | 'address',
  info: string
) => {
  const explorer = networks[chainId]?.explorer?.[0];

  if (!explorer || !['tx', 'address'].includes(infoType)) {
    return '';
  }
  switch (explorer.type) {
    case 'mintscan':
    case 'solscan':
    case 'etherscan':
      return `${explorer.url}/${infoType}/${info}`;
    case 'pingPub':
      return `${explorer.url}/${infoType === 'tx' ? 'tx' : 'account'}/${info}`;

    case 'subscan':
      return `${explorer.url}/${infoType === 'tx' ? 'extrinsic' : 'account'}/${info}`;
    default:
      return '';
  }
};
