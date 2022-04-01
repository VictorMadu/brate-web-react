import React from "react";
import Layout from "../layout";
import * as styles from "./settings-layout.styles";

const Settings = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>Settings Layout</div>
    </Layout>
  );
};

export default Settings;
