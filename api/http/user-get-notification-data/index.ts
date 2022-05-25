import { GET_NOTIFICATIONS_DATA } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { Headers, Query, Res } from "./types";

interface InData {
  token?: string;
  pageOffset: number;
  pageCount: number;
  type: Query["type"];
}

export const getNotificationData = async (inData: InData) => {
  if (!inData.token) return noTokenError();
  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const params: Query = {
    page_count: inData.pageCount,
    page_offset: inData.pageOffset,
    type: inData.type,
  };

  return await callHtppServer<Res>({
    url: GET_NOTIFICATIONS_DATA,
    method: "get",
    headers,
    params,
  });
};
