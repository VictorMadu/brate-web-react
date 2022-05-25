import { HttpError } from "../../utils/status";
import { BaseStateManager } from "../_utils/state-manager/base-manager";
import {
  DataFetchingState,
  HttpErrorState,
  PaginationState,
  State,
} from "../_utils/state-manager/interfaces/states";

export interface AlertState
  extends PaginationState,
    DataFetchingState,
    HttpErrorState {
  filter: "all" | "untriggered" | "triggered";
  market: "parallel" | "black";
  alerts: {
    base: string;
    id: string;
    quota: string;
    created_rate: number;
    target_rate: number;
    created_at: number;
    triggered_at: number | null;
  }[];
}

class StateManager extends BaseStateManager<AlertState> {
  protected getName() {
    return "Alert";
  }

  protected getInitialState(): AlertState {
    return {
      alerts: [],
      httpError: undefined,
      market: "parallel",
      filter: "all",
      pageOffset: 0,
      pageCount: 2,
      dataFetching: undefined,
      additionalDataCount: 2, // should be at least one for correct limit check
    };
  }
  protected getStoredState(): Partial<AlertState> {
    return {};
  }
}

export const alertStateMgr = new StateManager();
export type AlertStateManager = BaseStateManager<AlertState>;
