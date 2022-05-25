import { useEffect } from "react";
import { useSubscribeWithTransform } from "../../../../hooks";
import { setDataValue } from "../../../../use-case/profile-setting-page/actions/data-value-action";
import { saveValue } from "../../../../use-case/profile-setting-page/actions/save-value";
import { profileSettingPageStateMgr as stateMgr } from "../../../../use-case/profile-setting-page/state-manager";
import { DataKey } from "../interfaces";

export function useActionBtnsContainer(key: DataKey) {
  const isEditable = useSubscribeWithTransform(
    stateMgr,
    key,
    (value) => value.isValueEditable
  );

  function makeEditable() {
    setDataValue(key, "isValueEditable", true);
  }

  function makeUnEditable() {
    setDataValue(key, "isValueEditable", false);
  }

  function saveNewValue() {
    saveValue(key, (isSuccess) => {
      if (isSuccess) return alert("Successful");
      return alert("Unsuccessful");
    });
  }

  return { isEditable, makeEditable, makeUnEditable, saveNewValue };
}
