import React from "react";
import FilterTypeDropdown from "./filter-type-dropdown";
import Pagination from "./pagination";
import NotificationTable from "./notification-table";
import * as styles from "./notification-layout.styles";

// TODO: Add setting for stop receiving notification for a certain group
const NotificationsLayout = () => {
  return (
    <div className={styles.container()}>
      <div className={styles.settingsContainer()}>
        <FilterTypeDropdown />
        <Pagination />
      </div>

      <div className={styles.notificationContainer()}>
        <NotificationTable />
      </div>
    </div>
  );
};

export default NotificationsLayout;
