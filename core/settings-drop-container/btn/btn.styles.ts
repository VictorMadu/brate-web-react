import classNames from "classnames";

export const btn = () =>
  classNames(
    "flex",
    "gap-x-2",
    "items-center",
    "group-hover:bg-pri-200/60 group-focus:bg-pri-200/60",
    "group-hover:text-pri-500/90 group-focus:text-pri-500/90",
    "px-2.5",
    "py-1",
    "border",
    "border-neu-400/60",
    "rounded",
    "text-neu-500/90"
  );

export const icon = () =>
  classNames(
    "text-neu-700 group-hover:text-pri-500/90 group-focus:text-pri-500/90"
  );
