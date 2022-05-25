import classNames from "classnames";

export const container = () =>
  classNames(
    "[--shadow-color:rgba(0,0,0,0.3)]",
    "[box-shadow:0px_0px_8px_2px_var(--shadow-color)]",
    "px-[6%] md:px-[6%]",
    "py-8",
    "rounded-md",
    "space-y-12",
    "mx-[4%]",
    "bg-neu-50",
    "my-auto"
  );

export const title = () =>
  classNames(
    "font-bold",
    "text-2xl",
    "text-pri-700",
    "capitalize",
    "text-center"
  );

export const inputContainer = () => classNames("space-y-5");

export const inputGroup = () => classNames("");

export const label = () =>
  classNames("block", "uppercase", "text-sm", "tracking-wide", "font-semibold");

export const inputBase = () =>
  classNames(
    "bg-neu-300",
    "w-full",
    "py-2",
    "px-[2%]",
    "focus:outline-none",
    "shadow-inner",
    "rounded-md"
  );

export const textInput = () => classNames(inputBase(), "");

export const pwdInput = () => classNames(inputBase(), "");

export const linkContainer = () => classNames("flex", "space-between", "mt-2");

const link = () =>
  classNames(
    "transition-color",
    "duration-500",
    "text-pri-700 hover:text-pri-500",
    "underline-offset-1",
    "hover:underline focus:underline",
    "cursor-pointer"
  );

export const signInLink = () => classNames(link(), "ml-auto");
export const modalLink = () => classNames(link(), "mr-auto");

export const btnContainer = () => classNames("text-center");

export const btn = () =>
  classNames(
    "transition-color",
    "duration-500",
    "bg-pri-700 hover:bg-pri-800 focus:bg-pri-800",
    "text-center",
    "font-bold",
    "text-neu-50",
    "px-5",
    "py-2",
    "rounded"
  );
