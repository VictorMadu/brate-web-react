import { setAlertForPair as _setAlertForPair } from "../../rate/actions/set-currency-alert";
import { currencyDetailStateMgr } from "../state-manager";

export function setAlertForPair(
  targetRate: number,
  cb: (isSuccess: boolean) => any
) {
  const base = currencyDetailStateMgr.getData("base");
  const quota = currencyDetailStateMgr.getData("quota");

  _setAlertForPair({ base, quota, targetRate }, cb);
}
