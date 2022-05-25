import { useEffect, useState } from "react";
import { getModalRoot } from "./service";

export const useModalRoot = () => {
  const [elm, setElm] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setElm(document.createElement("div"));
  }, []);

  useEffect(() => {
    if (!elm) return;
    const modalRoot = getModalRoot();
    modalRoot.appendChild(elm);
    return () => {
      modalRoot.removeChild(elm);
    };
  }, [elm]);

  return elm;
};
