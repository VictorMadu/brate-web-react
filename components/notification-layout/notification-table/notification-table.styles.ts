import classNames from "classnames";

export const container = () => classNames("mr-0.5", "space-y-3");

export const notification = () =>
  classNames(
    "px-4",
    "py-4",
    "space-x-2",
    "border",
    "border-neu-400/20",
    "rounded",
    "shadow-[0px_0px_2px_0px_rgba(0,0,0,0.3)]"
  );

export const msgFont = () => classNames();

export const timeFont = () =>
  classNames("text-sm", "text-neu-500/90", "text-right");
