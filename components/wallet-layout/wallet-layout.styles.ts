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

export const walletTable = () =>
  classNames("w-full", "overflow-auto", "divide-y", "divide-neu-400/30");

export const walletRowBase = () =>
  classNames(
    "flex",
    "w-full",
    "p-4",
    "items-center",
    "justify-between",
    "gap-x-[4%] md:gap-x-4"
  );

export const walletHeader = () =>
  classNames(
    walletRowBase(),
    "bg-pri-500",
    "text-neu-50/90",
    "sticky",
    "top-0"
  );

export const walletCurrencyBase = () =>
  classNames(
    "space-y-2",
    "md:space-y-0",
    "md:flex",
    "justify-between",
    "items-center",
    "grow"
  );

export const actionBase = () => classNames("md:basis-3/12", "text-right");

export const walletCurrencyHead = () => classNames(walletCurrencyBase());

export const currencyNameHead = () => classNames("font-semibold");

export const availableHead = () => classNames();

export const actionHead = () => classNames(actionBase());

export const walletRow = () =>
  classNames(walletRowBase(), "even:bg-neu-200/90", "hover:bg-neu-300/90");

export const currencyContent = () => classNames(walletCurrencyBase());

export const currencyDetail = () => classNames("space-x-2");

export const currencyLong = () => classNames();

export const currencyShort = () => classNames("text-sm");

export const available = () => classNames();

export const action = () => classNames(actionBase(), "self-start", "space-x-1");

export const actionBtnBase = () =>
  classNames(
    "rounded",
    "px-1.5",
    "py-1",
    "hover:bg-pri-200/60 focus:bg-pri-200/60",
    "hover:text-pri-500/90 focus:text-pri-500/90",
    "text-sm",
    "border",
    "border-neu-400/30"
  );

export const fundBtn = () => classNames(actionBtnBase());

export const tradeBtn = () => classNames(actionBtnBase());
