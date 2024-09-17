import { getMultihopPath } from '../chains/polkadot';
import path from 'path';
const fs = require('fs');
const multihopRouteFilePath = path.join(
  __dirname,
  '../config/multihopRoute.ts'
);

const fetchMultihopPaths = async () => {
  try {
    const polkadotComposable = await getMultihopPath('polkadot', '2019');
    const kusamaPicasso = await getMultihopPath('kusama', '2087');

    const result = polkadotComposable.concat(kusamaPicasso);

    const multihopOutputContent = `
    // [GENERATED]
  import { MultihopRoutePath } from "../chains/polkadot/types";

    
    export const multihopRoute :MultihopRoutePath[]= ${JSON.stringify(result, null, 2)} ;
    
    `;

    fs.writeFileSync(multihopRouteFilePath, multihopOutputContent, 'utf-8');

    // save as tsfile
    // fs.writeFileSync('result.json', JSON.stringify(result, null, 2));

    process.exit(0);
    return;
  } catch (error) {
    console.error('Error fetching multihop paths:', error);
  }
};

fetchMultihopPaths();
