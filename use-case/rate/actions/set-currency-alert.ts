import { handleFetchResult, setCurrencyAlert } from "../../../api/http";
import { authStateMgr } from "../../auth/state-manager";
import { rateStateMgr } from "../state-manager";

export function setAlertForPair(
  pair: { base: string; quota: string; targetRate: number },
  cb: (isSuccess: boolean) => any
) {
  const { base, quota, targetRate } = pair;
  if (isNaN(targetRate)) return cb(false);

  const marketType = rateStateMgr.getData("market");
  const token = authStateMgr.getData("token");

  handleFetchResult(
    () =>
      setCurrencyAlert({
        base,
        quota,
        token,
        marketType,
        targetRate,
      }),
    () => cb(true),
    () => cb(false)
  );
}
