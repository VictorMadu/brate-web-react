import min from "lodash/min";
import max from "lodash/max";

export interface FetchDetails {
  pageOffset: number;
  pageCount: number;
  availableDataLength: number;
  additionalPageCount: number;
}

export interface FetchStrategy {
  getFetchOffset(): number;
  getFetchCount(): number;

  getNextPageOffset<T extends any[]>(currData: T, fetchedData: T): number;

  getNextData<T extends any[]>(currData: T, fetchedData: T): T;
}

// TODO: Turn this inheritance to composition
abstract class BaseFetchStrategy implements FetchStrategy {
  protected pageOffset: number;
  protected pageCount: number;
  protected availableDataLength: number;
  protected additionalDataCount: number;

  constructor(private fetchDetails: FetchDetails) {
    this.pageOffset = this.fetchDetails.pageOffset;
    this.pageCount = this.fetchDetails.pageCount;
    this.availableDataLength = this.fetchDetails.availableDataLength;
    this.additionalDataCount = this.fetchDetails.additionalPageCount;
  }

  abstract getFetchOffset(): number;
  abstract getFetchCount(): number;
  abstract getNextPageOffset<T extends any[]>(
    currData: T,
    fetchedAlertData: T
  ): number;
  abstract getNextData<T extends any[]>(currData: T, fetchedAlertData: T): T;

  protected getMaximumLength() {
    return this.pageCount + this.additionalDataCount;
  }

  protected getMinPageOffsetAfterLastAlertItem() {
    return this.pageOffset + this.availableDataLength;
  }

  protected getMinPageOffsetAfterAlertAtEndOfPageCount() {
    return this.pageOffset + this.pageCount;
  }

  protected getDiffBtwMaximumAndAlertLength() {
    return this.getMaximumLength() - this.availableDataLength;
  }

  protected getMinPageOffsetBeforeFirstAlertItem() {
    return max([0, this.pageOffset - this.pageCount]) as number;
  }
}

export class PatchDataFetchStrategy extends BaseFetchStrategy {
  getFetchOffset(): number {
    return this.getMinPageOffsetAfterLastAlertItem();
  }

  getFetchCount(): number {
    return this.getDiffBtwMaximumAndAlertLength();
  }

  getNextPageOffset() {
    return this.pageOffset;
  }

  getNextData<T extends any[]>(currData: T, fetchedData: T) {
    const currDataToKeep = currData.slice(
      0,
      this.getCurrLengthToKeep(fetchedData.length)
    );
    return [...currDataToKeep, ...fetchedData] as T;
  }

  private getCurrLengthToKeep(fetchedDataLength: number) {
    return this.getMaximumLength() - fetchedDataLength;
  }
}

export class PrevDataFetchStrategy extends BaseFetchStrategy {
  getFetchOffset(): number {
    console.log(
      "PrevDataFetchStrategy getFetchOffset",
      this.getMinPageOffsetBeforeFirstAlertItem()
    );
    return this.getMinPageOffsetBeforeFirstAlertItem();
  }

  getFetchCount(): number {
    console.log(
      "PrevDataFetchStrategy getFetchCount",
      this.availableDataLength < 1 ? this.getMaximumLength() : this.pageCount
    );
    if (this.availableDataLength < 1) return this.getMaximumLength();
    return this.pageCount;

    // console.log(
    //   "PrevDataFetchStrategy getFetchCount",
    //   this.getMaximumLength() -
    //     this.getPositiveDistanceOfAlertsLengthFromPageCount()
    // );
    // return (
    //   this.getMaximumLength() -
    //   this.getPositiveDistanceOfAlertsLengthFromPageCount()
    // );
  }

  getNextPageOffset() {
    console.log(
      "PrevDataFetchStrategy getNextPageOffset",
      this.getFetchOffset()
    );
    return this.getFetchOffset();
  }

  getNextData<T extends any[]>(currData: T, fetchedData: T) {
    console.log(
      "PrevDataFetchStrategy getNextAlertData alert before",
      currData
    );
    console.log(
      "PrevDataFetchStrategy getNextAlertData alert new",
      fetchedData
    );

    const currDataToKeep = currData.slice(0, this.getCurrLengthToKeep());
    console.log(
      "PrevDataFetchStrategy getNextAlertData alert to leave",
      currDataToKeep
    );
    console.log("PrevDataFetchStrategy getNextAlertData alert to after", [
      ...fetchedData,
      ...currDataToKeep,
    ]);
    return [...fetchedData, ...currDataToKeep] as T;
  }

  private getCurrLengthToKeep() {
    return this.getMaximumLength() - this.pageCount;
  }
}

export class NextDataFetchStrategy extends BaseFetchStrategy {
  getFetchOffset(): number {
    console.log(
      "NextDataFetchStrategy getFetchOffset",
      this.getMinPageOffsetAfterLastAlertItem()
    );
    return this.getMinPageOffsetAfterLastAlertItem();
  }

  getFetchCount(): number {
    console.log(
      "NextDataFetchStrategy getFetchCount",
      this.availableDataLength > this.pageCount
        ? this.pageCount
        : this.getMaximumLength()
    );
    if (this.availableDataLength > this.pageCount) return this.pageCount;
    return this.getMaximumLength();

    // console.log(
    //   "NextDataFetchStrategy getFetchCount",
    //   this.getMaximumLength() -
    //     this.getPositiveDistanceOfAlertsLengthFromPageCount()
    // );
    // return (
    //   this.getMaximumLength() -
    //   this.getPositiveDistanceOfAlertsLengthFromPageCount()
    // );
  }

  getNextPageOffset() {
    console.log(
      "NextDataFetchStrategy getNextPageOffset",
      min([
        this.getMinPageOffsetAfterLastAlertItem(),
        this.getMinPageOffsetAfterAlertAtEndOfPageCount(),
      ])
    );
    return min([
      this.getMinPageOffsetAfterLastAlertItem(),
      this.getMinPageOffsetAfterAlertAtEndOfPageCount(),
    ]) as number;
  }

  getNextData<T extends any[]>(currData: T, fetchedData: T) {
    console.log(
      "NextDataFetchStrategy getNextAlertData alert before",
      currData
    );
    console.log(
      "NextDataFetchStrategy getNextAlertData alert new",
      fetchedData
    );
    const currDataToKeep = currData.slice(this.pageCount);
    console.log(
      "NextDataFetchStrategy getNextAlertData alert to leave",
      currDataToKeep
    );
    console.log("NextDataFetchStrategy getNextAlertData alert after", [
      ...currDataToKeep,
      ...fetchedData,
    ]);
    return [...currDataToKeep, ...fetchedData] as T;
  }
}
