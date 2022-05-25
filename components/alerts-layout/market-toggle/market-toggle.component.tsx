import React from "react";
import ToggleBtn from "../../../core/toggle-btn";
import * as styles from "./market-toggle.styles";
import app from "../../../language/en/app";
import { connect, ConnectedProps } from "../../../core/hoc";
import { alertStateMgr } from "../../../use-case/alerts/state-manager";

type MarketSwitchProps = ConnectedProps<typeof connector>;

const MarketToggleBtn = ({ toggleMarket }: MarketSwitchProps) => {
  return (
    <div className={styles.container()}>
      <ToggleBtn
        onText={app.market_type.parallel}
        offText={app.market_type.black}
        onToggle={toggleMarket}
      />
    </div>
  );
};

const mapStateToProps = () => ({
  toggleMarket: (isOn: boolean) => {
    const value = isOn ? "parallel" : "black";
    alertStateMgr.setData("market", value);
  },
});

const connector = connect(mapStateToProps);

export default connector(MarketToggleBtn);
