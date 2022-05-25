import { StrKeys } from "ts-util-types";
import { AlertState, alertStateMgr } from "../../use-case/alerts/state-manager";
import { BaseStateManager } from "../../use-case/_utils/state-manager/base-manager";
import {
  PaginationState,
  DataFetchingState,
  HttpErrorState,
  State,
} from "../../use-case/_utils/state-manager/interfaces/states";

export type BatchDataFetchState = PaginationState &
  DataFetchingState &
  HttpErrorState &
  State;

export type BatchDataFetchStateManager = BaseStateManager<BatchDataFetchState>;

export type StateOfManager<
  S extends BaseStateManager<BatchDataFetchState>
> = S extends BaseStateManager<infer O> ? O : never;

export type ArrDataKey<S extends BaseStateManager<BatchDataFetchState>> = {
  [K in StrKeys<StateOfManager<S>>]: StateOfManager<S>[K] extends Array<any>
    ? K
    : never;
}[StrKeys<StateOfManager<S>>];
