import { getCurrencyAlertData } from "../../../api/http";
import { HttpError } from "../../../utils/status";
import { authStateMgr } from "../../auth/state-manager";
import { DataServiceFetcher } from "../../_utils/data-with-pagination-fetch-manager";

import { AlertState, alertStateMgr } from "../state-manager";

type Result = [AlertState["alerts"], undefined] | [undefined, HttpError];

export class AlertsDataFetcher
  implements DataServiceFetcher<AlertState, "alerts"> {
  async fetch(pageOffset: number, pageCount: number): Promise<Result> {
    return getCurrencyAlertData({
      token: authStateMgr.getData("token"),
      market: alertStateMgr.getData("market"),
      filter: alertStateMgr.getData("filter"),
      pageOffset,
      pageCount,
    }).then(([data, err]) => [data?.alerts, err] as Result);
  }
}
