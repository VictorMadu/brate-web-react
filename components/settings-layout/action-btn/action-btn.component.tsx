import React from "react";
import * as styles from "./action-btn.styles";

interface BtnActionProps {
  font: string;
  text: string;
  onClick: () => any;
}

const ActionBtn = ({ font, text, onClick }: BtnActionProps) => {
  return (
    <button className={styles.container(font)} onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionBtn;
