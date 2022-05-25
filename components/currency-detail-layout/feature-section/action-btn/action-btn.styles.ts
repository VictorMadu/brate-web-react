import classNames from "classnames";

export const container = () => classNames("mx-auto", "pt-4");

export const btn = (disabled?: boolean) =>
  classNames(
    "bg-pri-100/60",
    !disabled && "hover:bg-pri-200/60 focus:bg-pri-200/60",
    "transition-colors",
    "px-5",
    "py-1.5",
    "font-bold",
    "text-pri-500",
    "rounded",
    disabled && "opacity-70"
  );
