import classNames from "classnames";

export const delBtn = () =>
  classNames(
    "transition-all",
    "font-semibold",
    "bg-neu-300 hover:bg-warn-100/50 focus:bg-warn-100/50",
    "hover:text-warn-500 focus:text-warn-500",
    "py-1",
    "px-1.5",
    "rounded",
    "cursor-pointer"
  );
