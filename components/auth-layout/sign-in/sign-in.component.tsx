import React, { useEffect, useState } from "react";
import { signIn } from "../../../api/http";
import * as app from "../../../language/en/app";
import { authPageStateMgr } from "../../../use-case/auth-page/state-manager";
import { useSignIn } from "./sign-in.hook";
import * as styles from "./sign-in.styles";

// TODO: Show loader with canceller to cancel request for onSubmit
// TODO:
const SignIn = () => {
  const [
    inputValues,
    signInError,
    createInputChangeHandler,
    handleSubmit,
  ] = useSignIn();
  useEffect(() => {
    if (signInError) alert(signInError);
  }, [signInError]);
  return (
    <div className={styles.container()}>
      <div className={styles.title()}>{app.sign_in}</div>
      <div>
        <div className={styles.inputContainer()}>
          <div className={styles.inputGroup()}>
            <label className={styles.label()}>{app.email}</label>
            <input
              className={styles.textInput()}
              type="text"
              value={inputValues["email"]}
              onChange={createInputChangeHandler("email")}
            />
          </div>

          <div className={styles.inputGroup()}>
            <label className={styles.label()}>{app.password}</label>
            <input
              className={styles.textInput()}
              type="password"
              value={inputValues["password"]}
              onChange={createInputChangeHandler("password")}
            />
          </div>
        </div>
        <div className={styles.linkContainer()}>
          <a
            className={styles.link()}
            onClick={() => authPageStateMgr.setData("authType", "Signup")}
          >
            {app.do_not_have_an_account_quotation_mark}
          </a>
        </div>
      </div>
      <div className={styles.btnContainer()}>
        <button className={styles.btn()} onClick={handleSubmit}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
