import { DELETE_NOTIFICATIONS } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { uuid } from "../_utils/types";
import { Query, Res, Headers } from "./types";

interface InData {
  token: string;
  ids: uuid[];
}

export const deleteNotifications = (inData: InData) => {
  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const params: Query = { ids: inData.ids };
  return callHtppServer<Res>({
    url: DELETE_NOTIFICATIONS,
    method: "delete",
    headers,
    params,
  });
};
