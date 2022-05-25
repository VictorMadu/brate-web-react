import { useSubscribe, useSubscribeWithTransform } from "../../../../hooks";
import { currencyStateMgr } from "../../../../use-case/currency/state-manager";
import { walletStateMgr } from "../../../../use-case/wallet/state-manager";
import { ModalType } from "../interface";

export function useHeader(modal: ModalType) {
  const symbol = useSubscribeWithTransform(
    walletStateMgr,
    modal,
    (modal) => modal.currencySym
  );

  // TODO: Just request for the name from the currenyNames through the controller. The controller will fetch the names if not available
  const name = useSubscribeWithTransform(
    currencyStateMgr,
    "list",
    (currencyNames) => currencyNames[symbol] ?? ""
  );

  return { symbol, name };
}
