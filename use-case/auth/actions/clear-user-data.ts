import { authStateMgr } from "../state-manager";

export function clearUserData() {
  authStateMgr.setData("token", undefined);
  authStateMgr.setData("userData", undefined);
  authStateMgr.setData("appData", undefined);
  authStateMgr.setData("userDataError", undefined);
  authStateMgr.setData("appDataError", undefined);
  authStateMgr.setData("expiresIn", 0);
}
