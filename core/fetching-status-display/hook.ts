import { useSubscribe } from "../../hooks";
import { BaseStateManager } from "../../use-case/_utils/state-manager/base-manager";
import { DataFetchingState } from "../../use-case/_utils/state-manager/interfaces/states";
import * as text from "../../language/en/app";
import { DataFetching } from "../../utils/status";

export function useFetchingStatusDisplay(
  stateMgr: BaseStateManager<DataFetchingState>
) {
  const fetchingStatus = useSubscribe(stateMgr, "dataFetching");
  return getText(fetchingStatus);
}

function getText(fetchingStatus: DataFetching | undefined) {
  switch (fetchingStatus) {
    case DataFetching.FETCHING:
      return text.fetching_data;
    case DataFetching.SUCCESS:
      return text.fetching_successfully;
    case DataFetching.FAILED:
      return text.fetching_failed;

    default:
      return undefined;
  }
}
