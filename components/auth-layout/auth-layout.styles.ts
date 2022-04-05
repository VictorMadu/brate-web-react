import classNames from "classnames";

export const container = () => classNames("h-full", "flex");

export const authContainer = () =>
  classNames(
    "h-full",
    "flex",
    "flex-col",
    "basis-full md:basis-1/2",
    "max-w-[32rem]",
    "mx-auto"
  );

export const titleBase = () => classNames("p-3", "font-bold", "text-3xl");

export const titleInLeftContainer = () =>
  classNames(titleBase(), "text-neu-50", "hidden md:block");

export const titleInAuthContainer = () =>
  classNames(titleBase(), "text-neu-900/90", "self-start", "md:hidden");

export const leftContainer = () =>
  classNames("bg-pri-700", "basis:0 md:basis-1/2");
