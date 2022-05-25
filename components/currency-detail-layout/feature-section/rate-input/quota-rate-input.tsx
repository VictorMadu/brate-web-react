import React from "react";
import { useQuotaRateInput } from "./hook";
import RateInput from "./rate-input.component";

const QuotaRateInput = () => {
  const { labelText, value, handleChange } = useQuotaRateInput();

  return (
    <RateInput
      labelText={labelText}
      value={value}
      handleChange={handleChange}
    />
  );
};

export default QuotaRateInput;
