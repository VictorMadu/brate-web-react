import map from "lodash/map";
import keys from "lodash/keys";
import filter from "lodash/filter";
import { useSubscribe, useSubscribeWithTransform } from "../../../hooks";
import { currencyStateMgr } from "../../../use-case/currency/state-manager";
import {
  Pair,
  sellTradeStateMgr,
} from "../../../use-case/sell-trade/state-manager";

export function useTradeModal() {
  const shouldHide = useSubscribeWithTransform(
    sellTradeStateMgr,
    "setRateModal",
    (modalData) => modalData.pair == null
  );

  const pair = useSubscribeWithTransform(
    sellTradeStateMgr,
    "setRateModal",
    (modalData) => modalData.pair
  );

  const [baseSymbol, quotaSymbol] = (pair ?? "USD EUR").split(" ");

  const rateInputValue = useSubscribeWithTransform(
    sellTradeStateMgr,
    "setRateModal",
    (modalData) => modalData.inputValue
  );

  const currencyInfos = useSubscribe(currencyStateMgr, "list");

  const currencySymbols = keys(currencyInfos);

  const currencySymbolsToDisplayForBase = currencySymbols;
  const currencySymbolsToDisplayForQuota = filter(
    currencySymbols,
    (symbol) => symbol !== baseSymbol
  );

  function handleBaseSelect(newBaseSymbol: string) {
    if (newBaseSymbol === quotaSymbol) return;

    const { ...newModalData } = sellTradeStateMgr.getData("setRateModal");
    newModalData["pair"] = (newBaseSymbol + " " + quotaSymbol) as Pair;

    sellTradeStateMgr.setData("setRateModal", newModalData);
  }

  function handleQuotaSelect(newQuotaSymbol: string) {
    if (baseSymbol === newQuotaSymbol) return;

    const { ...newModalData } = sellTradeStateMgr.getData("setRateModal");
    newModalData["pair"] = (baseSymbol + " " + newQuotaSymbol) as Pair;

    sellTradeStateMgr.setData("setRateModal", newModalData);
  }

  function handleRateInputChange(newInputValue: string) {
    const { ...newModalData } = sellTradeStateMgr.getData("setRateModal");
    newModalData["inputValue"] = newInputValue;

    console.log("called");
    sellTradeStateMgr.setData("setRateModal", newModalData);
  }

  return {
    shouldHide,
    rateInputValue,
    baseSymbol,
    quotaSymbol,
    currencySymbolsToDisplayForBase,
    currencySymbolsToDisplayForQuota,
    handleBaseSelect,
    handleQuotaSelect,
    handleRateInputChange,
  };
}
