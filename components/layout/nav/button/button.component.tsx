import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IProps } from "./button.interface";
import * as styles from "./button.styles";

const Button = (props: IProps) => {
  return (
    <button className={styles.container()}>
      <FontAwesomeIcon icon={props.Icon} size="1x" className={styles.icon()} />
      <p className={styles.text()}>{props.text}</p>
    </button>
  );
};

export default Button;
