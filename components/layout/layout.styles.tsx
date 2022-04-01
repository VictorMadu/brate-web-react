import classNames from "classnames";

export const container = () =>
  classNames(
    "flex",
    "flex-col md:flex-row",
    "h-screen",
    "before:box-border",
    "after:box-border",
    "text-neu-800/90",
    "bg-neu-100"
  );

export const navContainer = () => classNames("order-2 md:order-1", "shrink-0");

export const childrenContainer = () =>
  classNames(
    "row-[1/2] md:row-[1/-1]",
    "overflow-auto",
    "order-1 md:order-2",
    "grow"
  );
