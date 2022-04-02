import React from "react";
import Switch from "../../core/switch";
import app from "../../language/en/app";
import Layout from "../layout";
import * as styles from "./display-layout.styles";

const display = app.settings.display;

const DisplayLayout = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <div className={styles.option()}>
          <p>{display.dark_mode}</p>
          <Switch
            onText={"Light"}
            offText={"Dark"}
            onClick={() => {
              alert("TODO");
            }}
            isOn={false}
          />
        </div>
      </div>
    </Layout>
  );
};

export default DisplayLayout;
