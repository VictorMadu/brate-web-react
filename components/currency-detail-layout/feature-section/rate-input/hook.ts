import { ChangeEvent } from "react";
import { useSubscribeWithTransform } from "../../../../hooks";
import {
  handleBaseValueChange,
  handleQuotaValueChange,
} from "../../../../use-case/currency-detail/actions/handle-value-changes";
import { currencyDetailStateMgr } from "../../../../use-case/currency-detail/state-manager";

export function useBaseRateInput() {
  const labelText = "Base";
  const value = useValue("baseInputValue");
  const handleChange = createChangeHandler(handleBaseValueChange);

  return { labelText, value, handleChange };
}

export function useQuotaRateInput() {
  const labelText = "Quota";
  const value = useValue("quotaInputValue");
  const handleChange = createChangeHandler(handleQuotaValueChange);

  return { labelText, value, handleChange };
}

function useValue(key: "baseInputValue" | "quotaInputValue") {
  return useSubscribeWithTransform(
    currencyDetailStateMgr,
    key,
    useValueTransform
  );
}

function createChangeHandler(handler: (newValue: number) => any) {
  return function (e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "") handler(0);

    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    handler(numValue);
  };
}

function useValueTransform(value: number) {
  if (value === 0) return "";
  return value;
}
