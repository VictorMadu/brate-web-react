import { Pair } from "../rate/state-manager";
import { BaseStateManager } from "../_utils/state-manager/base-manager";
import {
  PaginationState,
  DataFetchingState,
  HttpErrorState,
} from "../_utils/state-manager/interfaces/states";

export interface TradeBuyState
  extends PaginationState,
    DataFetchingState,
    HttpErrorState {
  traders: {
    pair: Pair;
    seller_name: string;
    seller_id: string;
    user_id: string;
    amount_available: number;
    rate: number;
  }[];
  // TODO: For all modals inside of holding sellerId, or more info about the trader (duplication), just hold something that act as key to get the trader's info from the traders data
  buyModal: {
    pair: Pair | undefined;
    inputValue: string;
    sellerId: string;
  };
}

export const defaultBuyModalData = {
  pair: undefined,
  inputValue: "0",
  sellerId: "",
};

class StateManager extends BaseStateManager<TradeBuyState> {
  protected getName() {
    return "Buy Trade";
  }

  protected getInitialState(): TradeBuyState {
    return {
      traders: [],
      buyModal: { ...defaultBuyModalData },
      httpError: undefined,
      pageOffset: 0,
      pageCount: 2,
      dataFetching: undefined,
      additionalDataCount: 2, // should be at least one for correct limit check
    };
  }
  protected getStoredState(): Partial<TradeBuyState> {
    return {};
  }
}

export const buyTradeStateMgr = new StateManager();
export type BuyTradeStateManager = BaseStateManager<TradeBuyState>;
