import React from "react";
import * as styles from "./alerts-layout.styles";
import FilterDropdown from "./filter-dropdown";
import AlertPagination from "./pagination/pagination.component";
import AlertTable from "./alert-table/alert-table.component";
import { useAlerts } from "./hook";
import { DataFetching } from "../../utils/status";
import If from "../../core/if";
import MarketDropdown from "./market-dropdown";
import FetchingStatusDisplay from "../../core/fetching-status-display";

const AlertsLayout = () => {
  const { fetchingStatus, stateMgr } = useAlerts();
  return (
    <div className={styles.container()}>
      <div className={styles.settingsContainer()}>
        <div className={styles.dropdownContainer()}>
          <FilterDropdown />
          <MarketDropdown />
        </div>
        <AlertPagination />
      </div>
      {/* FIXME: There are duplication of this */}
      <If
        deps={[fetchingStatus !== DataFetching.SUCCESS]}
        Component={() => <FetchingStatusDisplay stateMgr={stateMgr} />}
      />
      <AlertTable />
    </div>
  );
};

export default AlertsLayout;

// TODO: For switchCase dataFetching.FETCHING status show something like a spinner or something like that. It should not block the alertTable

/* TODO: IdeaCreate a multiple switchCase component that can take multple values as array and for each value display a component for each of them in the order of apperance. I dont think it may be useful here. Idea just came to my mind */
