import React from "react";
import InfoItem from "../info-item";
import ActionBtnsContainer from "./action-btns-container";
import { useProfileInfoItem } from "./hooks";
import { DataKey } from "./interfaces";
import ProfileLabel from "../profile-label";
import ValueContent from "./value-content";

interface ProfileInfoItemProps {
  userDataKey: DataKey;
}

const ProfileInfoItem = ({ userDataKey }: ProfileInfoItemProps) => {
  useProfileInfoItem(userDataKey);
  return (
    <InfoItem
      dataKey={userDataKey}
      Label={ProfileLabel}
      ValueContent={ValueContent}
      ActionBtnsContainer={ActionBtnsContainer}
    />
  );
};

export default ProfileInfoItem;
