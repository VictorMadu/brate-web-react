import classNames from "classnames";

export const container = () =>
  classNames(
    "space-x-2",
    "flex",
    "justify-end",
    "gap-x-2",
    "bg-pri-600",
    "text-pri-50",
    "px-[5%] md:px-6",
    "py-2"
  );

export const btnBase = () =>
  classNames("font-semibold", "rounded", "px-2", "py-1", "transition-all");

export const cancelBtn = () =>
  classNames(
    btnBase(),
    "hover:text-pri-200 focus:text-pri-200",
    "hover:underline"
  );

export const continueBtn = () =>
  classNames(
    btnBase(),
    "bg-pri-50/10 hover:bg-pri-500/70 focus:bg-pri-500/70",
    "shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] hover:shadow-inner focus:shadow-inner"
  );
