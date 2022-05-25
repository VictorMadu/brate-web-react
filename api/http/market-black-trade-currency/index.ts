import { BLACK_MARKET_TRADE_CURRENCY } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { uuid } from "../_utils/types";
import { Headers, Body, Res } from "./types";

interface InData {
  token?: string;
  sellerId: uuid;
  base: string;
  quota: string;
  amount: number;
}

export const tradeBlackCurrency = async (inData: InData) => {
  if (!inData.token) return noTokenError();

  const headers: Headers = { authorization: createAuthHeader(inData.token) };

  const data: Body = {
    currency_send: inData.base,
    currency_receive: inData.quota,
    seller_id: inData.sellerId,
    amount_send: inData.amount,
  };
  return await callHtppServer<Res>({
    url: BLACK_MARKET_TRADE_CURRENCY,
    method: "post",
    headers,
    data,
  });
};
