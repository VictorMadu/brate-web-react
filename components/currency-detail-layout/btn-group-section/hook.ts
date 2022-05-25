import { useRouter } from "next/router";
import { useSubscribeWithTransform } from "../../../hooks";
import { authStateMgr } from "../../../use-case/auth/state-manager";
import {
  isAuthTransform,
  getBereauDeChange,
} from "../../../use-case/auth/transformers";
import { showSection } from "../feature-section/constant";

export function useBtnGroup(handleSetSection: (section: showSection) => any) {
  const router = useRouter();
  const isNotAuth = !useSubscribeWithTransform(
    authStateMgr,
    "token",
    isAuthTransform
  );
  const isBereauDeChange = useSubscribeWithTransform(
    authStateMgr,
    "appData",
    getBereauDeChange
  );

  function handleTradeBtnClick() {
    router.push("/trade");
  }

  function handleConvertBtnClick() {
    handleSetSection(showSection.CONVERT_SECTION);
  }

  function handleSetAlertBtnClick() {
    handleSetSection(showSection.SET_ALERT_SECTION);
  }

  return {
    isNotAuth,
    isBereauDeChange,
    handleTradeBtnClick,
    handleConvertBtnClick,
    handleSetAlertBtnClick,
  };
}
