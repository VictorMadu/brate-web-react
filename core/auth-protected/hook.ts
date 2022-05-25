import { useSubscribeWithTransform } from "../../hooks";
import { authStateMgr } from "../../use-case/auth/state-manager";
import { isAuthTransform } from "../../use-case/auth/transformers";

export function useAuthProtected() {
  const isAuth = useSubscribeWithTransform(
    authStateMgr,
    "token",
    isAuthTransform
  );

  return isAuth;
}
