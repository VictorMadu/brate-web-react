import { useEffect } from "react";
import { useSubscribe } from "../../hooks";
import { AlertsDataFetcher } from "../../use-case/alerts/actions/alerts-data-fetcher";
import { alertStateMgr } from "../../use-case/alerts/state-manager";
import { FetchFacadeForReset } from "../../use-case/_utils/data-with-pagination-fetch-manager";

const fetcherFacade = new FetchFacadeForReset(
  new AlertsDataFetcher(),
  alertStateMgr,
  "alerts"
);

export function useAlerts() {
  const fetchingStatus = useSubscribe(alertStateMgr, "dataFetching");
  const filter = useSubscribe(alertStateMgr, "filter");
  const market = useSubscribe(alertStateMgr, "market");

  useEffect(() => {
    fetcherFacade.reset(); // TODO: Provide a callback
  }, [filter, market]);

  return { fetchingStatus, stateMgr: alertStateMgr };
}
