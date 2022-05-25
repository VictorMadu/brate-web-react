import { StrKeys } from "ts-util-types";
import { useSubscribe } from "../../../hooks";
import {
  CurrencyDetailState,
  currencyDetailStateMgr,
} from "../../../use-case/currency-detail/state-manager";

export function useCurrencyPairSection() {
  const base = useCurrencyDetail("base");
  const baseName = useCurrencyDetail("baseName");
  const quota = useCurrencyDetail("quota");
  const quotaName = useCurrencyDetail("quotaName");
  const rate = useCurrencyDetail("rate");
  const prevRate = useCurrencyDetail("prevRate");

  return { base, baseName, quota, quotaName, rate, prevRate };
}

function useCurrencyDetail<K extends StrKeys<CurrencyDetailState>>(
  key: K
): CurrencyDetailState[K] {
  return useSubscribe(currencyDetailStateMgr, key);
}
