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

//  ========================== settings ========================

export const settingsContainer = () =>
  classNames("flex", "justify-between", "items-center", "mb-5");

// pagination
export const paginationContainer = () =>
  classNames("mt-8", "text-right", "shrink-0", "overflow-auto");

// dropdown
export const dropdownContainer = () => classNames("relative", "group");

export const dropdownBtn = () =>
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

export const dropdownIcon = () =>
  classNames(
    "text-neu-700 group-hover:text-pri-500/90 group-focus:text-pri-500/90"
  );

export const dropdownContent = () =>
  classNames("absolute", "left-0", "top-full", "w-[max-content]", "z-20");

export const dropList = () =>
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

export const dropItem = () =>
  classNames(
    "pl-2",
    "pr-6",
    "py-2",
    "hover:bg-neu-300",
    "focus:bg-neu-300",
    "capitalize"
  );
