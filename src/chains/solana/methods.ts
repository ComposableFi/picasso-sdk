import * as anchor from '@coral-xyz/anchor';
import * as spl from '@solana/spl-token';
import {
  ComputeBudgetProgram,
  LAMPORTS_PER_SOL,
  SystemProgram,
  TransactionInstruction,
} from '@solana/web3.js';
import { borshSerialize } from 'borsher';

import { emitter } from '../common/utils';
import { solana, solanaIbcProgramId, solanaPortId } from './constants';
import {
  getConnection,
  getLatestBlockhash,
  getPublicKey,
  getSolanaAsset,
  getSolanaGuestChainAccounts,
  getSolanaTracePath,
  instructionSchema,
  isNativeSolanaAsset,
  numberTo32ByteBuffer,
} from './helper';

export const solanaTransfer = async ({
  //write
  quantity,
  accountId,
  destinationAddress,
  configAssetId,
  sourceChannelId,
  configDenom,
  endpoint,
  timeout,
  memo = '',
}: {
  quantity: string;
  accountId: string;
  destinationAddress: string;
  configAssetId: string;
  sourceChannelId: number;
  configDenom: string; // 'SOL' (native sol) | 'mSOL' (spl token) | 'transfer/channel-1/transfer/channel-52/wei' ( ibc eth at solana)
  endpoint: string;
  timeout: number;
  memo: string;
}) => {
  try {
    // const { network, minimalDenom: configMinimalDenom} = this.config.assets[configAssetId] || {};

    // nativeDenom: assetId, nonNativeDenom: minimalDenom with path

    const isNative = isNativeSolanaAsset(configDenom);
    console.log(isNative, 'isNative');
    const { denom, baseDenom, assetId, hashedDenom } = getSolanaAsset(
      configAssetId,
      configDenom,
      isNative
    );

    /**@description examle: transfer/channel-0/transfer/channel-52/wei */
    const senderPublicKey = new anchor.web3.PublicKey(accountId);
    const associatedToken = spl.getAssociatedTokenAddressSync(
      spl.NATIVE_MINT,
      senderPublicKey
    );
    const tx = new anchor.web3.Transaction();

    const connection = getConnection(endpoint);
    if (assetId === 'SOL' && connection) {
      //

      //	save coin balance
      const tokenInfo = await connection.getParsedTokenAccountsByOwner(
        senderPublicKey,
        {
          programId: spl.TOKEN_PROGRAM_ID,
        }
      );

      const isWSOL = !!tokenInfo.value.find(
        (token) =>
          token.account.data.parsed.info.mint === spl.NATIVE_MINT.toString()
      );
      if (isWSOL) {
        tx.add(
          anchor.web3.SystemProgram.transfer({
            fromPubkey: senderPublicKey,
            toPubkey: associatedToken,
            lamports: BigInt(quantity),
          }),
          spl.createSyncNativeInstruction(associatedToken, spl.TOKEN_PROGRAM_ID)
        );
      } else {
        tx.add(
          // add  instruction for creating wSOL account
          spl.createAssociatedTokenAccountInstruction(
            senderPublicKey,
            associatedToken,
            senderPublicKey,
            spl.NATIVE_MINT,
            spl.TOKEN_PROGRAM_ID,
            spl.ASSOCIATED_TOKEN_PROGRAM_ID
          ),
          //add instruction for sol to wsol swap
          anchor.web3.SystemProgram.transfer({
            fromPubkey: senderPublicKey,
            toPubkey: associatedToken,
            lamports: BigInt(quantity),
          }),
          spl.createSyncNativeInstruction(associatedToken, spl.TOKEN_PROGRAM_ID)
        );
      }
    }

    const finalAmount = numberTo32ByteBuffer(BigInt(quantity));

    const assetPubkeyAddress =
      assetId === 'SOL' ? spl.NATIVE_MINT : getPublicKey(assetId); //tokenmint
    const refinedSourceChannel = `channel-${sourceChannelId.toString()}`;
    const senderTokenAccount = await spl.getAssociatedTokenAddress(
      assetPubkeyAddress,
      senderPublicKey
    );
    // transfer/channel-0/transfer/channel-52
    // const nonNativetracePath: any = [
    // 	{ port_id: 'transfer', channel_id: 'channel-52' },
    // 	{ port_id: 'transfer', channel_id: 'channel-0' }
    // ];

    const msgTransferPayload = {
      port_id_on_a: solanaPortId,
      chan_id_on_a: refinedSourceChannel,
      packet_data: {
        token: {
          denom: {
            trace_path: getSolanaTracePath(denom, isNative),
            base_denom: baseDenom,
          },
          amount: finalAmount,
        },
        sender: accountId,
        receiver: destinationAddress,
        memo,
      },
      timeout_height_on_b: {
        Never: {},
      },
      timeout_timestamp_on_b: {
        time: timeout,
      },
    };
    const instructionPayload = {
      discriminator: [153, 182, 142, 63, 227, 31, 140, 239],

      hashed_base_denom: hashedDenom,
      msg: msgTransferPayload,
    };
    const buffer = borshSerialize(instructionSchema, instructionPayload);

    const {
      guestChainPDA,
      triePDA,
      ibcStoragePDA,
      mintAuthorityPDA,
      escrowAccountPDA,
      feePDA,
    } = getSolanaGuestChainAccounts(
      solanaPortId,
      refinedSourceChannel,
      hashedDenom
    );

    const instruction = new TransactionInstruction({
      keys: [
        { pubkey: senderPublicKey, isSigner: true, isWritable: true },
        { pubkey: solanaIbcProgramId, isSigner: false, isWritable: true },
        { pubkey: ibcStoragePDA, isSigner: false, isWritable: true },
        { pubkey: triePDA, isSigner: false, isWritable: true },
        { pubkey: guestChainPDA, isSigner: false, isWritable: true },
        { pubkey: mintAuthorityPDA, isSigner: false, isWritable: true },
        { pubkey: assetPubkeyAddress, isSigner: false, isWritable: true },
        {
          pubkey: isNative ? escrowAccountPDA : solanaIbcProgramId,
          isSigner: false,
          isWritable: true,
        },
        { pubkey: senderTokenAccount, isSigner: false, isWritable: true },
        { pubkey: feePDA, isSigner: false, isWritable: true },
        { pubkey: spl.TOKEN_PROGRAM_ID, isSigner: false, isWritable: true },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: true },
      ],
      programId: solanaIbcProgramId,
      data: buffer, // All instructions are hellos
    });

    // transactions.add(instruction);

    // let tx = await sendAndConfirmTransaction(connection, transactions, [depositor], {
    // 	skipPreflight: true
    // });

    return await sendTX(tx, accountId, endpoint, false, undefined, () => {
      tx.add(ComputeBudgetProgram.requestHeapFrame({ bytes: 128 * 1024 }));
      tx.add(ComputeBudgetProgram.setComputeUnitLimit({ units: 700_000 }));
      tx.add(instruction);
    });
  } catch (err) {
    console.error('solanaTransfer', err);
  }
};
/**@description this function is used to send tx */
const sendTX = async (
  inputTx: anchor.web3.Transaction,
  address: string,
  endpoint: string,
  isBundle: boolean = true,
  tokenMintKeypair?: anchor.web3.Keypair,
  beforeFeeFunc?: () => void,
  skipPreflight: boolean = false
) => {
  const tx = inputTx;
  const depositor = getPublicKey(address);
  tx.recentBlockhash = await getLatestBlockhash(endpoint);
  //set owner as feePayer
  tx.feePayer = depositor;
  beforeFeeFunc?.();
  tx.add(getFee());
  //this is event emitter for listening cancel /approval event
  const signedTx = await solana.signTransaction(tx).catch((err) => {
    emitter.emit('CANCEL_SOLANA');
    throw err;
  });
  emitter.emit('SOLANA_APPROVED');
  if (tokenMintKeypair) {
    signedTx.partialSign(tokenMintKeypair);
  }
  const rawTransaction = signedTx.serialize({ requireAllSignatures: true });

  return await pollingSignatureStatus(rawTransaction, endpoint, skipPreflight);
};
const pollingSignatureStatus = async (
  rawTx: Uint8Array | number[] | Buffer,
  endpoint: string,
  skipPreflight: boolean = false
) => {
  const connection = getConnection(endpoint);
  //works like txHash
  if (!connection) return;
  const signature = await connection.sendRawTransaction(rawTx, {
    skipPreflight: skipPreflight,
  });

  await connection.confirmTransaction(signature);
  for await (const i of [...Array(9).keys()]) {
    const status = await connection.getSignatureStatus(signature);
    if (
      status?.value?.confirmationStatus === 'finalized' ||
      status?.value?.confirmationStatus === 'confirmed'
    ) {
      return { signature, status: status?.value?.confirmationStatus };
    }
    if (i > 9) {
      return { signature, status: status?.value?.confirmationStatus };
    }
  }
};

const getFee = (): anchor.web3.TransactionInstruction => {
  const SEND_AMT = 0.01 * LAMPORTS_PER_SOL; // for test, it used to be 0.006
  const PRIORITY_FEE_IX = ComputeBudgetProgram.setComputeUnitPrice({
    microLamports: SEND_AMT,
  });

  return PRIORITY_FEE_IX;
};
