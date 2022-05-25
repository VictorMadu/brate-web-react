import { clamp } from "lodash";

const DEFAULT_PAGE_OFFSET = 0;

export class PaginationManager {
  private paginationStrategy: PaginationStrategy = new ForwardsPagination();
  constructor(private pageOffset = DEFAULT_PAGE_OFFSET) {}

  setPaginationStrategy(strategy: PaginationStrategy) {
    this.paginationStrategy = strategy;
  }

  getPageOffset() {
    return this.pageOffset;
  }

  setNextPageOffsetFromCount(pageCount: number) {
    this.pageOffset = this.paginationStrategy.getNextPageOffset(
      this.pageOffset,
      pageCount
    );
  }

  hasReachedLimit() {
    return this.paginationStrategy.hasReachedLimit();
  }
}

interface PaginationStrategy {
  hasReachedLimit(): boolean;
  getNextPageOffset(pageOffset: number, pageCount: number): number;
}

export class BackwardsPagination implements PaginationStrategy {
  private _hasReachedLimit = true;

  getNextPageOffset(pageOffset: number, pageCount: number) {
    const nextPageOffset = clamp(
      pageOffset - pageCount,
      0,
      Number.POSITIVE_INFINITY
    );

    this.setHasReachedLimit(nextPageOffset);

    return nextPageOffset;
  }

  hasReachedLimit() {
    return this._hasReachedLimit;
  }

  private setHasReachedLimit(nextPageOffset: number) {
    if (nextPageOffset === 0) this._hasReachedLimit = true;
    else this._hasReachedLimit = false;
  }
}

export class ForwardsPagination implements PaginationStrategy {
  private _hasReachedLimit = true;

  getNextPageOffset(pageOffset: number, pageCount: number) {
    this.setHasReachedLimit(pageCount);
    return pageOffset + pageCount;
  }

  hasReachedLimit() {
    return this._hasReachedLimit;
  }

  private setHasReachedLimit(pageCount: number) {
    // This means that offset has reached limit of db and the database reached no pageCount
    if (pageCount === 0) this._hasReachedLimit = true;
    else this._hasReachedLimit = false;
  }
}
