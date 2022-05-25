import { DELETE_CURRENCY_ALERT } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { uuid } from "../_utils/types";
import { Headers, Res, Query } from "./types";

interface InData {
  token?: string;
  ids: uuid[];
}

export const deleteCurrencyAlertData = async (inData: InData) => {
  if (!inData.token) return noTokenError();
  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const params: Query = {
    ids: inData.ids.join(","),
  };
  return await callHtppServer<Res>({
    url: DELETE_CURRENCY_ALERT,
    method: "delete",
    headers,
    params,
  });
};
