import React, { useEffect, useRef } from "react";
import * as styles from "./info-value-content.styles";

interface InfoInputProps {
  value: string;
  editable: boolean;
  handleValueChange: (value: string) => any;
  fontStyle?: string;
}

const InfoValueContent = ({
  value,
  editable,
  handleValueChange,
  fontStyle,
}: InfoInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const inputComponent = inputRef.current;
    if (!inputComponent) return;

    if (editable) inputComponent.focus();
    else inputComponent.blur();
  }, [editable]);
  return (
    <div className={styles.container()}>
      <input
        ref={inputRef}
        className={styles.input(fontStyle)}
        value={value}
        onChange={(e) => handleValueChange(e.target.value)}
        disabled={!editable}
      />
    </div>
  );
};

export default InfoValueContent;
