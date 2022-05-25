import classNames from "classnames";

export const container = () => classNames("text-center", "overflow-hidden");

export const label = () =>
  classNames(
    "rounded-l",
    "bg-pri-200",
    "px-3",
    "py-2",
    "inline-block",
    "font-semibold"
  );

export const input = () =>
  classNames(
    "px-1",
    "py-2",
    "focus:outline-none",
    "rounded-r",
    "bg-neu-300/60",
    "shadow-inner"
  );
