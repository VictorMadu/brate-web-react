import { getNotificationData } from "../../../api/http";
import { HttpError } from "../../../utils/status";
import { authStateMgr } from "../../auth/state-manager";
import { DataServiceFetcher } from "../../_utils/data-with-pagination-fetch-manager";
import { NotificationState, notificationStateMgr } from "../state-manager";

type Result =
  | [NotificationState["notifications"], undefined]
  | [undefined, HttpError];

export class NotificationsDataFetcher
  implements DataServiceFetcher<NotificationState, "notifications"> {
  async fetch(pageOffset: number, pageCount: number): Promise<Result> {
    return getNotificationData({
      token: authStateMgr.getData("token"),
      pageOffset,
      pageCount,
      type: notificationStateMgr.getData("type"),
    }).then(([data, err]) => [data?.notifications, err] as Result);
  }
}
