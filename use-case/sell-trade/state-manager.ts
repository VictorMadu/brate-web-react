import { BaseStateManager } from "../_utils/state-manager/base-manager";
import { PaginationState, DataFetchingState, HttpErrorState } from "../_utils/state-manager/interfaces/states";

type Base = string 
type Quota = string;
export type Pair = `${Base} ${Quota}`

export interface TradeSellState extends PaginationState,
DataFetchingState,
HttpErrorState  {
  rates: {
    pair: Pair,
    rate: number;
  }[],
  setRateModal: {
    pair: Pair | undefined;
    inputValue: string
  }
}

// TODO: Rename inputValue to rateInputValue to indicate it is a number (decimal)
export const defaultSetRateModalData = {
  pair: undefined,
  inputValue: '0'
}


class StateManager extends BaseStateManager<TradeSellState> {
  protected getName() {
    return "Sell Trade";
  }

  protected getInitialState(): TradeSellState {
    return {
      rates: [],
      setRateModal: {...defaultSetRateModalData},
      httpError: undefined,
      pageOffset: 0,
      pageCount: 2,
      dataFetching: undefined,
      additionalDataCount: 2, // should be at least one for correct limit check
    };
  }
  protected getStoredState(): Partial<TradeSellState> {
    return {};
  }
}

export const sellTradeStateMgr = new StateManager();
export type SellTradeStateManager = BaseStateManager<TradeSellState>;
