import { useSubscribeWithTransform } from "../../../../hooks";
import { sellTradeStateMgr } from "../../../../use-case/sell-trade/state-manager";

export function useHeader() {
  const pairSymbol = useSubscribeWithTransform(
    sellTradeStateMgr,
    "setRateModal",
    (modalData) => modalData.pair
  );

  let baseSymbol = "",
    quotaSymbol = "";

  if (pairSymbol) {
    [baseSymbol, quotaSymbol] = pairSymbol.split(" ");
  }

  return { baseSymbol, quotaSymbol };
}
