export const ethereum = (typeof window !== 'undefined') ? (window as any).ethereum : undefined; // provider of cosmos wallet 


export const bankContractAddress = '0x5933fde9fa60d4f1c0124aa7a7a988f46ba42d78';
export const bankTransferContractAddress = '0x148acd3cd4d6a17cd2abbecd0745b09b62c64f84';
export const ibcCoreAddress = '0xd856f0f9efa054896fe3596e05978bbe686de131'; // not used
export const ETH_MODE = 'mainnet';

export const EthIbcChannel = {
	eth: '2',
	centauri: '52',
	cosmos: '3370'
} as const;

export const ERC_20_PICA = `transfer/channel-${EthIbcChannel.eth}/ppica`;


export const TESTNET_FEE = '1000000000000000'; // can be updated by policy 
export const MAINNET_FEE = '6000000000000000';


