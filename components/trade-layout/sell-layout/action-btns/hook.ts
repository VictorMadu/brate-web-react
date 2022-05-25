import findIndex from "lodash/findIndex";
import { useSubscribe } from "../../../../hooks";
import { deleteRateOfPairForSale } from "../../../../use-case/sell-trade/actions/delete-pair-for-sale";
import { openModal } from "../../../../use-case/sell-trade/actions/modal-action";
import { sellTradeStateMgr } from "../../../../use-case/sell-trade/state-manager";

export function useActionBtns(pair: string) {
  function handleEdit() {
    openModal(pair);
  }

  function handleDelete() {
    deleteRateOfPairForSale({ pair }, (isSuccess) => {
      if (isSuccess) {
        alert("Successful");
      } else {
        alert("Unsuccessful");
      }
    });
  }

  return { handleEdit, handleDelete };
}
