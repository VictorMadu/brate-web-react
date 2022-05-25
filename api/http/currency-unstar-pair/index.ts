import { map } from "lodash";
import { HttpError } from "../../../utils/status";
import { UNSTAR_CURRENCY_PAIR } from "../_constants/routes";
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

// TODO: Convert all http functions to async
export const unStarCurrencyPairs = async ({token, currency_pairs}: InData) => {
  if (token == null) return noTokenError()

  const headers: Headers = { authorization: createAuthHeader(token) };
  const data: Body = {
    currency_pairs,
  };

  return await callHtppServer<Res>({
    url: UNSTAR_CURRENCY_PAIR,
    method: "delete",
    headers,
    data,
  });
};

const createCurrencyPairData = (currency_pairs: [Base, Quota][]) =>
  map(currency_pairs, ([base, quota]) => base + " " + quota);
