import { useRouter } from "next/router";
import { authPageStateMgr } from "../../../use-case/auth-page/state-manager";

export function useAuthBtns() {
  const router = useRouter();

  function handleSignUp() {
    authPageStateMgr.setData("authType", "Signup");
    router.push("/auth");
  }

  function handleLogIn() {
    authPageStateMgr.setData("authType", "Login");
    router.push("/auth");
  }

  return { handleSignUp, handleLogIn };
}
