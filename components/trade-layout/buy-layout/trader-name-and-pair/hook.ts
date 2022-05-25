import { TradeBuyState } from "../../../../use-case/buy-trade/state-manager";

export function useTraderNameAndPair(
  traderInfo: TradeBuyState["traders"][number]
) {
  const { pair, seller_name } = traderInfo;
  const pairForDisplay = pair.split(" ").join("/");

  return { pairForDisplay, sellerName: seller_name };
}
