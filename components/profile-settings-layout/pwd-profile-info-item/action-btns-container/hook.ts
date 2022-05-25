import { toggleShowPwdModal } from "../../../../use-case/profile-setting-page/actions/handle-pwd-modal-show";

export function useActionBtnsContainer() {
  function handleBtnClick() {
    toggleShowPwdModal();
  }

  return { handleBtnClick };
}
