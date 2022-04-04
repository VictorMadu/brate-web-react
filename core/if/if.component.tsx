import every from "lodash/every";
import { ExcludeTupleNullableElm } from "../../types";
import { IProps } from "./if.interface";

const If = <T extends any[] = any[]>(props: IProps<T>) => {
  const Component = props.Component;
  const Else = props.Else;
  const allTruthish = every(props.deps, (dep) => dep);
  return allTruthish ? (
    <Component deps={(props.deps as unknown) as ExcludeTupleNullableElm<T>} />
  ) : Else ? (
    <Else />
  ) : null;
};

export default If;
