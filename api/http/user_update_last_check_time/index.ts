import { find } from "lodash";
import { UPDATE_APP_DATA } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { Headers, Res, Body } from "./types";

interface Data {
  token: string;
}

export const editUserData = (inData: Data) => {
  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const data: Body = {
    last_check_time: Date.now() / 1000,
  };
  return callHtppServer<Res>({
    url: UPDATE_APP_DATA,
    method: "post",
    headers,
    data,
  });
};
