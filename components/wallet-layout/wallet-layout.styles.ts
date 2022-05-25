import classNames from "classnames";

export const container = () =>
  classNames("w-full", "px-[4%]", "py-3", "h-full", "flex", "flex-col");

export const headTextFont = () =>
  classNames("uppercase", "font-semibold", "text-neu-50");

export const currencyShortFont = () => classNames("text-sm", "font-normal");

export const actionBtn = () =>
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
