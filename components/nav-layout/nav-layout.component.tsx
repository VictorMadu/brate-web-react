import React from "react";
import * as styles from "./nav-layout.styles";
import {
  faHome,
  faMoneyCheck,
  faComment,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import app from "../../language/en/app";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <div className={styles.container()}>
      <div className={styles.tilte()} onClick={() => router.push("/")}>
        {app.title}
      </div>
      <div className={styles.navContainer()}>
        <Button text="Home" Icon={faHome} route="/" />
        <Button text="Alerts" Icon={faMoneyCheck} route="/alerts" />
        <Button text="Trade" Icon={faMoneyCheck} route="/trade" />
        <Button text="Notifications" Icon={faComment} route="/notifications" />
        <Button text="Settings" Icon={faDesktop} route="/settings" />
      </div>
    </div>
  );
};

export default Nav;
