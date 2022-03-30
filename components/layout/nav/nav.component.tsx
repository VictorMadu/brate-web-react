import React from "react";
import * as styles from "./nav.styles";
import {
  faHome,
  faMoneyCheck,
  faComment,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import { text } from "../../../language/en";

const Nav = () => {
  return (
    <div className={styles.container()}>
      <div className={styles.tilte()}>{text.title}</div>
      <div className={styles.navContainer()}>
        <Button text="Home" Icon={faHome} route="/" />
        <Button text="Alerts" Icon={faMoneyCheck} route="/" />
        <Button text="Notifications" Icon={faComment} route="/" />
        <Button text="Settings" Icon={faDesktop} route="/" />
      </div>
    </div>
  );
};

export default Nav;
