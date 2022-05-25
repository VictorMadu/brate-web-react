import { SIGN_IN } from "../_constants/routes";
import { callHtppServer } from "../_utils";
import { Body, Err, Res } from "./types";

export const signIn = (body: Body) => {
  return callHtppServer<Res>({
    url: SIGN_IN,
    method: "post",
    data: body,
  });
};
