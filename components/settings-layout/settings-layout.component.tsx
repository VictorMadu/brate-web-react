import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import map from "lodash/map";
import app, * as text from "../../language/en/app";
import * as styles from "./settings-layout.styles";
import If from "../../core/if";
import LogoutBtn from "./logout-btn";
import AuthBtns from "./auth-btns";
import SetttingOption from "./settting-option";
import { useSubscribeWithTransform } from "../../hooks";
import { authStateMgr } from "../../use-case/auth/state-manager";
import { isAuthTransform } from "../../use-case/auth/transformers";

type Text = string;
type Route = string;

const texts = [
  [app.settings.list.profile, "profile"],
  [app.settings.list.wallet, "wallet"],
  [app.settings.list.notification, "notification"],
  [app.settings.list.display, "display"],
  [text.account, "account"],
  [app.settings.list.language, "language"],
] as [Text, Route][];

const Settings = () => {
  const isAuth = useSubscribeWithTransform(
    authStateMgr,
    "token",
    isAuthTransform
  );
  return (
    <div className={styles.container()}>
      <ul className={styles.settingsList()}>
        {map(texts, ([text, route]) => (
          <SetttingOption
            key={route}
            text={text}
            route={"/settings/" + route}
          />
        ))}
      </ul>
      <div className={styles.btnContainer()}>
        <If deps={[isAuth]} Component={LogoutBtn} Else={AuthBtns} />
      </div>
    </div>
  );
};

export default Settings;
