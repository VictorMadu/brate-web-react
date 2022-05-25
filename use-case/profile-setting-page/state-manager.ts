import { BaseStateManager } from "../_utils/state-manager/base-manager";

export interface ProfileInfo {
  label: string;
  isValueEditable: boolean;
  userDataKey: "email" | "name" | "phone" | "password";
  value: string;
}

const defaultProfileInfo: Omit<ProfileInfo, "userDataKey"> = {
  label: "",
  isValueEditable: false,
  value: "",
};

export interface ProfileSettingPageState {
  showUserDataChangeModal: boolean;
  // TODO: When we implement the deep get, set and observer data key. We combine the name, email, phone and password together maybe as an array or obj

  name: ProfileInfo;
  email: ProfileInfo;
  phone: ProfileInfo;
  password: ProfileInfo;
}

// TODO: Specific at which page we should load the state
// TODO: Have a file where we specific the states for each page and load in each page

class StateManager extends BaseStateManager<ProfileSettingPageState> {
  protected getName(): string {
    return "Profile Setting Page";
  }
  protected getInitialState(): ProfileSettingPageState {
    return {
      name: { ...defaultProfileInfo, label: "Name", userDataKey: "name" },
      email: { ...defaultProfileInfo, label: "Email", userDataKey: "email" },
      phone: { ...defaultProfileInfo, label: "Phone", userDataKey: "phone" },
      password: {
        ...defaultProfileInfo,
        label: "Password",
        userDataKey: "password",
      },
      showUserDataChangeModal: false,
    };
  }
  protected getStoredState(): Partial<ProfileSettingPageState> {
    return {};
  }
}

export const profileSettingPageStateMgr = new StateManager();
export type ProfileSettingPageStateMgr = BaseStateManager<
  ProfileSettingPageState
>;
