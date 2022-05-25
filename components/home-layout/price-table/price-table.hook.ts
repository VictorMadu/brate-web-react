import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSubscribe } from "../../../hooks";
import { authStateMgr } from "../../../use-case/auth/state-manager";
import { Pair, rateStateMgr } from "../../../use-case/rate/state-manager";
import { Config } from "./price-table.interfaces";

// TODO: Convert to class

function getPairText(pair: Pair) {
  return pair.split(" ").join("/");
}

export const useRates = () => {
  const router = useRouter();
  // TODO: Rename rates to pairs or a better name
  const pairsInfo = useSubscribe(rateStateMgr, "rates");

  function createRowClickHandler(rateIndex: number) {
    return function () {
      rateStateMgr.setData("indexOfPairInView", rateIndex);
      router.push("/currency");
    };
  }

  return [pairsInfo, createRowClickHandler, getPairText] as [
    typeof pairsInfo,
    typeof createRowClickHandler,
    typeof getPairText
  ];
};
