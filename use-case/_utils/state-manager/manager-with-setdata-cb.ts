import { State } from "./interfaces/states";
import { StrKeys } from "ts-util-types";
import { BaseStateManager } from "./base-manager";

export abstract class StateManagerWithSetCb<
  S extends State
> extends BaseStateManager<S> {
  protected abstract onSetData<T extends StrKeys<S>>(
    dataKey: T,
    baseState: BaseStateManager<S>
  ): void;

  setData<T extends StrKeys<S>>(dataKey: T, newData: S[T]): void {
    super.setData(dataKey, newData);
    this.onSetData(dataKey, this);
  }
}
