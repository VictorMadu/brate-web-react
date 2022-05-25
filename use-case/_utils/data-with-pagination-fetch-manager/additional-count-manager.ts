import { BaseStateManager } from "../state-manager/base-manager";
import { BatchDataFetchState } from "./interfaces";

export class AdditionalCountManager<S extends BatchDataFetchState> {
  static ADDITION_FOR_STATE_WITH_NO_ADDITION = 1;
  private additionalPageCount: number;

  constructor(stateMgr: BaseStateManager<S>) {
    this.additionalPageCount = (stateMgr as BaseStateManager<
      BatchDataFetchState
    >).getData("additionalDataCount");
  }

  getFetchAddition() {
    if (this.hasAddition()) return this.additionalPageCount;
    return AdditionalCountManager.ADDITION_FOR_STATE_WITH_NO_ADDITION;
  }

  hasAddition() {
    return this.additionalPageCount > 0;
  }

  getPageAddition() {
    return this.additionalPageCount;
  }
}
