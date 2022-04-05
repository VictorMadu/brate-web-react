import React from "react";
import * as app from "../../../language/en/app";
import * as styles from "./sign-in.styles";

const SignIn = () => {
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
              value={""}
              onChange={() => {}}
            />
          </div>

          <div className={styles.inputGroup()}>
            <label className={styles.label()}>{app.password}</label>
            <input
              className={styles.textInput()}
              type="text"
              value={""}
              onChange={() => {}}
            />
          </div>
        </div>
        <div className={styles.linkContainer()}>
          <a className={styles.link()}>
            {app.do_not_have_an_account_quotation_mark}
          </a>
        </div>
      </div>
      <div className={styles.btnContainer()}>
        <button className={styles.btn()}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignIn;
