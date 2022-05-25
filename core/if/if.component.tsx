import every from "lodash/every";
import { IProps } from "./if.interface";
import { ExcludeFromTuple } from "ts-util-types";

const If = <T extends any[]>({ deps, Component, Else }: IProps<T>) => {
  const ElseComponent = Else ?? (() => null);
  return every(deps, (dep) => dep) ? (
    <Component
      deps={(deps as any) as ExcludeFromTuple<T, undefined | null | false | 0>}
    />
  ) : (
    <ElseComponent />
  );
};

export default If;
