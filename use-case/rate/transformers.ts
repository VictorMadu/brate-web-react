import { RateState } from "./state-manager";

export function isBlackMarketTranform(market: RateState["market"]) {
  return market === "black";
}

export function isInvertedTransfrom(
  pairsInfo: RateState["rates"][number],
  base: string,
  quota: string
) {
  if (!pairsInfo) return;
  const [invertedBase, invertedQuota] = pairsInfo.pair.split(" ");
  return invertedBase === quota && invertedQuota === base;
}
