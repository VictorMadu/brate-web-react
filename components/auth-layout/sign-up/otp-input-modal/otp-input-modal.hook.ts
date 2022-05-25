import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import { AuthApiAction } from "../../../../use-case/auth/data-fetcher";

const apiAction = new AuthApiAction();
const DEFAULT_INPUT_VALUE = "";

export const useOtpInputModalHandler = (
  email: string,
  handleShowChange: (show: boolean) => any
) => {
  const router = useRouter();
  const [modalErrMsg, setModalErrMsg] = useState("");
  const [inputValue, setInputValue] = useState(DEFAULT_INPUT_VALUE);

  function handleSend() {
    apiAction.verifyOtp({ email, otp: inputValue }).then((err) => {
      if (err) return handleInvalidOtp();
      return handleCorrectOtp();
    });
  }

  function handleCancel() {
    handleShowChange(false);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleInvalidOtp() {
    setInputValue(DEFAULT_INPUT_VALUE);
    setModalErrMsg("Invalid OTP. Enter again");
  }

  function handleCorrectOtp() {
    handleShowChange(false);
    router.push("/");
  }

  return {
    inputValue,
    handleInputChange,
    modalErrMsg,
    handleCancel,
    handleSend,
  };
};
