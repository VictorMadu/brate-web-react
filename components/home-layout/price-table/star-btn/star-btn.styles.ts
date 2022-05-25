import classNames from "classnames";

export const container = () => classNames("");

interface IconProps {
  isFav: boolean | undefined;
  isAuth: boolean;
}

export const icon = ({ isFav, isAuth }: IconProps) =>
  classNames(
    isFav ? "text-yellow-500" : isAuth ? "text-neu-300" : "text-neu-200"
  );
