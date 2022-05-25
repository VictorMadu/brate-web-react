import { useEffect, useMemo } from "react";
import { useSubscribe } from "../../../hooks";
import { NotificationsDataFetcher } from "../../../use-case/notification/actions/data-fetcher";
import { notificationStateMgr } from "../../../use-case/notification/state-manager";
import { FetchFacadeForReset } from "../../../use-case/_utils/data-with-pagination-fetch-manager";

const fetcherFacade = new FetchFacadeForReset(
  new NotificationsDataFetcher(),
  notificationStateMgr,
  "notifications"
);

export function useNotificationTable() {
  const pageCount = useSubscribe(notificationStateMgr, "pageCount");
  const notifications = useSubscribe(notificationStateMgr, "notifications");
  const type = useSubscribe(notificationStateMgr, "type");

  // TODO: Use memorization
  const neededNotifications = useMemo(() => {
    return notifications.slice(0, pageCount);
  }, [notifications, pageCount]);

  useEffect(() => {
    fetcherFacade.reset();
    console.log("called neededNotifications");
  }, [type]);

  return { notifcations: neededNotifications };
}
