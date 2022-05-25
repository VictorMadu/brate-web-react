import { useEffect, useState } from "react";
import { rateStateMgr } from "../use-case/rate/state-manager";

export const useSubscribeRateCha = (rateStateMgr: rateStateMgr) => {
  const [base, setBase] = useState(rateStateMgr.getData("base"));

  useEffect(() => {
    const unsubscribe = rateStateMgr.subscribe("base", (base) => {
      setBase(base);
    });
    return unsubscribe;
  }, [rateStateMgr]);

  const handleBaseChange = (base: string) => {
    rateStateMgr.setData("base", base);
  };

  return [base, handleBaseChange] as [string, typeof handleBaseChange];
};
