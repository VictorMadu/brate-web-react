import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import map from "lodash/map";
import app from "../../language/en/app";
import Layout from "../layout";
import * as styles from "./settings-layout.styles";

const texts = [
  app.settings.list.profile,
  app.settings.list.wallet,
  app.settings.list.notification,
  app.settings.list.display,
  app.settings.list.language,
];

const Settings = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <ul className={styles.settingsList()}>
          {/* TODO: Add modal for edit profile detail, add wallet layout, add language layout, add page title headings
           */}
          {map(texts, (text) => (
            <li key={text} className={styles.settingsItem()}>
              <p className={styles.settingsText()}>{text}</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="xs"
                className={styles.settingsIcon()}
              />
            </li>
          ))}
        </ul>
        <button className={styles.logoutBtn()}>
          {app.settings.list.logout}
        </button>
      </div>
    </Layout>
  );
};

export default Settings;
