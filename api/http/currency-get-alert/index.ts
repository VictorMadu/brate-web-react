import map from "lodash/map";
import { HttpError } from "../../../utils/status";
import { GET_CURRENCY_ALERT } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { stdToJSTimestamp } from "../_utils/transformers";
import { Headers, Res, Query } from "./types";

interface InData {
  token?: string;
  pageOffset: number;
  pageCount: number;
  filter: "all" | "untriggered" | "triggered";
  market: "parallel" | "black";
}

export const getCurrencyAlertData = async (inData: InData) => {
  if (!inData.token)
    return [undefined, HttpError.NO_TOKEN] as [undefined, HttpError];

  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const params: Query = {
    page_count: inData.pageCount,
    page_offset: inData.pageOffset,
    filter: inData.filter,
    market: inData.market,
  };
  const result = await callHtppServer<Res>({
    url: GET_CURRENCY_ALERT,
    method: "get",
    headers,
    params,
  });

  const [data, err] = result;
  const transformedData = transformData(data);
  return [transformedData, err] as typeof result;
};

function transformData(data?: Res["data"]): Res["data"] | undefined {
  if (!data) return undefined;
  return {
    pagination: data.pagination,
    alerts: transformAlerts(data.alerts),
  };
}

function transformAlerts(alerts: Exclude<Res["data"], undefined>["alerts"]) {
  return map(alerts, (alert) => ({
    id: alert.id,
    base: alert.base,
    quota: alert.quota,
    created_rate: alert.created_rate,
    target_rate: alert.target_rate,
    created_at: stdToJSTimestamp(alert.created_at),
    triggered_at: alert.triggered_at && stdToJSTimestamp(alert.triggered_at),
  }));
}
