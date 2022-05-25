import { filter } from "lodash";
import { deleteCurrencyAlertData, handleFetchResult } from "../../../api/http";
import { uuid } from "../../../api/interfaces";
import { FetchFacadeForPatching } from "../../_utils/data-with-pagination-fetch-manager";
import { alertStateMgr } from "../state-manager";
import { AlertsDataFetcher } from "./alerts-data-fetcher";
import { setAlertsState } from "./set-state";

interface Payload {
  token?: string;
  id: uuid;
}

const fetcherFacade = new FetchFacadeForPatching(
  new AlertsDataFetcher(),
  alertStateMgr,
  "alerts"
);

export async function deleteAlertData(
  { token, id }: Payload,
  cb: (isSuccess: boolean) => any
) {
  // TODO: The api should be take takeEvery, takeLatest, takeFirst and take of react saga with better flexibilty. For this use case this will be takeEvery, on each call, it will append the id to other ids and then when it is time to make request, all are sent at once

  removeAlertWithIdAlerts(id);
  handleFetchResult(
    () => deleteCurrencyAlertData({ token, ids: [id] }),
    () => {
      cb(true);
      if (isThereDataShortage()) fetcherFacade.getPatch();
    },
    () => false
  );

  // TODO: Think of returning status of deletion
  await deleteCurrencyAlertData({ token, ids: [id] });
}

function removeAlertWithIdAlerts(id: uuid) {
  // TODO: All state managers with ids of type uuid should have the uuid type
  const alerts = alertStateMgr.getData("alerts");
  setAlertsState(filter(alerts, (alert) => alert.id !== id));
}

function isThereDataShortage() {
  const pageCount = alertStateMgr.getData("pageCount");
  const additionalCount = alertStateMgr.getData("additionalDataCount");
  const alertsLength = alertStateMgr.getData("alerts").length;

  return alertsLength < pageCount + (additionalCount + 1) / 2;
}
