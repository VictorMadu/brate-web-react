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

export const list = () => classNames("mt-12", "mx-auto", "w-full", "space-y-5");

export const item = () =>
  classNames(
    "md:flex",
    "space-y-1 md:space-y-0",
    "items-center",
    "px-1",
    "py-2",
    "w-full",
    "border",
    "border-neu-400/30",
    "rounded-md",
    "cursor-pointer"
  );

export const title = () =>
  classNames("font-bold", "px-1", "w-full", "basis-40");

export const textBase = () =>
  classNames("bg-neu-50", "py-2", "px-2", "grow", "rounded-lg");

export const text = () => classNames(textBase());

export const textAndBold = () => classNames(text(), "font-extrabold");
