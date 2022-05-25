import classNames from "classnames";

export const container = (font?: string) =>
  classNames("font-bold", "focus:outline-none", font);

export const logoutBtn = () =>
  classNames("text-warn-600/90 hover:text-warn-700/90 focus:text-warn-700/90");

export const authBtnBase = () =>
  classNames("text-pri-700/90 hover:text-pri-800/90 focus:text-pri-800/90 ");
