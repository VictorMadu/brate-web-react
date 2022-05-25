import { GET_USER_DATA } from "../_constants/routes";
import { callHtppServer, createAuthHeader, shouldIncludeInQuery } from "../_utils";
import { RequiredData } from "../_utils/types";
import { Headers, Res, Err, Query } from "./types";

interface Data {
  token: string;
}

export const getUserData = (data: Data) => {
  const headers: Headers = { authorization: createAuthHeader(data.token) };

  return callHtppServer<RequiredData<Res>>({
    url: GET_USER_DATA,
    method: "get",
    headers,
  });
};
