import classNames from "classnames";

interface ContainerProps {
  bg?: Bg;
  isDisabled?: boolean;
}

export enum Bg {
  PLAIN_WITH_INTERACTION = "hover:bg-neu-200 focus:bg-neu-200",
}

export const container = (props: ContainerProps) =>
  classNames(
    "relative",
    "transition-all",
    props.bg,
    props.isDisabled && "opacity-50"
  );
