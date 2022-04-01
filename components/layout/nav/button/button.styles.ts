import { ClassNameGenerator as CNG } from "../../../../utils";

export const container = () =>
  new CNG()
    .values(
      "after:content-[attr(data-text)]",
      "after:block",
      "after:md:uppercase",
      "flex",
      "flex-col",
      "items-center",
      "py-2",
      "md:py-4",
      "px-3",
      "text-neu-50/90",
      "text-xs",
      "tracking-wide",
      "md:tracking-wider"
    )
    .generate([]);

export const icon = () => new CNG().values("text-xl", "md:hidden").generate([]);
