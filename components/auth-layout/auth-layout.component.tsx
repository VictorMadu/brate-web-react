import React, { useEffect } from "react";
import Layout from "../layout";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import * as styles from "./auth-layout.styles";
import * as app from "../../language/en/app";
import { useSubscribe } from "../../hooks";
import { authStateMgr } from "../../use-case/auth/state-manager";
import { useRouter } from "next/router";
import { authPageStateMgr } from "../../use-case/auth-page/state-manager";
import SwitchCase from "../../core/switch-case";

const AuthLayout = () => {
  const router = useRouter();
  const authType = useSubscribe(authPageStateMgr, "authType");
  const token = useSubscribe(authStateMgr, "token");

  useEffect(() => {
    if (token) router.replace("/");
  }, [router, token]);

  useEffect(() => {
    () => authPageStateMgr.setData("authType", "Login");
  }, []);

  return (
    <Layout showNav={false}>
      <div className={styles.container()}>
        <div
          className={styles.leftContainer()}
          onClick={() => router.push("/")}
        >
          <p className={styles.titleInLeftContainer()}>{app.brate}</p>
        </div>
        <div className={styles.authContainer()}>
          <p className={styles.titleInAuthContainer()}>{app.brate}</p>
          <SwitchCase
            value={authType}
            cases={{
              ["Login"]: SignIn,
              ["Signup"]: SignUp,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AuthLayout;
