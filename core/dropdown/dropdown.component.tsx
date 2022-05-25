import { ComponentPropsWithoutRef } from "react";
import dropItem from "./drop-item";
import { Bg } from "./drop-item/drop-item.styles";
import * as styles from "./dropdown.styles";

import { boxShadows } from "./dropdown.styles";

export interface DropDownProps {
  children: JSX.Element | JSX.Element[];
  boxShadow?: boxShadows;
  position?: string;
  zIndex?: string;
  round?: string;
  padding?: string;
  height?: string;
  overflow?: string;
  show: boolean;
  innerProps?: ComponentPropsWithoutRef<"div">;
}

export const DropDown = ({ innerProps, ...otherProps }: DropDownProps) => {
  return (
    <div className={styles.container(otherProps)} {...innerProps}>
      <ul className={styles.content(otherProps)}>{otherProps.children}</ul>
    </div>
  );
};

DropDown.DropItem = dropItem;
DropDown.boxShadow = boxShadows;
DropDown.bg = Bg;
