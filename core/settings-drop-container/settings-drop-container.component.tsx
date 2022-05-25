import React from "react";
import { OrWithArray } from "ts-util-types";
import Btn from "./btn";
import * as styles from "./settings-drop-container.styles";

interface SettingDropContainerProps {
  children: OrWithArray<JSX.Element>;
}

const SettingDropContainer = ({ children }: SettingDropContainerProps) => {
  return <div className={styles.container()}>{children}</div>;
};

SettingDropContainer.Btn = Btn;

export default SettingDropContainer;
