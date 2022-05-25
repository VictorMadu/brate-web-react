import { InnerValue, StrKeys } from "ts-util-types";
import { CurrencyDetailState, currencyDetailStateMgr } from "../state-manager";

export class StateInverter {
  private base!: string;
  private quota!: string;
  private baseName!: string;
  private quotaName!: string;
  private rate!: number;
  private prevRate!: number;
  private baseInputValue!: number;
  private quotaInputValue!: number;

  invert() {
    this.setContext();
    this.invertStateValues();
  }

  private invertStateValues() {
    this.setState("base", this.quota);
    this.setState("quota", this.base);

    this.setState("baseName", this.quotaName);
    this.setState("quotaName", this.baseName);

    this.setState("baseInputValue", this.quotaInputValue);
    this.setState("quotaInputValue", this.baseInputValue);

    this.setState("rate", this.invertNum(this.rate));
    this.setState("prevRate", this.invertNum(this.prevRate));
  }

  private setContext() {
    this.base = this.getState("base");
    this.quota = this.getState("quota");
    this.baseName = this.getState("baseName");
    this.quotaName = this.getState("quotaName");
    this.rate = this.getState("rate");
    this.prevRate = this.getState("prevRate");
    this.baseInputValue = this.getState("baseInputValue");
    this.quotaInputValue = this.getState("quotaInputValue");
  }

  private invertNum(num: number) {
    return 1 / num;
  }

  private getState<K extends StrKeys<CurrencyDetailState>>(
    key: K
  ): InnerValue<CurrencyDetailState, K> {
    return currencyDetailStateMgr.getData(key);
  }

  private setState<K extends StrKeys<CurrencyDetailState>>(
    key: K,
    newValue: CurrencyDetailState[K]
  ) {
    currencyDetailStateMgr.setData(key, newValue);
  }
}
