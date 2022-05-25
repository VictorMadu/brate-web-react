import {
  ProfileInfo,
  profileSettingPageStateMgr as stateMgr,
} from "../state-manager";
import { UserDataKey } from "../interfaces";
import { authStateMgr } from "../../auth/state-manager";

export class DataValue<K extends keyof ProfileInfo> {
  constructor(private dataKey: UserDataKey, private profileInfoKey: K) {}

  get(): ProfileInfo[K] {
    return getDataValue(this.dataKey, this.profileInfoKey);
  }

  set(value: ProfileInfo[K]) {
    return setDataValue(this.dataKey, this.profileInfoKey, value);
  }
}

export function getDataValue<K extends keyof ProfileInfo>(
  dataKey: UserDataKey,
  profileInfoKey: K
): ProfileInfo[K] {
  const profileInfo = stateMgr.getData(dataKey);
  return profileInfo[profileInfoKey];
}

export function setDataValue<K extends keyof ProfileInfo>(
  dataKey: UserDataKey,
  profileInfoKey: K,
  value: ProfileInfo[K]
) {
  const profileInfo = stateMgr.getData(dataKey);
  const newProfileInfo = { ...profileInfo, [profileInfoKey]: value };
  stateMgr.setData(dataKey, newProfileInfo);
}

export function getValueFromUserState(key: UserDataKey) {
  const userData = authStateMgr.getData("userData");
  return userData?.[key] ?? "";
}

export function setLoadedValue(key: UserDataKey, value: string) {
  const profileInfo = stateMgr.getData(key);
  const newProfileInfo = { ...profileInfo, value };
  stateMgr.setData(key, newProfileInfo);
}
