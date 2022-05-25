import { useSubscribeWithTransform } from "../../../../hooks";
import { ModalDataSetter } from "../../../../use-case/wallet/actions/set-and-get-modal-data";
import { walletStateMgr } from "../../../../use-case/wallet/state-manager";
import { ModalType } from "../interface";

export function useDropdown(modal: ModalType) {
  const symbol = useSubscribeWithTransform(
    walletStateMgr,
    modal,
    (modal) => modal.currencySym
  );

  const modalDataSetter = new ModalDataSetter(modal);

  function handleSelectOfNewSym(newSym: string) {
    modalDataSetter.setPropValue("currencySym", newSym);
  }

  return { symbol, handleSelectOfNewSym };
}
