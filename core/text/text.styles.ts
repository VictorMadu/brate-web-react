import classNames from "classnames";

interface ContainerProps {
  margin?: string;
  padding?: string;
  font?: string;
  bg?: string;
  round?: string;
  color?: string;
}

export const container = ({
  margin,
  padding,
  font,
  bg,
  round,
  color,
}: ContainerProps) => classNames(margin, padding, font, bg, round, color);
