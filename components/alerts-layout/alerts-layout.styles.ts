import classNames from "classnames";

export const container = () =>
  classNames(
    "w-full",
    "px-[4%]",
    "md:px-[10%]",
    "py-3",
    "h-full",
    "flex",
    "flex-col"
  );

export const dropdownContainer = () =>
  classNames("flex", "justify-between", "");

export const settingsContainer = () => classNames("flex-col");

export const switchContainer = () =>
  classNames("flex", "justify-end", "shrink-0");
