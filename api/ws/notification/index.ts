import { Events } from "./_constants/events";
import { concat, filter, forEach } from "lodash";
import { NotificationData } from "./interfaces";
import { createEventListenData, getParsedJSONData } from "../_utils";

type Listener = { notify: (data: R) => any };

const DEFAULT_EVENT_LISTENERS: Listener[] = [];

type R = Record<string, any>;

interface NotificationEvent {
  type: Events;
  data: R;
}

interface NewNotificationEvent {
  type: Events.NEW_NOTIFICATION;
  data: NotificationData;
}

class NotificationWsEvent {
  private listeners = new Map<Events, Listener[]>();

  constructor() {}

  startListening(ws: WebSocket) {
    this.listenToOpen(ws);
    this.listenToMessage(ws);
  }

  subscribe(event: Events, listener: Listener) {
    const listeners = concat(this.getEventListeners(event), listener);
    this.setEventListeners(event, listeners);
  }

  unsubscribe(event: Events, listener: Listener) {
    this.setOrCleanEventListeners(event, filter(this.getEventListeners(event), listener));
  }

  private listenToOpen(ws: WebSocket) {
    ws.addEventListener("open", () => this.onOpen(ws));
  }

  private onOpen(ws: WebSocket) {
    ws.send(createEventListenData(Events.NEW_NOTIFICATION));
  }

  private listenToMessage(ws: WebSocket) {
    ws.addEventListener("message", (event) => this.onMessage(event.data));
  }

  private onMessage(inData: string) {
    const { type: event, data } = getParsedJSONData<NotificationEvent>(inData);
    this.notifyListeners(event, data);
  }

  private notifyListeners(event: Events, data: R) {
    forEach(this.getEventListeners(event), (listener) => listener.notify(data));
  }

  private getEventListeners(event: Events) {
    return this.listeners.get(event) ?? DEFAULT_EVENT_LISTENERS;
  }

  private setEventListeners(event: Events, eventListeners: Listener[]) {
    return this.listeners.set(event, eventListeners);
  }

  private setOrCleanEventListeners(event: Events, eventListeners: Listener[]) {
    if (eventListeners.length < 1) return this.deleteEvent(event);
    return this.setEventListeners(event, eventListeners);
  }

  private deleteEvent(event: Events) {
    return this.listeners.delete(event);
  }
}

export const notificationEvent = new NotificationWsEvent();
