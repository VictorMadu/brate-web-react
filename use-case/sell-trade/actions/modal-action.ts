import { Pair } from "../../rate/state-manager";
import { defaultSetRateModalData, sellTradeStateMgr } from "../state-manager";
import findIndex from "lodash/findIndex";

export function openModal(pair: string) {
  const { ...newModalData } = sellTradeStateMgr.getData("setRateModal");
  const rates = sellTradeStateMgr.getData("rates");

  const pairIndex = findIndex(rates, (rate) => rate.pair === pair);
  const rafeInfo = rates[pairIndex];

  newModalData["pair"] = pair as Pair;
  newModalData["inputValue"] = rafeInfo?.rate.toString() ?? "0";

  sellTradeStateMgr.setData("setRateModal", newModalData);
}

export function closeModal() {
  sellTradeStateMgr.setData("setRateModal", { ...defaultSetRateModalData });
}
