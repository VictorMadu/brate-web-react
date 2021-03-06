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
    "items-center",
    "border",
    "border-neu-400/30",
    "rounded-md",
    "px-3",
    "py-4"
  );

export const btnContainer = () => classNames("relative", "group");

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

export const dropdownContainer = () =>
  classNames("absolute", "right-0", "top-full", "w-[max-content]");

export const dropdownContent = () =>
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

export const dropdownItem = () =>
  classNames("pl-2", "pr-6", "py-2", "hover:bg-neu-300", "focus:bg-neu-300");
