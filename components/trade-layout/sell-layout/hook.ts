import { useEffect, useMemo } from "react";
import { useSubscribe } from "../../../hooks";
import { CurrencyDataFetcher } from "../../../use-case/currency/data-fetcher";
import { openModal } from "../../../use-case/sell-trade/actions/modal-action";
import { TradeSellDataFetcher } from "../../../use-case/sell-trade/actions/sell-data-fetcher";
import { sellTradeStateMgr } from "../../../use-case/sell-trade/state-manager";
import { FetchFacadeForReset } from "../../../use-case/_utils/data-with-pagination-fetch-manager";

const fetcherFacade = new FetchFacadeForReset(
  new TradeSellDataFetcher(),
  sellTradeStateMgr,
  "rates"
);

const dataFetcher = new CurrencyDataFetcher();

export function useSellLayout() {
  const rates = useSubscribe(sellTradeStateMgr, "rates");
  const pageCount = useSubscribe(sellTradeStateMgr, "pageCount");
  const neededRates = useMemo(() => {
    return rates.slice(0, pageCount);
  }, [rates, pageCount]);

  useEffect(() => {
    dataFetcher.fetchCurrencyList();
    fetcherFacade.reset();
  }, []);

  function handleAddBtnClick() {
    openModal(rates[0]?.pair ?? "USD EUR");
  }
  return { rates: neededRates, handleAddBtnClick };
}
