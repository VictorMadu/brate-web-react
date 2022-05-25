import { ClassNameGenerator as CNG } from "../../utils";

export const container = () =>
  new CNG()
    .values(
      "flex",
      "md:flex-col",
      "bg-pri-600",
      "items-center md:items-start",
      "md:h-full",
      "divide-y",
      "divide-neu-100/50"
    )
    .generate([]);

export const tilte = () =>
  new CNG()
    .values(
      "hidden",
      "md:block",
      "text-neu-50",
      "font-bold",
      "text-3xl",
      "md:self-center",
      "md:py-2",
      "cursor-pointer"
    )
    .generate([]);

export const navContainer = () =>
  new CNG()
    .values(
      "grow",
      "md:grow-0",
      "flex",
      "overflow-x-auto",
      "justify-around",
      "md:gap-x-4",
      "md:flex-col",
      "md:pl-2",
      "md:pr-8",
      "md:pt-6"
    )
    .generate([]);
