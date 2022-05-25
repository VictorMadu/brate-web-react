import React from "react";
import If from "../if";

interface IProps {
  value: string | symbol | number | null | undefined;
  cases: Record<string | number | symbol, () => JSX.Element>;
}

export const SwitchCase = (props: IProps) => {
  if (props.value == null) return <></>;

  const Component =
    props.cases[props.value] ??
    props.cases[SwitchCase.DEFAULT] ??
    React.Fragment;

  return <Component />;
};

SwitchCase.DEFAULT = Symbol("DEFAULT");

export default SwitchCase;
