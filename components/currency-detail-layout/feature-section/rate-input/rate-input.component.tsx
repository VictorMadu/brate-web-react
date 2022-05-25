import React, { ChangeEvent } from "react";
import { useSubscribe } from "../../../../hooks";
import { currencyDetailStateMgr } from "../../../../use-case/currency-detail/state-manager";
import { useBaseRateInput, useQuotaRateInput } from "./hook";
import * as styles from "./rate-input.styles";

interface RateInputProps {
  labelText: string;
  value: string | number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RateInput = ({ labelText, value, handleChange }: RateInputProps) => {
  return (
    <div className={styles.container()}>
      <label className={styles.label()}>{labelText}</label>
      <input
        className={styles.input()}
        type={"number"}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default RateInput;
