import { handleFetchResult, removeBlackRate } from "../../../api/http";
import { authStateMgr } from "../../auth/state-manager";
import { FetchFacadeForReset } from "../../_utils/data-with-pagination-fetch-manager";
import { sellTradeStateMgr } from "../state-manager";
import { TradeSellDataFetcher } from "./sell-data-fetcher";

interface Payload {
  pair: string;
}

const fetcherFacade = new FetchFacadeForReset(
  new TradeSellDataFetcher(),
  sellTradeStateMgr,
  "rates"
);

export function deleteRateOfPairForSale(
  { pair }: Payload,
  cb: (isSuccess: boolean) => any
) {
  const [base, quota] = pair.split(" ");
  const token = authStateMgr.getData("token");

  handleFetchResult(
    () =>
      removeBlackRate({
        token,
        base,
        quota,
      }),
    () => {
      cb(true);
      fetcherFacade.reset();
    },
    () => cb(false)
  );
}
