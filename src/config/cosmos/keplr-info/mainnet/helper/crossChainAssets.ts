// [FAST TRACK] Add cross-chain asset info here
const crossChainAssets = {
  cosmos: {
    ubld: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'ubld',
      denom: 'BLD',
    },
    uist: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uist',
      denom: 'IST',
    },
    aarch: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'aarch',
      denom: 'ARCH',
    },
    undefined: {
      chainId: '2125',
      decimals: 12,
      denom: 'TNKR',
    },
    utia: {
      chainId: 'celestia',
      decimals: 6,
      minimalDenom: 'utia',
      denom: 'TIA',
    },
    uhuahua: {
      chainId: 'chihuahua-1',
      decimals: 6,
      minimalDenom: 'uhuahua',
      denom: 'HUAHUA',
    },
    'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat':
      {
        chainId: 'chihuahua-1',
        decimals: 6,
        minimalDenom:
          'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
        denom: 'BADDOG',
      },
    'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof': {
      chainId: 'chihuahua-1',
      decimals: 6,
      minimalDenom:
        'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
      denom: 'WOOF',
    },
    'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos': {
      chainId: 'chihuahua-1',
      decimals: 6,
      minimalDenom:
        'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos',
      denom: 'TACOS',
    },
    'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed': {
      chainId: 'chihuahua-1',
      decimals: 6,
      minimalDenom:
        'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed',
      denom: 'WEED',
    },
    'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog': {
      chainId: 'chihuahua-1',
      decimals: 6,
      minimalDenom:
        'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog',
      denom: 'BDOG',
    },
    'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso': {
      chainId: 'chihuahua-1',
      decimals: 6,
      minimalDenom:
        'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso',
      denom: 'CORSO',
    },
    ucore: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'ucore',
      denom: 'COREUM',
    },
    uatom: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uatom',
      denom: 'ATOM',
    },
    ucre: {
      chainId: 'crescent-1',
      decimals: 6,
      minimalDenom: 'ucre',
      denom: 'CRE',
    },
    ubcre: {
      chainId: 'crescent-1',
      decimals: 6,
      minimalDenom: 'ubcre',
      denom: 'bCRE',
    },
    wei: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'wei',
      denom: 'ETH',
    },
    ppica: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'ppica',
      denom: 'PICA',
    },
    '0x6b175474e89094c44da98b954eedeac495271d0f': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x6b175474e89094c44da98b954eedeac495271d0f',
      denom: 'DAI',
    },
    uosmo: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uosmo',
      denom: 'OSMO',
    },
    '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      denom: 'FXS',
    },
    '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
      denom: 'sFRAX',
    },
    '0xac3e018457b222d93114458476f3e3416abbe38f': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xac3e018457b222d93114458476f3e3416abbe38f',
      denom: 'sfrxETH',
    },
    '0x57e114b691db790c35207b2e685d4a43181e6061': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x57e114b691db790c35207b2e685d4a43181e6061',
      denom: 'ENA',
    },
    '0x853d955acef822db058eb8505911ed77f175b99e': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x853d955acef822db058eb8505911ed77f175b99e',
      denom: 'FRAX',
    },
    '0x5e8422345238f34275888049021821e8e08caa1f': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x5e8422345238f34275888049021821e8e08caa1f',
      denom: 'frxETH',
    },
    '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': {
      chainId: 'solana',
      decimals: 8,
      minimalDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      denom: 'wBTC',
    },
    '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84': {
      chainId: 'ethereum',
      decimals: 18,
      minimalDenom: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
      denom: 'stETH',
    },
    '0xae78736cd615f374d3085123a210448e74fc6393': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xae78736cd615f374d3085123a210448e74fc6393',
      denom: 'rETH',
    },
    '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
      denom: 'crvUSD',
    },
    '0x04c154b66cb340f3ae24111cc767e0184ed00cc6': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
      denom: 'pxETH',
    },
    '0x35fa164735182de50811e8e2e824cfb9b6118ac2': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
      denom: 'eETH',
    },
    usilk: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'usilk',
      denom: 'SILK',
    },
    '0xbf5495efe5db9ce00f80364c8b423567e58d2110': {
      chainId: 'ethereum',
      decimals: 18,
      minimalDenom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
      denom: 'ezETH',
    },
    '0x4c9edd5852cd905f086c759e8383e09bff1e68b3': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
      denom: 'USDe',
    },
    '0x6982508145454ce325ddbe47a25d4ec3d2311933': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x6982508145454ce325ddbe47a25d4ec3d2311933',
      denom: 'PEPE',
    },
    '0xdac17f958d2ee523a2206206994597c13d831ec7': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      denom: 'USDT Ethereum',
    },
    '0xd533a949740bb3306d119cc777fa900ba034cd52': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      denom: 'CRV',
    },
    ustars: {
      chainId: 'stargaze-1',
      decimals: 6,
      minimalDenom: 'ustars',
      denom: 'STARS',
    },
    stuatom: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stuatom',
      denom: 'stATOM',
    },
    usei: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'usei',
      denom: 'SEI',
    },
    uscrt: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uscrt',
      denom: 'SCRT',
    },
    ustrd: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'ustrd',
      denom: 'STRD',
    },
    'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom:
        'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },
    So11111111111111111111111111111111111111112: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'So11111111111111111111111111111111111111112',
      denom: 'wSOL',
    },
    EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
      denom: 'WIF',
    },
    DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263: {
      chainId: 'solana',
      decimals: 5,
      minimalDenom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      denom: 'BONK',
    },
    Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
      denom: 'USDT Solana',
    },
    inj: {
      chainId: 'injective-1',
      decimals: 18,
      minimalDenom: 'inj',
      denom: 'INJ',
    },
    'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja': {
      chainId: 'injective-1',
      decimals: 6,
      minimalDenom: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
      denom: 'NINJA',
    },
    'factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/Talis': {
      chainId: 'injective-1',
      decimals: 6,
      minimalDenom: 'factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/Talis',
      denom: 'Talis',
    },
    'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava': {
      chainId: 'injective-1',
      decimals: 6,
      minimalDenom: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava',
      denom: 'HAVA',
    },
    'factory/inj1xy3kvlr4q4wdd6lrelsrw2fk2ged0any44hhwq/KIRA': {
      chainId: 'injective-1',
      decimals: 6,
      minimalDenom: 'factory/inj1xy3kvlr4q4wdd6lrelsrw2fk2ged0any44hhwq/KIRA',
      denom: 'KIRA',
    },
    'factory/inj1etz0laas6h7vemg3qtd67jpr6lh8v7xz7gfzqw/hdro': {
      chainId: 'injective-1',
      decimals: 6,
      minimalDenom: 'factory/inj1etz0laas6h7vemg3qtd67jpr6lh8v7xz7gfzqw/hdro',
      denom: 'HDRO',
    },
    'factory/inj127l5a2wmkyvucxdlupqyac3y0v6wqfhq03ka64/qunt': {
      chainId: 'injective-1',
      decimals: 6,
      minimalDenom: 'factory/inj127l5a2wmkyvucxdlupqyac3y0v6wqfhq03ka64/qunt',
      denom: 'QUNT',
    },
    'factory/inj1nccncwqx5q22lf4uh83dhe89e3f0sh8kljf055/HOUND': {
      chainId: 'injective-1',
      decimals: 6,
      minimalDenom: 'factory/inj1nccncwqx5q22lf4uh83dhe89e3f0sh8kljf055/HOUND',
      denom: 'HOUND',
    },
    ukuji: {
      chainId: 'kaiyo-1',
      decimals: 6,
      minimalDenom: 'ukuji',
      denom: 'KUJI',
    },
    'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk':
      {
        chainId: 'kaiyo-1',
        decimals: 6,
        minimalDenom:
          'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
        denom: 'USK',
      },
    'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta': {
      chainId: 'kaiyo-1',
      decimals: 6,
      minimalDenom:
        'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
      denom: 'MNTA',
    },
    untrn: {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom: 'untrn',
      denom: 'NTRN',
    },
    'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH':
      {
        chainId: 'neutron-1',
        decimals: 18,
        minimalDenom:
          'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
        denom: 'wstETH',
      },
    'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
      denom: 'NEWT',
    },
    'factory/neutron10sr06r3qkhn7xzpw3339wuj77hu06mzna6uht0/eclip': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron10sr06r3qkhn7xzpw3339wuj77hu06mzna6uht0/eclip',
      denom: 'ECLIP',
    },
    'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
      denom: 'BAD',
    },
    'factory/neutron1guar6dc2scpxtmmq8reh0q5cv2l37vs0uyfdru/dinosaur': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron1guar6dc2scpxtmmq8reh0q5cv2l37vs0uyfdru/dinosaur',
      denom: 'DSR',
    },
    'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
      denom: 'NTRL',
    },
    'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
      denom: 'RETRO',
    },
    'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
      denom: 'CIRCUS',
    },
    'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
      denom: 'GODRD',
    },
    'factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD',
      denom: 'GDD',
    },
    'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO':
      {
        chainId: 'neutron-1',
        decimals: 6,
        minimalDenom:
          'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
        denom: 'APOLLO',
      },
    'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/ROOM': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/ROOM',
      denom: 'ROOM',
    },
    'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/GOP': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/GOP',
      denom: 'GOP',
    },
    neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv: {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
      denom: 'BOY',
    },
    'factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel',
      denom: 'CARTEL',
    },
    'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/MOO': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/MOO',
      denom: 'MOO',
    },
    'factory/neutron1qm224945hrkwc5qze40tau499n46ydmulpeagscmsuyxfrds02usf7mnpu/scrap':
      {
        chainId: 'neutron-1',
        decimals: 6,
        minimalDenom:
          'factory/neutron1qm224945hrkwc5qze40tau499n46ydmulpeagscmsuyxfrds02usf7mnpu/scrap',
        denom: 'SCRAP',
      },
    'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD': {
      chainId: 'neutron-1',
      decimals: 6,
      minimalDenom:
        'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD',
      denom: 'WEIRD',
    },
    uion: {
      chainId: 'osmosis-1',
      decimals: 6,
      minimalDenom: 'uion',
      denom: 'ION',
    },
    'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx':
      {
        chainId: 'osmosis-1',
        decimals: 6,
        minimalDenom:
          'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
        denom: 'IBCX',
      },
    'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx':
      {
        chainId: 'osmosis-1',
        decimals: 6,
        minimalDenom:
          'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
        denom: 'stIBCX',
      },
    'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn':
      {
        chainId: 'osmosis-1',
        decimals: 6,
        minimalDenom:
          'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
        denom: 'LVN',
      },
    'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn':
      {
        chainId: 'osmosis-1',
        decimals: 6,
        minimalDenom:
          'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
        denom: 'MBRN',
      },
    'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt':
      {
        chainId: 'osmosis-1',
        decimals: 6,
        minimalDenom:
          'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
        denom: 'CDT',
      },
    'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA':
      {
        chainId: 'osmosis-1',
        decimals: 6,
        minimalDenom:
          'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
        denom: 'milkTIA',
      },
    'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO': {
      chainId: 'osmosis-1',
      decimals: 6,
      minimalDenom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
      denom: 'WOSMO',
    },
    'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail':
      {
        chainId: 'osmosis-1',
        decimals: 6,
        minimalDenom:
          'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
        denom: 'SAIL',
      },
    'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID': {
      chainId: 'osmosis-1',
      decimals: 6,
      minimalDenom:
        'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
      denom: 'BADKID',
    },
    'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc':
      {
        chainId: 'osmosis-1',
        decimals: 8,
        minimalDenom:
          'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
        denom: 'WBTC',
      },
    'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos':
      {
        chainId: 'osmosis-1',
        decimals: 6,
        minimalDenom:
          'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
        denom: 'YMOS',
      },
    'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo':
      {
        chainId: 'osmosis-1',
        decimals: 6,
        minimalDenom:
          'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
        denom: 'bOSMO',
      },
    'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB': {
      chainId: 'osmosis-1',
      decimals: 6,
      minimalDenom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
      denom: 'LAB',
    },
    'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro': {
      chainId: 'osmosis-1',
      decimals: 6,
      minimalDenom: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
      denom: 'TORO',
    },
    'factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE': {
      chainId: 'osmosis-1',
      decimals: 6,
      minimalDenom:
        'factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE',
      denom: 'BERNESE',
    },
    uqck: {
      chainId: 'quicksilver-2',
      decimals: 6,
      minimalDenom: 'uqck',
      denom: 'QCK',
    },
    uqstars: {
      chainId: 'quicksilver-2',
      decimals: 6,
      minimalDenom: 'uqstars',
      denom: 'qSTARS',
    },
    uqatom: {
      chainId: 'quicksilver-2',
      decimals: 6,
      minimalDenom: 'uqatom',
      denom: 'qATOM',
    },
    uqregen: {
      chainId: 'quicksilver-2',
      decimals: 6,
      minimalDenom: 'uqregen',
      denom: 'qREGEN',
    },
    uqosmo: {
      chainId: 'quicksilver-2',
      decimals: 6,
      minimalDenom: 'uqosmo',
      denom: 'qOSMO',
    },
    uqsomm: {
      chainId: 'quicksilver-2',
      decimals: 6,
      minimalDenom: 'uqsomm',
      denom: 'qSOMM',
    },
    'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d': {
      chainId: 'secret-4',
      decimals: 6,
      minimalDenom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      denom: 'SILK',
    },
    'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm': {
      chainId: 'secret-4',
      decimals: 8,
      minimalDenom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      denom: 'SHD',
    },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/4tLQqCLaoKKfNFuPjA9o39YbKUwhR1F8N29Tz3hEbfP2':
      {
        chainId: 'pacific-1',
        decimals: 8,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/4tLQqCLaoKKfNFuPjA9o39YbKUwhR1F8N29Tz3hEbfP2',
        denom: 'WETH',
      },
    'factory/sei1e3gttzq5e5k49f9f5gzvrl0rltlav65xu6p9xc0aj7e84lantdjqp7cncc/isei':
      {
        chainId: 'pacific-1',
        decimals: 6,
        minimalDenom:
          'factory/sei1e3gttzq5e5k49f9f5gzvrl0rltlav65xu6p9xc0aj7e84lantdjqp7cncc/isei',
        denom: 'iSEI',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/Hq4tuDzhRBnxw3tFA5n6M52NVMVcC19XggbyDiJKCD6H':
      {
        chainId: 'pacific-1',
        decimals: 6,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/Hq4tuDzhRBnxw3tFA5n6M52NVMVcC19XggbyDiJKCD6H',
        denom: 'USDCet',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/HktfLoADCk9mnjv7XJiN4YXK9ayE6xinLzt8wzcsR2rY':
      {
        chainId: 'pacific-1',
        decimals: 6,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/HktfLoADCk9mnjv7XJiN4YXK9ayE6xinLzt8wzcsR2rY',
        denom: 'USDTet',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/7omXa4gryZ5NiBmLep7JsTtTtANCVKXwT9vbN91aS1br':
      {
        chainId: 'pacific-1',
        decimals: 8,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/7omXa4gryZ5NiBmLep7JsTtTtANCVKXwT9vbN91aS1br',
        denom: 'WBTC',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/7edDfnf4mku8So3t4Do215GNHwASEwCWrdhM5GqD51xZ':
      {
        chainId: 'pacific-1',
        decimals: 6,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/7edDfnf4mku8So3t4Do215GNHwASEwCWrdhM5GqD51xZ',
        denom: 'USDCar',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/9hJDBDaxqQQhF5HhaPUykeLncBa38XQ5uoNxN3tPQu5r':
      {
        chainId: 'pacific-1',
        decimals: 8,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/9hJDBDaxqQQhF5HhaPUykeLncBa38XQ5uoNxN3tPQu5r',
        denom: 'WETHar',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/DUVFMY2neJdL8aE4d3stcpttDDm5aoyfGyVvm29iA9Yp':
      {
        chainId: 'pacific-1',
        decimals: 6,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/DUVFMY2neJdL8aE4d3stcpttDDm5aoyfGyVvm29iA9Yp',
        denom: 'USDCpo',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/3VKKYtbQ9iq8f9CaZfgR6Cr3TUj6ypXPAn6kco6wjcAu':
      {
        chainId: 'pacific-1',
        decimals: 6,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/3VKKYtbQ9iq8f9CaZfgR6Cr3TUj6ypXPAn6kco6wjcAu',
        denom: 'USDCop',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/9fELvUhFo6yWL34ZaLgPbCPzdk9MD1tAzMycgH45qShH':
      {
        chainId: 'pacific-1',
        decimals: 6,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/9fELvUhFo6yWL34ZaLgPbCPzdk9MD1tAzMycgH45qShH',
        denom: 'USDCso',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/3Ri4N719RQfQaudHiB9CMCYACtK3aieoz1q1Ph24VdAb':
      {
        chainId: 'pacific-1',
        decimals: 8,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/3Ri4N719RQfQaudHiB9CMCYACtK3aieoz1q1Ph24VdAb',
        denom: 'USDCbs',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/9tTHn18vLnfyBvrQaia6N15zwrfRCAebZDshoPZ39ahN':
      {
        chainId: 'pacific-1',
        decimals: 8,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/9tTHn18vLnfyBvrQaia6N15zwrfRCAebZDshoPZ39ahN',
        denom: 'WETHbs',
      },
    'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/871jbn9unTavWsAe83f2Ma9GJWSv6BKsyWYLiQ6z3Pva':
      {
        chainId: 'pacific-1',
        decimals: 8,
        minimalDenom:
          'factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/871jbn9unTavWsAe83f2Ma9GJWSv6BKsyWYLiQ6z3Pva',
        denom: 'USDTbs',
      },
    'factory/sei1vrz7ndadkf6gwanf6ccy2d2v706yzrx2957fjd/GOLDENRULES': {
      chainId: 'pacific-1',
      decimals: 6,
      minimalDenom:
        'factory/sei1vrz7ndadkf6gwanf6ccy2d2v706yzrx2957fjd/GOLDENRULES',
      denom: '$GNR',
    },
    'factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye': {
      chainId: 'pacific-1',
      decimals: 6,
      minimalDenom: 'factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye',
      denom: 'POPEYE',
    },
    ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
      denom: 'WHINE',
    },
    ushd: {
      chainId: 'solana',
      decimals: 8,
      minimalDenom: 'ushd',
      denom: 'SHD',
    },
    'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust': {
      chainId: 'stargaze-1',
      decimals: 6,
      minimalDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
      denom: 'STRDST',
    },
    'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE': {
      chainId: 'stargaze-1',
      decimals: 6,
      minimalDenom:
        'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
      denom: 'GAZE',
    },
    'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH': {
      chainId: 'stargaze-1',
      decimals: 6,
      minimalDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
      denom: 'OHH',
    },
    'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH': {
      chainId: 'stargaze-1',
      decimals: 6,
      minimalDenom:
        'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
      denom: 'BRNCH',
    },
    'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky': {
      chainId: 'stargaze-1',
      decimals: 6,
      minimalDenom:
        'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
      denom: 'SNEAKY',
    },
    stuosmo: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stuosmo',
      denom: 'stOSMO',
    },
    stujuno: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stujuno',
      denom: 'stJUNO',
    },
    stustars: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stustars',
      denom: 'stSTARS',
    },
    staevmos: {
      chainId: 'stride-1',
      decimals: 18,
      minimalDenom: 'staevmos',
      denom: 'stEVMOS',
    },
    stuluna: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stuluna',
      denom: 'stLUNA',
    },
    stinj: {
      chainId: 'stride-1',
      decimals: 18,
      minimalDenom: 'stinj',
      denom: 'stINJ',
    },
    stadydx: {
      chainId: 'stride-1',
      decimals: 18,
      minimalDenom: 'stadydx',
      denom: 'stDYDX',
    },
    stutia: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stutia',
      denom: 'stTIA',
    },
    stusaga: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stusaga',
      denom: 'stSAGA',
    },
    stuumee: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stuumee',
      denom: 'stUMEE',
    },
    stucmdx: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stucmdx',
      denom: 'stCMDX',
    },
    stusomm: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stusomm',
      denom: 'stSOMM',
    },
    stadym: {
      chainId: 'stride-1',
      decimals: 18,
      minimalDenom: 'stadym',
      denom: 'stDYM',
    },
    uumee: {
      chainId: 'umee-1',
      decimals: 6,
      minimalDenom: 'uumee',
      denom: 'UMEE',
    },
  },
  solana: {
    BtHCXVdDCRqDvuTfmsLK5gcz3WbSBNY5DxpzSxqAcouU: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'ubld',
      denom: 'BLD',
    },
    '3bHxPkuJwztJyrZW2T6sZe8GkRjN1BXgw3ViHPcrQdCj': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uist',
      denom: 'IST',
    },
    BxZEQoVDwPT1dGTSnLw4Qvm17up2vvvP88PCSYTncgnk: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'aarch',
      denom: 'ARCH',
    },
    vbJ16tHqqVKvLq8rgWeGboJvSCoeFjSYYvH77czoT9J: {
      chainId: 'solana',
      decimals: 9,
      denom: 'DOT',
    },
    '9gjHXkUVtDEPfxXXT9Jj3ZbYbFzS4zN92ewsCH8zGUKc': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uatom',
      denom: 'ATOM',
    },
    '9m8kq5qhocfckRkRnhbAroPmR8zYaXugpyinpkpLnv12': {
      chainId: 'solana',
      decimals: 9,
      denom: 'KSM',
    },
    EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uosmo',
      denom: 'OSMO',
    },
    '6bQZs6ZSaRoaYPsfLibM9ZhZa4Haj4xF5uFJ33Kduc3V': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uscrt',
      denom: 'SCRT',
    },
    Dcihw3DVQpxF7ri4fsdGaZWrwhtLgCvbkYHXWh1VdhQn: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'usilk',
      denom: 'SILK',
    },
    '4Atqy7XYeHXLD2thRJtDtBaRassB2Ff4ksefhvzLKxDQ': {
      chainId: 'solana',
      decimals: 8,
      minimalDenom: 'ushd',
      denom: 'SHD',
    },
    BajH8K75CHJrmT1hf6QGHSyY5r5tbJYSHrCb7uDNCF5S: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'usei',
      denom: 'SEI',
    },
    SOL: {
      chainId: 'solana',
      decimals: 9,
      denom: 'SOL',
    },
    J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn: {
      chainId: 'solana',
      decimals: 9,
      denom: 'JitoSOL',
    },
    mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So: {
      chainId: 'solana',
      decimals: 9,
      denom: 'mSOL',
    },
    ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
      denom: 'WHINE',
    },
    HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj: {
      chainId: 'solana',
      decimals: 9,
      denom: 'hausSOL',
    },
    bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1: {
      chainId: 'solana',
      decimals: 9,
      denom: 'bSOL',
    },
    LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp: {
      chainId: 'solana',
      decimals: 9,
      denom: 'LST',
    },
    BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA: {
      chainId: 'solana',
      decimals: 9,
      denom: 'BLZE',
    },
    edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt: {
      chainId: 'solana',
      decimals: 9,
      denom: 'edgeSOL',
    },
    '5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV': {
      chainId: 'solana',
      decimals: 9,
      denom: 'cSOL',
    },
    '3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h': {
      chainId: 'solana',
      decimals: 9,
      denom: 'cmSOL',
    },
    '6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM': {
      chainId: 'solana',
      decimals: 9,
      denom: 'cJitoSOL',
    },
    FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt: {
      chainId: 'solana',
      decimals: 9,
      denom: 'cbSOL',
    },
    Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h: {
      chainId: 'solana',
      decimals: 9,
      denom: 'compassSOL',
    },
    jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v: {
      chainId: 'solana',
      decimals: 9,
      denom: 'jupSOL',
    },
    he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A: {
      chainId: 'solana',
      decimals: 9,
      denom: 'hSOL',
    },
    So11111111111111111111111111111111111111112: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'So11111111111111111111111111111111111111112',
      denom: 'wSOL',
    },
    EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
      denom: 'WIF',
    },
    DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263: {
      chainId: 'solana',
      decimals: 5,
      minimalDenom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      denom: 'BONK',
    },
    Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
      denom: 'USDT Solana',
    },
    '6SYCn6Hj4X3XV6dzRk8vXa1UyZc4SBvAT7p3e1AcATAx': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x6b175474e89094c44da98b954eedeac495271d0f',
      denom: 'DAI',
    },
    EXZbXNMbdTbMYpr9J5MUDv29XnWfxLZYyCCtk2tCy7XV: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'wei',
      denom: 'ETH',
    },
    EHzGKxauSbvLD5xfX4P9StBdQWmyroferGg9aR6oDU9v: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      denom: 'USDT Ethereum',
    },
    '4tjtYi8dCVkE539ANy3qUHhKdqkjzqhn2iW4WSZMfMa6': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      denom: 'CRV',
    },
    GrkjmJt3KECe6Yi11LZxY88BJ69KyQnRtC6EioFAF1rD: {
      chainId: 'solana',
      decimals: 8,
      minimalDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      denom: 'wBTC',
    },
    urez9EJo4YNdpQQxw6xrLfF1J3EqJSaVwPGHFNG338B: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xae78736cd615f374d3085123a210448e74fc6393',
      denom: 'rETH',
    },
    EuBHrXZJa6ZNg6dfhiotxRoHpVpMg6ZsgNc6ZKJ9iUe2: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
      denom: 'crvUSD',
    },
    A9zVTbwXTwMA3WsYbB7mGKmDZp3UPfd64sjZfZQ8Lk49: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x853d955acef822db058eb8505911ed77f175b99e',
      denom: 'FRAX',
    },
    '6jnTywpWt1u6Jh65FTSgUVDxv7Kyfp3f1mwH426LXmB7': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      denom: 'FXS',
    },
    Go2RiPCxrU3dWH7cs52pm2Q2R45HB2ACbYBZsx1vadZd: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x5e8422345238f34275888049021821e8e08caa1f',
      denom: 'frxETH',
    },
    E5Lz7Bi1KZD9VTYXsCZhkWDiztkNzPoX7Jk71xbTkEoA: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xac3e018457b222d93114458476f3e3416abbe38f',
      denom: 'sfrxETH',
    },
    '3AvDivzbMjfin9hSVUBjdYerKroX8jQuNyDVebdRiULE': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
      denom: 'sFRAX',
    },
    B1cm3Wf5ZNUdgZ1eaXaNdiy9DCmQudfmspRMBb2TqDjb: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
      denom: 'pxETH',
    },
    CqzASJJsEA1TDvjCahP9pa7wPjqFEdouup6g5eNV71uv: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
      denom: 'eETH',
    },
    Aa34MLrb7GfT5uMXnpT9oKnj11gGcXMq61b5kBzTvbnW: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x57e114b691db790c35207b2e685d4a43181e6061',
      denom: 'ENA',
    },
    GM4RuF5gLcytcq36wNJkX3UBYRKP9hQwJyyRWm6d6o47: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
      denom: 'USDe',
    },
    uVYDrZeCeq5T5RBHZZWHfsG12SDCm4MPHX2h8iAcXRh: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x6982508145454ce325ddbe47a25d4ec3d2311933',
      denom: 'PEPE',
    },
    '966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'ppica',
      denom: 'PICA',
    },
    '8aHZdc7qrKAPMey7B6VHx3U3xWFBs7BZhdLAYqZBQwea': {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stuatom',
      denom: 'stATOM',
    },
    HYaNBn8TQCpy1ohJAQ8V8GaLsRFrkudszgQU8uQpWNvB: {
      chainId: 'stargaze-1',
      decimals: 6,
      minimalDenom: 'ustars',
      denom: 'STARS',
    },
    FjK5ms55rMZY42NUKnAayUjA8Q1nA2jhYwkHZUY7KwvE: {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'ustrd',
      denom: 'STRD',
    },
    '4wQAZCwoJbBmxHNzg8bK7JqDr8x2YdrFfkBpmAdtuHyE': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'ucore',
      denom: 'COREUM',
    },
    DD4Ew6YcPCiJvb9ZQyAktRvgtckubPLTcHdbaK4nVKUW: {
      chainId: 'solana',
      decimals: 6,
      minimalDenom:
        'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },
  },
  ethereum: {
    '0xfd11E3564691A99bF56A3545A86Af2aEb8416CA1': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'ubld',
      denom: 'BLD',
    },
    '0x7d1b634d825221E8d8f619c5FA06a3F57dAFd5C6': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uist',
      denom: 'IST',
    },
    '0xA88bB3EB033F359FeF934Dd3b4b753847318072C': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'aarch',
      denom: 'ARCH',
    },
    '0x21c2c96Dbfa137E23946143c71AC8330F9B44001': {
      chainId: 'solana',
      decimals: 9,
      denom: 'DOT',
    },
    '0x519ddEff5d142Fc177d95F24952eF3D2EDe530BC': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uatom',
      denom: 'ATOM',
    },
    ETH: {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'wei',
      denom: 'ETH',
    },
    '0xbb63a9b64a80e9338b8ea298c51765e57c4f159c': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'ppica',
      denom: 'PICA',
    },
    '0x6b175474e89094c44da98b954eedeac495271d0f': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x6b175474e89094c44da98b954eedeac495271d0f',
      denom: 'DAI',
    },
    '0x9243b3615ed297403c0cafa156c3fa16057526ca': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uosmo',
      denom: 'OSMO',
    },
    '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      denom: 'FXS',
    },
    '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
      denom: 'sFRAX',
    },
    '0xac3e018457b222d93114458476f3e3416abbe38f': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xac3e018457b222d93114458476f3e3416abbe38f',
      denom: 'sfrxETH',
    },
    '0x57e114b691db790c35207b2e685d4a43181e6061': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x57e114b691db790c35207b2e685d4a43181e6061',
      denom: 'ENA',
    },
    '0x853d955acef822db058eb8505911ed77f175b99e': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x853d955acef822db058eb8505911ed77f175b99e',
      denom: 'FRAX',
    },
    '0x5e8422345238f34275888049021821e8e08caa1f': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x5e8422345238f34275888049021821e8e08caa1f',
      denom: 'frxETH',
    },
    '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': {
      chainId: 'solana',
      decimals: 8,
      minimalDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      denom: 'wBTC',
    },
    '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84': {
      chainId: 'ethereum',
      decimals: 18,
      minimalDenom: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
      denom: 'stETH',
    },
    '0xae78736cd615f374d3085123a210448e74fc6393': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xae78736cd615f374d3085123a210448e74fc6393',
      denom: 'rETH',
    },
    '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
      denom: 'crvUSD',
    },
    '0x04c154b66cb340f3ae24111cc767e0184ed00cc6': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
      denom: 'pxETH',
    },
    '0x35fa164735182de50811e8e2e824cfb9b6118ac2': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
      denom: 'eETH',
    },
    '0x854b8fc032a5b7828d8de72702f1fdd9bcfb3efa': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'usilk',
      denom: 'SILK',
    },
    '0xbf5495efe5db9ce00f80364c8b423567e58d2110': {
      chainId: 'ethereum',
      decimals: 18,
      minimalDenom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
      denom: 'ezETH',
    },
    '0x4c9edd5852cd905f086c759e8383e09bff1e68b3': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
      denom: 'USDe',
    },
    '0x6982508145454ce325ddbe47a25d4ec3d2311933': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0x6982508145454ce325ddbe47a25d4ec3d2311933',
      denom: 'PEPE',
    },
    '0xdac17f958d2ee523a2206206994597c13d831ec7': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      denom: 'USDT Ethereum',
    },
    '0xd533a949740bb3306d119cc777fa900ba034cd52': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      denom: 'CRV',
    },
    '0x59e0499554Cdcdfa90CCd96532e5aD5883a2a956': {
      chainId: 'stargaze-1',
      decimals: 6,
      minimalDenom: 'ustars',
      denom: 'STARS',
    },
    '0xA534115DA1C1e51Cb2C6E8bC1fBA23A5189a1de2': {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'stuatom',
      denom: 'stATOM',
    },
    '0x013AdDc6512432304c055CEc20bbb0f6AA5ed7d5': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'usei',
      denom: 'SEI',
    },
    '0xF7F00d598b2a651404993E93Df7AE16C3C736F3C': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uscrt',
      denom: 'SCRT',
    },
    '0x3f8Bb8634Ca4A61Aa23cd0DF00C3152E0eaF9587': {
      chainId: 'stride-1',
      decimals: 6,
      minimalDenom: 'ustrd',
      denom: 'STRD',
    },
    '0xB44D6C324A6c15127F1451465f1E1DbC39142A60': {
      chainId: 'solana',
      decimals: 9,
      denom: 'KSM',
    },
    '0x9e0f65f56120fcaebe2c0675377332ec60abb1ac': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'ucore',
      denom: 'COREUM',
    },
    '0x628f76eab0c1298f7a24d337bbbf1ef8a1ea6a24': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom:
        'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },
    '0xd1D82d3Ab815E0B47e38EC2d666c5b8AA05Ae501': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'So11111111111111111111111111111111111111112',
      denom: 'wSOL',
    },
    '0xDa7Fa7248F62e051ccA4Af2522439A61d3976462': {
      chainId: 'solana',
      decimals: 9,
      denom: 'mSOL',
    },
    '0xBe90556468e5eE2A15Da99a5C0e045ED0B142143': {
      chainId: 'solana',
      decimals: 9,
      denom: 'JitoSOL',
    },
    '0xc0732030f4DB63cfE0323dd87b497AE4Ecb43CEc': {
      chainId: 'solana',
      decimals: 9,
      denom: 'bSOL',
    },
    '0x247dB9746755CF119d3AD68A6f8f60E7E650BFa1': {
      chainId: 'solana',
      decimals: 9,
      denom: 'LST',
    },
    '0x3d078B97918eDe947aF59E679eceF9fd87C32082': {
      chainId: 'solana',
      decimals: 9,
      denom: 'edgeSOL',
    },
    '0x5cD8cd3c5e8780cCBc74277f22b099FEFd04F5ef': {
      chainId: 'solana',
      decimals: 9,
      denom: 'jupSOL',
    },
    '0x963b37d30eee26d0D94C1E5a42Aa5B1371494cA2': {
      chainId: 'solana',
      decimals: 9,
      denom: 'hSOL',
    },
    '0xCF7e6742266aD5a76ee042e26d3F766c34195E5f': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
      denom: 'WIF',
    },
    '0x4aeF9BD3fBb09d8f374436D9ec25711A1Be9BaCb': {
      chainId: 'solana',
      decimals: 5,
      minimalDenom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      denom: 'BONK',
    },
    '0x58efE15C0404aB22F87E4495D71f6f2077e862bE': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
      denom: 'USDT Solana',
    },
    '0x': {
      chainId: 'secret-4',
      decimals: 8,
      minimalDenom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      denom: 'SHD',
    },
  },
  dotsama: {
    '1': {
      chainId: 'solana',
      decimals: 9,
      minimalDenom: 'ppica',
      denom: 'PICA',
    },
    '4': {
      chainId: 'solana',
      decimals: 9,
      denom: 'KSM',
    },
    '18': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'ubld',
      denom: 'BLD',
    },
    '23': {
      chainId: '2023',
      decimals: 18,
      denom: 'MOVR',
    },
    '25': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uist',
      denom: 'IST',
    },
    '31': {
      chainId: '2087',
      decimals: 12,
      denom: 'BNC_KSM',
    },
    '32': {
      chainId: '2087',
      decimals: 12,
      denom: 'vKSM',
    },
    '35': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'usei',
      denom: 'SEI',
    },
    '130': {
      chainId: '2087',
      decimals: 6,
      denom: 'USDT Kusama',
    },
    '2007': {
      chainId: '2007',
      decimals: 18,
      denom: 'SDN',
    },
    '2125': {
      chainId: '2125',
      decimals: 12,
      denom: 'TNKR',
    },
    '79228162514264337593543950354': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'ubld',
      denom: 'BLD',
    },
    '79228162514264337593543950361': {
      chainId: 'solana',
      decimals: 6,
      minimalDenom: 'uist',
      denom: 'IST',
    },
    '79228162514264337593543952342': {
      chainId: '2019',
      decimals: 18,
      denom: 'ASTR',
    },
    '79228162514264337593543950369': {
      chainId: '2019',
      decimals: 12,
      denom: 'BNC_DOT',
    },
    '79228162514264337593543950370': {
      chainId: '2019',
      decimals: 10,
      denom: 'vDOT',
    },
    '79228162514264337593543950342': {
      chainId: 'solana',
      decimals: 9,
      denom: 'DOT',
    },
    '79228162514264337593543950376': {
      chainId: '2004',
      decimals: 18,
      denom: 'GLMR',
    },
  },
} as const;

export default crossChainAssets;
