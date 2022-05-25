import { ComponentPropsWithoutRef, ElementType } from "react";

export interface BaseProps<T extends ElementType> {
  as?: T;
  Layout: () => JSX.Element;
  NavBar?: () => JSX.Element;
}

export type LayoutContainerProps<
  T extends ElementType = ElementType
> = BaseProps<T>;
