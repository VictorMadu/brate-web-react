import { useSubscribeWithTransform } from "../../../../hooks";
import { createNewPairForSale } from "../../../../use-case/sell-trade/actions/create-new-pair-for-sale";

import { closeModal } from "../../../../use-case/sell-trade/actions/modal-action";
import { sellTradeStateMgr } from "../../../../use-case/sell-trade/state-manager";
import modal from "../../modal";
import { ModalType } from "../interface";

export function useFooter() {
  const pairSymbol = useSubscribeWithTransform(
    sellTradeStateMgr,
    "setRateModal",
    (modalData) => modalData.pair
  ) as string;

  function handleCancel() {
    closeModal();
  }

  function handleContinue() {
    createNewPairForSale(function cb(isSuccess) {
      if (isSuccess) {
        alert("Successful");
      } else {
        alert("Unsuccessful");
      }
      closeModal();
    });
  }

  return { handleCancel, handleContinue };
}
