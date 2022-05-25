import { useRouter } from "next/router";
import { clearUserData } from "../../../use-case/auth/actions/clear-user-data";

export function useLogoutBtn() {
  const router = useRouter();
  function handleLogout() {
    clearUserData();
    router.push("/");
  }

  return { handleLogout };
}
