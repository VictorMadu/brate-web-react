import { SEND_OTP } from "../_constants/routes";
import { callHtppServer } from "../_utils";
import { Params, Res } from "./types";

export const sendOtp = (data: Params) => {
  return callHtppServer<Res>({
    url: SEND_OTP + "/" + data.email,
    method: "post",
  });
};
