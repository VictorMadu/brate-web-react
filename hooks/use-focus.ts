import { useState } from "react";

type Func = (...args: any[]) => any;

export const useFocus = (onFocuCb?: Func, onBlurCb?: Func) => {
  const [hasFocus, setHasFocus] = useState(false);
  const handleFocus = () => {
    onFocuCb?.();
    setHasFocus(true);
  };
  const handleBlur = () => {
    setHasFocus(false);
    onBlurCb?.();
  };

  return { hasFocus, handleFocus, handleBlur };
};
