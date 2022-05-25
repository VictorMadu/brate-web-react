import React from "react";
import Text from "../../../../core/text";
import {
  normalizeRate,
  normalizePercentDiff,
} from "../../../../utils/rate-modifier";
import * as styles from "./price-container.styles";

interface PriceContainerProps {
  rate: number;
  prev_rate: number;
}

export const PriceContainer = ({ rate, prev_rate }: PriceContainerProps) => {
  const transformedRate = normalizeRate(rate);
  const mainRateText = transformedRate.slice(0, -2);
  const subRateText = transformedRate.slice(-2);

  return (
    <div className={styles.container()}>
      <Text
        as="span"
        font={styles.upperText(rate < prev_rate)}
        text={normalizePercentDiff(rate, prev_rate)}
      />
      <span>
        <Text as="span" font={styles.lowerText()} text={mainRateText} />
        <Text as="sup" font={styles.lowerText()} text={subRateText} />
      </span>
    </div>
  );
};

export default PriceContainer;
