import { getBlackMarketTradeData } from "../../../api/http";
import { HttpError } from "../../../utils/status";
import { DataServiceFetcher } from "../../_utils/data-with-pagination-fetch-manager";
import { TradeBuyState } from "../state-manager";

type Result = [TradeBuyState["traders"], undefined] | [undefined, HttpError];

export class TradeBuyDataFetcher
  implements DataServiceFetcher<TradeBuyState, "traders"> {
  async fetch(pageOffset: number, pageCount: number): Promise<Result> {
    return getBlackMarketTradeData({
      pageOffset,
      pageCount,
    }).then(([data, err]) => [data?.traders, err] as Result);
  }
}
