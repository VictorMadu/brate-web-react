import classNames from "classnames";

export const container = () => classNames("flex", "justify-center", "py-3");

export const toggleBtn = () =>
  classNames(
    "bg-pri-200",
    "rounded-full",
    "w-10",
    "h-10",
    "font-bold",
    "transition-all",
    "duration-700",
    "shadow-[0px_0px_4px_1px_rgba(0,0,0,0.15)] hover:shadow-none focus:shadow-none"
  );


