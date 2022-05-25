import classNames from "classnames";

export const container = (isOn: boolean) =>
  classNames(
    "relative",
    "rounded-xl",
    "w-9",
    "h-5",
    isOn ? "bg-pri-300/80" : "bg-neu-300/80"
  );

export const btn = (isOn: boolean) =>
  classNames(
    "w-5",
    "h-5",
    "rounded-full",
    isOn ? "bg-pri-600/90" : "bg-neu-600/90",
    "absolute",
    "top-0",
    isOn ? "right-0" : "left-0",
    "transition-all",
    "duration-1000"
  );
