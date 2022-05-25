import { StrKeys } from "ts-util-types";
import { BaseStateManager } from "../_utils/state-manager/base-manager";
import {
  DataFetchingState,
  HttpErrorState,
  PaginationState,
} from "../_utils/state-manager/interfaces/states";
import { StateManagerWithSetCb } from "../_utils/state-manager/manager-with-setdata-cb";
import { createCheckKeyInKeysFn } from "../_utils/state-manager/utils";
import { StorageManager } from "../_utils/storage-manager";

type Base = string;
type Quota = string;

export type Pair = `${Base} ${Quota}`;

export type RateInfo = {
  pair: Pair,
  rate: number;
  prev_rate: number;
  is_favourite?: boolean;
};

export interface RateState
  extends PaginationState,
    DataFetchingState,
    HttpErrorState {
  rates: RateInfo[];
  market: "parallel" | "black";
  base: string;
  filter: "all" | "favourite" | "unfavourite";
  indexOfPairInView: number;
}

class StateManager extends StateManagerWithSetCb<RateState> {
  private storageManager: StorageManager = new StorageManager<RateState>(
    this.getName()
  );
  private checkKeyInKeys = createCheckKeyInKeysFn("rates");

  protected getName() {
    return "Rate";
  }

  protected getInitialState(): RateState {
    return {
      rates: [],
      market: "parallel",
      base: "",
      filter: "all",
      indexOfPairInView: 0,
      httpError: undefined,
      pageOffset: 0,
      pageCount: 2,
      dataFetching: undefined,
      additionalDataCount: 2,
    };
  }
  protected getStoredState(): Partial<RateState> {
    return {
      rates: this.storageManager.get("rates") ?? [],
    };
  }

  protected onSetData<T extends StrKeys<RateState>>(
    dataKey: T,
    baseState: BaseStateManager<RateState>
  ): void {
    if (this.checkKeyInKeys(dataKey))
      this.storageManager.set(dataKey, baseState.getData(dataKey));
  }
}

export const rateStateMgr = new StateManager();
export type RateStateManager = BaseStateManager<RateState>;
