import { ClassNameGenerator as CNG } from "../../utils";

export const container = () =>
  new CNG()
    .values(
      "grid",
      "grid-rows-[1fr_auto]",
      "md:grid-rows-[auto_1fr]",
      "bg-red-400",
      "md:bg-blue-400",
      "h-screen"
    )
    .generate([]);

export const navContainer = () =>
  new CNG().values("row-[2/-1] md:row-[1/2]").generate([]);

export const childrenContainer = () =>
  new CNG().values("row-[1/2] md:row-[2/-1]").generate([]);
