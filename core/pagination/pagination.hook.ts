import { useSubscribeWithTransform, useSubscribe } from "../../hooks";
import {
  ArrDataKeyOfStateManager,
  BatchDataFetchState,
  DataServiceFetcher,
  FetchFacadeForNavigation,
  ManagerState,
} from "../../use-case/_utils/data-with-pagination-fetch-manager";
import { BaseStateManager } from "../../use-case/_utils/state-manager/base-manager";
import { DataFetching } from "../../utils/status";

export function usePagination<
  SM extends BaseStateManager<BatchDataFetchState>,
  K extends ArrDataKeyOfStateManager<SM>
>(stateMgr: SM, dataKey: K, fetcher: DataServiceFetcher<ManagerState<SM>, K>) {
  const notSuccessFetched = useNotSuccessFetched(stateMgr);
  const isLowerLimit = useIsLowerLimit(stateMgr);
  const isUpperLimit = useIsUpperLimit(stateMgr, dataKey);

  const isPrevDisabled = notSuccessFetched || isLowerLimit;
  const isNextDisabled = notSuccessFetched || isUpperLimit;

  const fetcherFacade = new FetchFacadeForNavigation(
    fetcher,
    stateMgr,
    dataKey
  );

  function handleFetchPrevData() {
    if (isPrevDisabled) return;
    fetcherFacade.getPrevious();
  }

  function handleFetchNextData() {
    if (isNextDisabled) return;
    fetcherFacade.getNext();
  }

  return {
    isPrevDisabled,
    isNextDisabled,
    handleFetchPrevData,
    handleFetchNextData,
  };
}

function useNotSuccessFetched(stateMgr: BaseStateManager<BatchDataFetchState>) {
  return !useSubscribeWithTransform(
    stateMgr,
    "dataFetching",
    isFetchSuccessTransform
  );
}

function useIsLowerLimit(stateMgr: BaseStateManager<BatchDataFetchState>) {
  return useSubscribeWithTransform(
    stateMgr,
    "pageOffset",
    isLowerLimitTransform
  );
}

function useIsUpperLimit<
  SM extends BaseStateManager<BatchDataFetchState>,
  K extends ArrDataKeyOfStateManager<SM>
>(stateMgr: SM, dataKey: K) {
  const pageCount = useSubscribe(stateMgr, "pageCount");
  const dataLength = (useSubscribe(stateMgr, dataKey) as any[]).length;

  return dataLength < pageCount + 1;
}

function isFetchSuccessTransform(dataFetching: DataFetching | undefined) {
  return dataFetching === DataFetching.SUCCESS;
}

function isLowerLimitTransform(offset: number) {
  return offset === 0;
}
