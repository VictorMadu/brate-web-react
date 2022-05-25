import { handleFetchResult, editUserData } from "../../../api/http";
import { authStateMgr } from "../../auth/state-manager";
import { UserDataKey } from "../interfaces";
import {
  getDataValue,
  getValueFromUserState,
  setDataValue,
  setLoadedValue,
} from "./data-value-action";

interface UserData {
  email: string;
  name: string;
  phone: string;
  id: string;
}

// TODO: For cb: User error code or something like that for this and other actions with cb
export function saveValue(key: UserDataKey, cb: (isSuccess: boolean) => any) {
  setDataValue(key, "isValueEditable", false);
  const token = authStateMgr.getData("token");
  const value = getDataValue(key, "value");

  handleFetchResult(
    () => editUserData({ token, [key]: value }),
    () => {
      cb(true);
      updateUserDataWithValue(key, value);
    },
    () => {
      cb(false);
      updateValueWithUserData(key, value);
    }
  );
}

function updateUserDataWithValue(key: UserDataKey, value: string) {
  const userData = authStateMgr.getData("userData") as UserData;
  const newUserData = { ...userData, [key]: value };
  authStateMgr.setData("userData", newUserData);
}

function updateValueWithUserData(key: UserDataKey, value: string) {
  const userValue = getValueFromUserState(key);
  setLoadedValue(key, userValue);
}
