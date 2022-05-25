import { useSubscribe } from "../../../../hooks";
import { currencyStateMgr } from "../../../../use-case/currency/state-manager";

export function usePairNames(pair: string) {
  const [baseSymbol, quotaSymbol] = pair?.split(" ") ?? ["", ""];

  const currencyList = useSubscribe(currencyStateMgr, "list");
  const baseName = currencyList[baseSymbol];
  const quotaName = currencyList[quotaSymbol];

  return { baseSymbol, quotaSymbol, baseName, quotaName };
}
