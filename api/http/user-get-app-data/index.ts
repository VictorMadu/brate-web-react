import { find } from "lodash";
import { GET_APP_DATA } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { RequiredData } from "../_utils/types";
import { Headers, Res, Err, Query } from "./types";

interface Data {
  token?: string;
}

export const getAppData = async (inData: Data) => {
  if (!inData.token) return noTokenError();

  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const params: Query = {};
  return await callHtppServer<RequiredData<Res>>({
    url: GET_APP_DATA,
    method: "get",
    headers,
    params,
  });
};
