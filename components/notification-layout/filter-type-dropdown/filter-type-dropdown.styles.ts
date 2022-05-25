import classNames from "classnames";

export const container = () =>
  classNames(
    "relative",
    "px-2.5",
    "py-1",
    "border",
    "border-neu-400/60",
    "rounded"
  );

export const content = () =>
  classNames("flex", "gap-x-2", "items-center", "cursor-pointer");

export const icon = () => classNames("text-neu-700/70");
