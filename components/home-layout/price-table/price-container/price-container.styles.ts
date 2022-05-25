import classNames from "classnames";

export const container = () => classNames("flex flex-col gap-y-1 md:gap-y-1");

export const lowerText = () => classNames("text-base");

export const upperText = (isLoss: boolean) =>
  classNames("text-sm", isLoss ? "text-red-700" : "text-green-700");
