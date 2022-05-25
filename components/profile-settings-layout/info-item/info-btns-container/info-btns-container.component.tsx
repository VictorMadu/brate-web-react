import React from "react";
import { OrWithArray } from "ts-util-types";
import * as styles from "./info-btns-container.styles";

interface InfoBtnsContainerProps {
  children: OrWithArray<JSX.Element>;
}

const InfoBtnsContainer = ({ children }: InfoBtnsContainerProps) => {
  return <div className={styles.container()}>{children}</div>;
};

export default InfoBtnsContainer;
