import classNames from "classnames";

export const container = () => classNames();

export const headTextContainer = () => classNames("text-left", "mb-2");

export const title = () =>
  classNames("font-semibold", "capitalize", "leading-4");

export const helper = () => classNames("text-xs", "first-letter:capitalize");

export const dropdownContainer = () => classNames("relative", "group");

export const iconBtn = (iconPos: "left" | "right") =>
  classNames(
    "flex",
    "gap-x-2",
    "items-center",
    "text-neu-500/90",
    "capitalize",
    "absolute",
    iconPos === "left" ? "left-2" : "right-2",
    "top-1/2",
    "-translate-y-1/2"
  );

export const input = (iconPos: "left" | "right") =>
  classNames(
    "w-20",
    "focus:outline-none",
    "border",
    "border-neu-400/60",
    "rounded",
    iconPos === "left" ? "pl-5 pr-2" : "pl-2 pr-5",
    "py-1",
    "focus:bg-neu-300",
    "transition-color",
    "duration-500"
  );
