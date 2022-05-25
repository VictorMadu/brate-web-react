import { StrKeys, InnerValue } from "ts-util-types";
import { BaseStateManager } from "../state-manager/base-manager";
import { PaginationState, State } from "../state-manager/interfaces/states";
import { ArrDataKey } from "./interfaces";

// TODO: class trying to get key type like BaseFetchDetailsDirector should do like this. Edit ArrDataKeyOfStateManager and ManagerState in pagiaiton-data-manager interface
export type ManagerState<
  T extends BaseStateManager<PaginationState>
> = T extends BaseStateManager<infer O> ? O : never;

export interface FetchDetailsDirector<
  S extends PaginationState & State,
  K extends ArrDataKey<S>
> {
  getPageOffset: () => number;
  getPageCount: () => number;
  getCurrData(): S[K] extends any[] ? S[K] : never;
  getAdditionalPageCount: () => number;
}

export class FetchDetailsDirectorImpl<
  S extends PaginationState & State,
  K extends ArrDataKey<S>
> implements FetchDetailsDirector<S, K> {
  constructor(
    private stateMgr: BaseStateManager<S>,
    private dataKey: ArrDataKey<S>
  ) {}

  getPageOffset() {
    return this.getData<"pageOffset">("pageOffset");
  }

  getPageCount() {
    return this.getData<"pageCount">("pageCount");
  }

  getAdditionalPageCount() {
    return this.getData<"additionalDataCount">("additionalDataCount");
  }

  getCurrData() {
    return this.getData(this.dataKey) as S[K];
  }

  private getData<KK = StrKeys<S>>(key: KK): InnerValue<S, KK> {
    return this.stateMgr.getData(key as any) as InnerValue<S, KK>;
  }
}

export class FetchDetailsDirectorForDataResetImpl<
  S extends PaginationState & State,
  K extends ArrDataKey<S>
> implements FetchDetailsDirector<S, K> {
  constructor(private stateMgr: BaseStateManager<S>) {}

  getPageOffset() {
    return 0;
  }

  getPageCount() {
    return this.getData<"pageCount">("pageCount");
  }

  getAdditionalPageCount() {
    return this.getData<"additionalDataCount">("additionalDataCount");
  }

  getCurrData() {
    return [] as S[K];
  }

  private getData<KK = StrKeys<S>>(key: KK): InnerValue<S, KK> {
    return this.stateMgr.getData(key as any) as InnerValue<S, KK>;
  }
}
