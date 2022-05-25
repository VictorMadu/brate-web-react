import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styles from "./drop-icon.styles";

interface DropIconProps {}

const DropIcon = ({}: DropIconProps) => {
  return (
    <FontAwesomeIcon
      icon={faChevronDown}
      size="xs"
      className={styles.container()}
    />
  );
};

export default DropIcon;
