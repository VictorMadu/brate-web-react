import { GET_SELLER_PAIRS_FOR_SALE } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { Headers, Query, Res } from "./types";

interface InData {
  token?: string;
  pageOffset: number;
  pageCount: number;
}

export const getSellerPairsForSales = async (inData: InData) => {
  if (!inData.token) return noTokenError();

  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const params: Query = {
    page_count: inData.pageCount,
    page_offset: inData.pageOffset,
  };

  return await callHtppServer<Res>({
    url: GET_SELLER_PAIRS_FOR_SALE,
    method: "get",
    headers,
    params,
  });
};
