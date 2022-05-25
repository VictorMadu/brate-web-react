import classNames from "classnames";

export const container = () =>
  classNames(
    "flex",
    "justify-between",
    "items-center",
    "gap-x-[2%] md:gap-x-2 lg:gap-x-8",
    "py-1"
  );

export const labelFont = () => classNames("text-left");

export const input = (isEditable: boolean) =>
  classNames(inputBase(), isEditable ? EditableInput() : UneditableInput());

export const inputBase = () =>
  classNames("text-right", "px-2", "py-1.5", "rounded", "focus:outline-none");

const UneditableInput = () => classNames(inputBase(), "bg-neu-200/90");

const EditableInput = () =>
  classNames(
    inputBase(),
    "shadow-inner",
    "bg-neu-300/90",
    "ring-0",
    "ring-pri-500",
    "focus:ring-1",
    "text-neu-900"
  );
