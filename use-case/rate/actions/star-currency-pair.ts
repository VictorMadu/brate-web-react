import { handleFetchResult, starCurrencyPairs } from "../../../api/http";
import { authStateMgr } from "../../auth/state-manager";
import { rateStateMgr } from "../state-manager";
import { setRateIsFav } from "./set-state";

export function starCurrencyPair(
  pairIndex: number,
  cb: (isSuccessful: boolean) => any
) {
  const token = authStateMgr.getData("token");
  const pairInfo = rateStateMgr.getData("rates")[pairIndex];
  // TODO: Do something like takeLastest of react-saga but for each call, add each pair to an array and send them at once

  handleFetchResult(
    handleStarCurrencyPairs,
    () => handleResult(true),
    () => handleResult(false)
  );

  function handleResult(isFav: boolean) {
    cb(isFav);
    setRateIsFav(pairIndex, isFav);
  }

  function handleStarCurrencyPairs() {
    return starCurrencyPairs({
      token,
      currency_pairs: [pairInfo.pair],
    });
  }
}
