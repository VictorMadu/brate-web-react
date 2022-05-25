import { currencyDetailStateMgr } from "../state-manager";

export function handleBaseValueChange(newValue: number) {
  const rate = currencyDetailStateMgr.getData("rate");
  currencyDetailStateMgr.setData("baseInputValue", newValue);
  currencyDetailStateMgr.setData("quotaInputValue", newValue * rate);
}

export function handleQuotaValueChange(newValue: number) {
  const rate = currencyDetailStateMgr.getData("rate");
  currencyDetailStateMgr.setData("quotaInputValue", newValue);
  currencyDetailStateMgr.setData("baseInputValue", newValue / rate);
}
