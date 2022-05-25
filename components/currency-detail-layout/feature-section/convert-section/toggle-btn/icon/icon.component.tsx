import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styles from "./icon.styles";

interface IconProps {
  icon: IconProp;
}

const Icon = ({ icon }: IconProps) => {
  return <FontAwesomeIcon icon={icon} size="sm" className={styles.icon()} />;
};

export default Icon;
