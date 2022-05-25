import { AlertState } from "./state-manager";

export function alertsExistTransform(alerts: AlertState["alerts"]) {
  return !!alerts.length;
}
