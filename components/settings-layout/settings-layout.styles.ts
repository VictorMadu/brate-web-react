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

export const settingsList = () =>
  classNames("mt-12", "mx-auto", "w-full", "divide-y", "divide-neu-400/30");

export const settingsItem = () =>
  classNames("flex", "justify-between", "items-center", "px-1", "py-2.5");

export const settingsText = () => classNames();

export const settingsIcon = () => classNames();

export const logoutBtn = () =>
  classNames("text-warn-500/90", "mt-4", "font-semibold");
