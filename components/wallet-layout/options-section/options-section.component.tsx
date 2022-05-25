import React from "react";
import ActionBtn from "./action-btn";
import WalletPagination from "./wallet-pagination";
import * as styles from "./options-section.styles";
import { useOptionsSection } from "./hook";

const OptionsSection = () => {
  const { handleFundClick, handleWithdrawClick } = useOptionsSection();
  return (
    <div className={styles.container()}>
      <div className="space-x-2">
        <ActionBtn text={"Fund"} handleClick={handleFundClick} />
        <ActionBtn text={"Withdraw"} handleClick={handleWithdrawClick} />
      </div>
      <WalletPagination />
    </div>
  );
};

export default OptionsSection;
