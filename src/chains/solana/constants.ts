import { PublicKey } from "@solana/web3.js";

export const solanaPortId = 'transfer';
export const solanaIbcProgramId = new PublicKey('2HLLVco5HvwWriNbUhmVwA2pCetRkpgrqwnjcsZdyTKT'); // cosmos mainnet-solana devnet
export const solana = (typeof window !== 'undefined') ? (window as any).solana : undefined; // provider of cosmos wallet 
