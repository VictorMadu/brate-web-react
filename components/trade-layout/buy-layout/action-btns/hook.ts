import { openModal } from "../../../../use-case/buy-trade/actions/modal-action";
import { TradeBuyState } from "../../../../use-case/buy-trade/state-manager";

export function useActionBtns(traderInfo: TradeBuyState["traders"][number]) {
  function handleBuy() {
    console.log("clicked");
    openModal(traderInfo.pair);
  }

  return { handleBuy };
}
