import React from "react";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Icon from "./icon";
import { useToggleBtn } from "./hook";
import * as styles from "./toggle-btn.styles";

const ToggleBtn = () => {
  const handleToggle = useToggleBtn();
  return (
    <div className={styles.container()}>
      <button className={styles.toggleBtn()} onClick={handleToggle}>
        <Icon icon={faArrowUp} />
        <Icon icon={faArrowDown} />
      </button>
    </div>
  );
};

export default ToggleBtn;
