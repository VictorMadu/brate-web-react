import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import app from "../../language/en/app";
import Layout from "../layout";
import * as styles from "./account-settings-layout.styles";

const appLang = app.settings.profile;

const AccountSettingsLayout = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <ul className={styles.list()}>
          <li className={styles.item()}>
            <p className={styles.title()}>{appLang.name}</p>
            <p className={styles.text()}>{"Victor Madu"}</p>
          </li>
          <li className={styles.item()}>
            <p className={styles.title()}>{appLang.email}</p>
            <p className={styles.text()}>{"ebubevm@gmail.com"}</p>
          </li>
          <li className={styles.item()}>
            <p className={styles.title()}>{appLang.phone}</p>
            <p className={styles.text()}>{"080885864849"}</p>
          </li>
          <li className={styles.item()}>
            <p className={styles.title()}>{appLang.change_pwd}</p>
            <p className={styles.textAndBold()}>
              <span> {". . . . . . . . . . . . . ."}</span>
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default AccountSettingsLayout;
