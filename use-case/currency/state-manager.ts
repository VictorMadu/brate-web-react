import { HttpError } from "../../utils/status";
import { BaseStateManager } from "../_utils/state-manager/base-manager";

export type Sym = string;
export type Name = string;

export interface CurrencyState {
  list: Record<Sym, Name>;
  httpError: HttpError | undefined;
}

class StateManager extends BaseStateManager<CurrencyState> {
  protected getName() {
    return "Currency";
  }

  protected getInitialState(): CurrencyState {
    return {
      list: {},
      httpError: undefined,
    };
  }
  protected getStoredState(): Partial<CurrencyState> {
    return {};
  }
}

export const currencyStateMgr = new StateManager();
export type CurrencyStateManager = StateManager;
