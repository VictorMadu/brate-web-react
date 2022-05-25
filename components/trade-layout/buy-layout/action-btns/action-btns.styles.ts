import classNames from "classnames";

export const container = () => classNames("space-x-2");

export const btn = () =>
  classNames(
    "rounded",
    "lg:px-1.5",
    "py-1",
    "lg:hover:bg-pri-200/60 lg:focus:bg-pri-200/60",
    "hover:text-neu-700/90 focus:text-neu-700/90",
    "text-sm",
    "lg:border",
    "lg:border-neu-400/30",
    "text-neu-500/90",
    "font-semibold",
    "capitalize"
  );
