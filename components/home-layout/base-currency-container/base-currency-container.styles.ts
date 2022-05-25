import classNames from "classnames";

export const container = () => classNames("flex", "rounded");

export const base = () => classNames("bg-neu-400", "px-2", "py-1", "rounded-l");

export const inputContainer = () => classNames("relative", "flex");

export const input = () =>
  classNames(
    "max-w-[5rem]",
    "focus:outline-none",
    "bg-neu-200",
    "rounded-r",
    "px-1.5"
  );
