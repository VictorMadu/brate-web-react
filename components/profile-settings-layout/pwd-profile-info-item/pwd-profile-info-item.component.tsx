import React from "react";
import InfoItem from "../info-item";
import ProfileLabel from "../profile-label";
import ActionBtnsContainer from "./action-btns-container";
import ValueContent from "./value-content";

const PwdInfoItem = () => {
  return (
    <InfoItem
      dataKey={"password"}
      Label={ProfileLabel}
      ValueContent={ValueContent}
      ActionBtnsContainer={ActionBtnsContainer}
    />
  );
};

export default PwdInfoItem;
