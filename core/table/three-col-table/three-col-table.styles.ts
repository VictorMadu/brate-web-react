import classNames from "classnames";

export const tableContainer = () =>
  classNames(
    "mt-3",
    "lg:shadow-[0px_0px_6px_4px_rgba(0,0,0,0.15)]",
    // "grow",
    "rounded-lg",
    "overflow-auto",
    "w-full max-w-[60rem]",
    "mx-auto"
  );

export const table = () =>
  classNames(
    "overflow-y-auto",
    "lg:divide-y",
    "lg:divide-neu-400/30",
    "mx-auto",
    "w-full",
    "px-[5%] lg:px-0"
  );

export const rowBase = () => classNames();

export const colBase = () => classNames("lg:px-12", "lg:py-4");

export const col1Base = () => classNames(colBase(), "text-left", "lg:pl-4");

export const col2Base = () => classNames(colBase(), "text-right");

export const col3Base = () => classNames(colBase(), "text-right", "lg:pr-4");

export const rowHead = () => classNames("hidden lg:table-row");

export const head = () => classNames("bg-pri-600", "sticky", "top-0");

export const actionBase = () => classNames();

export const colHeadBase = () =>
  classNames("uppercase", "font-semibold", "text-neu-50");

export const colHead1 = () => classNames(col1Base(), colHeadBase());

export const colHead2 = () => classNames(col2Base(), colHeadBase());

export const colHead3 = () => classNames(col3Base(), colHeadBase());

export const body = () => classNames();

export const row = () =>
  classNames(
    rowBase(),
    "hover:bg-neu-300/50 lg:hover:bg-neu-300/50  lg:even:bg-neu-200/50",
    "flex lg:table-row",
    "flex-wrap",
    "justify-between",
    "gap-y-10",
    "px-[4%]",
    "py-2",
    "mx-1.5",
    "my-6 lg:my-0",
    "shadow-[0px_0px_6px_2px_rgba(0,0,0,0.12)] lg:shadow-none",
    "transition-all",
    "duration-300",
    "rounded-md",
    "bg-neu-50"
  );

export const smallColLabel = () =>
  classNames(
    "before:content-[attr(data-title)] before:block lg:before:hidden before:uppercase before:text-xs before:text-pri-600 before:font-normal before:mb-2"
  );

export const col1 = () =>
  classNames(
    col1Base(),
    smallColLabel(),
    "space-x-3",
    "order-2",
    "font-semibold"
  );

export const col2 = () =>
  classNames(col2Base(), smallColLabel(), "order-2", "font-semibold");

export const col3 = () =>
  classNames(
    col3Base(),
    "space-x-3",
    "order-1",
    "basis-full",
    "border-b-2 lg:border-none",
    "border-neu-400/30"
  );
