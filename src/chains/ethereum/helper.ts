import Big from 'big.js';
import Web3 from 'web3';
import { type TransactionConfig } from 'web3-core';
import { type Contract } from 'web3-eth-contract';
import { type AbiItem } from 'web3-utils';

import { erc20ABI, ics20BankABI, ics20TransferBankABI } from './abi';
import {
  type Erc20ABI,
  type Ics20BankABI,
  type Ics20TransferBankABI,
} from './abi/types';
import { bankContractAddress, bankTransferContractAddress } from './constants';

export const getWeb3 = (endpoint: string): Web3 => {
  return new Web3(new Web3.providers.HttpProvider(endpoint));
};

export const getContract = <T extends Contract>(
  web3: Web3,
  abi: AbiItem[] | AbiItem,
  contractAddress: string
) => {
  // typeof window !== 'undefined' && !!web3 && web3.eth.setProvider(provider!);
  typeof window !== 'undefined' &&
    !!web3 &&
    web3.eth.setProvider((window as any)?.ethereum);
  return web3 && contractAddress
    ? (new web3.eth.Contract(abi, contractAddress) as unknown as T)
    : undefined;
};

export const getBankTransferContract = (web3: Web3) => {
  return getContract<Ics20TransferBankABI & Contract>(
    web3,
    ics20TransferBankABI as AbiItem[],
    bankTransferContractAddress
  ) as Ics20TransferBankABI;
};

// ideally contract address should be from outside, but right not it is just from constants file
export const getBankContract = (web3: Web3) => {
  return getContract<Ics20BankABI & Contract>(
    web3,
    ics20BankABI as AbiItem[],
    bankContractAddress
  ) as Ics20BankABI;
};
export const getConsole = (msg: any) => {
  console.log(msg);
};
export const getBlock = async (web3: Web3, addedAmount: number = 10000) => {
  if (!web3) return '0';

  // web3.eth.setProvider((window as any)?.xfi);
  return (await web3.eth.getBlockNumber()) + addedAmount;
};

export const getGasPrice = async (web3: Web3) => {
  if (!web3) return '0';
  const gasPrice = await web3.eth.getGasPrice();
  console.log(gasPrice, 'gasPrice');
  return new Big(gasPrice || 0).mul(1.3).toFixed(0);
};

export const getEthGasAmount = async (
  web3: Web3,
  txConfig: Pick<TransactionConfig, 'from' | 'to' | 'value' | 'data'>
) => {
  if (!web3) return '0';
  try {
    const gasAmount = await web3.eth.estimateGas(txConfig);
    console.log(gasAmount, 'gasAmount');
    return gasAmount;
  } catch (err) {
    return '0';
  }
};

export const getTransactionReceipt = async (web3: Web3, txHash: string) => {
  if (!web3) return '';
  const receipt = web3.eth.getTransactionReceipt(txHash);
  return receipt;
};

export const getEthSimulate = (web3: Web3, data: string, txObject: any) => {
  web3.eth
    .call({
      ...txObject,
      data,
    })
    .then((result) => console.log(result, 'simulatedresult'))
    .catch((err) => console.error(err, 'simulated??'));
};

export const isValidAddress = (web3: Web3, account: string) => {
  if (!web3) return false;
  return web3.utils.isAddress(account);
};

export const getErc20Contract = (web3: Web3, erc20TokenAddress: string) => {
  return getContract<Erc20ABI & Contract>(
    web3,
    erc20ABI as AbiItem[],
    erc20TokenAddress
  ) as Erc20ABI;
};

/**@description get approved erc20 amount, returns wei */
export const getApprovedErc20 = async (
  web3: Web3,
  account: string,
  erc20TokenAddress: string,
  spenderContract: string = bankContractAddress
) => {
  if (!isValidAddress(web3, account)) return '0';
  const erc20Contract = getErc20Contract(web3, erc20TokenAddress);
  if (!erc20Contract) return '0';

  return await erc20Contract.methods.allowance(account, spenderContract).call();
};

export const simulate = (web3: Web3, data: string, txObject: any) => {
  web3?.eth
    .call({
      ...txObject,
      data,
    })
    .then((result) => console.log(result, 'simulatedresult'))
    .catch((err) => console.error(err, 'simulated??'));
};
