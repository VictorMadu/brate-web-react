import { Fragment, ElementType, ComponentPropsWithoutRef } from "react";

import * as styles from "./text.styles";

type BaseProps<T extends ElementType> = {
  as?: T;
  text: string | number | boolean;
  margin?: string;
  padding?: string;
  font?: string;
  bg?: string;
  round?: string;
};

type TextProps<T extends ElementType> = BaseProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>;

export const Text = <T extends ElementType>({
  text,
  as,
  margin,
  padding,
  font,
  bg,
  round,
  color,
  ...otherProps
}: TextProps<T>) => {
  const Component = as || Fragment;
  if (as)
    return (
      <Component
        className={styles.container({
          margin,
          padding,
          font,
          bg,
          round,
          color,
        })}
        {...otherProps}
      >
        {text}
      </Component>
    );
  return <Component>{text}</Component>;
};
