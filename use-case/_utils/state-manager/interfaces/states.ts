import { DataFetching, HttpError } from "../../../../utils/status";

export type State = Record<string, any>;

export interface PaginationState {
  pageOffset: number;
  pageCount: number;
  additionalDataCount: number;
}

export interface DataFetchingState {
  dataFetching: DataFetching | undefined;
}

export interface HttpErrorState {
  httpError: HttpError | undefined;
}
