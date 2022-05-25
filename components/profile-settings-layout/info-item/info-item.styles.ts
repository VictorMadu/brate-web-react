import classNames from "classnames";

export const container = () =>
  classNames(
    "flex",
    "flex-wrap",
    "space-y-1 md:space-y-0",
    "items-center",
    "px-1",
    "py-2",
    "w-full",
    "border",
    "border-neu-400/30",
    "rounded-md",
    "cursor-pointer"
  );
