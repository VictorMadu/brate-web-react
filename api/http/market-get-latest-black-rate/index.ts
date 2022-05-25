import { DEFAULT_PAGE_COUNT } from "../_constants/defaults";
import { GET_BLACK_MARKET_RATE } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { Headers, Res, Query } from "./types";

interface InData {
  token?: string;
  pageOffset: number;
  pageCount?: number;
  filter?: "all" | "favourite" | "unfavourite";
  bases?: string[];
}

export const getMarketLatestBlackRate = (inData: InData) => {
  const { token } = inData;
  const headers: Headers = {
    authorization: token ? createAuthHeader(token) : undefined,
  };
  const params: Query = {
    page_count: inData.pageCount ?? DEFAULT_PAGE_COUNT,
    page_offset: inData.pageOffset,
    bases: getBases(inData.bases),
    filter: inData.filter || "all",
  };
  return callHtppServer<Res>({
    url: GET_BLACK_MARKET_RATE,
    method: "get",
    headers,
    params,
  });
};

const getBases = (bases?: string[]) => {
  if (!bases || !bases.length) return undefined;
  return bases.join(",");
};
