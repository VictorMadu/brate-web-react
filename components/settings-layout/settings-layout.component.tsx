import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import app from "../../language/en/app";
import Layout from "../layout";
import * as styles from "./settings-layout.styles";

const Settings = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <ul className={styles.settingsList()}>
          <li className={styles.settingsItem()}>
            <p className={styles.settingsText()}>{app.settings.list.profile}</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="xs"
              className={styles.settingsIcon()}
            />
          </li>
          <li className={styles.settingsItem()}>
            <p className={styles.settingsText()}>
              {app.settings.list.notification}
            </p>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="xs"
              className={styles.settingsText()}
            />
          </li>
          <li className={styles.settingsItem()}>
            <p className={styles.settingsText()}>{app.settings.list.display}</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="xs"
              className={styles.settingsText()}
            />
          </li>
          <li className={styles.settingsItem()}>
            <p className={styles.settingsText()}>
              {app.settings.list.language}
            </p>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="xs"
              className={styles.settingsText()}
            />
          </li>
        </ul>
        <button className={styles.logoutBtn()}>
          {app.settings.list.logout}
        </button>
      </div>
    </Layout>
  );
};

export default Settings;
