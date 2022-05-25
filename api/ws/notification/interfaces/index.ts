import { uuid } from "../../../interfaces";

export interface NotificationData {
  id: uuid;
  created_at: number;
  msg: string;
}
