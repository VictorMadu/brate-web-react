import { FuncParams } from "ts-util-types";
import {
  editUserAppData,
  getAppData,
  handleFetchResult,
} from "../../../api/http";
import { authStateMgr } from "../state-manager";

type Cb = (isSuccess: boolean) => any;

export function updateDeleteTradeNotificationAfter(time: number, cb: Cb) {
  return updateWebData("removeTradeNotificationAfter", time, cb);
}

export function updateDeletePriceAlertNotificationAfter(time: number, cb: Cb) {
  return updateWebData("removePriceAlertNotificationAfter", time, cb);
}

export function updateDeleteFundNotificationAfter(time: number, cb: Cb) {
  return updateWebData("removeFundNotificationAfter", time, cb);
}

// TODO: Change name. Instead of darkMode, say appColorTheme of type: "light" | "dark"
export function updateIsDarkMode(isDarkMode: boolean, cb: Cb) {
  return updateWebData("darkMode", isDarkMode, cb);
}

export function updateBereauDeChange(isBereauDeChange: boolean, cb: Cb) {
  return updateWebData("bereauDeChange", isBereauDeChange, cb);
}

type InData = FuncParams<typeof editUserAppData>[0];

function updateWebData<Type extends keyof InData>(
  type: Type,
  data: InData[Type],
  cb: Cb
) {
  const token = authStateMgr.getData("token");
  return handleFetchResult(
    () =>
      editUserAppData({
        token,
        [type]: data,
      }),
    () => cb(true),
    () => cb(false)
  );
}
