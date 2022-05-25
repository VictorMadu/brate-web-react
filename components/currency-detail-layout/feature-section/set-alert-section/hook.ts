import { ChangeEvent, useContext, useEffect, useState } from "react";
import { setCurrencyAlert } from "../../../../api/http";
import { authStateMgr } from "../../../../use-case/auth/state-manager";
import { setAlertForPair } from "../../../../use-case/currency-detail/actions/setAlertForPair";
import { rateStateMgr } from "../../../../use-case/rate/state-manager";

const DEFAULT_VALUE = "";

export function useSetTargetAlert() {
  const [value, setValue] = useState<string | number>(DEFAULT_VALUE);
  const [isActionBtnDisabled, setActionBtnDisable] = useState(true);
  useDisabledActionBtnIfNoValue(value, setActionBtnDisable);

  function setAction() {
    setAlertForPair(+value, (isSuccess) => {
      setActionBtnDisable(true);
      setValue(DEFAULT_VALUE);

      if (isSuccess) return alert("Successfully set alert");
      return alert("Error setting target");
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return {
    value,
    handleChange,
    setAction,
    isActionBtnDisabled,
  };
}

function useDisabledActionBtnIfNoValue(
  value: string | number,
  setDisabled: (isDisabled: boolean) => any
) {
  useEffect(() => {
    if (value) return setDisabled(false);
    setDisabled(true);
  }, [value, setDisabled]);
}

// function setAction() {
//   setActionBtnDisable(true);
//   const token = authStateMgr.getData("token");
//   const marketType = rateStateMgr.getData("marketType");
//   const targetRate = +value;

//   if (!(token && targetRate)) return;

//   setCurrencyAlert({
//     base,
//     quota,
//     token,
//     marketType,
//     targetRate: +value,
//   }).then(([_, err]) => {
//     setActionBtnDisable(true);
//     setValue(DEFAULT_VALUE);
//     // TODO: Set min rate
//     // TODO: All places using alert to show success messages should be converted to toast or something like that
//     // All data fetchs must be done in hooks and passed to state
//     if (err) alert("Error setting target");
//     return alert("Successfully set alert");
//   });
// }
