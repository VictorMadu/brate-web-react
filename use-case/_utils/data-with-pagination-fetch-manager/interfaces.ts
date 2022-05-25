import { StrKeys } from "ts-util-types";
import { DataFetching, HttpError } from "../../../utils/status";
import { AlertState } from "../../alerts/state-manager";
import { BaseStateManager } from "../state-manager/base-manager";
import {
  State,
  PaginationState,
  DataFetchingState,
  HttpErrorState,
} from "../state-manager/interfaces/states";

// TODO: Inside of factory obtaning the pageCount, pageOffset, dataLength, additionalCount and co. We should do that ourselves. It is more flexible as client can set the kind of data they want
export interface DataServiceFetcher<
  S extends BatchDataFetchState,
  K extends ArrDataKey<S>
> {
  fetch: (
    pageOffset: number,
    pageCount: number
  ) => Promise<[S[K], undefined] | [undefined, HttpError]>;
}

export type BatchDataFetchState = PaginationState &
  DataFetchingState &
  HttpErrorState &
  State;

export type ArrDataKey<S extends State> = {
  [K in StrKeys<S>]: S[K] extends Array<any> ? K : never;
}[StrKeys<S>];

export type ArrDataKeyOfStateManager<
  T extends BaseStateManager<BatchDataFetchState>
> = ArrDataKey<ManagerState<T>>;

export type ManagerState<
  T extends BaseStateManager<BatchDataFetchState>
> = T extends BaseStateManager<infer O> ? O : never;
