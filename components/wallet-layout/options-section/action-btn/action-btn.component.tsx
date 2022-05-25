import React from "react";
import Text from "../../../../core/text";
import * as text from "../../../../language/en/app";
import * as styles from "./action-btn.styles";

interface FundCurrencyBtnProps {
  text: string;
  handleClick: () => any;
}

const FundCurrencyBtn = ({ text, handleClick }: FundCurrencyBtnProps) => {
  return (
    <button className={styles.container()} onClick={handleClick}>
      <Text text={text} />
    </button>
  );
};

export default FundCurrencyBtn;
