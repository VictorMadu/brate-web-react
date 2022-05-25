import { handleFetchResult, setBlackRate } from "../../../api/http";
import { authStateMgr } from "../../auth/state-manager";
import { FetchFacadeForReset } from "../../_utils/data-with-pagination-fetch-manager";
import { sellTradeStateMgr } from "../state-manager";
import { TradeSellDataFetcher } from "./sell-data-fetcher";

interface Payload {
  pair: string;
  newRate: string;
}

// TODO: Too much duplication of this
const fetcherFacade = new FetchFacadeForReset(
  new TradeSellDataFetcher(),
  sellTradeStateMgr,
  "rates"
);

export function editRateOfPairForSale(
  { pair, newRate }: Payload,
  cb: (isSuccess: boolean) => any
) {
  const [base, quota] = pair.split(" ");
  const token = authStateMgr.getData("token");

  handleFetchResult(
    () =>
      setBlackRate({
        token,
        base,
        quota,
        rate: +newRate,
      }),
    // TODO: Instead of reset rely on websocket to edit the data, edit ourselves or refresh data but not reset (useing same pageOffset and pageCount as before)
    () => {
      cb(true);
      fetcherFacade.reset();
    },
    () => cb(false)
  );
}
