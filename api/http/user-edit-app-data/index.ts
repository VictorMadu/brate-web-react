import { EDIT_APP_DATA } from "../_constants/routes";
import { callHtppServer, createAuthHeader } from "../_utils";
import { noTokenError } from "../_utils/no-token-error";
import { Headers, Res, Body } from "./types";

interface Data {
  token?: string;
  language?: "English" | "French";
  removeTradeNotificationAfter?: number;
  removePriceAlertNotificationAfter?: number;
  removeFundNotificationAfter?: number;
  bereauDeChange?: boolean;
  darkMode?: boolean;
}

export const editUserAppData = async (inData: Data) => {
  if (!inData.token) return noTokenError();

  const headers: Headers = { authorization: createAuthHeader(inData.token) };
  const data: Body = {
    language: inData.language,
    remove_trade_notification_after: inData.removeTradeNotificationAfter,
    remove_price_alert_notification_after:
      inData.removePriceAlertNotificationAfter,
    remove_fund_notification_after: inData.removeFundNotificationAfter,
    bereau_de_change: inData.bereauDeChange,
    dark_mode: inData.darkMode,
  };
  return await callHtppServer<Res>({
    url: EDIT_APP_DATA,
    method: "post",
    headers,
    data,
  });
};
