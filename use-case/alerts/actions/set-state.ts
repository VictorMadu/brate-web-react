import { DataFetching, HttpError } from "../../../utils/status";
import { AlertState, alertStateMgr } from "../state-manager";

export function setFetchingState(data: AlertState["dataFetching"]) {
  alertStateMgr.setData("dataFetching", data);
}

export function setPageOffsetState(data: AlertState["pageOffset"]) {
  alertStateMgr.setData("pageOffset", data);
}

export function setErrorState(data: AlertState["httpError"]) {
  alertStateMgr.setData("httpError", data);
}

export function setAlertsState(data: AlertState["alerts"]) {
  alertStateMgr.setData("alerts", data);
}

export function handleHttpErr(err: HttpError) {
  setFetchingState(DataFetching.FAILED);
  setErrorState(err);
}
