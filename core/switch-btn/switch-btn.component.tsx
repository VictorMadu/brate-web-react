import React, { useEffect, useRef, useState } from "react";
import * as styles from "./switch-btn.styles";

interface SwitchBtnProps {
  handleOn: () => any;
  handleOff: () => any;
}

const SwitchBtn = ({ handleOn, handleOff }: SwitchBtnProps) => {
  const [isOn, setIsOn] = useState(false);
  const firstMount = useRef(true);

  useEffect(() => {
    if (firstMount.current) return;

    if (isOn) {
      handleOn();
    } else {
      handleOff();
    }
  }, [handleOff, handleOn, isOn]);

  useEffect(() => {
    firstMount.current = false;
  }, []);

  return (
    <div className={styles.container(isOn)}>
      <button
        className={styles.btn(isOn)}
        onClick={() => setIsOn((s) => !s)}
      ></button>
    </div>
  );
};

export default SwitchBtn;
