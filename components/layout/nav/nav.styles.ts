import { ClassNameGenerator as CNG } from "../../../utils";

export const container = () =>
  new CNG()
    .values("flex", "bg-blue-600", "md:px-[10%]", "items-center")
    .generate([]);

export const tilte = () =>
  new CNG().values("hidden", "md:block", "grow").generate([]);

export const navContainer = () =>
  new CNG()
    .values("grow", "md:grow-0", "flex", "justify-around", "md:gap-x-4")
    .generate([]);
