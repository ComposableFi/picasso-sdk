import * as fs from 'fs';
import * as path from 'path';

interface EthereumAsset {
  erc20Address: string;
  cosmosToEthereumFee: number;
  minimumTransfer: number;
}

const processFiles = () => {
  const dataDir = path.join(
    __dirname,
    '../src/config/cosmos/keplr-info/mainnet/json'
  );
  const outputFilePath = path.join(
    __dirname,
    '../src/config/cosmos/keplr-info/mainnet/helper/ethereumAssets.ts'
  );

  const ethereumAssets: Record<string, EthereumAsset> = {};

  // 폴더 내의 모든 JSON 파일 읽기
  const files = fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith('.json'));

  files.forEach((file) => {
    const filePath = path.join(dataDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    console.log(file, data.currencies, 'hmmm????');
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
    });
  });

  // output/ethereumAssets.ts 파일로 저장
  const outputDir = path.dirname(outputFilePath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const outputContent = `
// [FAST TRACK] Add info for assets on ethereum network here
const ethereumAssets = ${JSON.stringify(ethereumAssets, null, 2)} as const;

export default ethereumAssets;
`;

  fs.writeFileSync(outputFilePath, outputContent, 'utf-8');
  console.log('ethereumAssets.ts 파일이 생성되었습니다.');
};

processFiles();
