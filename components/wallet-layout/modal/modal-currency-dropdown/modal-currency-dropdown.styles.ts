import classNames from "classnames";

export const container = () =>
  classNames(
    "flex",
    "gap-x-2",
    "items-center",
    "cursor-pointer",
    "relative",
    "rounded",
    "border-2",
    "w-[min-content]",
    "px-2",
    "py-1",
    "ml-auto",
    "mr-2"
  );

export const icon = () => classNames("text-neu-700/70");

export const input = (hasFocus: boolean) =>
  classNames(
    "max-w-[5rem]",
    "focus:outline-none",
    hasFocus && "bg-neu-200",
    "rounded-r",
    "px-1.5"
  );
