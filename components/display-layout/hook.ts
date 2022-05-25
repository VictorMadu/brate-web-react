import { updateIsDarkMode } from "../../use-case/auth/actions/update-web-user-data";

export function useDisplayLayout() {
  function cb(isSuccess: boolean) {
    if (isSuccess) alert("Successful");
    else alert("Unsuccessful");
  }

  function handleOn() {
    updateIsDarkMode(true, cb);
  }
  function handleOff() {
    updateIsDarkMode(false, cb);
  }

  return { handleOn, handleOff };
}
