import { uuid } from "../../api/interfaces";
import { BaseStateManager } from "../_utils/state-manager/base-manager";
import {
  PaginationState,
  DataFetchingState,
  HttpErrorState,
} from "../_utils/state-manager/interfaces/states";

export interface NotificationState
  extends PaginationState,
    DataFetchingState,
    HttpErrorState {
  type: "P" | "T" | "F" | undefined;
  notifications: {
    id: uuid;
    msg: string;
    created_at: number;
  }[];
}

class StateManager extends BaseStateManager<NotificationState> {
  protected getName() {
    return "Notification";
  }

  protected getInitialState(): NotificationState {
    return {
      notifications: [],
      type: undefined,
      httpError: undefined,
      pageOffset: 0,
      pageCount: 2,
      dataFetching: undefined,
      additionalDataCount: 2, // should be at least one for correct limit check
    };
  }
  protected getStoredState(): Partial<NotificationState> {
    return {};
  }
}

export const notificationStateMgr = new StateManager();
export type NotificationStateManager = BaseStateManager<NotificationState>;
