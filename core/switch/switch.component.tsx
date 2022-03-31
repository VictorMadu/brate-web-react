import React, { useRef, useState } from "react";
import { IProps } from "./switch.interface";
import * as styles from "./switch.styles";

const Switch = (props: IProps) => {
  const currentStateUnderlay = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    props.onClick(!props.isOn);
    if (props.isOn) currentStateUnderlay.current?.classList.add();
    else currentStateUnderlay.current?.classList.remove();
  };

  return (
    <div className={styles.container()}>
      <button data-text={props.onText} className={styles.btnLeft(props.isOn)}>
        {props.onText}
      </button>
      <button
        data-text={props.offText}
        className={styles.btnRight(!props.isOn)}
      >
        {props.offText}
      </button>
    </div>
  );
};

export default Switch;
