import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import map from "lodash/map";
import app, * as text from "../../language/en/app";
import Layout from "../layout";
import * as styles from "./settings-layout.styles";
import If from "../../core/if";

const texts = [
  app.settings.list.profile,
  app.settings.list.wallet,
  app.settings.list.notification,
  app.settings.list.display,
  text.account,
  app.settings.list.language,
];

const Settings = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <ul className={styles.settingsList()}>
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
        <div className={styles.btnContainer()}>
          <If
            deps={[isLoggedIn]}
            Component={() => (
              <button className={styles.logoutBtn()}>
                {app.settings.list.logout}
              </button>
            )}
            Else={() => (
              <>
                <button className={styles.signInBtn()}>
                  {app.settings.list.sign_in}
                </button>
                <button className={styles.signUpBtn()}>
                  {app.settings.list.sign_up}
                </button>
              </>
            )}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
