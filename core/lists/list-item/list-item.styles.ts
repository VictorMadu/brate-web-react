import classNames from "classnames";
import { ListItemTypes } from "../types";

export const borderedAndContentSpacedBtw = () =>
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

export function getStyle(type: ListItemTypes) {
  switch (type) {
    case ListItemTypes.BORDERED_AND_CONTENT_SPACED_BTW:
      return borderedAndContentSpacedBtw();

    default:
      return "";
  }
}
