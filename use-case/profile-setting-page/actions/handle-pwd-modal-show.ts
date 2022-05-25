import { profileSettingPageStateMgr as stateMgr } from "../state-manager";

export function toggleShowPwdModal() {
  const isShowing = stateMgr.getData("showUserDataChangeModal");
  if (isShowing) {
    hidePwdModal();
  } else {
    showPwdModal();
  }
}

export function showPwdModal() {
  stateMgr.setData("showUserDataChangeModal", true);
}

export function hidePwdModal() {
  stateMgr.setData("showUserDataChangeModal", false);
}
