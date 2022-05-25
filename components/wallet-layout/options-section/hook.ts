import {
  closeModal,
  openModal,
} from "../../../use-case/wallet/actions/open-close-modal";

export function useOptionsSection() {
  function handleFundClick() {
    closeModal("withdrawalModal");
    openModal("fundModal", "USD");
  }

  function handleWithdrawClick() {
    closeModal("fundModal");
    openModal("withdrawalModal", "USD");
  }

  return { handleFundClick, handleWithdrawClick };
}
