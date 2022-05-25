import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import * as styles from "./btn.styles";

interface BtnProps {
  handleClick: () => any;
  icon: FontAwesomeIconProps["icon"];
  bgStyle: string;
  textStyle: string;
}

const Btn = ({ handleClick, icon, bgStyle, textStyle }: BtnProps) => {
  return (
    <button
      className={styles.container(bgStyle, textStyle)}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} size="sm" />
    </button>
  );
};

export default Btn;
