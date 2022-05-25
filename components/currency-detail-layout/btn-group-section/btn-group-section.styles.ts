import classNames from "classnames";

export const container = () =>
  classNames(
    "flex",
    "items-center",
    "justify-center",
    "mt-16",
    "mb-4",
    "border-b",
    "border-neu-400/30"
  );

export const btn = (isDisabled?: boolean) =>
  classNames(
    "px-3",
    "py-1",
    "transition-all",
    "focus:text-pri-600",
    "focus:bg-pri-200/60",
    "uppercase",
    "text-sm",
    isDisabled && "opacity-50"
  );
