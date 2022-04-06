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
    "space-y-8",
    "rounded",
    "bg-neu-50",
    "shadow-[0px_0px_8px_3px_rgba(0,0,0,0.4)]",
    "md:min-w-[24rem]"
  );

export const padding = () => classNames("px-4", "py-1.5");

export const headerAndFooterBase = () =>
  classNames(padding(), "bg-pri-600", "text-pri-50");

export const header = () =>
  classNames(headerAndFooterBase(), "space-x-2", "rounded-t");

export const currencyFullName = () =>
  classNames("font-bold", "text-xl", "tracking-tight");

export const currencyShortName = () => classNames("text-sm");

export const formContainer = () =>
  classNames(padding(), "bg-neu-50", "space-y-6");

export const inputGroup = () =>
  classNames(
    "flex",
    "justify-center",
    "items-center",
    // "gap-x-[2%] md:gap-x-2 lg:gap-x-8",
    "py-1"
  );

export const inputLabel = () =>
  classNames(
    "text-left",
    "capitalize",
    "rounded-l",
    "bg-pri-200/90",
    "block",
    "font-semibold",
    "px-2",
    "py-1.5"
  );

export const inputBase = () =>
  classNames("text-right", "px-2", "py-1.5", "rounded-r", "focus:outline-none");

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
  classNames(
    headerAndFooterBase(),
    "flex",
    "justify-end",
    "gap-x-2",
    "rounded-b"
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

export const dropdownTitleContainer = () => classNames("text-left", "mb-2");

export const title = () =>
  classNames("font-semibold", "capitalize", "leading-4");
export const helper = () => classNames("text-xs", "first-letter:capitalize");

export const dropdownGroup = () => classNames("flex", "justify-between");

export const dropdownContainer = () => classNames("relative", "group");

export const dropdownBtn = () =>
  classNames(
    "flex",
    "gap-x-2",
    "items-center",
    "text-neu-500/90",
    "capitalize",
    "absolute",
    "left-2",
    "top-1/2",
    "-translate-y-1/2"
  );

export const dropdownIcon = () => classNames();

export const dropInput = () =>
  classNames(
    "w-20",
    "focus:outline-none",
    "border",
    "border-neu-400/60",
    "rounded",
    "pl-5",
    "pr-2",
    "py-1",
    "focus:bg-neu-300",
    "transition-color",
    "duration-500"
  );

export const dropdownContent = (isLast?: boolean) =>
  classNames(
    "absolute",
    isLast ? "right-0" : "left-0",
    "top-full",
    "w-[max-content]",
    "z-20"
  );

export const dropList = () =>
  classNames(
    "flex",
    "flex-col",
    "border",
    "border-neu-400/60",
    "rounded",
    "shadow-[0px_0px_6px_4px_rgba(0,0,0,0.15)]",
    "bg-neu-50",
    "divide-y",
    "divide-neu-400/30",
    "max-h-52",
    "overflow-auto"
  );

export const dropItem = () =>
  classNames(
    "pl-2",
    "pr-4",
    "py-1.5",
    "hover:bg-neu-300",
    "focus:bg-neu-300",
    "capitalize",
    "text-left"
  );
