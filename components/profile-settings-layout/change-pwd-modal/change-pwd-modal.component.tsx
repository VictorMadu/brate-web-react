import React from "react";
import ModalRoot from "../../modal-root";
import map from "lodash/map";
import * as styles from "./change-pwd-modal.styles";

const ChangePwdModal = () => {
  return (
    <ModalRoot>
      <div className={styles.container()}>
        <div className={styles.content()}>
          <div className={styles.textContainer()}>
            <p className={styles.title()}>Change Password</p>
            <p className={styles.text()}>
              A link will be sent to your email which you will follow to change
              your password
            </p>
          </div>
          <div className={styles.formContainer()}>
            <label className={styles.inputLabel()}>Email</label>
            <input
              className={styles.input()}
              type="email"
              placeholder={"Enter your email"}
              // value={"ebubevm@gmail.com"}
              // onChange={() => {}}
            />
          </div>
          <div className={styles.btnContainer()}>
            <button className={styles.cancelBtn()}>Cancel</button>
            <button className={styles.sendBtn()}>Send</button>
          </div>
        </div>
      </div>
    </ModalRoot>
  );
};

export default ChangePwdModal;
