import { Pair } from "../../rate/state-manager";
import findIndex from "lodash/findIndex";
import { buyTradeStateMgr, defaultBuyModalData } from "../state-manager";

export function openModal(pair: string) {
  const { ...newModalData } = buyTradeStateMgr.getData("buyModal");
  const traders = buyTradeStateMgr.getData("traders");

  const pairIndex = findIndex(traders, (trader) => trader.pair === pair);
  const traderInfo = traders[pairIndex];

  newModalData["sellerId"] = traderInfo.seller_id;
  newModalData["pair"] = pair as Pair;

  console.log("new Data For Modal", newModalData);
  buyTradeStateMgr.setData("buyModal", newModalData);
}

export function closeModal() {
  buyTradeStateMgr.setData("buyModal", { ...defaultBuyModalData });
}

export function updateAmountToBuy(amount: string) {
  const { ...newModalData } = buyTradeStateMgr.getData("buyModal");
  newModalData["inputValue"] = amount;

  buyTradeStateMgr.setData("buyModal", newModalData);
}
