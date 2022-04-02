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

export const switchContainer = () =>
  classNames("flex", "justify-end", "shrink-0");

export const settingContainer = () =>
  classNames("flex", "justify-between", "pt-10", "shrink-0");

export const baseContainer = () => classNames("flex", "rounded");

export const base = () =>
  classNames("bg-neu-400", "px-2", "py-1.5", "rounded-l");

export const inputContainer = () => classNames("relative", "flex");

export const input = () =>
  classNames("max-w-[5rem]", "focus:outline-none", "bg-neu-200", "rounded-r");

export const dropdownContainer = (isShow: boolean) =>
  classNames(
    "top-full",
    "left-0",
    "bg-neu-50 dark:bg-neu-900",
    "max-h-[10rem]",
    "overflow-auto",
    "rounded",
    "[--shadow:0px_0px_6px_4px_rgba(0,0,0,0.2)] dark:[--shadow:0px_0px_10px_4px_rgba(255,255,255,0.05)] [box-shadow:var(--shadow)]",
    "absolute",
    "cursor-pointer",
    isShow ? "absolute" : "hidden"
  );

export const dropItem = (isActive: boolean) =>
  classNames(
    "px-5",
    "py-2",
    "flex",
    "gap-x-2",
    "w-full",
    "items-center",
    "transition-all",
    "hover:bg-neu-200 focus:bg-neu-200 dark:hover:bg-neu-800 dark:focus:bg-neu-800",
    { "text-pri-700 dark:text-pri-200": isActive },
    { "font-semibold": isActive }
  );

export const filterContainer = () =>
  classNames("flex", "gap-x-3", "items-end", "font-bold");

export const filterLeft = () => classNames("flex");

export const filterRight = () => classNames("flex");

export const paginationContainer = () =>
  classNames("mt-8", "text-right", "shrink-0", "overflow-auto");

export const pricesTable = () =>
  classNames(
    "w-full",
    "shadow-[0px_0px_6px_rgba(0,0,0,0.4)]",
    "mt-4",
    "rounded-md",
    "overflow-auto"
  );

export const row = () => classNames("flex", "items-center", "py-2");
export const col1 = () => classNames("basis-4/12", "space-y-1");
export const col2 = () => classNames("basis-6/12", "space-y-1");
export const col3 = () => classNames("basis-2", "grow");

export const pricesTableHeadRow = () =>
  classNames(
    row(),
    "tracking-wide",
    "bg-pri-500",
    "uppercase",
    "text-sm",
    "text-neu-50",
    "sticky",
    "top-0"
  );

export const pricesTableHeadCol = () => classNames("font-bold", "px-3", "py-2");

export const pricesTableHeadCol1 = () =>
  classNames(pricesTableHeadCol(), col1());
export const pricesTableHeadCol2 = () =>
  classNames(pricesTableHeadCol(), col2());
export const pricesTableHeadCol3 = () =>
  classNames(pricesTableHeadCol(), col3());

export const pricesTableBodyRow = () =>
  classNames(row(), "even:bg-neu-200", "hover:bg-neu-300");

export const pricesTableBodyCol = () => classNames("px-3", "py-3");

export const pricesTableBodyCol1 = () =>
  classNames(pricesTableBodyCol(), col1());
export const pricesTableBodyCol2 = () =>
  classNames(pricesTableBodyCol(), col2());
export const pricesTableBodyCol3 = () =>
  classNames(pricesTableBodyCol(), col3());

export const currencyPair = () => classNames("font-bold");

export const delBtn = () =>
  classNames(
    "transition-all",
    "font-semibold",
    "bg-neu-300 hover:bg-warn-100/50 focus:bg-warn-100/50",
    "hover:text-warn-500 focus:text-warn-500",
    "py-1",
    "px-1.5",
    "rounded",
    "cursor-pointer"
  );
