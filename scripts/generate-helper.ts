import * as fs from 'fs';
import * as path from 'path';

interface EthereumAsset {
  erc20Address: string;
  cosmosToEthereumFee: number;
  minimumTransfer: number;
}

interface SolanaAsset {
  mintAddress: string;
  minimumTransfer: number;
}
interface TokenPerChannel {
  chainId: string;
  destinationId: number;
  tokens: string[];
}

const processFiles = () => {
  const dataDir = path.join(
    __dirname,
    '../src/config/cosmos/keplr-info/mainnet/json'
  );
  const ethereumOutputFilePath = path.join(
    __dirname,
    '../src/config/cosmos/keplr-info/mainnet/helper/ethereumAssets.ts'
  );
  const solanaOutputFilePath = path.join(
    __dirname,
    '../src/config/cosmos/keplr-info/mainnet/helper/solanaAssets.ts'
  );

  const tokensPerChannelOutputFilePath = path.join(
    __dirname,
    '../src/config/cosmos/keplr-info/mainnet/helper/tokensPerChannel.ts'
  );

  const ethereumAssets: Record<string, EthereumAsset> = {};
  const solanaAssets: Record<string, SolanaAsset> = {};
  const tokensPerChannel: Record<string, SolanaAsset> = {};
  // 폴더 내의 모든 JSON 파일 읽기
  const files = fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith('.json'));

  files.forEach((file) => {
    const filePath = path.join(dataDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    // tokensPerChannel 정보 추출
    if (data.channelMap) {
      tokensPerChannel[data.chainId] = data.channelMap;
    }
    // Ethereum 에셋 정보 추출
    data.currencies.forEach((currency: any) => {
      if (currency.ethereum) {
        const { coinDenom, ethereum } = currency;
        if (ethereum.erc20Address) {
          ethereumAssets[coinDenom] = {
            erc20Address: ethereum.erc20Address,
            cosmosToEthereumFee: ethereum.fromCosmosFee,
            minimumTransfer: ethereum.minimumTransfer,
          };
        }
      }

      // Solana 에셋 정보 추출
      if (currency.solana) {
        const { coinDenom, solana } = currency;
        if (solana.mintAddress) {
          solanaAssets[currency.coinDenom] = {
            mintAddress: solana.mintAddress,
            minimumTransfer: solana.minimumTransfer,
          };
        }
      }
    });
  });

  // ethereumAssets.ts 파일로 저장
  const ethereumOutputDir = path.dirname(ethereumOutputFilePath);
  if (!fs.existsSync(ethereumOutputDir)) {
    fs.mkdirSync(ethereumOutputDir);
  }

  const ethereumOutputContent = `
// [FAST TRACK] Add info for assets on ethereum network here
const ethereumAssets = ${JSON.stringify(ethereumAssets, null, 2)} as const;

export default ethereumAssets;
`;

  fs.writeFileSync(ethereumOutputFilePath, ethereumOutputContent, 'utf-8');
  console.log('ethereumAssets.ts 파일이 생성되었습니다.');

  // solanaAssets.ts 파일로 저장
  const solanaOutputDir = path.dirname(solanaOutputFilePath);
  if (!fs.existsSync(solanaOutputDir)) {
    fs.mkdirSync(solanaOutputDir);
  }

  const solanaOutputContent = `
// [FAST TRACK] Add info for assets on solana network here
const solanaAssets = ${JSON.stringify(solanaAssets, null, 2)} as const;

export default solanaAssets;
`;

  fs.writeFileSync(solanaOutputFilePath, solanaOutputContent, 'utf-8');
  console.log('solanaAssets.ts 파일이 생성되었습니다.');

  // tokensPerChannel.ts 파일로 저장
  const tokensPerChannelOutputDir = path.dirname(
    tokensPerChannelOutputFilePath
  );
  if (!fs.existsSync(tokensPerChannelOutputDir)) {
    fs.mkdirSync(tokensPerChannelOutputDir);
  }
  const tokensPerChannelOutputContent = `
// [FAST TRACK] Add asset here to enable transferring from one network to another
const tokensPerChannel = ${JSON.stringify(tokensPerChannel, null, 2)} as const;

export default tokensPerChannel;
`;

  fs.writeFileSync(
    tokensPerChannelOutputFilePath,
    tokensPerChannelOutputContent,
    'utf-8'
  );
  console.log('tokensPerChannel.ts 파일이 생성되었습니다.');
};

processFiles();
