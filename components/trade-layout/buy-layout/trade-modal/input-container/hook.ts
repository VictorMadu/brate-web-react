import { useState } from "react";
import { useSubscribe, useSubscribeWithTransform } from "../../../../hooks";
import {
  WalletInfo,
  walletStateMgr,
} from "../../../../use-case/wallet/state-manager";
import { ModalType } from "../interface";

export function useInputSection(modal: ModalType) {
  const editableValue = useSubscribeWithTransform(
    walletStateMgr,
    modal,
    (modal) => modal.editableInputValue
  );
  const currencySym = useSubscribeWithTransform(
    walletStateMgr,
    modal,
    (modal) => modal.currencySym
  );
  const amountAvailable = useSubscribeWithTransform(
    walletStateMgr,
    "wallets",
    (walletInfos) => getAmountAvailableFrom(walletInfos, currencySym)
  );

  const helper = getHelper(modal);
  const totalValue = helper.getTotalValue(amountAvailable, editableValue);
  const editableinputLabelText = helper.getEditableInputLabelText();

  function handleValueChange(numValue: number) {
    const { ...newModalData } = walletStateMgr.getData(modal);
    newModalData.editableInputValue = numValue;
    walletStateMgr.setData(modal, newModalData);
  }

  return {
    editableValue,
    currencySym,
    amountAvailable,
    totalValue,
    editableinputLabelText,
    handleValueChange,
  };
}

function getAmountAvailableFrom(
  walletInfos: WalletInfo[],
  forCurrencySym: string
) {
  for (let i = 0; i < walletInfos.length; i++) {
    const { currency: currencySym, amount } = walletInfos[i];
    if (forCurrencySym === currencySym) return amount;
  }
  return 0;
}

function getHelper(modal: ModalType) {
  if (modal === "withdrawalModal") return new WithdrawalHelper();
  return new FundHelper();
}

class WithdrawalHelper {
  getTotalValue(amtAvailable: number, value: number) {
    return amtAvailable - value;
  }

  getEditableInputLabelText() {
    return "Withdrawal Amount";
  }
}

class FundHelper {
  getTotalValue(amtAvailable: number, value: number) {
    return amtAvailable + value;
  }

  getEditableInputLabelText() {
    return "Fund Amount";
  }
}
