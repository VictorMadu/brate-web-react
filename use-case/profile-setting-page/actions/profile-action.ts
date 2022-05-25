import filter from "lodash/filter";
import forEach from "lodash/forEach";
import { authStateMgr } from "../../auth/state-manager";
import { profileSettingPageStateMgr as stateMgr } from "../state-manager";
import {
  getValueFromUserState,
  setDataValue,
  setLoadedValue,
} from "./data-value-action";

type UserDataKey = "email" | "name" | "phone";

const allKeys: UserDataKey[] = ["email", "name", "phone"];

export class ProfileAction {
  private unWatchUserValueChanges = () => {};
  private unWatchIsEditableChanges = () => {};
  private otherKeys: UserDataKey[] = [];
  private isEditable: boolean = false;

  constructor(private key: UserDataKey) {
    this.otherKeys = filter(allKeys, (key) => key != this.key);
  }

  startAction() {
    this.loadValueData();
    this.watchUserValueChanges();
    this.watchIsEditableChanges();
  }

  closeAction() {
    this.unWatchIsEditableChanges();
    this.unWatchUserValueChanges();
  }

  private loadValueData() {
    const value = this.getValueFromUserState();
    this.setLoadedValue(value);
  }

  private watchUserValueChanges() {
    this.unWatchUserValueChanges();

    this.unWatchUserValueChanges = authStateMgr.subscribe("userData", () =>
      this.loadValueData()
    );
  }

  private watchIsEditableChanges() {
    this.unWatchIsEditableChanges();

    this.unWatchIsEditableChanges = stateMgr.subscribe(
      this.key,
      (profileInfo) => {
        const isEditable = profileInfo.isValueEditable;
        this.handleNewEditableChange(isEditable);
      }
    );
  }

  private handleNewEditableChange(isEditable: boolean) {
    if (this.isEditable === isEditable) return;
    this.isEditable = isEditable;

    if (this.isEditable) {
      this.makeOtherProfileInfoUneditable();
      this.unWatchUserValueChanges();
    } else {
      this.watchUserValueChanges();
    }
  }

  private makeOtherProfileInfoUneditable() {
    forEach(this.otherKeys, (key) =>
      setDataValue(key, "isValueEditable", false)
    );
  }

  private getValueFromUserState() {
    return getValueFromUserState(this.key);
  }

  private setLoadedValue(value: string) {
    setLoadedValue(this.key, value);
  }
}
