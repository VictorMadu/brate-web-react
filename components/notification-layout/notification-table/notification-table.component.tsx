import React from "react";
import map from "lodash/map";
import Text from "../../../core/text";
import * as styles from "./notification-table.styles";
import { useNotificationTable } from "./hook";
import { timestampToDateAndTime } from "../../../utils/timestamp-to-date";

const NotificationTable = () => {
  const { notifcations } = useNotificationTable();
  return (
    <div className={styles.container()}>
      {map(notifcations, (notifcation) => (
        <div key={notifcation.id} className={styles.notification()}>
          <Text as="div" font={styles.msgFont()} text={notifcation.msg} />
          <Text
            as="div"
            font={styles.timeFont()}
            text={timestampToDateAndTime(notifcation.created_at * 1000)} // TODO: Transform data before sending it to state manager
          />
        </div>
      ))}
    </div>
  );
};

export default NotificationTable;
