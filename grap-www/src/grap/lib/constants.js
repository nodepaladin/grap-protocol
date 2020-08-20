import BigNumber from 'bignumber.js/bignumber';

export const SUBTRACT_GAS_LIMIT = 100000;

const ONE_MINUTE_IN_SECONDS = new BigNumber(60);
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60);
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24);
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365);

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
};

export const PROPOSALSTATUSCODE = {
  CREATED: 0,
  CANCELED: 1,
  VOTECAST: 2,
  EXECUTED: 3,
};

export const addressMap = {
  uniswapFactory : "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95",
  uniswapFactoryV2: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  UNIRouter : "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",

  YFI : "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
  YFII : "0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83",
  CRV: "0xD533a949740bb3306d119CC777fa900bA034cd52",
  YAM: "0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16",
  WETH : "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  MKR: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
  SNX: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
  COMP: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
  LEND: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",

  YCRV: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
  YCRVUNIV: "0x4eFdFe92F7528Bd16b95083d7Ba1b247De32F549",
}
