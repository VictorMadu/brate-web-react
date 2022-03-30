import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IProps } from "./button.interface";
import * as styles from "./button.styles";

const Button = (props: IProps) => {
  return (
    <button data-text={props.text} className={styles.container()}>
      <FontAwesomeIcon icon={props.Icon} size="1x" className={styles.icon()} />
    </button>
  );
};

export default Button;
