import Big from 'big.js';
import type Web3 from 'web3';

import {
  bankContractAddress,
  bankTransferContractAddress,
  MAINNET_FEE,
} from './constants';
import {
  getBankTransferContract,
  getBlock,
  getErc20Contract,
  getEthGasAmount,
  getEthSimulate,
  getGasPrice,
} from './helper';

/**@description etheruem transfer */
export const ethereumTransfer = async ({
  web3,
  amount,
  assetId,
  originAddress,
  destinationAddress,
  channel,
  minimalDenom,
  memo = '', //
  timeout,
}: {
  web3: Web3;
  amount: string;
  assetId: string; //'ETH' or erc20 token address
  originAddress: string;
  destinationAddress: string;
  channel: number;
  minimalDenom: string;
  memo?: string;
  timeout: number;
}) => {
  const transferContract = getBankTransferContract(web3);
  const timeoutBlock = await getBlock(web3);
  const gasPrice = await getGasPrice(web3);

  const rawDataErc20 = transferContract.methods.sendTransfer(
    minimalDenom, // pass minimal denom as first argument
    amount,
    destinationAddress, //centauri
    'transfer',
    `channel-${channel}`, //update this using config
    timeoutBlock, // replace it to get block
    timeout,
    memo
  );
  const rawDataEth = transferContract.methods.sendTransferNativeToken(
    destinationAddress,
    'transfer',
    `channel-${channel}`,
    timeoutBlock, // replace it to get block
    timeout.toString(),
    memo
  );

  const isETH = assetId === 'ETH';
  const rawData = isETH ? rawDataEth : rawDataErc20;

  const encodedData = rawData.encodeABI();

  const txObject = {
    to: bankTransferContractAddress,
    data: encodedData,
    from: originAddress,
    value: isETH
      ? new Big(amount || 0).plus(MAINNET_FEE).toFixed()
      : MAINNET_FEE,
    gasPrice: gasPrice, // wei
  };
  const gas = await getEthGasAmount(web3, txObject);

  // simulate before sending transfer
  getEthSimulate(web3, encodedData, txObject);

  return rawData?.send({ ...txObject, gas });
  // .on('transactionHash', async (txHash) => {
  //   emitter.emit('ETHEREUM_APPROVED');
  //   console.log(txHash, 'txHash');
  //   return txHash;
  // })
  // .catch((err) => console.error('ethereumTransfer', err));
};

/**@description Ask approval */
export const approveErc20 = async ({
  web3,
  account,
  amount,
  erc20TokenAddress,
  spenderContract = bankContractAddress,
}: {
  web3: Web3;
  account: string;
  amount: string;
  erc20TokenAddress: string;
  spenderContract?: string;
}) => {
  const erc20Contract = getErc20Contract(web3, erc20TokenAddress);
  if (!erc20Contract) return;
  // const account = '0xD36554eF26E9B2ad72f2b53986469A8180522E5F';
  const tokenApprove = erc20Contract.methods.approve(spenderContract, amount);

  return await tokenApprove.send({ from: account });
};
