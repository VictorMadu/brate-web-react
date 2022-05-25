import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import app from "../../language/en/app";
import * as styles from "./language-setting-layout.styles";
import Layout from "../layout";

const appLng = app.settings.language;

const LanguageSettingLayout = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <div className={styles.option()}>
          <p>{appLng.select_language}</p>
          <div className={styles.btnContainer()}>
            <button className={styles.btn()}>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="xs"
                className={styles.icon()}
              />
              <span>{appLng.english}</span>
            </button>
            <div className={styles.dropdownContainer()}>
              <ul className={styles.dropdownContent()}>
                <li className={styles.dropdownItem()}>{appLng.english}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LanguageSettingLayout;
