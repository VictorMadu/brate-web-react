import classNames from "classnames";

export const container = () =>
  classNames(
    "w-full",
    "px-[4%]",
    "md:px-[10%]",
    "py-3",
    "h-full",
    "flex",
    "flex-col"
  );

export const switchContainer = () => classNames("text-right");

export const currencyPairContainer = () =>
  classNames("mx-auto", "mt-8", "space-y-4", "space-x-8", "text-center");

export const currency = (isBase: boolean) =>
  classNames(
    "lg:inline-block",
    "font-semibold",
    "text-xl",
    "before:content-[attr(data-short)] before:hidden before:mr-1.5 before:text-base before:font-normal",
    "after:content-[attr(data-short)] after:inline-block after:ml-1.5 after:text-base after:font-normal",
    isBase ? "after:md:inline-block" : "before:md:inline-block after:md:hidden"
  );

export const currencyShort = () => classNames();

export const rateContainer = () =>
  classNames(
    "border",
    "border-neu-400/30",
    "rounded-md",
    "inline-block",
    "px-3",
    "py-2",
    "space-x-1"
  );

export const rate = () => classNames("text-lg");

export const rateChange = () => classNames();

export const btnGroup = () =>
  classNames(
    "flex",
    "items-center",
    "justify-center",
    "mt-16",
    "mb-4",
    "border-b",
    "border-neu-400/30"
  );

export const btn = () =>
  classNames(
    "px-3",
    "py-1",
    "transition-all",
    "hover:text-pri-600 focus:text-pri-600",
    "hover:bg-pri-200/60 focus:bg-pri-200/60",
    "uppercase",
    "text-sm"
  );

export const currencyContainer = () =>
  classNames(
    "bg-neu-50",
    "rounded",
    "shadow-[0px_0px_8px_1px_rgba(0,0,0,0.15)]",
    "px-4",
    "py-14",
    "flex",
    "flex-col",
    "justify-between",
    "space-y-4"
  );

export const currencyContent = () =>
  classNames("text-center", "overflow-hidden");

export const currencyAbbrevLabel = () =>
  classNames(
    "rounded-l",
    "bg-pri-200",
    "px-3",
    "py-2",
    "inline-block",
    "font-semibold"
  );

export const currencyInput = () =>
  classNames(
    "px-1",
    "py-2",
    "focus:outline-none",
    "rounded-r",
    "bg-neu-300/60",
    "shadow-inner"
  );

export const toggleBtnContainer = () =>
  classNames("flex", "justify-center", "py-3");

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

export const icon = () => classNames();

export const actionBtn = () =>
  classNames(
    "bg-pri-100/60 hover:bg-pri-200/60 focus:bg-pri-200/60",
    "transition-colors",
    "px-5",
    "py-1.5",
    "font-bold",
    "text-pri-500",
    "rounded"
  );

export const actionBtnContainer = () => classNames("mx-auto", "pt-4");
