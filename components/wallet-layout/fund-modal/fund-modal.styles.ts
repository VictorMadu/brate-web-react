import classNames from "classnames";

export const container = () =>
  classNames(
    "absolute",
    "w-full",
    "h-full",
    "top-0",
    "left-0",
    "bg-neu-900/40",
    "text-neu-700/90",
    "flex",
    "items-center",
    "justify-center"
  );

export const content = () =>
  classNames(
    "text-center",
    "bg-neu-50",
    "space-y-8",
    "rounded",
    "overflow-hidden",
    "shadow-[0px_0px_8px_3px_rgba(0,0,0,0.4)]"
  );

export const padding = () => classNames("px-4", "py-1.5");

export const headerAndFooterBase = () =>
  classNames(padding(), "bg-pri-600", "text-pri-50");

export const header = () => classNames(headerAndFooterBase(), "space-x-2");

export const currencyFullName = () =>
  classNames("font-bold", "text-xl", "tracking-tight");

export const currencyShortName = () => classNames("text-sm");

export const formContainer = () => classNames(padding());

export const inputGroup = () =>
  classNames(
    "flex",
    "justify-between",
    "items-center",
    "gap-x-[2%] md:gap-x-2 lg:gap-x-8",
    "py-1"
  );

export const inputLabel = () => classNames("text-left");

export const inputBase = () =>
  classNames("text-right", "px-2", "py-1.5", "rounded", "focus:outline-none");

export const UneditableInput = () => classNames(inputBase(), "bg-neu-200/90");

export const EditableInput = () =>
  classNames(
    inputBase(),
    "shadow-inner",
    "bg-neu-300/90",
    "ring-0",
    "ring-pri-500",
    "focus:ring-1",
    "text-neu-900"
  );

export const footer = () =>
  classNames(headerAndFooterBase(), "flex", "justify-end", "gap-x-2");

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

export const dropContent = () =>
  classNames(
    "flex",
    "gap-x-2",
    "items-center",
    "cursor-pointer",
    "relative",
    "rounded",
    "border-2",
    "w-[min-content]",
    "px-2",
    "py-1",
    "ml-auto",
    "mr-2"
  );

export const icon = () => classNames("text-neu-700/70");
