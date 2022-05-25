import forEach from "lodash/forEach";
import { CurrencyDetailState, currencyDetailStateMgr } from "../state-manager";
import { StrKeys } from "ts-util-types";
import { RateInfo, rateStateMgr } from "../../rate/state-manager";
import { State } from "../../_utils/state-manager/interfaces/states";
import { BaseStateManager } from "../../_utils/state-manager/base-manager";
import { currencyStateMgr } from "../../currency/state-manager";

export enum StateUpdaterErrorCode {
  NO_PAIR_INFO,
  NO_BASE,
  NO_QUOTA,
  NO_BASE_NAME,
  NO_QUOTA_NAME,
}

export class StateUpdaterError extends Error {
  constructor(public code: StateUpdaterErrorCode) {
    super(StateUpdaterError.getMsgForCode(code));
  }

  private static getMsgForCode(code: StateUpdaterErrorCode) {
    if (code === StateUpdaterErrorCode.NO_PAIR_INFO) return "No pair info";
    if (code === StateUpdaterErrorCode.NO_BASE) return "Base is not available";
    if (code === StateUpdaterErrorCode.NO_QUOTA)
      return "Quota is not available";
    if (code === StateUpdaterErrorCode.NO_BASE_NAME)
      return "Base has no available name";
    if (code === StateUpdaterErrorCode.NO_QUOTA_NAME)
      return "Quota has no available name";
    return "Unknown";
  }
}

export class StatePopulator {
  private unSubscribes: (() => void)[] = [];
  private pairInfo!: RateInfo;
  private base!: string;
  private quota!: string;
  private baseName!: string;
  private quotaName!: string;

  subscribeToDepsChanges() {
    // TODO: For the states have an option of doing a value change updater or something like that with a function to call
    this.subscribeToStateChange(currencyStateMgr, "list");
    this.subscribeToStateChange(rateStateMgr, "indexOfPairInView");
    this.subscribeToStateChange(rateStateMgr, "rates");
    return this;
  }

  closeandCleanUpAllSubscribtion() {
    forEach(this.unSubscribes, (unSubscribe) => unSubscribe());
    this.unSubscribes = [];
    rateStateMgr.setData("indexOfPairInView", 0);
  }

  populate() {
    this.pairInfo = this.getPairInfo();
    [this.base, this.quota] = this.getSplitPair();
    [this.baseName, this.quotaName] = this.getPairNames();
    this.setAllState();
  }

  private subscribeToStateChange<S extends State, K extends StrKeys<S>>(
    stateMgr: BaseStateManager<S>,
    key: K
  ): void {
    const unSubscribe = stateMgr.subscribe(key, () => {
      this.populate();
    });

    this.unSubscribes.push(unSubscribe);
  }

  private setAllState() {
    this.setState("base", this.base);
    this.setState("quota", this.quota);
    this.setState("baseName", this.baseName);
    this.setState("quotaName", this.quotaName);
    this.setState("rate", this.pairInfo.rate);
    this.setState("prevRate", this.pairInfo.prev_rate);
  }

  private getSplitPair() {
    const [base, quota] = this.pairInfo.pair.split(" ");
    this.throwErrorIfNull(base, StateUpdaterErrorCode.NO_BASE);
    this.throwErrorIfNull(quota, StateUpdaterErrorCode.NO_QUOTA);

    return [base, quota] as [typeof base, typeof quota];
  }

  private getPairInfo() {
    const pairInViewIndex = this.getValueFromState(
      rateStateMgr,
      "indexOfPairInView"
    );
    const rates = this.getValueFromState(rateStateMgr, "rates");
    const pairInfo = rates[pairInViewIndex];
    this.throwErrorIfNull(pairInfo, StateUpdaterErrorCode.NO_PAIR_INFO);
    return pairInfo;
  }

  private getPairNames() {
    const currencyNames = this.getValueFromState(currencyStateMgr, "list");
    const baseName = currencyNames[this.base];
    const quotaName = currencyNames[this.quota];

    this.throwErrorIfNull(baseName, StateUpdaterErrorCode.NO_BASE_NAME);
    this.throwErrorIfNull(quotaName, StateUpdaterErrorCode.NO_QUOTA_NAME);

    return [baseName, quotaName] as [typeof baseName, typeof quotaName];
  }

  private setState<K extends StrKeys<CurrencyDetailState>>(
    key: K,
    data: CurrencyDetailState[K]
  ) {
    currencyDetailStateMgr.setData(key, data);
  }

  private throwErrorIfNull(obj: any, code: StateUpdaterErrorCode) {
    if (obj == null) throw new StateUpdaterError(code);
  }

  private getValueFromState<S extends State, K extends StrKeys<S>>(
    stateMgr: BaseStateManager<S>,
    key: K
  ): S[K] {
    return stateMgr.getData(key);
  }
}
