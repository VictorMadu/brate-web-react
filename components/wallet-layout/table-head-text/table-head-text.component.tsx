import React from "react";
import Text from "../../../core/text";
import * as styles from "./table-head-text.styles";

interface TableHeadTextProps {
  text: string;
}

const TableHeadText = ({ text }: TableHeadTextProps) => {
  return <Text as="p" text={text} font={styles.font()} />;
};

export default TableHeadText;
