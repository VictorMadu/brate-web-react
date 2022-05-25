import React from "react";
import Pagination from "../../../../core/pagination";
import { TradeSellDataFetcher } from "../../../../use-case/sell-trade/actions/sell-data-fetcher";
import { sellTradeStateMgr } from "../../../../use-case/sell-trade/state-manager";
import * as styles from "./pagination.styles";

const AlertPagination = () => {
  return (
    <div className={styles.container()}>
      <Pagination
        stateMgr={sellTradeStateMgr}
        dataKey={"rates"}
        fetcher={new TradeSellDataFetcher()}
      />
    </div>
  );
};

export default AlertPagination;
