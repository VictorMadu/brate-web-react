import { BaseStateManager } from "../_utils/state-manager/base-manager";

export interface AuthPageState {
  authType: "Login" | "Signup";
}

class StateManager extends BaseStateManager<AuthPageState> {
  protected getName(): string {
    return "Auth Page";
  }
  protected getInitialState(): AuthPageState {
    return {
      authType: "Login",
    };
  }
  protected getStoredState(): Partial<AuthPageState> {
    return {};
  }
}

export const authPageStateMgr = new StateManager();
export type AuthPageStateManager = BaseStateManager<AuthPageState>;
