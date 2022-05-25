import { getSellerPairsForSales } from "../../../api/http";
import { HttpError } from "../../../utils/status";
import { authStateMgr } from "../../auth/state-manager";
import { DataServiceFetcher } from "../../_utils/data-with-pagination-fetch-manager";

import { TradeSellState } from "../state-manager";

type Result = [TradeSellState["rates"], undefined] | [undefined, HttpError];

export class TradeSellDataFetcher
  implements DataServiceFetcher<TradeSellState, "rates"> {
  async fetch(pageOffset: number, pageCount: number): Promise<Result> {
    return getSellerPairsForSales({
      token: authStateMgr.getData("token"),
      pageOffset,
      pageCount,
    }).then(([data, err]) => [data?.rates, err] as Result);
  }
}
