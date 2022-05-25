import React from "react";
import Modal from "../../../modal";
import * as styles from "./input-container.styles";

interface InputSectionProps {
  label: string;
  value: string;
  handleValueChange?: (value: string) => any;
}

const decimalRegExp = /\d*\.?\d*/;

const InputSection = ({
  label,
  value,
  handleValueChange,
}: InputSectionProps) => {
  return (
    <Modal.InputContainer>
      <div className={styles.container()}>
        <label className={styles.label()}>{label}</label>
        <input
          className={styles.input()}
          type={"text"}
          value={value !== "0" ? value : ""}
          onChange={(e) => {
            if (!handleValueChange) return;

            const value = e.target.value;
            if (!decimalRegExp.test(value)) return;
            handleValueChange(value);
          }}
        />
      </div>
    </Modal.InputContainer>
  );
};

export default InputSection;
