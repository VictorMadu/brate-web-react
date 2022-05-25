import { DEFAULT_PAGE_COUNT } from "../_constants/defaults";
import { GET_PARALLEL_MARKET_RATE } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { Headers, Res, Query } from "./types";

interface InData {
  token?: string;
  pageOffset: number;
  pageCount?: number;
  filter?: "all" | "favourite" | "unfavourite";
  base?: string;
}

export const getMarketLatestParallelRate = (inData: InData) => {
  const { token } = inData;
  const headers: Headers = {
    authorization: token ? createAuthHeader(token) : undefined,
  };
  const params: Query = {
    page_count: inData.pageCount ?? DEFAULT_PAGE_COUNT,
    page_offset: inData.pageOffset,
    base: inData.base || "USD",
    filter: inData.filter || "all",
  };
  return callHtppServer<Res>({
    url: GET_PARALLEL_MARKET_RATE,
    method: "get",
    headers,
    params,
  });
};
