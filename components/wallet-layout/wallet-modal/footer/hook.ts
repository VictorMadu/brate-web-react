import { MoneyFundHandler } from "../../../../use-case/wallet/actions/fund-money";
import { closeModal } from "../../../../use-case/wallet/actions/open-close-modal";
import { MoneyWithdrawalHandler } from "../../../../use-case/wallet/actions/withdrawal-money";

import { ModalType } from "../interface";

export function useFooter(modal: ModalType) {
  function handleCancel() {
    closeModal(modal);
  }
  const handleContinue = createContinueHandler(modal, (isSuccess) => {
    let alertText: string;

    if (isSuccess) {
      alertText = "Successful";
    } else {
      alertText = "Unsuccessful";
    }

    alert(alertText);
    closeModal(modal);
  });

  return { handleCancel, handleContinue };
}

function createContinueHandler(
  modal: ModalType,
  cb: (isSuccess: boolean) => any
) {
  if (modal === "withdrawalModal") {
    return createWithdrawalHandler(cb);
  }
  return createFundHandler(cb);
}

function createWithdrawalHandler(cb: (isSuccess: boolean) => any) {
  const handler = new MoneyWithdrawalHandler();
  return () => handler.withdraw(cb);
}

function createFundHandler(cb: (isSuccess: boolean) => any) {
  const handler = new MoneyFundHandler();
  return () => handler.fund(cb);
}
