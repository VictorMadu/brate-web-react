import React from "react";
import ModalRoot from "../../../modal-root";
import * as text from "../../../../language/en/app";
import * as styles from "./otp-input-modal.styles";
import Text from "../../../../core/text";
import { useRouter } from "next/router";
import If from "../../../../core/if";
import { useOtpInputModalHandler } from "./otp-input-modal.hook";
import { OtpModalContainer } from "./otp-input-modal.container";

// TODO: This is borrwoing heavily from change password modal. We have to create verify kinds of modals and other core component and share reusable styling and import here

// TODO: Same with input and label and co

interface OtpVerificationModalProps {
  email: string;
  handleShowChange: (show: boolean) => any;
}

// TODO: Break function
// TODO: Remove modalRoot and createRoot in all component. It is necessary and hinders input
// TODO: Use this verificationModal also for sign in when user is yet to verify account. Also create custom error codes at the server and send to the user. This will help to know what error it is

// TODO: Sign Up should and log in should return where user exists and (user does not exist or wrong password) respectively

const OtpVerificationModal = ({
  email,
  handleShowChange,
}: OtpVerificationModalProps) => {
  const handler = useOtpInputModalHandler(email, handleShowChange);
  return (
    <div className={styles.container()}>
      <div className={styles.content()}>
        <div className={styles.textContainer()}>
          <Text
            as="div"
            font={styles.titleFont}
            margin={styles.titleMargin}
            text={text.email_verification}
          />
          <Text
            as="div"
            text={text.enter_one_time_password_sent_to_your_email}
          />
        </div>
        <div className={styles.formContainer()}>
          <label className={styles.inputLabel()}></label>

          <input
            className={styles.input()}
            type="text"
            placeholder={text.enter_your_otp}
            value={handler.inputValue}
            onChange={handler.handleInputChange}
          />
        </div>
        <If
          deps={[handler.modalErrMsg]}
          Component={({ deps: [errMsg] }) => (
            <Text as="span" font={styles.errMsgFont} text={errMsg} />
          )}
        />
        <div className={styles.btnContainer()}>
          {/* TODO: Abstract the navigation of pages into a function or even class */}
          <button className={styles.cancelBtn()} onClick={handler.handleCancel}>
            {text.cancel}
          </button>
          <button className={styles.sendBtn()} onClick={handler.handleSend}>
            {text.send}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpModalContainer(OtpVerificationModal);
