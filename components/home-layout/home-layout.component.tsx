import React from "react";
import * as styles from "./home-layout.styles";
import BaseContainer from "./base-currency-container";
import FilterContainer from "./filter-container";
import PriceTable from "./price-table";
import { useRates } from "./hook";
import FetchingStatusDisplay from "../../core/fetching-status-display";
import If from "../../core/if";
import { DataFetching } from "../../utils/status";

// FIXME: When there is change in filter or market, currency name list is fetched again from server. Prevent this
export const HomeLayout = () => {
  const { fetchingStatus, stateMgr } = useRates();
  return (
    <div className={styles.container()}>
      <div className={styles.settingContainer()}>
        <BaseContainer />
        <FilterContainer />
      </div>
      {/* FIXME: There are duplication of this */}
      <If
        deps={[fetchingStatus !== DataFetching.SUCCESS]}
        Component={() => <FetchingStatusDisplay stateMgr={stateMgr} />}
      />
      <PriceTable />
    </div>
  );
};

export default HomeLayout;
