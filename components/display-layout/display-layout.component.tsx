import React from "react";
import SwitchBtn from "../../core/switch-btn";
import app from "../../language/en/app";

import * as styles from "./display-layout.styles";
import { useDisplayLayout } from "./hook";

const display = app.settings.display;

const DisplayLayout = () => {
  const { handleOn, handleOff } = useDisplayLayout();
  return (
    <div className={styles.container()}>
      <div className={styles.option()}>
        <p>{display.dark_mode}</p>
        <SwitchBtn handleOn={handleOn} handleOff={handleOff} />
      </div>
    </div>
  );
};

export default DisplayLayout;
