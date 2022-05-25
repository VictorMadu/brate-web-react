import { handleFetchResult, setBlackRate } from "../../../api/http";
import { authStateMgr } from "../../auth/state-manager";
import { FetchFacadeForReset } from "../../_utils/data-with-pagination-fetch-manager";
import { sellTradeStateMgr } from "../state-manager";
import { TradeSellDataFetcher } from "./sell-data-fetcher";

const fetcherFacade = new FetchFacadeForReset(
  new TradeSellDataFetcher(),
  sellTradeStateMgr,
  "rates"
);

export function createNewPairForSale(cb: (isSuccess: boolean) => any) {
  const token = authStateMgr.getData("token");
  const { pair, inputValue } = sellTradeStateMgr.getData("setRateModal");
  const [base, quota] = pair!.split(" ");

  handleFetchResult(
    () =>
      setBlackRate({
        token,
        base,
        quota,
        rate: +inputValue,
      }),
    () => {
      cb(true);
      fetcherFacade.reset();
    },
    () => cb(false)
  );
}
