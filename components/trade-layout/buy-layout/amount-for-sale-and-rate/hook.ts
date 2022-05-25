import { TradeBuyState } from "../../../../use-case/buy-trade/state-manager";

export function useTraderAmountForSaleAndRate(
  traderInfo: TradeBuyState["traders"][number]
) {
  const { amount_available, rate } = traderInfo;
  return { amount: amount_available, rate };
}
