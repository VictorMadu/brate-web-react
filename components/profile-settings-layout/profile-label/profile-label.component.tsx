import React from "react";
import { useSubscribeWithTransform } from "../../../hooks";
import { profileSettingPageStateMgr as stateMgr } from "../../../use-case/profile-setting-page/state-manager";
import InfoItem, { DataKey } from "../info-item";

interface ProfileLabelProps {
  dataKey: DataKey;
}

const ProfileLabel = ({ dataKey }: ProfileLabelProps) => {
  const labelText = useSubscribeWithTransform(
    stateMgr,
    dataKey,
    (data) => data.label
  );
  return <InfoItem.Label text={labelText}></InfoItem.Label>;
};

export default ProfileLabel;
