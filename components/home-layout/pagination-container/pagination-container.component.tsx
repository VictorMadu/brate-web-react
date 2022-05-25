import React from "react";
import Pagination from "../../../core/pagination";
import * as styles from "./pagination-container.styles";

export const PaginationContainer = () => {
  return (
    <div className={styles.container()}>
      <Pagination firstIndex={1} lastIndex={10} overallTotal={100} />
    </div>
  );
};

export default PaginationContainer;
