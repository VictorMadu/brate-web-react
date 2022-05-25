import { StrKeys } from "ts-util-types";
import { BaseStateManager } from "../state-manager/base-manager";
import { AdditionalCountManager } from "./additional-count-manager";
import { FetchDetailsDirector } from "./fetch-details-director";
import {
  FetchStrategy,
  PrevDataFetchStrategy,
  NextDataFetchStrategy,
  PatchDataFetchStrategy,
  FetchDetails,
} from "./fetch-strategy";
import { ArrDataKey, BatchDataFetchState } from "./interfaces";

export class FetcherStrategyFactory {
  constructor(
    private fetchDetailsDirector: FetchDetailsDirector<
      BatchDataFetchState,
      ArrDataKey<BatchDataFetchState>
    >
  ) {}

  getPreviousData(): FetchStrategy {
    return new PrevDataFetchStrategy(this.getFetchDetails());
  }

  getNextData(): FetchStrategy {
    return new NextDataFetchStrategy(this.getFetchDetails());
  }

  getPatchData(): FetchStrategy {
    return new PatchDataFetchStrategy(this.getFetchDetails());
  }

  private getFetchDetails(): FetchDetails {
    return {
      pageOffset: this.fetchDetailsDirector.getPageOffset(),
      pageCount: this.fetchDetailsDirector.getPageCount(),
      availableDataLength: this.fetchDetailsDirector.getCurrData().length,
      additionalPageCount: this.fetchDetailsDirector.getAdditionalPageCount(),
    };
  }
}
