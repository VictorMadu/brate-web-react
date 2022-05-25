import classNames from "classnames";

export const container = () =>
  classNames(
    "absolute",
    "w-full",
    "h-full",
    "top-0",
    "left-0",
    "bg-neu-900/40",
    "text-neu-700/90",
    "flex",
    "items-center",
    "justify-center"
  );

export const content = () =>
  classNames(
    "text-center",
    "rounded",
    "overflow-hidden",
    "shadow-[0px_0px_8px_3px_rgba(0,0,0,0.4)]",
    "bg-neu-50"
  );

export const body = () => classNames("bg-neu-50");
