import React from "react";
import * as text from "../../../../language/en/app";
import { TradeBuyState } from "../../../../use-case/buy-trade/state-manager";
import * as styles from "./action-btns.styles";
import { useActionBtns } from "./hook";

interface ActionBtnsProps {
  traderInfo: TradeBuyState["traders"][number];
}

const ActionBtns = ({ traderInfo }: ActionBtnsProps) => {
  const { handleBuy } = useActionBtns(traderInfo);
  return (
    <div
      className={styles.container()}
      onClick={() => {
        console.log("clicked");
      }}
    >
      <button className={styles.btn()} onClick={handleBuy}>
        {text.buy}
      </button>
    </div>
  );
};

export default ActionBtns;
