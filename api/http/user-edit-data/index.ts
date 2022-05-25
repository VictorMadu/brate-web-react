import { find } from "lodash";
import { EDIT_USER_DATA } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { Headers, Res, Body } from "./types";

interface Data {
  token?: string;
  email?: string;
  name?: string;
  phone?: string;
}

export const editUserData = async (inData: Data) => {
  if (!inData.token) return noTokenError();
  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const data: Body = {
    email: inData.email,
    name: inData.name,
    phone: inData.phone,
  };
  return await callHtppServer<Res>({
    url: EDIT_USER_DATA,
    method: "post",
    headers,
    data,
  });
};
