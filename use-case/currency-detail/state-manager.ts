import { BaseStateManager } from "../_utils/state-manager/base-manager";

export interface CurrencyDetailState {
  base: string;
  quota: string;
  baseName: string;
  quotaName: string;
  rate: number;
  prevRate: number;
  baseInputValue: number;
  quotaInputValue: number;
}

class StateManager extends BaseStateManager<CurrencyDetailState> {
  protected getName() {
    return "Currency Detail";
  }

  protected getInitialState(): CurrencyDetailState {
    return {
      base: "",
      quota: "",
      baseName: "",
      quotaName: "",
      rate: 0,
      prevRate: 0,
      baseInputValue: 0,
      quotaInputValue: 0,
    };
  }

  protected getStoredState(): Partial<CurrencyDetailState> {
    return {};
  }
}

export const currencyDetailStateMgr = new StateManager();
export type CurrencyDetailStateManager = StateManager;
