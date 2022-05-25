import {
  getCurrencyList,
  getMarketLatestBlackRate,
  getMarketLatestParallelRate,
  handleFetchResult,
} from "../../api/http";
import { currencyStateMgr } from "./state-manager";
import { PromiseReturnType } from "ts-util-types";
import { forEach } from "lodash";

type ApiResult = PromiseReturnType<typeof getCurrencyList>;
type Data = Exclude<ApiResult[0], undefined>;
type Err = Exclude<ApiResult[1], undefined>;

export class CurrencyDataFetcher {
  async fetchCurrencyList() {
    handleFetchResult(
      getCurrencyList,
      (data) => this.handleApiDataResult(data),
      (err) => this.handleApiErrResult(err)
    );
  }

  private handleApiDataResult(data: Data) {
    const currencyObj: Record<string, string> = {};

    forEach(data.currencies, (currency) =>
      this.setCurrencyInObj(currencyObj, currency)
    );
    currencyStateMgr.setData("list", currencyObj);
  }

  private setCurrencyInObj(
    obj: Record<string, string>,
    currency: {
      short: string;
      long: string;
    }
  ) {
    obj[currency.short] = currency.long;
  }

  private handleApiErrResult(err: Err) {
    currencyStateMgr.setData("httpError", err);
  }
}
