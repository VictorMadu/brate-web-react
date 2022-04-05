import React from "react";
import Layout from "../layout";
import map from "lodash/map";
import range from "lodash/range";
import * as styles from "./notification-layout.styles";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as text from "../../language/en/app";

const NotificationsLayout = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <div className={styles.settingsContainer()}>
          <div className={styles.dropdownContainer()}>
            <button className={styles.dropdownBtn()}>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="xs"
                className={styles.dropdownIcon()}
              />
              <span>{text.filter}</span>
            </button>
            <div className={styles.dropdownContent()}>
              <ul className={styles.dropList()}>
                <li className={styles.dropItem()}>{text.all}</li>
                <li className={styles.dropItem()}>{text.price_alerts}</li>
                <li className={styles.dropItem()}>{text.trade}</li>
                <li className={styles.dropItem()}>{text.fund}</li>
              </ul>
            </div>
          </div>

          <div className={styles.paginationContainer()}>
            <span>1</span> - <span>10</span> of <span>100</span>
          </div>
        </div>

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
