import { useSubscribe } from "../../../../../hooks";
import { buyTradeStateMgr } from "../../../../../use-case/buy-trade/state-manager";

export function useHeader(traderIndex: number) {
  const traders = useSubscribe(buyTradeStateMgr, "traders");
  const traderOfInterest = traders[traderIndex];

  let pairToDisplay: string | undefined = undefined;
  if (traderOfInterest) {
    pairToDisplay = traderOfInterest.pair.split(" ").join("/");
  }

  return { pairToDisplay };
}
