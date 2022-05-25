import classNames from "classnames";

export const container = () =>
  classNames(
    "w-full",
    "px-[4%]",
    "md:px-[10%]",
    "py-3",
    "h-full",
    "flex",
    "flex-col",
    "overflow-hidden"
  );

export const switchContainer = () =>
  classNames("flex", "justify-end", "shrink-0");

export const settingContainer = () =>
  classNames("flex", "justify-between", "shrink-0");

export const paginationContainer = () =>
  classNames("mt-8", "text-right", "shrink-0", "overflow-hidden", "mb-2");

export const tableContainer = () => classNames("overflow-scroll");
