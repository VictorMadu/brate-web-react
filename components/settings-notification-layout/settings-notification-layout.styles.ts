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

export const option = () =>
  classNames(
    "flex",
    "justify-between",
    "items-end",
    "border-b",
    "border-neu-400/30",
    "pb-2"
  );

export const timeContainer = () =>
  classNames(
    "relative",
    "inline-block",
    "px-2.5",
    "py-1",
    "border",
    "border-neu-400/60",
    "rounded"
  );

export const timeContent = () => classNames("flex", "gap-x-2", "items-center");

export const timeIcon = () => classNames("text-neu-700/70");

export const timeDropdownContainer = () =>
  classNames("absolute", "right-0", "top-full", "w-[max-content]");

export const timeDropdownContent = () =>
  classNames(
    "flex",
    "flex-col",
    "border",
    "border-neu-400/60",
    "rounded",
    "shadow-[0px_0px_6px_4px_rgba(0,0,0,0.15)]",
    "bg-neu-50",
    "divide-y",
    "divide-neu-400/30"
  );

export const timeDropdownItem = () =>
  classNames("pl-2", "pr-6", "py-2", "hover:bg-neu-300", "focus:bg-neu-300");

export const no = () => classNames();
