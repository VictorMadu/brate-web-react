import {
  getAppData,
  getUserData,
  handleFetchResult,
  signIn,
  signUp,
  verifyOtp,
} from "../../api/http";
import { PromiseReturnType } from "ts-util-types";
import { authStateMgr } from "../auth/state-manager";

type ApiResult = PromiseReturnType<typeof signIn>;

type ReturnGetUserData = PromiseReturnType<typeof getUserData>;
type ApiUserData = Exclude<ReturnGetUserData[0], undefined>;
type ApiUserErr = Exclude<ReturnGetUserData[1], undefined>;

type ReturnGetAppData = PromiseReturnType<typeof getAppData>;
type ApiAppData = Exclude<ReturnGetAppData[0], undefined>;
type ApiAppErr = Exclude<ReturnGetAppData[1], undefined>;

export interface SignInConfig {
  email: string;
  password: string;
}

export interface SignUpConfig extends SignInConfig {
  name: string;
  phone: string;
}

// TODO: Remove this and implement fetch api from all who calls this
export class AuthApiAction {
  constructor() {}

  async sigIn(config: SignInConfig) {
    const [data, err] = await signIn(config);
    if (data) this.storeTokenAndGetUserData(data);
    else return this.handleApiErr(err);
  }

  async signUp(config: SignUpConfig) {
    const [_, err] = await signUp(config);
    return err;
  }

  async verifyOtp(config: { email: string; otp: string }) {
    const [data, err] = await verifyOtp(config);
    // TODO: Create a batch setData
    // TODO: Create a way of joining states into one (maybe not)
    // TODO: Create a way to listen deep into state
    // TODO: Create a one only useState inside of multiple
    if (data) this.storeTokenAndGetUserData(data);
    return err;
  }

  fetchAllUserData(token: string) {
    const data = { token };

    handleFetchResult(
      () => getUserData(data),
      (data) => this.setUserData(data),
      (err) => this.setUserDataError(err)
    );

    handleFetchResult(
      () => getAppData(data),
      (data) => this.setWebData(data),
      (err) => this.setWebDataError(err)
    );
  }

  private setUserData(data: ApiUserData) {
    authStateMgr.setData("userData", data);
  }

  private setUserDataError(err: ApiUserErr) {
    authStateMgr.setData("userDataError", err);
  }

  private setWebData(data: ApiAppData) {
    authStateMgr.setData("appData", {
      darkMode: data.dark_mode,
      language: data.language,
      isBereauDeChange: data.bereau_de_change,
      id: data.web_client_id,
    });
  }

  private setWebDataError(err: ApiAppErr) {
    authStateMgr.setData("appDataError", err);
  }

  private storeTokenAndGetUserData({
    token,
    expires_in,
  }: Exclude<ApiResult[0], undefined>) {
    authStateMgr.setData("token", token);
    authStateMgr.setData("expiresIn", expires_in);
    this.fetchAllUserData(token);
  }

  private handleApiErr(err: ApiResult[1]) {
    return err;
  }
}
