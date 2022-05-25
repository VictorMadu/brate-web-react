import React, { useEffect, useRef, useState } from "react";
import { IProps } from "./toggle-btn.interface";
import * as styles from "./toggle-btn.styles";

const ToggleBtn = (props: IProps) => {
  const firstMount = useRef(true);
  const [isOn, setIsOn] = useState(!!props.startValue);

  useEffect(() => {
    if (firstMount.current) return;
    props.onToggle(isOn);
  }, [isOn, props]);

  useEffect(() => {
    firstMount.current = false;
    return () => {
      firstMount.current = true;
    };
  }, []);

  return (
    <div className={styles.container()}>
      <button
        data-text={props.offText}
        className={styles.btnRight(!isOn)}
        onClick={() => setIsOn(false)}
      >
        {props.offText}
      </button>
      <button
        data-text={props.onText}
        className={styles.btnLeft(isOn)}
        onClick={() => setIsOn(true)}
      >
        {props.onText}
      </button>
    </div>
  );
};

export default ToggleBtn;
