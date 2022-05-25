import classNames from "classnames";

export const container = () => classNames("space-x-6");

export const button = (isDisabled: boolean) =>
  classNames(
    "hover:bg-pri-200",
    "w-8",
    "h-8",
    "rounded-full",
    isDisabled && "opacity-50"
  );

export const icon = () => classNames("text-neu-900/70");
