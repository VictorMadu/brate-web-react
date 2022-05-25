import classNames from "classnames";

export const container = () => classNames();

// TODO: Style onClick
export const btn = () =>
  classNames(
    "hover:bg-pri-100",
    "focus:bg-pri-100",
    "w-8",
    "h-8",
    "rounded-full"
  );
