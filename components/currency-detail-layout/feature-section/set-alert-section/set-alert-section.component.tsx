import React from "react";
import ActionBtn from "../action-btn";
import FeatureSectionContainer from "../feature-container/feature-container.component";
import { RateInput } from "../rate-input";
import { useSetTargetAlert } from "./hook";

const SetAlertSection = () => {
  const {
    value,
    handleChange,
    setAction,
    isActionBtnDisabled,
  } = useSetTargetAlert();
  return (
    <FeatureSectionContainer>
      <RateInput
        labelText={"Trigger At"}
        value={value}
        handleChange={handleChange}
      />
      <ActionBtn
        text={"Set"}
        handleClick={setAction}
        disabled={isActionBtnDisabled}
      />
    </FeatureSectionContainer>
  );
};

export default SetAlertSection;
