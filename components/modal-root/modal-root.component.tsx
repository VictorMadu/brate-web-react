import React from "react";
import ReactDOM from "react-dom";
import If from "../../core/if";
import { useModalRoot } from "./hook";
import { IProps } from "./modal-root.interface";

const ModalRoot = (props: IProps) => {
  const rootElm = useModalRoot();
  return (
    <If
      deps={[rootElm]}
      Component={({ deps: [rootElm] }) => {
        return ReactDOM.createPortal(props.children, rootElm);
      }}
    />
  );
};

export default ModalRoot;
