import React, { useEffect, useRef, useState } from "react";
import app, * as text from "../../language/en/app";
import Layout from "../layout";
import * as styles from "./account-settings-layout.styles";

const display = app.settings.display;

const AccountSettingsLayout = () => {
  const isOnRef = useRef(false);
  const switchBtnRef = useRef<HTMLButtonElement>(null);
  const switchBtnContainerRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     if (!switchBtnRef.current || !switchBtnContainerRef.current) return;
  //     styles.toggleSwitchBtn(
  //       switchBtnRef.current,
  //       switchBtnContainerRef.current,
  //       isOnRef.current
  //     );
  //     isOnRef.current = !isOnRef.current;
  //   }, 2500);

  //   return () => clearInterval(id);
  // }, []);

  useEffect(() => {
    console.log("Mounting or Re-rendering");
  });

  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <div className={styles.option()}>
          <p>{text.switch_to_bereau_de_change}</p>
          <div className={styles.switchContainer()} ref={switchBtnContainerRef}>
            <button className={styles.switchBtn()} ref={switchBtnRef}></button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountSettingsLayout;
