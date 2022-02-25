const FLASH_POOL = {
    DAI_USDC: "0xaae10fa31e73287687ce56ec90f81a800361b898", // (33k USDC 79k DAI)
    WETH_USDC: "0x5333eb1e32522f1893b7c9fea3c263807a02d561", // (967 WETH 57k USDC)
    USDT_USDC: "0xa0020444b98f67b77a3d6de6e66af11c87da086e", // (144k USDT 55k USDC)
    WMATIC_USDC: "0x10dd6d8a29d489bede472cc1b22dc695c144c5c7", // (1.05M WMATIC 719k USDC)
    WBTC_USDC: "0xe020008465cd72301a18b97d33d73bf44858a4b7", // (16.67 WBTC 14.89k USDC)
    USDC_USDT: "0x38c56f05a7b4e4dc79eac6c264829c7b21fbf7a8", // (55k USDT 168k USDC)
};

const ROUTERS = {
    POLYGON_UNISWAP_V3: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    POLYGON_SUSHISWAP: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    POLYGON_QUICKSWAP: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
    POLYGON_JETSWAP: "0x5C6EC38fb0e2609672BDf628B1fD605A523E5923",
    POLYGON_POLYCAT: "0x94930a328162957FF1dd48900aF67B5439336cBD",
    POLYGON_APESWAP: "0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607",
    POLYGON_WAULTSWAP: "0x3a1D87f206D12415f5b0A33E786967680AAb4f6d",
    POLYGON_DFYN: "0xA102072A4C07F06EC3B4900FDC4C7B80b6c57429",
};

const BASE_TOKENS = {
    DAI: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    USDC: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    USDT: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    WMATIC: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    WBTC: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    WETH: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619"
}

const KNOWN_TOKENS = {
    MATIC: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    USDC: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    USDT: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    DAI: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    WBTC: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    LINK: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    WMATIC: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    COMP: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
    CEL: "0xd85d1e945766fea5eda9103f918bd915fbca63e6",
    WETH: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    CRV: "0x172370d5cd63279efa6d502dab29171933a610af",
    QI: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    UNI: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    AAVE: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    MUST: "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f",
    MEME: "0xf2b5a8c37278bcdd50727d5ca879f8e5a4642e2e",
    SUPER: "0xa1428174f516f527fafdd146b883bb4428682737",
    MANA: "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4",
    YFI: "0xda537104d6a5edd53c6fbba9a898708e465260b6",
    QUICK: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
};

const UNISWAP_V3_FEE = {
    DAI: {
        USDC: 500,
        USDT: 500,
        WETH: 3000,
        WMATIC: 500,
        WBTC: 3000,
    },
    USDC: {
        DAI: 500,
        USDT: 500,
        WETH: 500,
        WMATIC: 500,
        WBTC: 3000,
    },
    USDT: {
        DAI: 500,
        USDC: 500,
        WETH: 3000,
        WMATIC: 500,
    },
    WBTC: {
        WMATIC: 500,
        WETH: 500,
    },
    WETH: {
        DAI: 3000,
        USDC: 500,
        USDT: 3000,
        WMATIC: 500,
    },
    WMATIC: {
        DAI: 500,
        USDC: 500,
        USDT: 500,
        WETH: 500,
    },
};

const MATIC_WHALE = "0xd70250731A72C33BFB93016E3D1F0CA160dF7e42";

module.exports = {
    FLASH_POOL,
    ROUTERS,
    BASE_TOKENS,
    KNOWN_TOKENS,
    MATIC_WHALE,
    UNISWAP_V3_FEE
};
