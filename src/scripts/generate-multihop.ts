import { getMultihopPath } from '../chains/polkadot';

const axios = require('axios');
const fs = require('fs');

const fetchMultihopPaths = async () => {
  try {
    const polkadotComposable = await getMultihopPath('polkadot', '2019');
    const kusamaPicasso = await getMultihopPath('kusama', '2087');

    const result = polkadotComposable.concat(kusamaPicasso);

    // JSON 파일로 저장
    fs.writeFileSync('result.json', JSON.stringify(result, null, 2));

    console.log('Data saved to result.json');
  } catch (error) {
    console.error('Error fetching multihop paths:', error);
  }
};

fetchMultihopPaths();
