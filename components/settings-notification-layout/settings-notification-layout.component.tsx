import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import app from "../../language/en/app";
import * as styles from "./settings-notification-layout.styles";

const appLng = app.settings.notification.removal_time;

const SettingsNotificationLayout = () => {
  return (
    <div className={styles.container()}>
      <div className={styles.option()}>
        <p>{app.settings.notification.set_removal_text}</p>
        <div className={styles.timeContainer()}>
          <div className={styles.timeContent()}>
            <FontAwesomeIcon
              icon={faChevronDown}
              size="xs"
              className={styles.timeIcon()}
            />
            <span>{app.settings.notification.time}</span>
          </div>
          <div className={styles.timeDropdownContainer()}>
            <ul className={styles.timeDropdownContent()}>
              <li className={styles.timeDropdownItem()}>{appLng.one_hr}</li>
              <li className={styles.timeDropdownItem()}>{appLng.three_hr}</li>
              <li className={styles.timeDropdownItem()}>{appLng.six_hr}</li>
              <li className={styles.timeDropdownItem()}>{appLng.one_day}</li>
              <li className={styles.timeDropdownItem()}>{appLng.three_day}</li>
              <li className={styles.timeDropdownItem()}>{appLng.one_wk}</li>
              <li className={styles.timeDropdownItem()}>{appLng.one_mth}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsNotificationLayout;
