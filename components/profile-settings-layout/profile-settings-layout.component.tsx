import React from "react";
import app from "../../language/en/app";
import Layout from "../layout";
import map from "lodash/map";
import * as styles from "./profile-settings-layout.styles";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const appLang = app.settings.profile;

const details = [
  { title: appLang.name, text: "Victor Madu" },
  { title: appLang.name, text: "Victor Madu" },
  { title: appLang.email, text: "ebubevm@gmail.com" },
  { title: appLang.phone, text: "080885864849" },
  { title: appLang.change_pwd, text: ". . . . . . . . . . . . . ." },
];

const ProfileSettingsLayout = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <ul className={styles.list()}>
          {map(details, (detail) => (
            <li key={detail.title} className={styles.item()}>
              <div className={styles.titleContainer()}>
                <p className={styles.title()}>{detail.title}</p>
                <button className={styles.editBtn(true)}>
                  <FontAwesomeIcon icon={faEdit} size="sm" className={""} />
                </button>
              </div>
              <div className={styles.textContainer()}>
                <p className={styles.text()}>{detail.text}</p>
                <button className={styles.editBtn(false)}>
                  <FontAwesomeIcon icon={faEdit} size="sm" className={""} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProfileSettingsLayout;
