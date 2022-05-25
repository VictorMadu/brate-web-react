import React from "react";
import Text from "../../../../core/text";
import * as styles from "./action-btn.styles";

interface ActionBtnProps {
  text: string;
  handleClick: () => any;
  disabled?: boolean;
}

const ActionBtn = ({ text, handleClick, disabled }: ActionBtnProps) => {
  return (
    <div className={styles.container()}>
      <button
        className={styles.btn(disabled)}
        onClick={handleClick}
        disabled={disabled}
      >
        <Text text={text} />
      </button>
    </div>
  );
};

export default ActionBtn;
