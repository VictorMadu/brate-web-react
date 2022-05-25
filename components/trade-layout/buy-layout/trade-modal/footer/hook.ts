import { buyBaseCurrencyUsingQuota } from "../../../../../use-case/buy-trade/actions/buy-base-currency";
import { closeModal } from "../../../../../use-case/buy-trade/actions/modal-action";

export function useFooter() {
  function handleCancel() {
    closeModal();
  }

  function handleContinue() {
    buyBaseCurrencyUsingQuota(function cb(isSuccess) {
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
