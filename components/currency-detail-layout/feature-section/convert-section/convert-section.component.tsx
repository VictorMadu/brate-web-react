import React from "react";
import ActionBtn from "../action-btn";
import FeatureContainer from "../feature-container/feature-container.component";
import { BaseRateInput, QuotaRateInput } from "../rate-input";
import { useConvert } from "./hook";
import ToggleBtn from "./toggle-btn";

const ConvertSection = () => {
  const { shouldDisableActionBtn, handleCopy } = useConvert();
  return (
    <FeatureContainer>
      <BaseRateInput />
      <ToggleBtn />
      <QuotaRateInput />
      <ActionBtn
        text={"Copy"}
        handleClick={handleCopy}
        disabled={shouldDisableActionBtn}
      />
    </FeatureContainer>
  );
};

export default ConvertSection;
