import { ExcludeTupleNullableElm } from "../../types";

export interface IProps<T extends any[]> {
  deps: [...T];
  Component: (props: { deps: ExcludeTupleNullableElm<T> }) => JSX.Element;
  Else?: () => JSX.Element;
}
