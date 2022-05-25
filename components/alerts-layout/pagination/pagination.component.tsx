import React from "react";
import Pagination from "../../../core/pagination";
import { AlertsDataFetcher } from "../../../use-case/alerts/actions/alerts-data-fetcher";
import { alertStateMgr } from "../../../use-case/alerts/state-manager";
import * as styles from "./pagination.styles";

const AlertPagination = () => {
  return (
    <div className={styles.container()}>
      <Pagination
        stateMgr={alertStateMgr}
        dataKey={"alerts"}
        fetcher={new AlertsDataFetcher()}
      />
    </div>
  );
};

export default AlertPagination;
