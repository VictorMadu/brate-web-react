import React from "react";
import Layout from "../layout";
import map from "lodash/map";
import range from "lodash/range";
import * as styles from "./notification-layout.styles";

const NotificationsLayout = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <div className={styles.notificationContainer()}>
          <div className={styles.notificationList()}>
            {map(range(0, 10), (id) => (
              <div className={styles.notification()}>
                <p className={styles.notificationText()}>
                  {"USD/NGN has passed the 450.56 level"}
                </p>
                <p className={styles.notificationTime()}>
                  <span>{"12/05/2022"}</span>
                  <span>{"12:30pm"}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotificationsLayout;
