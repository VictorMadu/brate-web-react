import { StrKeys } from "ts-util-types";
import { DataFetching, HttpError } from "../../../utils/status";
import { BaseStateManager } from "../state-manager/base-manager";
import { BatchDataFetchState, ArrDataKey } from "./interfaces";

export interface StateUpdater<
  S extends BatchDataFetchState,
  K extends ArrDataKey<S>
> {
  updatePageOffset(newPageOffset: number): void;
  updateData(newData: S[K]): void;
  updateFetchingStatus(fetchStatus: DataFetching): void;
  updateHttpError(err: HttpError | undefined): void;
}

export class StateUpdaterImpl<
  S extends BatchDataFetchState,
  K extends ArrDataKey<S>
> implements StateUpdater<S, K> {
  constructor(private stateMgr: BaseStateManager<S>, private dataKey: K) {}

  updatePageOffset(newPageOffset: number) {
    this.setData("pageOffset", newPageOffset);
  }

  getCurrData() {
    return this.stateMgr.getData(this.dataKey) as S[K];
  }

  updateData(newData: S[K]) {
    this.setData(this.dataKey, newData);
  }

  updateFetchingStatus(fetchStatus: DataFetching) {
    this.setData("dataFetching", fetchStatus);
  }

  updateHttpError(err: HttpError | undefined) {
    this.setData("httpError", err);
  }

  private setData<KK extends StrKeys<BatchDataFetchState>>(
    key: KK,
    data: S[KK]
  ) {
    (this.stateMgr as BaseStateManager<BatchDataFetchState>).setData(key, data);
  }
}
