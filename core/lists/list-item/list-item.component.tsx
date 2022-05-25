import React from "react";
import { OrWithArray } from "ts-util-types";
import { ListItemTypes } from "../types";
import * as styles from "./list-item.styles";

interface ListItemProps {
  children: OrWithArray<JSX.Element>;
  type: ListItemTypes;
}

const ListItem = ({ type, children }: ListItemProps) => {
  return <li className={styles.getStyle(type)}>{children}</li>;
};

ListItem.Types = ListItemTypes;

export default ListItem;
