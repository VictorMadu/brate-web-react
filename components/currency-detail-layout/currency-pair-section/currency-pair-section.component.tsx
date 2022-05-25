import React, { useContext } from "react";
import {
  normalizeRate,
  normalizePercentDiff,
} from "../../../utils/rate-modifier";
import { useCurrencyPairSection } from "./hook";
import * as styles from "./currency-pair-section.styles";

const CurrencyPairSection = () => {
  const {
    base,
    baseName,
    quota,
    quotaName,
    rate,
    prevRate,
  } = useCurrencyPairSection();

  return (
    <div className={styles.container()}>
      <p className={styles.currency(true)} data-short={"(" + base + ")"}>
        {baseName}
      </p>

      <p className={styles.rateContainer()}>
        <span className={styles.rate()}>{normalizeRate(rate)}</span>
        <sub className={styles.rateChange(rate < prevRate)}>
          {normalizePercentDiff(rate, prevRate, 4)}
        </sub>
      </p>
      <p className={styles.currency(false)} data-short={"(" + quota + ")"}>
        {quotaName}
      </p>
    </div>
  );
};

export default CurrencyPairSection;
