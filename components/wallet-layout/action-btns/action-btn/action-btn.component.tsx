import React from "react";
import * as styles from "./action-btn.styles";

interface ActionBtnProps {
  text: string;
  handleClick: () => any;
}

const ActionBtn = ({ text, handleClick }: ActionBtnProps) => {
  return (
    <button className={styles.container()} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ActionBtn;
