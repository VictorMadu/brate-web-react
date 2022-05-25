import map from "lodash/map";
import keys from "lodash/keys";
import filter from "lodash/filter";
import { useSubscribe } from "../../../../hooks";
import findIndex from "lodash/findIndex";
import { buyTradeStateMgr } from "../../../../use-case/buy-trade/state-manager";
import { updateAmountToBuy } from "../../../../use-case/buy-trade/actions/modal-action";

export function useTradeModal() {
  const traders = useSubscribe(buyTradeStateMgr, "traders");
  const pair = useSubscribe(buyTradeStateMgr, "buyModal").pair;
  const traderIndex = findIndex(traders, (trader) => trader.pair === pair);
  const amountToBuy = useSubscribe(buyTradeStateMgr, "buyModal").inputValue;

  let rate = "0",
    amountAvailableForSale = "0";
  if (traderIndex > -1) {
    const traderOfInterest = traders[traderIndex];
    rate = traderOfInterest.rate.toString();
    amountAvailableForSale = traderOfInterest.amount_available.toString();
  }

  function handleAmountToBuyChange(amount: string) {
    updateAmountToBuy(amount);
  }

  return {
    traderIndex,
    rate,
    amountAvailableForSale,
    handleAmountToBuyChange,
    amountToBuy,
  };
}
