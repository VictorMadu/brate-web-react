import { GET_WALLET_DATA } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { Headers, Res, Query } from "./types";

interface InData {
  token?: string;
  pageOffset: number;
  pageCount: number;
}

export const getWalletData = async (inData: InData) => {
  if (!inData.token) return noTokenError();

  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const params: Query = {
    page_count: inData.pageCount,
    page_offset: inData.pageOffset,
  };

  return await callHtppServer<Res>({
    url: GET_WALLET_DATA,
    method: "get",
    headers,
    params,
  });
};
