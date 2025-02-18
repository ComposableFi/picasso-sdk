const { resolve } = require('path');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.ts',
    format: 'esm',
    name: 'picasso-sdk',
    globals: {
      '@coral-xyz/anchor': '@coral-xyz/anchor',
      '@cosmjs/stargate': '@cosmjs/stargate',
      '@cosmjs/tendermint-rpc': '@cosmjs/tendermint-rpc',
      '@injectivelabs/sdk-ts': '@injectivelabs/sdk-ts',
      '@polkadot/api': '@polkadot/api',
      '@polkadot/extension-dapp': '@polkadot/extension-dapp',
      '@polkadot/extension-inject': '@polkadot/extension-inject',
      '@polkadot/keyring': '@polkadot/keyring',
      '@polkadot/util': '@polkadot/util',
      '@polkadot/util-crypto': '@polkadot/util-crypto',
      '@solana/spl-token': '@solana/spl-token',
      '@solana/web3.js': '@solana/web3.js',
      '@injectivelabs/utils': '@injectivelabs/utils',
      secretjs: 'secretjs',
      web3: 'web3',
      'web3-core': 'web3-core',
      'web3-eth-contract': 'web3-eth-contract',
      'web3-types': 'web3-types',
      'web3-utils': 'web3-utils',
      axios: 'axios',
      'big.js': 'big.js',
      bech32: 'bech32',
      eventemitter3: 'eventemitter3',
    },
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist/types',
      types: ['node'],
    }),
  ],
  external: [
    '@coral-xyz/anchor',
    '@cosmjs/stargate',
    '@cosmjs/tendermint-rpc',
    '@injectivelabs/sdk-ts',
    '@polkadot/api',
    '@polkadot/extension-dapp',
    '@polkadot/extension-inject',
    '@polkadot/keyring',
    '@polkadot/util',
    '@polkadot/util-crypto',
    '@solana/spl-token',
    '@solana/web3.js',
    '@injectivelabs/utils',
    'secretjs',
    'web3',
    'web3-core',
    'web3-eth-contract',
    'web3-types',
    'web3-utils',
    'axios',
    'big.js',
    'bech32',
    'eventemitter3',
  ],
};
