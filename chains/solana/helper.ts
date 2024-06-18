import { Connection, PublicKey } from "@solana/web3.js";
import { BorshSchema } from 'borsher';
import { solanaIbcProgramId } from "./constants";
import * as anchor from '@coral-xyz/anchor';
import axios from "axios";

/**@description get connection of solana */
export const getConnection = (endpoint:string)=>{
   return new Connection(endpoint, 'finalized')
}

export const getPublicKey = (address: string) =>{
	return new PublicKey(address);
}

export const  getLatestBlockhash= async(endpoint:string) =>{
	const data = {
		id: 1,
		jsonrpc: '2.0',
		method: 'getLatestBlockhash'
	};

	const response = await axios.post(endpoint, data, {
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return response.data.result.value.blockhash || '';
}
export const getSolanaTracePath = (denom: string, isNative: boolean) => {
	if (isNative) return [];
	const parts = denom.split('/').slice(0, -1);

	return parts
		.reduce((acc, part, index, array) => {
			if (index % 2 === 0 && index < array.length - 1) {
				acc.push({ port_id: part, channel_id: array[index + 1] });
			}
			return acc;
		}, [] as { port_id: string; channel_id: string }[])
		.reverse();
};

export const getSolanaGuestChainAccounts = (portId: string, channelId: string, hashedDenom: number[]) => {
	const [guestChainPDA, guestChainBump] = anchor.web3.PublicKey.findProgramAddressSync(
		[Buffer.from('chain')],
		solanaIbcProgramId
	);

	const [triePDA, trieBump] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from('trie')], solanaIbcProgramId);

	const [mintAuthorityPDA, mintAuthorityBump] = anchor.web3.PublicKey.findProgramAddressSync(
		[Buffer.from('mint_escrow')],
		solanaIbcProgramId
	);

	const [ibcStoragePDA, ibcStorageBump] = anchor.web3.PublicKey.findProgramAddressSync(
		[Buffer.from('private')],
		solanaIbcProgramId
	);

	const [escrowAccountPDA, escrowAccountBump] = anchor.web3.PublicKey.findProgramAddressSync(
		[Buffer.from('escrow'), Buffer.from(hashedDenom)],
		solanaIbcProgramId
	);
	const [feePDA, feeBump] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from('fee')], solanaIbcProgramId);

	return { guestChainPDA, triePDA, ibcStoragePDA, mintAuthorityPDA, escrowAccountPDA, feePDA };
};

export function numberTo32ByteBuffer(num: bigint): Uint8Array {
	// Create a buffer of 32 bytes initialized with zeros
	const buffer = Buffer.alloc(32);

	// Convert the BigInt to a hexadecimal string
	let numberHex = num.toString(16);
	if (numberHex.length % 2 !== 0) {
		numberHex = '0' + numberHex; // Ensure the hex string has an even length
	}

	// Create a buffer from the hexadecimal string
	const numberBytes = Buffer.from(numberHex, 'hex');

	// Copy the number bytes to the end of the 32-byte buffer
	numberBytes.copy(buffer, 32 - numberBytes.length);
	const uintBuffer = new Uint8Array(buffer);
	// split above array into 4 chunks of 8 bytes each
	const uintBufferChunks: Uint8Array[] = [];
	for (let i = 0; i < uintBuffer.length; i += 8) {
		uintBufferChunks.push(uintBuffer.slice(i, i + 8));
	}
	let final_uintBuffer: Array<number> = [];
	final_uintBuffer = final_uintBuffer.concat(...uintBufferChunks[3]);
	final_uintBuffer = final_uintBuffer.concat(...uintBufferChunks[2]);
	final_uintBuffer = final_uintBuffer.concat(...uintBufferChunks[1]);
	final_uintBuffer = final_uintBuffer.concat(...uintBufferChunks[0]);
	return new Uint8Array(final_uintBuffer);
}

// shema
const tracePathSchema = BorshSchema.Vec(
	BorshSchema.Struct({
		port_id: BorshSchema.String,
		channel_id: BorshSchema.String
	})
);
const packetDataSchema = BorshSchema.Struct({
	token: BorshSchema.Struct({
		denom: BorshSchema.Struct({
			trace_path: tracePathSchema,
			base_denom: BorshSchema.String
		}),
		amount: BorshSchema.Array(BorshSchema.u8, 32)
	}),
	sender: BorshSchema.String,
	receiver: BorshSchema.String,
	memo: BorshSchema.String
});

const timeoutHeightSchema = BorshSchema.Enum({
	Never: BorshSchema.Unit,
	At: BorshSchema.Struct({
		revision_number: BorshSchema.u64,
		revision_height: BorshSchema.u64
	})
});
const timeoutTimestampSchema = BorshSchema.Struct({
	time: BorshSchema.u64
});

export const msgTransferSchema = BorshSchema.Struct({
	port_id_on_a: BorshSchema.String,
	chan_id_on_a: BorshSchema.String,
	packet_data: packetDataSchema,
	timeout_height_on_b: timeoutHeightSchema,
	timeout_timestamp_on_b: timeoutTimestampSchema
});


export const instructionSchema = BorshSchema.Struct({
	discriminator: BorshSchema.Array(BorshSchema.u8, 8),
	hashed_base_denom: BorshSchema.Array(BorshSchema.u8, 32),
	msg: msgTransferSchema
});