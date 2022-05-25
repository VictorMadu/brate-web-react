import { GET_CURRENCY_LIST } from "../_constants/routes";
import { callHtppServer } from "../_utils";
import { Res } from "./types";

export const getCurrencyList = () => {
  return callHtppServer<Res>({
    url: GET_CURRENCY_LIST,
    method: "get",
  });
};
