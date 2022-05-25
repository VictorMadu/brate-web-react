import { StrKeys } from "ts-util-types";
import { BaseStateManager } from "../_utils/state-manager/base-manager";
import { StateManagerWithSetCb } from "../_utils/state-manager/manager-with-setdata-cb";
import { createCheckKeyInKeysFn } from "../_utils/state-manager/utils";
import { StorageManager } from "../_utils/storage-manager";

export interface AuthState {
  token: string | undefined;
  expiresIn: number;
  userData:
    | {
        email: string;
        name: string;
        phone: string;
        id: string;
      }
    | undefined;
  appData:
    | {
        darkMode: boolean;
        language: "English" | "French";
        isBereauDeChange: boolean;
        id: string;
      }
    | undefined;
  userDataError: number | undefined;
  appDataError: number | undefined;
}

class StateManager extends StateManagerWithSetCb<AuthState> {
  private storageManager: StorageManager = new StorageManager<AuthState>(
    this.getName()
  );
  private checkKeyInKeys = createCheckKeyInKeysFn(
    "token",
    "expiresIn",
    "userData",
    "webData"
  );

  protected getName() {
    return "Auth";
  }

  protected getInitialState(): AuthState {
    return {
      token: undefined,
      expiresIn: 0,
      userData: undefined,
      appData: undefined,
      userDataError: undefined,
      appDataError: undefined,
    };
  }
  protected getStoredState(): Partial<AuthState> {
    return {
      token: this.getFromStore("token", undefined),
      expiresIn: this.getFromStore("expiresIn", 0),
      userData: this.getFromStore("userData", undefined),
      appData: this.getFromStore("appData", undefined),
    };
  }

  protected onSetData<T extends StrKeys<AuthState>>(
    dataKey: T,
    baseState: BaseStateManager<AuthState>
  ): void {
    if (this.checkKeyInKeys(dataKey))
      this.storageManager.set(dataKey, baseState.getData(dataKey));
  }

  private getFromStore<T extends StrKeys<AuthState>>(
    key: T,
    defaultValue: AuthState[T]
  ): AuthState[T] {
    // FIXME: Make the storageManager get type assertion work
    return this.storageManager.get(key) ?? defaultValue;
  }
}

export const authStateMgr = new StateManager();
export type AuthStateManager = BaseStateManager<AuthState>;
