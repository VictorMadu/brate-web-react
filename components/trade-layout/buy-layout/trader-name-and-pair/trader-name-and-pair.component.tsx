import React from "react";
import { TradeBuyState } from "../../../../use-case/buy-trade/state-manager";
import { useTraderNameAndPair } from "./hook";
import * as styles from "./trader-name-and-pair.styles";

interface TraderNameAndPairProps {
  traderInfo: TradeBuyState["traders"][number];
}

const TraderNameAndPair = ({ traderInfo }: TraderNameAndPairProps) => {
  const { pairForDisplay, sellerName } = useTraderNameAndPair(traderInfo);
  return (
    <div className={styles.container()}>
      <div className={styles.nameContainer()}>
        <p className={styles.symbol()}>{pairForDisplay}</p>
        <p className={styles.name()}>{sellerName}</p>
      </div>
    </div>
  );
};

export default TraderNameAndPair;
