import { useEffect, useMemo } from "react";
import { useSubscribe } from "../../../hooks";
import { TradeBuyDataFetcher } from "../../../use-case/buy-trade/actions/buy-data-fetcher";
import { buyTradeStateMgr } from "../../../use-case/buy-trade/state-manager";
import { CurrencyDataFetcher } from "../../../use-case/currency/data-fetcher";
import { FetchFacadeForReset } from "../../../use-case/_utils/data-with-pagination-fetch-manager";

const fetcherFacade = new FetchFacadeForReset(
  new TradeBuyDataFetcher(),
  buyTradeStateMgr,
  "traders"
);

const dataFetcher = new CurrencyDataFetcher();

export function useBuyLayout() {
  const tradersInfo = useSubscribe(buyTradeStateMgr, "traders");
  const pageCount = useSubscribe(buyTradeStateMgr, "pageCount");
  const neededTradersInfo = useMemo(() => {
    return tradersInfo.slice(0, pageCount);
  }, [tradersInfo, pageCount]);

  useEffect(() => {
    dataFetcher.fetchCurrencyList();
    fetcherFacade.reset();
  }, []);

  return { tradersInfo: neededTradersInfo };
}
