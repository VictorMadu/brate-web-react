import { FUND_WALLET } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { Headers, Body, Res } from "./types";

interface InData {
  token?: string;
  currency: string;
  amount: number;
}

export const fundWallet = async (inData: InData) => {
  if (!inData.token) return noTokenError();
  const headers: Headers = { authorization: createAuthHeader(inData.token) };

  const data: Body = { currency: inData.currency, amount: inData.amount };
  return await callHtppServer<Res>({
    url: FUND_WALLET,
    method: "post",
    headers,
    data,
  });
};
