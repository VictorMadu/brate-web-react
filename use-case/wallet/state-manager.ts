import { BaseStateManager } from "../_utils/state-manager/base-manager";
import {
  PaginationState,
  DataFetchingState,
  HttpErrorState,
} from "../_utils/state-manager/interfaces/states";

export interface WalletInfo {
  currency: string;
  amount: number;
}

export interface Modal {
  show: boolean;
  editableInputValue: number;
  currencySym: string;
}

// TODO: Make alerts and other state using pagiantion to use object instead of array

export interface WalletState
  extends PaginationState,
    DataFetchingState,
    HttpErrorState {
  wallets: WalletInfo[];
  withdrawalModal: Modal;
  fundModal: Modal;
}

export const defaultModalData: Modal = {
  show: false,
  editableInputValue: 0,
  currencySym: "",
};

// TODO: I am thinking of using kindof factory pattern instead of template because things might get more complicated
class StateManager extends BaseStateManager<WalletState> {
  protected getName() {
    return "Wallet";
  }

  protected getInitialState(): WalletState {
    return {
      wallets: [],
      withdrawalModal: { ...defaultModalData },
      fundModal: { ...defaultModalData },
      httpError: undefined,
      pageOffset: 0,
      pageCount: 2,
      dataFetching: undefined,
      additionalDataCount: 2, // should be at least one for correct limit check
    };
  }
  protected getStoredState(): Partial<WalletState> {
    return {};
  }
}

export const walletStateMgr = new StateManager();
export type WalletStateManager = BaseStateManager<WalletState>;
