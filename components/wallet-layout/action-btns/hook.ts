import { useRouter } from "next/router";
import {
  closeModal,
  openModal,
} from "../../../use-case/wallet/actions/open-close-modal";
import { WalletInfo } from "../../../use-case/wallet/state-manager";

export function useActionBtns(walletInfo: WalletInfo) {
  const router = useRouter();

  function handleFund() {
    closeModal("withdrawalModal");
    openModal("fundModal", walletInfo.currency);
  }

  function handleWithdraw() {
    closeModal("fundModal");
    openModal("withdrawalModal", walletInfo.currency);
  }

  function handleTrade() {
    router.push("/trade");
  }

  return { handleFund, handleWithdraw, handleTrade };
}
