import { classNames } from "../../../../utils";

export const container = () =>
  classNames(
    "items-center",
    "basis-full lg:basis-0",
    "grow",
    "order-3",
    "lg:order-2"
  );

export const input = (fontStyle = "") =>
  classNames(
    "bg-neu-50",
    "py-2",
    "px-2",
    "w-full",
    "block",
    "rounded-lg",
    "ring-1",
    "ring-transparent focus:ring-pri-300",
    "focus:outline-none",
    "focus:bg-neu-200/90",
    fontStyle
  );
