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
  classNames(
    "flex",
    "justify-between",
    "items-center",
    "px-1",
    "py-2.5",
    "cursor-pointer"
  );

export const settingsText = () => classNames();

export const settingsIcon = () => classNames();

export const btnContainer = () => classNames("mt-4", "mx-auto", "space-x-3");

export const btnBase = () => classNames("font-bold", "focus:outline-none");

export const logoutBtn = () =>
  classNames(
    btnBase(),
    "text-warn-600/90 hover:text-warn-700/90 focus:text-warn-700/90"
  );

export const authBtnBase = () =>
  classNames("text-pri-700/90 hover:text-pri-800/90 focus:text-pri-800/90 ");

export const signInBtn = () => classNames(btnBase(), authBtnBase());

export const signUpBtn = () => classNames(btnBase(), authBtnBase());
