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

// settings Container
export const settingsContainer = () =>
  classNames("flex", "justify-between", "items-center");

export const switchContainer = () =>
  classNames("flex", "justify-end", "shrink-0");

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

// dropdown

export const dropdownContainer = () => classNames("relative", "group");

export const dropdownBtn = () =>
  classNames(
    "flex",
    "gap-x-2",
    "items-center",
    "group-hover:bg-pri-200/60 group-focus:bg-pri-200/60",
    "group-hover:text-pri-500/90 group-focus:text-pri-500/90",
    "px-2.5",
    "py-1",
    "border",
    "border-neu-400/60",
    "rounded",
    "text-neu-500/90"
  );

export const dropdownIcon = () =>
  classNames(
    "text-neu-700 group-hover:text-pri-500/90 group-focus:text-pri-500/90"
  );

export const dropdownContent = () =>
  classNames("absolute", "left-0", "top-full", "w-[max-content]", "z-20");

export const dropList = () =>
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

export const dropItem = () =>
  classNames(
    "pl-2",
    "pr-6",
    "py-2",
    "hover:bg-neu-300",
    "focus:bg-neu-300",
    "capitalize"
  );
