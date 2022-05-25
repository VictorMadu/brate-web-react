import { USER_SIGN_UP } from "../_constants/routes";
import { callHtppServer } from "../_utils";
import { Body, Res } from "./types";

export const signUp = (body: Body) => {
  return callHtppServer<Res>({
    url: USER_SIGN_UP,
    method: "post",
    data: body,
  });
};
