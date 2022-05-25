import { useState } from "react";
import { useSubscribe, useSubscribeWithTransform } from "../../../../hooks";
import { authStateMgr } from "../../../../use-case/auth/state-manager";
import { isAuthTransform } from "../../../../use-case/auth/transformers";
import { starCurrencyPair } from "../../../../use-case/rate/actions/star-currency-pair";
import { unStarCurrencyPair } from "../../../../use-case/rate/actions/unstar-currency-pair";
import { rateStateMgr } from "../../../../use-case/rate/state-manager";

export function useStarBtn(pairIndex: number) {
  const isAuth = useSubscribeWithTransform(
    authStateMgr,
    "token",
    isAuthTransform
  );

  const isPairFav = useSubscribeWithTransform(
    rateStateMgr,
    "rates",
    (rates) => {
      const pairInfo = rates[pairIndex];
      console.log("DEBUGGING ", rates, pairIndex);
      return pairInfo?.is_favourite;
    }
  );
  const [isFav, setIsFav] = useState(isPairFav);

  function handleStarCurrencyPair() {
    setIsFav(true);
    starCurrencyPair(pairIndex, (isSuccessful) => {
      if (!isSuccessful) setIsFav(false);
    });
  }

  function handleUnStarCurrencyPair() {
    setIsFav(true);
    unStarCurrencyPair(pairIndex, (isSuccessful) => {
      if (!isSuccessful) setIsFav(false);
    });
  }

  function handleClick() {
    if (isPairFav) return handleUnStarCurrencyPair();
    return handleStarCurrencyPair();
  }

  return { isAuth, isFav, handleClick };
}

// TODO: Update stateMgr. We need to be able to do a deep set just like lodash set and also subscribe
