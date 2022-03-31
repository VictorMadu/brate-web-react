import classNames from "classnames";

export const container = () =>
  classNames("w-full", "px-[4%]", "md:px-[10%]", "py-3");

export const switchContainer = () => classNames("flex", "justify-end");

export const settingContainer = () =>
  classNames("flex", "justify-between", "pt-10");

export const baseContainer = () =>
  classNames("flex", "rounded", "overflow-hidden");

export const base = () => classNames("bg-neu-400", "px-2", "py-1.5");

export const inputContainer = () => classNames("flex");

export const input = () => classNames("max-w-[6rem]");

export const filterContainer = () =>
  classNames("flex", "gap-x-3", "items-end", "font-bold");

export const filterLeft = () => classNames("flex");

export const filterRight = () => classNames("flex");

export const pricesTable = () =>
  classNames(
    "w-full",
    "shadow-[0px_0px_6px_rgba(0,0,0,0.4)]",
    "mt-8",
    "rounded-md",
    "overflow-hidden"
  );

export const pricesTableHeadRow = () =>
  classNames(
    "tracking-wide",
    "bg-pri-500",
    "uppercase",
    "text-sm",
    "text-neu-50"
  );

export const pricesTableHeadCol = () =>
  classNames("font-normal", "px-3", "py-2");

export const pricesTableHeadCol1 = () =>
  classNames(pricesTableHeadCol(), "w-5/12");
export const pricesTableHeadCol2 = () =>
  classNames(pricesTableHeadCol(), "w-3/12");
export const pricesTableHeadCol3 = () =>
  classNames(pricesTableHeadCol(), "w-3/12");
export const pricesTableHeadCol4 = () =>
  classNames(pricesTableHeadCol(), "w-1/12");

export const pricesTableBody = () => classNames();

export const pricesTableBodyRow = () =>
  classNames("even:bg-neu-200", "hover:bg-neu-300");

export const pricesTableBodyCol = () => classNames("px-3", "py-2");

export const pricesTableBodyCol1 = () =>
  classNames(pricesTableBodyCol(), "w-5/12");
export const pricesTableBodyCol2 = () =>
  classNames(pricesTableBodyCol(), "w-3/12", "text-right");
export const pricesTableBodyCol3 = () =>
  classNames(pricesTableBodyCol(), "w-3/12", "text-right");
export const pricesTableBodyCol4 = () =>
  classNames(pricesTableBodyCol(), "w-1/12");
