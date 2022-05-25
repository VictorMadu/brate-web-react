import React from "react";
import Text from "../../../../core/text";
import * as styles from "./modal-input.styles";

interface ModalInputProps {
  labelText: string;
  value: number;
  handleChange?: (value: number) => any;
}

const ModalInput = ({ labelText, value, handleChange }: ModalInputProps) => {
  return (
    <div className={styles.container()}>
      <Text as="label" text={labelText} font={styles.labelFont()} />
      <input
        className={styles.input(!!handleChange)}
        type={"text"}
        disabled={!handleChange}
        value={value === 0 && !!handleChange ? "" : value}
        onChange={(e) => {
          if (!handleChange) return;

          const numVal = parseFloat(e.target.value);
          if (isNaN(numVal)) return;

          handleChange(numVal);
        }}
      />
    </div>
  );
};

export default ModalInput;
