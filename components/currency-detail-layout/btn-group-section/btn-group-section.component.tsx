import React from "react";
import If from "../../../core/if";
import * as text from "../../../language/en/app";
import { showSection } from "../feature-section/constant";
import * as styles from "./btn-group-section.styles";
import { useBtnGroup } from "./hook";

interface BtnGroupSectionProps {
  handleSetSection: (section: showSection) => any;
}

const BtnGroupSection = ({ handleSetSection }: BtnGroupSectionProps) => {
  const {
    isNotAuth,
    isBereauDeChange,
    handleTradeBtnClick,
    handleConvertBtnClick,
    handleSetAlertBtnClick,
  } = useBtnGroup(handleSetSection);

  return (
    <div className={styles.container()}>
      <button className={styles.btn()} onClick={handleConvertBtnClick}>
        {text.convert}
      </button>
      <button
        className={styles.btn()}
        disabled={isNotAuth}
        onClick={handleSetAlertBtnClick}
      >
        {text.set_alert}
      </button>
      <button
        className={styles.btn(isNotAuth)}
        disabled={isNotAuth}
        onClick={handleTradeBtnClick}
      >
        <If
          deps={[isBereauDeChange]}
          Component={() => <>{text.sell}</>}
          Else={() => <>{text.buy}</>}
        />
      </button>
    </div>
  );
};

export default BtnGroupSection;
