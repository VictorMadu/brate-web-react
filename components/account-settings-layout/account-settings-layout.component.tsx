import React from "react";
import SwitchBtn from "../../core/switch-btn";
import * as text from "../../language/en/app";
import * as styles from "./account-settings-layout.styles";
import { useAccountSettingsLayout } from "./hook";

const AccountSettingsLayout = () => {
  const { handleOn, handleOff } = useAccountSettingsLayout();

  return (
    <div className={styles.container()}>
      <div className={styles.option()}>
        <p>{text.switch_to_bereau_de_change}</p>
        <SwitchBtn handleOn={handleOn} handleOff={handleOff} />
      </div>
    </div>
  );
};

export default AccountSettingsLayout;
