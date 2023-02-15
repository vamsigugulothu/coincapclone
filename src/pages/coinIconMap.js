import btc from "../images/btc.png";
import eth from "../images/eth.png";
import bch from "../images/bch.png";
import bnb from "../images/bnb.png";
import leo from "../images/leo.png";
import link from "../images/link.png";
import dot from "../images/dot.png";
import currency from "../images/currency.png"



export const coinIconMap = {
  BTC: btc,
  ETH: eth,
  BCH: bch,
  BCB: bnb,
  LEO: leo,
  LINK: link,
  DOT: dot,
};

export const getCoinIcon = (icon) => coinIconMap[icon] || currency;
