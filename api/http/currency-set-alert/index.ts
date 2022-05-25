import { map } from "lodash";
import { SET_CURRENCY_ALERT } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { Headers, Body, Res } from "./types";

interface InData {
  token?: string;
  marketType: "parallel" | "black";
  targetRate: number;
  base: string;
  quota: string;
}

export async function setCurrencyAlert(inData: InData) {
  if (inData.token == null) return noTokenError();
  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const data: Body = {
    market_type: inData.marketType,
    target_rate: inData.targetRate,
    base: inData.base,
    quota: inData.quota,
  };

  return await callHtppServer<Res>({
    url: SET_CURRENCY_ALERT,
    method: "put",
    headers,
    data,
  });
}
