import React from "react";
import { OrWithArray } from "ts-util-types";
import * as styles from "./modal-header.styles";

interface ModalHeaderProps {
  children: OrWithArray<JSX.Element>;
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <p className={styles.container()}>{children}</p>;
};

export default ModalHeader;
