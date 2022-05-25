import React, { useEffect } from "react";
import Text from "../../../core/text";
import * as app from "../../../language/en/app";
import { authPageStateMgr } from "../../../use-case/auth-page/state-manager";
import OtpVerificationModal from "./otp-input-modal";
import { useSignUp } from "./sign-up.hook";
import * as styles from "./sign-up.styles";

// TODO: Add better form user experience like validation with nice UI and co
// TODO: Make code cleaner and dry er (esp the input)
const SignUp = () => {
  const [
    inputValues,
    disableSubmitBtn,
    signUpError,
    showModal,
    setShowModal,
    createInputChangeHandler,
    handleSubmit,
    openVerifyModal,
  ] = useSignUp();

  useEffect(() => {
    if (signUpError) alert(signUpError);
  }, [signUpError]);
  return (
    <div className={styles.container()}>
      <OtpVerificationModal
        show={showModal}
        handleShowChange={setShowModal}
        email={inputValues["email"]}
      />
      <div className={styles.title()}>{app.sign_up}</div>
      <div>
        <div className={styles.inputContainer()}>
          {/* TODO: Display error message */}
          <div className={styles.inputGroup()}>
            <label className={styles.label()}>{app.name}</label>
            {/* TODO: Create a input component in core and do a default trimming of values and come with an onValueChange to abstract onChange. Replace all input with it */}
            <input
              className={styles.textInput()}
              type="text"
              value={inputValues["name"]}
              onChange={createInputChangeHandler("name")}
            />
          </div>
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
            <label className={styles.label()}>{app.phone}</label>
            <input
              className={styles.textInput()}
              type="text"
              value={inputValues["phone"]}
              onChange={createInputChangeHandler("phone")}
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
          <a className={styles.modalLink()} onClick={openVerifyModal}>
            {app.have_an_account_already_quotation_mark}
          </a>
          <a
            className={styles.signInLink()}
            onClick={() => authPageStateMgr.setData("authType", "Login")}
          >
            {app.have_an_account_already_quotation_mark}
          </a>
        </div>
      </div>
      <div className={styles.btnContainer()}>
        <button
          className={styles.btn()}
          onClick={handleSubmit}
          disabled={disableSubmitBtn}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
