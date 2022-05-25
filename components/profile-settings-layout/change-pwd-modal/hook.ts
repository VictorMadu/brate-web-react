import { useSubscribe } from "../../../hooks";
import {
  hidePwdModal,
  showPwdModal,
} from "../../../use-case/profile-setting-page/actions/handle-pwd-modal-show";
import { profileSettingPageStateMgr as stateMgr } from "../../../use-case/profile-setting-page/state-manager";

export function useChangePwdModal() {
  const show = useSubscribe(stateMgr, "showUserDataChangeModal");

  function handleCancel() {
    hidePwdModal();
  }

  function handleSend() {
    showPwdModal();
  }

  return { show, handleCancel, handleSend };
}
