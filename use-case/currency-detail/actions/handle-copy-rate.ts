import { currencyDetailStateMgr } from "../state-manager";

export function handleCopyRate(cb: () => any) {
  const base = currencyDetailStateMgr.getData("base");
  const baseInputValue = currencyDetailStateMgr.getData("baseInputValue");
  const quota = currencyDetailStateMgr.getData("quota");
  const quotaInputValue = currencyDetailStateMgr.getData("quotaInputValue");

  navigator.clipboard
    .writeText(`${base}: ${baseInputValue}\n${quota}: ${quotaInputValue}`)
    .then(cb);
}
