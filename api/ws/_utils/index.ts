import { notificationEvent } from "../notification";
import { getErateBaseURL } from "./routes";

let ws: WebSocket | undefined;

export const getParsedJSONData = <T extends Record<string, any>>(data: string): T => {
  return JSON.parse(data);
};

export const createEventListenData = (event: string) => {
  return JSON.stringify({ type: event });
};

export const startWs = () => {
  const ws = new WebSocket(getErateBaseURL());
  notificationEvent.startListening(ws);
};
