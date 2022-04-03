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

export const titleContainer = () => classNames("basis-40", "flex");

export const textContainer = () =>
  classNames("grow", "flex", "items-center", "space-x-2");

export const title = () =>
  classNames("font-bold", "px-1", "grow", "inline-block");

export const textBase = () =>
  classNames("bg-neu-50", "py-2", "px-2", "grow", "rounded-lg");

export const text = () => classNames(textBase());

export const textAndBold = () => classNames(text(), "font-extrabold");

export const editBtn = (isOfLabel: boolean) =>
  classNames(
    "shrink-0",
    "w-8",
    "h-8",
    "rounded",
    "text-neu-500/90",
    "hover:bg-pri-200/60 focus:bg-pri-200/60",
    "hover:text-pri-500/90 focus:text-pri-500/90",
    isOfLabel ? "md:hidden" : "hidden md:inline-block"
  );
