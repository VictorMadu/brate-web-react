import classNames from "classnames";

export const container = () =>
  classNames("flex", "justify-center", "items-center", "py-1");

export const label = () =>
  classNames(
    "text-left",
    "capitalize",
    "rounded-l",
    "bg-pri-200/90",
    "block",
    "font-semibold",
    "px-2",
    "py-1.5"
  );

export const input = () =>
  classNames(
    "text-right",
    "px-2",
    "py-1.5",
    "rounded-r",
    "focus:outline-none",
    "shadow-inner",
    "bg-neu-300/90",
    "ring-0",
    "ring-pri-500",
    "focus:ring-1",
    "text-neu-900"
  );
