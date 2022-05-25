import { AuthState } from "./state-manager";

export function isAuthTransform(token: string | undefined) {
  return !!token;
}

export function getBereauDeChange(appData: AuthState["appData"]) {
  return appData?.isBereauDeChange;
}
