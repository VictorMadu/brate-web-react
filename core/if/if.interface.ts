import { ExcludeFromTuple } from "ts-util-types";

export interface IProps<T extends any[]> {
  deps: [...T];
  Component: (props: {
    deps: ExcludeFromTuple<T, undefined | null | false | 0>;
  }) => JSX.Element;
  Else?: () => JSX.Element;
}
