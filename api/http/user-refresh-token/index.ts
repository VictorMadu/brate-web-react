import { REFRESH_TOKEN } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { Res, Headers } from "./types";

interface InData {
  token: string;
}

export const refreshToken = (inData: InData) => {
  const headers: Headers = { authorization: createAuthHeader(inData.token) };

  return callHtppServer<Res>({
    url: REFRESH_TOKEN,
    method: "post",
    headers,
  });
};
