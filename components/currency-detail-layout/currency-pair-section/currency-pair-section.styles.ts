import classNames from "classnames";

export const container = () =>
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

export const rate = () => classNames("text-lg", "pr-1");

export const rateChange = (isLoss: boolean) =>
  classNames(isLoss ? "text-red-700" : "text-green-700");
