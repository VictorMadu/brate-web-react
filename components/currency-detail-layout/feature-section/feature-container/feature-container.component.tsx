import React from "react";
import * as styles from "./feature-container.styles";

interface FeatureContainerProps {
  children: JSX.Element | JSX.Element[];
}

const FeatureContainer = ({ children }: FeatureContainerProps) => {
  return <div className={styles.container()}>{children}</div>;
};

export default FeatureContainer;
