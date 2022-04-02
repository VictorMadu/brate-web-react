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
  classNames("flex", "justify-between", "shrink-0");

export const baseContainer = () => classNames("flex", "rounded");

export const base = () => classNames("bg-neu-400", "px-2", "py-1", "rounded-l");

export const inputContainer = () => classNames("relative", "flex");

export const input = () =>
  classNames(
    "max-w-[5rem]",
    "focus:outline-none",
    "bg-neu-200",
    "rounded-r",
    "px-1.5"
  );

export const dropdownContainer = (isShow: boolean) =>
  classNames(
    "top-full",
    "left-0",
    "absolute",
    isShow ? "absolute" : "hidden",
    "z-10"
  );

export const dropdownContent = () =>
  classNames(
    "bg-neu-50 dark:bg-neu-900",
    "max-h-[10rem]",
    "overflow-auto",
    "[--shadow:0px_0px_6px_4px_rgba(0,0,0,0.2)] dark:[--shadow:0px_0px_10px_4px_rgba(255,255,255,0.05)] [box-shadow:var(--shadow)]",
    "divide-y",
    "divide-neu-400/30",
    "cursor-pointer",
    "rounded",
    "divide-y",
    "divide-ney-400/30"
  );

export const dropItem = (isActive: boolean) =>
  classNames(
    "px-5",
    "py-1.5",
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
  classNames(
    "relative",
    "px-2.5",
    "py-1",
    "border",
    "border-neu-400/60",
    "rounded"
  );

export const filterContent = () =>
  classNames("flex", "gap-x-2", "items-center");

export const filterIcon = () => classNames("text-neu-700/70");

export const filterDropdownContainer = () =>
  classNames("absolute", "right-0", "top-full", "z-20");

export const filterDropdownContent = () =>
  classNames(
    "flex",
    "flex-col",
    "border",
    "border-neu-400/60",
    "rounded",
    "shadow-[0px_0px_6px_4px_rgba(0,0,0,0.15)]",
    "bg-neu-50",
    "divide-y",
    "divide-neu-400/30"
  );

export const filterDropdownItem = () =>
  classNames("pl-2", "pr-6", "py-1", "relative");

export const filterDropdownDropdownContainer = () =>
  classNames("absolute", "top-full", "right-full", "-mt-1", "-mr-2", "z-20");

export const filterDropdownDropdownContent = () =>
  classNames(
    "border",
    "border-neu-400/60",
    "rounded",
    "shadow-[0px_0px_6px_4px_rgba(0,0,0,0.15)]",
    "bg-neu-50",
    "divide-y",
    "divide-neu-400/30"
  );

export const filterDropdownDropItem = () => classNames("pl-2", "py-1", "px-6");

export const paginationContainer = () =>
  classNames("mt-8", "text-right", "shrink-0", "overflow-auto");

export const pricesTable = () =>
  classNames(
    "w-full",
    "shadow-[0px_0px_6px_rgba(0,0,0,0.4)]",
    "mt-4",
    "rounded-md",
    "overflow-auto",
    "flex",
    "flex-col",
    "relative"
  );

export const row = () => classNames("flex");
export const col1 = () => classNames("basis-6/12 md:basis-5/12");
export const col2 = () => classNames("basis-4/12 md:basis-3/12");
export const col3 = () => classNames("basis-3/12", "hidden md:block");
export const col4 = () => classNames("basis-0");

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

export const pricesTableHeadCol = () =>
  classNames("font-normal", "px-3", "py-2");

export const pricesTableHeadCol1 = () =>
  classNames(pricesTableHeadCol(), col1());
export const pricesTableHeadCol2 = () =>
  classNames(pricesTableHeadCol(), col2(), "text-right");
export const pricesTableHeadCol3 = () =>
  classNames(pricesTableHeadCol(), col3(), "text-right");
export const pricesTableHeadCol4 = () =>
  classNames(pricesTableHeadCol(), col4(), "text-right");

export const pricesTableBodyRow = () =>
  classNames(row(), "even:bg-neu-200", "hover:bg-neu-300");

export const pricesTableBodyCol = () => classNames("px-3", "py-3");

export const pricesTableBodyCol1 = () =>
  classNames(pricesTableBodyCol(), col1(), "w-5/12");
export const pricesTableBodyCol2 = () =>
  classNames(pricesTableBodyCol(), col2(), "w-3/12", "text-right");
export const pricesTableBodyCol3 = () =>
  classNames(pricesTableBodyCol(), col3(), "w-3/12", "text-right");
export const pricesTableBodyCol4 = () =>
  classNames(pricesTableBodyCol(), col4(), "w-1/12");
