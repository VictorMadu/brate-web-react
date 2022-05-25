import React from "react";
import { OrWithArray } from "ts-util-types";
import ListItem from "./list-item";
import * as styles from "./lists.styles";

interface ListsProps {
  children: OrWithArray<JSX.Element>;
}

const Lists = ({ children }: ListsProps) => {
  return <ul className={styles.container()}>{children}</ul>;
};

Lists.Item = ListItem;

export default Lists;
