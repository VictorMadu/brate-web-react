import React from "react";
import { usePairNames } from "./hook";
import * as styles from "./pair-names.styles";

interface PairNamesProps {
  pair: string;
}

const PairNames = ({ pair }: PairNamesProps) => {
  const { baseSymbol, quotaSymbol, baseName, quotaName } = usePairNames(pair);
  return (
    <div className={styles.container()}>
      <div className={styles.nameContainer()}>
        <p className={styles.name()}>{baseName}</p>
        <p className={styles.symbol()}>{"(" + baseSymbol + ")"}</p>
      </div>
      <div className={styles.nameContainer()}>
        <p className={styles.name()}>{quotaName}</p>
        <p className={styles.symbol()}>{"(" + quotaSymbol + ")"}</p>
      </div>
    </div>
  );
};

export default PairNames;
