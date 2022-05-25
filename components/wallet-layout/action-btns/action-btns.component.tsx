import React from "react";
import ActionBtn from "./action-btn";
import * as text from "../../../language/en/app";
import * as styles from "./action-btns.styles";
import { WalletInfo } from "../../../use-case/wallet/state-manager";
import { useActionBtns } from "./hook";

interface ActionBtnsProps {
  walletInfo: WalletInfo;
}

const ActionBtns = ({ walletInfo }: ActionBtnsProps) => {
  const { handleFund, handleWithdraw, handleTrade } = useActionBtns(walletInfo);
  return (
    <div className={styles.container()}>
      <ActionBtn text={text.fund} handleClick={handleFund} />
      <ActionBtn text={text.withdrawal} handleClick={handleWithdraw} />
      <ActionBtn text={text.trade} handleClick={handleTrade} />
    </div>
  );
};

export default ActionBtns;
