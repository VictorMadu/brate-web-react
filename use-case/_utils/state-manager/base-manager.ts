import get from "lodash/get";
import map from "lodash/map";
import keys from "lodash/keys";
import { InnerValue, StrKeys } from "ts-util-types";
import { Logger } from "./logger";
import { State } from "./interfaces/states";

type Observer<T extends unknown> = (newValue: T) => any;

export const states: (() => any)[] = [];

export abstract class BaseStateManager<S extends State> {
  protected abstract getName(): string;
  protected abstract getInitialState(): S;
  protected abstract getStoredState(): Partial<S>;
  private observers: Record<string, Set<Observer<string>>> = {};
  private state = this.getInitialState();
  private logger: Logger = new Logger(this.getName());

  constructor() {
    states.push(() => {
      const storedState = this.getStoredState();
      const storedKeys = keys(storedState);

      map(storedKeys, (storedKey: any) => {
        const value = (storedState as any)[storedKey];
        this.setData(storedKey, value);
      });
    });
  }

  subscribe<T extends StrKeys<S>>(
    dataKey: T,
    handler: (newValue: S[T]) => any
  ) {
    this.addObserver(dataKey, handler);
    return () => this.unSubscribe(dataKey, handler as Observer<string>);
  }

  setData<T extends StrKeys<S>>(dataKey: T, newData: S[T]) {
    const oldData = this.state[dataKey];
    if (oldData === newData) return;

    this.logger.log(dataKey, oldData, newData);
    this.setNewDataAndNotifyChange(dataKey, newData);
  }

  getData<K extends StrKeys<S>>(key: K): InnerValue<S, K> {
    if (this.state == null) this.state = this.getInitialState();
    return get(this.state, key as string);
  }

  resetData() {
    this.state = this.getInitialState();
    map(keys(this.state), (dataKey: StrKeys<S>) => this.notifyChange(dataKey));
  }

  resetDataSilently() {
    this.state = this.getInitialState();
  }

  private unSubscribe(dataKey: StrKeys<S>, observer: Observer<string>) {
    const observers = this.getObservers(dataKey);
    observers.delete(observer);
    if (observers.size === 0) this.deleteOberverKey(dataKey);
  }

  private deleteOberverKey(dataKey: StrKeys<S>) {
    return delete this.observers[dataKey];
  }

  // TODO: Handle checking if there the change is same with previous. We need to split the observer handler into a seperate class. When we do this, we need to ensure that all subscribers stop doing this on their own (The checking for if there is change)
  private notifyChange(dataKey: StrKeys<S>) {
    const newValue = this.state[dataKey];
    const iterator = this.getObservers(dataKey).values();
    let observer: Observer<string>;

    while ((observer = iterator.next().value)) observer(newValue);
  }

  private setNewDataAndNotifyChange<T extends StrKeys<S>>(
    dataKey: T,
    newData: S[T]
  ) {
    this.state[dataKey] = newData;
    this.notifyChange(dataKey);
  }

  private getObservers<T extends StrKeys<S>>(dataKey: T) {
    return this.observers[dataKey] ?? new Set();
  }

  private addObserver<T extends StrKeys<S>>(
    dataKey: T,
    newObserver: Observer<S[T]>
  ) {
    const observers: Set<Observer<S[T]>> = this.getObservers(dataKey);
    observers.add(newObserver);
    this.setObservers(dataKey, observers as Set<Observer<string>>);
  }

  private setObservers(
    dataKey: StrKeys<S>,
    dataKeyObservers: Set<Observer<string>>
  ) {
    this.observers[dataKey] = dataKeyObservers;
  }
}
