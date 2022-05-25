import { map } from "lodash";
import { HttpError } from "../../../utils/status";
import { STAR_CURRENCY_PAIR } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { Headers, Body, Res } from "./types";

type Base = string;
type Quota = string;
export type Pair = `${Base} ${Quota}`;

interface InData {
  token?: string;
  currency_pairs: Pair[];
}

export const starCurrencyPairs = async ({token, currency_pairs}: InData) => {
  if (!token) return noTokenError()

  const headers: Headers = { authorization: createAuthHeader(token) };
  const data: Body = {
    currency_pairs,
  };

  return await callHtppServer<Res>({
    url: STAR_CURRENCY_PAIR,
    method: "put",
    headers,
    data,
  });
};

const createCurrencyPairData = (currency_pairs: [Base, Quota][]) =>
  map(currency_pairs, ([base, quota]) => base + " " + quota);
