import { useSubscribeWithTransform } from "../../../../hooks";
import { handleCopyRate } from "../../../../use-case/currency-detail/actions/handle-copy-rate";
import { currencyDetailStateMgr } from "../../../../use-case/currency-detail/state-manager";

export function useConvert() {
  const shouldDisableActionBtn = useSubscribeWithTransform(
    currencyDetailStateMgr,
    "baseInputValue",
    shouldDisableTransform
  );

  function handleCopy() {
    handleCopyRate(() => {
      alert("Copied"); // use toast or something like that
    });
  }

  return { shouldDisableActionBtn, handleCopy };
}

function shouldDisableTransform(baseInputValue: number) {
  if (baseInputValue == null || baseInputValue === 0) return true;
  return false;
}
