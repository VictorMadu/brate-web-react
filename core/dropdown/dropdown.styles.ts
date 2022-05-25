import classNames from "classnames";

interface ContainerProps {
  position?: string;
  boxShadow?: string;
  zIndex?: string;
  show: boolean;
}

export const container = ({
  position,
  boxShadow,
  zIndex,
  show,
}: ContainerProps) =>
  classNames(
    "absolute",
    position ?? "left-0",
    boxShadow,
    zIndex,
    !show && "hidden"
  );

interface ContentProps {
  round?: string;
  padding?: string;
  height?: string;
  overflow?: string;
  boxShadow?: boxShadows;
}

export enum boxShadows {
  MEDIUM = "[--shadow:0px_0px_6px_4px_rgba(0,0,0,0.2)] dark:[--shadow:0px_0px_10px_4px_rgba(255,255,255,0.05)]",
}

export const content = ({
  padding,
  round,
  overflow,
  height,
  boxShadow,
}: ContentProps) =>
  classNames(
    height,
    padding ?? "px-2.5 py-1",
    boxShadow ?? boxShadows.MEDIUM,
    "border",
    "border-neu-400/60",
    "rounded",
    "divide-y",
    "divide-neu-400/30",
    "cursor-pointer",
    round ?? "rounded",
    "divide-y",
    overflow ?? "overflow-auto",
    "bg-neu-50 dark:bg-neu-900",
    "[box-shadow:var(--shadow)]",
    "w-[max-content] max-w-[10rem]"
  );
