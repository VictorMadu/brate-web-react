import React from "react";
import * as styles from "./info-label.styles";

interface InfoLabelProps {
  text: string;
}

const InfoLabel = ({ text }: InfoLabelProps) => {
  return <p className={styles.container()}>{text}</p>;
};

export default InfoLabel;
