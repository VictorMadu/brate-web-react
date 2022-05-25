import React from "react";
import { useChangePwdModal } from "./hook";
import * as styles from "./change-pwd-modal.styles";

const ChangePwdModal = () => {
  const { show, handleCancel, handleSend } = useChangePwdModal();
  if (!show) return null;
  return (
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
          <button className={styles.cancelBtn()} onClick={handleCancel}>
            Cancel
          </button>
          <button className={styles.sendBtn()} onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePwdModal;
