import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import * as styles from "./pagination.styles";
import { BaseStateManager } from "../../use-case/_utils/state-manager/base-manager";
import { usePagination } from "./pagination.hook";
import {
  ArrDataKeyOfStateManager,
  DataServiceFetcher,
  ManagerState,
} from "../../use-case/_utils/data-with-pagination-fetch-manager";
import { BatchDataFetchState } from "./pagination.interfaces";

interface PaginationProps<
  SM extends BaseStateManager<BatchDataFetchState>,
  K extends ArrDataKeyOfStateManager<SM>
> {
  stateMgr: SM;
  dataKey: K;
  fetcher: DataServiceFetcher<ManagerState<SM>, K>;
}

export const Pagination = <
  SM extends BaseStateManager<BatchDataFetchState>,
  K extends ArrDataKeyOfStateManager<SM>
>({
  stateMgr,
  dataKey,
  fetcher,
}: PaginationProps<SM, K>) => {
  const {
    isPrevDisabled,
    isNextDisabled,
    handleFetchPrevData,
    handleFetchNextData,
  } = usePagination(stateMgr, dataKey, fetcher);

  return (
    <div className={styles.container()}>
      <button
        className={styles.button(isPrevDisabled)}
        onClick={handleFetchPrevData}
        disabled={isPrevDisabled}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="1x"
          className={styles.icon()}
        />
      </button>

      <button
        className={styles.button(isNextDisabled)}
        onClick={handleFetchNextData}
        disabled={isNextDisabled}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="1x"
          className={styles.icon()}
        />
      </button>
    </div>
  );
};

export default Pagination;
