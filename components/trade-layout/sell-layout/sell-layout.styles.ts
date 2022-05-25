import classNames from "classnames";

export const container = () =>
  classNames("w-full", "px-[4%]", "py-3", "h-full", "flex", "flex-col");

export const settings = () =>
  classNames("flex", "justify-between", "items-center");

export const addBtn = () =>
  classNames(
    "font-bold",
    "bg-pri-600 hover:bg-pri-700 focus:bg-pri-700",
    "transition-all",
    "duration-500",
    "text-neu-50",
    "rounded",
    "px-3",
    "py-1",
    "capitalize"
  );

export const tableContainer = () =>
  classNames(
    "mt-3",
    "lg:shadow-[0px_0px_6px_4px_rgba(0,0,0,0.15)]",
    "grow",
    "rounded-lg",
    "overflow-auto",
    "w-full lg:w-[fit-content]",
    "mx-auto"
  );

export const table = () =>
  classNames(
    "overflow-y-auto",
    "lg:divide-y",
    "lg:divide-neu-400/30",
    "mx-auto"
  );

export const rowBase = () => classNames();

export const colBase = () => classNames("lg:px-12", "lg:py-4");

export const col1Base = () =>
  classNames(colBase(), "text-left", "lg:pl-4", "space-y-2");

export const col2Base = () => classNames(colBase(), "text-right");

export const col3Base = () => classNames(colBase(), "text-right", "lg:pr-4");

export const rowHead = () => classNames("hidden lg:table-row");

export const head = () => classNames("bg-pri-600", "sticky", "top-0");

export const actionBase = () => classNames();

export const colHeadBase = () =>
  classNames("uppercase", "font-semibold", "text-sm", "text-neu-50");

export const colHead1 = () => classNames(col1Base(), colHeadBase());

export const colHead2 = () => classNames(col2Base(), colHeadBase());

export const colHead3 = () => classNames(col3Base(), colHeadBase());

export const body = () => classNames();

export const row = () =>
  classNames(
    rowBase(),
    "hover:bg-neu-50",
    "flex lg:table-row",
    "flex-wrap",
    "justify-between",
    "gap-y-10",
    "px-[4%]",
    "py-2",
    "mx-1.5",
    "my-6 lg:my-0",
    "[--shadow:0px_0px_6px_2px] hover:[--shadow:0px_0px_8px_4px] lg:[--shadow:0px_0px_1px_1px] hover:lg:[--shadow:0px_0px_1px_1px]",
    "[--shadow-color:rgba(0,0,0,0.12)] hover:[--shadow-color:rgba(0,0,0,0.28)] hover:lg:[--shadow-color:rgba(0,0,0,0.12)] ",
    "[box-shadow:var(--shadow)_var(--shadow-color)]",
    "transition-all",
    "duration-500",
    "rounded-md",
    "bg-neu-50"
  );

export const smallColLabel = () =>
  classNames(
    "before:content-[attr(data-title)] before:block lg:before:hidden before:uppercase before:text-xs before:text-pri-600 before:font-normal before:text-left"
  );

export const col1 = () =>
  classNames(col1Base(), smallColLabel(), "order-2", "font-semibold");

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

export const currencyNameContainer = () => classNames("space-x-1");

export const currencyBase = () => classNames("inline-block");

export const currencyLong = () => classNames(currencyBase());

export const currencyShort = () =>
  classNames(currencyBase(), "text-sm", "font-normal");

export const actionBtn = () =>
  classNames(
    "rounded",
    "lg:px-1.5",
    "py-1",
    "lg:hover:bg-pri-200/60 lg:focus:bg-pri-200/60",
    "hover:text-neu-700/90 focus:text-neu-700/90",
    "text-sm",
    "lg:border",
    "lg:border-neu-400/30",
    "text-neu-500/90",
    "font-semibold",
    "capitalize"
  );
