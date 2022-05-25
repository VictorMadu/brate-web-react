import classNames from "classnames";
import { ClassNameGenerator as CNG } from "../../utils";

export const container = () =>
  new CNG()
    .values("bg-neu-200", "inline-block", "rounded", "px-1.5", "py-1")
    .generate([]);

export const btn = (isActive: boolean) =>
  classNames(
    "relative",
    "px-2",
    "py-1",
    "rounded",
    "bg-transparent",
    "before:transition-all",
    "before:duration-[2000ms]",
    "overflow-hidden",
    "before:bg-pri-500 before:absolute before:content-[attr(data-text)] before:top-0 before:w-full before:h-full before:flex before:items-center before:justify-center before:text-neu-50 before:my-auto before:rounded",
    "font-bold"
  );

export const btnLeft = (isActive: boolean) =>
  classNames(
    btn(isActive),
    {
      "before:right-0": !isActive,
      "before:-right-full": isActive,
    },
    "rounded-r-none"
  );

export const btnRight = (isActive: boolean) =>
  classNames(
    btn(isActive),
    {
      "before:left-0": !isActive,
      "before:-left-full": isActive,
    },
    "rounded-l-none"
  );
