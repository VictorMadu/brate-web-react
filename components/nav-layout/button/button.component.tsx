import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";
import { IProps } from "./button.interface";
import * as styles from "./button.styles";

const Button = (props: IProps) => {
  const router = useRouter();
  return (
    <button
      className={styles.container()}
      onClick={() => {
        router.push(props.route);
      }}
    >
      <FontAwesomeIcon icon={props.Icon} size="1x" className={styles.icon()} />
      <p className={styles.text()}>{props.text}</p>
    </button>
  );
};

export default Button;
