import { getCoinIcon } from "./coinIconMap";

export const NUM_POWER = {
    MILLION: 1000000,
    BILLION: 1000000000,
    TRILLION: 1000000000000,
};

export const FLOAT_POINT = {
    BIG_NUMBER: 2,
    SMALL_NUMBER: 8,
};


const getShortenNumber = (value) => {
    if (value >= NUM_POWER.TRILLION) return { symbol: "t", value: value / NUM_POWER.TRILLION };
    if (value >= NUM_POWER.BILLION) return { symbol: "b", value: value / NUM_POWER.BILLION };
    if (value >= NUM_POWER.MILLION) return { symbol: "m", value: value / NUM_POWER.MILLION };
    if (value < 1) return { symbol: "", value };
    return { symbol: "", value };
};

const getParsedCurrency = (
    valueString,
    currency = 'USD',
  ) => {
    if (!valueString) return "-";
    const number = parseFloat(valueString);
    const { symbol, value } = getShortenNumber(number);
    const fractionsDigits = value < 1 ? FLOAT_POINT.SMALL_NUMBER : FLOAT_POINT.BIG_NUMBER;
    return `${new Intl.NumberFormat("en-US", {
      style: currency ? "currency" : "decimal",
      currency: currency || 'USD',
      currencyDisplay: "symbol",
      minimumFractionDigits: fractionsDigits,
      maximumFractionDigits: fractionsDigits,
    }).format(value)}${symbol}`;
};

export const getParsedPercent = (percent) => {
    if (!percent) {
      return {
        percent: "-",
      };
    }
    const parsedPercent = parseFloat(percent);
    return {
      percent: `${parsedPercent.toFixed(2)}%`,
      positive: parsedPercent > 0 ? "up" : "down",
    };
};

export const getParsedData = (data, currency) => {

    const percentData = getParsedPercent(data.changePercent24Hr);
    return {
      rank: data.rank,
      icon: getCoinIcon(data.symbol),
      name: data.name,
      shortName: data.symbol,
      price: getParsedCurrency(data.priceUsd, currency),
      marketCap: getParsedCurrency(data.marketCapUsd, currency),
      vwap24h: getParsedCurrency(data.vwap24Hr, currency),
      supply: getParsedCurrency(data.supply, false),
      volume24h: getParsedCurrency(data.volumeUsd24Hr, currency),
      percent: percentData.percent,
      positive: percentData.positive,
    };
  };