import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: resolve(__dirname, 'src/index.ts'),
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: resolve(__dirname, 'tsconfig.json'),
            compilerOptions: {
              declaration: true,
              declarationDir: './dist/types',
            },
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@injectivelabs/utils': '@injectivelabs/utils/dist/cjs/index.js',
    },
  },
  output: {
    filename: 'index.ts',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: resolve(__dirname, 'dist'),
    library: {
      type: 'umd',
      name: 'picasso-sdk',
    },
  },
  externals: {
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
};

export default config;
