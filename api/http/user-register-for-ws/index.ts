import { REGISTER_FOR_WS } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { Res, Headers } from "./types";

interface InData {
  token: string;
}

export const registerForWs = (inData: InData) => {
  const headers: Headers = { authorization: createAuthHeader(inData.token) };

  return callHtppServer<Res>({
    url: REGISTER_FOR_WS,
    method: "post",
    headers,
  });
};
