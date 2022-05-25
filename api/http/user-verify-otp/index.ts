import { VERIFY_OTP } from "../_constants/routes";
import { callHtppServer } from "../_utils";
import { RequiredData } from "../_utils/types";
import { Body, Res, Err, Params } from "./types";

interface Data {
  email: string;
  otp: string;
}

export const verifyOtp = (data: Data) => {
  const params: Params = { email: data.email };
  const body: Body = {
    otp: data.otp,
    include_token: true,
  };
  return callHtppServer<RequiredData<Res>>({
    url: VERIFY_OTP + "/" + params.email,
    method: "post",
    data: body,
  });
};
