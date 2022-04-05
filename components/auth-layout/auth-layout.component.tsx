import React, { useState } from "react";
import If from "../../core/if";
import Layout from "../layout";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import * as styles from "./auth-layout.styles";
import * as app from "../../language/en/app";

const AuthLayout = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Layout showNav={false}>
      <div className={styles.container()}>
        <div className={styles.leftContainer()}>
          <p className={styles.titleInLeftContainer()}>{app.brate}</p>
        </div>
        <div className={styles.authContainer()}>
          <p className={styles.titleInAuthContainer()}>{app.brate}</p>
          <If
            deps={[isLogin]}
            Component={() => <SignIn />}
            Else={() => <SignUp />}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AuthLayout;
