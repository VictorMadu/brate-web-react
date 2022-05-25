import React from "react";
import Pagination from "../../../core/pagination";
import { NotificationsDataFetcher } from "../../../use-case/notification/actions/data-fetcher";
import { notificationStateMgr } from "../../../use-case/notification/state-manager";
import * as styles from "./pagination.styles";

const NotificationPagination = () => {
  return (
    <div className={styles.container()}>
      <Pagination
        stateMgr={notificationStateMgr}
        dataKey={"notifications"}
        fetcher={new NotificationsDataFetcher()}
      />
    </div>
  );
};

export default NotificationPagination;
