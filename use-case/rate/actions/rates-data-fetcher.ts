import {
  getMarketLatestBlackRate,
  getMarketLatestParallelRate,
} from "../../../api/http";
import { RateState, rateStateMgr } from "../state-manager";
import { PromiseReturnType } from "ts-util-types";
import { authStateMgr } from "../../auth/state-manager";
import { HttpError } from "../../../utils/status";
import { DataServiceFetcher } from "../../_utils/pagination-data-manager";

type ApiResult = PromiseReturnType<
  typeof getMarketLatestBlackRate | typeof getMarketLatestParallelRate
>;

type Result = [RateState["rates"], undefined] | [undefined, HttpError];

export class RatesDataFetcher
  implements DataServiceFetcher<RateState, "rates"> {
  private fetchPageOffset!: number;
  private fetchPageCount!: number;

  async fetch(
    fetchPageOffset: number,
    fetchPageCount: number
  ): Promise<Result> {
    this.fetchPageOffset = fetchPageOffset;
    this.fetchPageCount = fetchPageCount;

    return this.getRates().then(
      ([data, err]) => [data?.currency_pairs, err] as Result
    );
  }

  private getRates() {
    const market = rateStateMgr.getData("market");
    if (market === "black") return this.getBlackRate();
    return this.getParallelRate();
  }

  private getBlackRate() {
    return getMarketLatestBlackRate({
      token: authStateMgr.getData("token"),
      filter: rateStateMgr.getData("filter"),
      bases: [rateStateMgr.getData("base")],
      pageOffset: this.fetchPageOffset,
      pageCount: this.fetchPageCount,
    });
  }

  private getParallelRate() {
    return getMarketLatestParallelRate({
      token: authStateMgr.getData("token"),
      filter: rateStateMgr.getData("filter"),
      base: rateStateMgr.getData("base"),
      pageOffset: this.fetchPageOffset,
      pageCount: this.fetchPageCount,
    });
  }
}
