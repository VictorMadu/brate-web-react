import { BaseStateManager } from "../state-manager/base-manager";
import { DataWithPaginationFetchManager } from "./data-with-pagination-fetch-manager";
import {
  FetchDetailsDirectorForDataResetImpl,
  FetchDetailsDirectorImpl,
} from "./fetch-details-director";
import { FetchStrategy } from "./fetch-strategy";
import { FetcherStrategyFactory } from "./fetch-strategy-factory";
import {
  BatchDataFetchState,
  ArrDataKey,
  DataServiceFetcher,
} from "./interfaces";
import { StateUpdaterImpl } from "./state-updater";

export class FetchFacadeForNavigation<
  S extends BatchDataFetchState,
  K extends ArrDataKey<S>
> {
  private factory: FetcherStrategyFactory;
  private fetchManager: DataWithPaginationFetchManager<S, K>;

  constructor(
    fetcher: DataServiceFetcher<S, K>,
    stateMgr: BaseStateManager<S>,
    dataKey: K
  ) {
    const stateUpdater = new StateUpdaterImpl(stateMgr, dataKey);
    const director = new FetchDetailsDirectorImpl(stateMgr, dataKey);

    this.factory = new FetcherStrategyFactory(director);
    this.fetchManager = new DataWithPaginationFetchManager<S, K>(
      fetcher,
      stateUpdater,
      director
    );
  }

  getPrevious() {
    const fetchStrategy = this.factory.getPreviousData();
    this.update(fetchStrategy);
  }

  getNext() {
    const fetchStrategy = this.factory.getNextData();
    this.update(fetchStrategy);
  }

  private update(fetchStrategy: FetchStrategy) {
    this.fetchManager.update(fetchStrategy);
  }
}

export class FetchFacadeForPatching<
  S extends BatchDataFetchState,
  K extends ArrDataKey<S>
> {
  private factory: FetcherStrategyFactory;
  private fetchManager: DataWithPaginationFetchManager<S, K>;

  constructor(
    fetcher: DataServiceFetcher<S, K>,
    stateMgr: BaseStateManager<S>,
    dataKey: K
  ) {
    const stateUpdater = new StateUpdaterImpl(stateMgr, dataKey);
    const director = new FetchDetailsDirectorImpl(stateMgr, dataKey);

    this.factory = new FetcherStrategyFactory(director);
    this.fetchManager = new DataWithPaginationFetchManager<S, K>(
      fetcher,
      stateUpdater,
      director
    );
  }

  getPatch() {
    const fetchStrategy = this.factory.getPatchData();
    this.update(fetchStrategy);
  }

  private update(fetchStrategy: FetchStrategy) {
    this.fetchManager.update(fetchStrategy);
  }
}

export class FetchFacadeForReset<
  S extends BatchDataFetchState,
  K extends ArrDataKey<S>
> {
  private factory: FetcherStrategyFactory;
  private fetchManager: DataWithPaginationFetchManager<S, K>;

  constructor(
    fetcher: DataServiceFetcher<S, K>,
    stateMgr: BaseStateManager<S>,
    dataKey: K
  ) {
    const stateUpdater = new StateUpdaterImpl(stateMgr, dataKey);
    const director = new FetchDetailsDirectorForDataResetImpl(stateMgr);

    this.factory = new FetcherStrategyFactory(director);
    this.fetchManager = new DataWithPaginationFetchManager<S, K>(
      fetcher,
      stateUpdater,
      director
    );
  }

  reset() {
    const fetchStrategy = this.factory.getPatchData();
    this.update(fetchStrategy);
  }

  private update(fetchStrategy: FetchStrategy) {
    this.fetchManager.update(fetchStrategy);
  }
}
