import { rateStateMgr } from "../state-manager";

export function setRateIsFav(pairIndex: number, isFav?: boolean) {
  const rates = [...rateStateMgr.getData("rates")];
  const pairInfo = rates[pairIndex];

  pairInfo.is_favourite = isFav;
  rateStateMgr.setData("rates", rates);
}
