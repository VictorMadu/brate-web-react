import classNames from "classnames";

export const container = () =>
  classNames(
    "absolute",
    "w-full",
    "h-full",
    "top-0",
    "left-0",
    "bg-neu-900/40",
    "text-neu-700/90"
  );

export const content = () =>
  classNames(
    "w-full",
    "h-full",
    "flex",
    "justify-center",
    "items-center",
    "text-center",
    "px-2"
  );
export const formContainer = () =>
  classNames("bg-neu-50", "p-6", "space-y-8", "rounded");

export const titleContent = () => classNames("space-x-2");

export const currencyFullName = () =>
  classNames("font-bold", "text-xl", "text-pri-800/90", "tracking-tight");

export const currencyShortName = () => classNames("text-sm", "text-neu-700/90");

export const inputGroup = () =>
  classNames("flex", "justify-between", "items-center", "gap-x-2", "py-1");

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

export const actionBtnContainer = () =>
  classNames("flex", "justify-end", "gap-x-2");

export const btnBase = () =>
  classNames("font-semibold", "rounded", "px-2", "py-1", "transition-all");

export const cancelBtn = () =>
  classNames(btnBase(), "hover:text-pri-900/90 focus:text-pri-900/90");

export const continueBtn = () =>
  classNames(
    btnBase(),
    "bg-neu-200/90 hover:bg-pri-200/90 focus:bg-pri-200/90",
    "shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-none"
  );
