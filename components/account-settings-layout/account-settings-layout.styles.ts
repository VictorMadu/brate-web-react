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

export const option = () =>
  classNames(
    "flex",
    "justify-between",
    "items-center",
    "border",
    "border-neu-400/30",
    "rounded-md",
    "px-3",
    "py-4"
  );

export const switchContainer = () =>
  classNames("relative", "rounded-xl", "bg-neu-300/90", "w-9", "h-5");

export const switchBtn = () =>
  classNames(
    "w-5",
    "h-5",
    "rounded-full",
    "bg-neu-500/90",
    // "block",
    "absolute",
    "top-0",
    "transition-all",
    "duration-1000"
  );

const toggleSwitch = () => classNames("right-0", "bg-pri-500/90");
const toggleSwitchContainer = () => classNames("bg-pri-200/60");

export const toggleSwitchBtn = (
  switchBtn: HTMLButtonElement,
  switchBtnContainer: HTMLDivElement,
  isOn: boolean
) => {
  const action = isOn ? "add" : "remove";
  switchBtn.classList[action](...toggleSwitch().split(" "));
  switchBtnContainer.classList[action](...toggleSwitchContainer().split(" "));
};
