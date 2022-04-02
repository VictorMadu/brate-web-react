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

export const option = () =>
  classNames(
    "flex",
    "justify-between",
    "items-center",
    "pb-2",
    "border-b",
    "border-neu-400/30"
  );
