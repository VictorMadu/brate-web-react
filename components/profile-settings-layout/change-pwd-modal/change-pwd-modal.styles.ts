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
    "justify-center",
    "items-center",
    "px-2"
  );

export const content = () =>
  classNames(
    "bg-neu-50",
    "text-center",
    "px-8",
    "py-6",
    "rounded",
    "space-y-6",
    "shadow-[0px_0px_10px_1px_rgba(0,0,0,0.4)]"
  );

export const textContainer = () => classNames("");

export const title = () =>
  classNames(
    "font-bold",
    "text-pri-800/90",
    "text-xl",
    "tracking-tight",
    "mb-2"
  );

export const text = () => classNames();

export const formContainer = () =>
  classNames(
    "rounded",
    "overflow-hidden",
    "mx-auto",
    "flex",
    "justify-center",
    "w-full md:w-3/4"
  );

export const inputLabel = () =>
  classNames(
    "bg-pri-100/90",
    "font-semibold",
    "text-lg",
    "px-3",
    "py-2",
    "rounded-l",
    "inline-block"
  );

export const input = () =>
  classNames(
    "px-1",
    "py-2",
    "focus:outline-none",
    "bg-neu-300/60",
    "shadow-inner",
    "grow",
    "rounded-r"
  );

export const btnContainer = () => classNames("text-right");

export const btnBase = () =>
  classNames(
    "px-3",
    "py-1",
    "rounded",
    "text-lg",
    "font-semibold",
    "hover:text-neu-900/90",
    "transition-all"
  );

export const cancelBtn = () => classNames(btnBase());

export const sendBtn = () =>
  classNames(
    btnBase(),
    "bg-pri-100/90 hover:bg-pri-200/60 focus:bg-pri-200/60",
    "shadow-pri-100"
  );
