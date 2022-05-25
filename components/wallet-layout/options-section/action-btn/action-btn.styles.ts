import classNames from "classnames";

export const container = () =>
  classNames(
    "px-3",
    "py-1",
    "transition-all",
    "text-neu-700/70 hover:text-pri-500 focus:text-pri-500",
    "bg-neu-200/60 hover:bg-neu-200/90 focus:bg-neu-200/90 active:bg-neu-100/80",
    "capitalize",
    "text-lg",
    "font-semibold",
    "rounded"
    // "active:scale-95"
  );
