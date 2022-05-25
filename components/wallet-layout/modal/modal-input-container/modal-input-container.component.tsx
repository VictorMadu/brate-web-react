import React from "react";
import { OrWithArray } from "ts-util-types";

interface ModalInputContainerProps {
  children: OrWithArray<JSX.Element>;
}

const ModalInputContainer = ({ children }: ModalInputContainerProps) => {
  return <div className="mt-6">{children}</div>;
};

export default ModalInputContainer;
