import { GET_BLACK_MARKET_TRADE_DATA } from "../_constants/routes";
import { callHtppServer } from "../_utils";
import { Query, Res } from "./types";

interface InData {
  pageOffset: number;
  pageCount: number;
}

export const getBlackMarketTradeData = (inData: InData) => {
  const params: Query = {
    page_count: inData.pageCount,
    page_offset: inData.pageOffset,
  };
  return callHtppServer<Res>({
    url: GET_BLACK_MARKET_TRADE_DATA,
    method: "get",
    params,
  });
};
