import classNames from "classnames";

export const container = () => classNames("flex", "flex-col");

export const nameContainer = () => classNames("space-x-1");

export const name = () => classNames("inline-block");

export const symbol = () =>
  classNames("inline-block", "text-sm", "font-normal");
