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

export const header = () => classNames();

export const currencyTradeSelectionContainer = () =>
  classNames("flex", "justify-between", "items-center");

export const headerBtnsContainer = () => classNames("space-x-3");

export const headerBtn = () =>
  classNames(
    "font-semibold",
    "text-lg",
    "hover:text-pri-700/90",
    "focus:text-pri-700/90"
  );

export const title = () => classNames("font-semibold", "text-lg", "capitalize");

export const dropDownBtn = () =>
  classNames(
    "transition-all",
    "hover:text-pri-700 focus:text-pri-700",
    "bg-pri-100",
    "h-6",
    "basis-6",
    "shrink-0",
    "rounded",
    "text-center"
  );

export const currencyListContainer = () =>
  classNames("flex", "items-center", "mb-2", "mt-4", "gap-x-2");

export const currencyList = () =>
  classNames("flex", "border-b", "border-neu-400/30", "overflow-auto");

export const currency = () =>
  classNames(
    "px-2",
    "py-1",
    "transition-all",
    "hover:text-pri-600 focus:text-pri-600",
    "border-b-2",
    "hover:bg-pri-50 focus:bg-pri-50",
    "border-transparent hover:border-pri-600 focus:border-pri-600"
  );

export const body = () =>
  classNames(
    "mt-3",
    "shadow-[0px_0px_6px_4px_rgba(0,0,0,0.15)]",
    "grow",
    "rounded-lg",
    "overflow-auto",
    "flex",
    "flex-col"
  );

export const exchangersContainer = () =>
  classNames("w-full", "overflow-auto", "divide-y", "divide-neu-400/30");

export const exchangerRowBase = () =>
  classNames(
    "flex",
    "w-full",
    "px-4",
    "py-1",
    "items-center",
    "gap-x-[4%] md:gap-x-4"
  );

export const exchangerHeader = () =>
  classNames(
    exchangerRowBase(),
    "bg-pri-500",
    "text-neu-50/90",
    "sticky",
    "top-0"
  );

export const nameAndRateColBase = () =>
  classNames(
    "space-y-2",
    "md:space-y-0",
    "md:flex",
    "justify-between",
    "basis-5/12"
  );
export const availableColBase = () => classNames("basis-5/12", "text-center");
export const buyBtnColBase = () => classNames("basis-2/12", "text-right");
export const nameBase = () => classNames();

export const rateBase = () => classNames();

export const nameAndRateContainerHead = () => classNames(nameAndRateColBase());

export const nameHead = () => classNames(nameBase(), "font-bold");

export const rateHead = () => classNames(rateBase(), "font-semibold");

export const availableHead = () =>
  classNames("font-semibold", availableColBase());

export const buyBtnHead = () => classNames("font-semibold", buyBtnColBase());

export const exchangerContent = () => classNames(exchangerRowBase(), "py-2");

export const nameAndRateContainer = () => classNames(nameAndRateColBase());

export const name = () => classNames(nameBase(), "font-bold");
export const rate = () => classNames(rateBase());

export const available = () =>
  classNames("text-sm", "font-normal", availableColBase());

export const buyBtnContainer = () => classNames(buyBtnColBase());

export const buyBtn = () =>
  classNames(
    "rounded",
    "border",
    "border-neu-400/30",
    "cursor-pointer",
    "px-2.5",
    "py-1",
    "font-semibold",
    "hover:bg-pri-100/80 focus:bg-pri-100/80",
    "hover:text-pri-600/90 focus:text-pri-600/90"
  );

// search container
export const searchContainer = () =>
  classNames("relative", "rounded-2xl", "overflow-hidden");

export const searchInput = () =>
  classNames(
    "transition-all",
    "duration-1000",
    "peer",
    "bg-neu-300 focus:bg-pri-100",
    "shadow-inner",
    "pl-3",
    "pr-10",
    "py-1",
    "focus:outline-none",
    "w-12 focus:w-52"
  );
export const searchBtn = () =>
  classNames(
    "absolute",
    "bg-pri-700/90",
    "text-neu-50",
    "right-1 peer-focus:right-2",
    "top-1/2",
    "-translate-y-1/2",
    "w-6",
    "h-6",
    "rounded-full"
  );

export const btn = () =>
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
