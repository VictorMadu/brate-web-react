import { handleFetchResult } from "../../../api/http";
import { DataFetching, HttpError } from "../../../utils/status";
import { StateUpdater } from "./state-updater";
import { FetchDetailsDirector } from "./fetch-details-director";
import { FetchStrategy } from "./fetch-strategy";
import {
  BatchDataFetchState,
  ArrDataKey,
  DataServiceFetcher,
} from "./interfaces";

export class DataWithPaginationFetchManager<
  S extends BatchDataFetchState,
  K extends ArrDataKey<S>
> {
  private fetchStrategy!: FetchStrategy;
  private fetchedData!: S[K];

  constructor(
    private dataServerFetcher: DataServiceFetcher<S, K>,
    private stateUpdater: StateUpdater<S, K>,
    private fetchDetailDirectory: FetchDetailsDirector<S, K>
  ) {}

  update(fetchStrategy: FetchStrategy) {
    this.fetchStrategy = fetchStrategy;

    handleFetchResult(
      () => this.handleFetch(),
      (data) => this.handleSuccess(data),
      (err) => this.handleFailure(err)
    );
  }

  private handleFetch() {
    this.setFetchStatus(DataFetching.FETCHING);

    return this.dataServerFetcher.fetch(
      this.fetchStrategy.getFetchOffset(),
      this.fetchStrategy.getFetchCount()
    );
  }

  private setFetchStatus(fetchStatus: DataFetching) {
    this.stateUpdater.updateFetchingStatus(fetchStatus);
  }

  private handleSuccess(fetchedData: S[K]) {
    this.setFetchStatus(DataFetching.SUCCESS);

    this.fetchedData = fetchedData;
    this.setUpdatePageOffset();
    this.updateData();
  }

  // TODO: Use the pageoffset (skipped) and page count sent from the server
  private setUpdatePageOffset() {
    const nextPageOffset = this.fetchStrategy.getNextPageOffset(
      this.getCurrData(),
      this.fetchedData
    );

    this.stateUpdater.updatePageOffset(nextPageOffset);
  }

  private getCurrData() {
    return this.fetchDetailDirectory.getCurrData();
  }

  private updateData() {
    const newData = this.fetchStrategy.getNextData(
      this.getCurrData(),
      this.fetchedData
    );

    this.stateUpdater.updateData(newData);
  }

  private handleFailure(err: HttpError) {
    this.setFetchStatus(DataFetching.FAILED);

    this.stateUpdater.updateHttpError(err);
  }
}
