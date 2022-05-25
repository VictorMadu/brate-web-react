import { useEffect } from "react";
import { useSubscribe } from "../../hooks";
import { RatesDataFetcher } from "../../use-case/rate/actions/rates-data-fetcher";
import { rateStateMgr } from "../../use-case/rate/state-manager";
import { FetchFacadeForReset } from "../../use-case/_utils/data-with-pagination-fetch-manager";

const fetcherFacade = new FetchFacadeForReset(
  new RatesDataFetcher(),
  rateStateMgr,
  "rates"
);

// FIXME: Duplication with alert useAlert
export function useRates() {
  const fetchingStatus = useSubscribe(rateStateMgr, "dataFetching");
  const filter = useSubscribe(rateStateMgr, "filter");
  const market = useSubscribe(rateStateMgr, "market");
  const base = useSubscribe(rateStateMgr, "base");

  useEffect(() => {
    fetcherFacade.reset(); // TODO: Provide a callback
  }, [filter, market, base]);

  return { fetchingStatus, stateMgr: rateStateMgr };
}
