import { useEffect } from "react";
import { ProfileAction } from "../../../use-case/profile-setting-page/actions/profile-action";
import { DataKey } from "./interfaces";

export function useProfileInfoItem(dataKey: DataKey) {
  useEffect(() => {
    const profileAction = new ProfileAction(dataKey);
    profileAction.startAction();
    return () => profileAction.closeAction();
  }, [dataKey]);
}
