import { GET_MARKET_CURRENCIES_RATE } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { Headers, Res, Query } from "./types";

interface InData {
  token: string | undefined;
  pageOffset: number;
  pageCount: number | undefined;
  from: number;
  market: "parallel" | "black";
  steps: number;
  interval: number;
}

const DEFAULT_PAGE_COUNT = 300;

export const getMarketRate = (inData: InData) => {
  const headers: Headers = {}

  if (inData.token) {
    headers['authorization'] =  createAuthHeader(inData.token)
  }

  const params: Query = {
    page_count: inData.pageCount ?? DEFAULT_PAGE_COUNT,
    page_offset: inData.pageOffset,
    include_favourites: !!inData.token,
    from: inData.from,
    market: inData.market,
    steps: inData.steps,
    interval: inData.interval,
  };
  return callHtppServer<Res>({
    url: GET_MARKET_CURRENCIES_RATE,
    method: "get",
    headers,
    params,
  });
};
