import React from "react";
import { useBaseRateInput } from "./hook";
import RateInput from "./rate-input.component";

const BaseRateInput = () => {
  const { labelText, value, handleChange } = useBaseRateInput();

  return (
    <RateInput
      labelText={labelText}
      value={value}
      handleChange={handleChange}
    />
  );
};

export default BaseRateInput;
