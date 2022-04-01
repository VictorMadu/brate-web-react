import classNames from "classnames";

export const container = () =>
  classNames(
    "w-full",
    "px-[4%]",
    "md:px-[10%]",
    "py-3",
    "h-full",
    "flex",
    "flex-col"
  );

export const notificationContainer = () =>
  classNames("overflow-auto", "mx-auto", "w-full");

export const notificationList = () =>
  classNames(
    "mr-0.5",
    "border",
    "border-neu-400/20",
    "rounded",
    "shadow-[0px_0px_2px_0px_rgba(0,0,0,0.3)]",
    "divide-y-2",
    "divide-neu-400/20"
  );

export const notification = () => classNames("px-4", "py-4", "space-y-1");

export const notificationText = () => classNames();

export const notificationTime = () =>
  classNames("text-sm", "text-neu-500/90", "text-right");
