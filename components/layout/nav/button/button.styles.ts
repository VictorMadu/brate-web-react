import classNames from "classnames";

export const container = () =>
  classNames(
    "flex",
    "flex-col md:flex-row",
    "items-center",
    "gap-x-3",
    "py-2",
    "md:py-4",
    "px-3",
    "flex-1",
    "text-xs md:text-sm",
    "tracking-wide",
    "md:tracking-normal",
    "md:font-bold"
  );

export const text = () =>
  classNames("text-neu-50/60 md:text-neu-50/90", "lg:text-base");

export const icon = () =>
  classNames("text-neu-50/90 md:text-neu-50/60", "text-base");
