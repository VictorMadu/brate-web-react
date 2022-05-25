import { updateBereauDeChange } from "../../use-case/auth/actions/update-web-user-data";

export function useAccountSettingsLayout() {
  function cb(isSuccess: boolean) {
    if (isSuccess) alert("Successful");
    else alert("Unsuccessful");
  }

  function handleOn() {
    updateBereauDeChange(true, cb);
  }
  function handleOff() {
    updateBereauDeChange(false, cb);
  }

  return { handleOn, handleOff };
}
