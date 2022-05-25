import classNames from "classnames";

export const container = (bgStyle: string, textStyle: string) =>
  classNames("w-8", "h-8", "rounded", bgStyle, textStyle);
