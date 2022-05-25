import { SET_BLACK_MARKET_RATE } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { Headers, Body, Res } from "./types";

interface InData {
  token?: string;
  base: string;
  quota: string;
}

export const removeBlackRate = async (inData: InData) => {
  if (inData.token == null) return noTokenError();

  const headers: Headers = { authorization: createAuthHeader(inData.token) };

  const data: Body = {
    base: inData.base,
    quota: inData.quota,
  };
  return await callHtppServer<Res>({
    url: SET_BLACK_MARKET_RATE,
    method: "post",
    headers,
    data,
  });
};
