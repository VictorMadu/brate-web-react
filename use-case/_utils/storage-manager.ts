import { InnerValue, InnerKeys } from "ts-util-types";
import set from "lodash/set";
import get from "lodash/get";

const ROOT_STORE_NAME = "__state_root";

export class StorageManager<
  T extends Record<string, any> = Record<string, any>
> {
  constructor(private stateName: string) {}

  set<K extends string>(key: K, value: T[K]) {
    this._set(key, value);
  }

  get<K extends string>(key: K): InnerValue<Partial<T>, K> {
    const savedData = this.getDataFromStorage();
    return get(savedData, this.getStoreKey(key));
  }

  delete<K extends string>(key: K) {
    this._set(key, undefined);
  }

  deleteAll() {
    this._set(undefined, undefined);
  }

  private _set(key: string | undefined, value: any) {
    const savedData = this.getDataFromStorage();
    set(savedData, this.getStoreKey(key), value);
    this.saveDataToStorage(savedData);
  }

  private getStoreKey(stateKey?: string) {
    if (!stateKey) return this.stateName;
    return this.stateName + "." + stateKey;
  }

  private getDataFromStorage(): Record<string, any> {
    const savedData = localStorage.getItem(ROOT_STORE_NAME);
    if (!savedData) return {};
    return JSON.parse(savedData);
  }

  private saveDataToStorage(data: Record<string, any>) {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(ROOT_STORE_NAME, stringifiedData);
  }
}
