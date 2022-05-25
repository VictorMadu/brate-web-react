import { profileSettingPageStateMgr as stateMgr } from "../../../../use-case/profile-setting-page/state-manager";
import { useSubscribeWithTransform } from "../../../../hooks";
import { DataKey } from "../interfaces";
import { handleValueChange as handleChange } from "../../../../use-case/profile-setting-page/actions/handle-value-change";

const DEFAULT_VALUE = "";

export function useValueContent(dataKey: Exclude<DataKey, "password">) {
  const isEditable = useSubscribeWithTransform(
    stateMgr,
    dataKey,
    (data) => data.isValueEditable
  );
  const value = useSubscribeWithTransform(
    stateMgr,
    dataKey,
    (data) => data.value
  );

  function handleValueChange(value: string) {
    handleChange(dataKey, value);
  }

  return { isEditable, value, handleValueChange };
}
