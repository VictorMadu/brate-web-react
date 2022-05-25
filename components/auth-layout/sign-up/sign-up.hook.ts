import { ChangeEvent, useEffect, useState } from "react";
import { AuthApiAction } from "../../../use-case/auth/data-fetcher";

const apiAction = new AuthApiAction();
export const useSignUp = () => {
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [signUpError, setSignUpError] = useState<string | undefined>(undefined);

  const handleShowModal = (shouldShow: boolean) => {
    setShowModal(shouldShow);
    if (!shouldShow) setDisableSubmitBtn(false);
  };

  const openVerifyModal = () => setShowModal(true);

  const handleSubmit = () => {
    if (disableSubmitBtn) return;
    setDisableSubmitBtn(true);
    setSignUpError(undefined);

    apiAction.signUp(inputValues).then((err) => {
      setDisableSubmitBtn(false);

      // TODO: Display better error msg and UI
      if (err) return setSignUpError("Error while sigining up");
      else setShowModal(true);
    });
  };

  const createInputChangeHandler = (field: keyof typeof inputValues) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (disableSubmitBtn) return;
    setInputValues((f) => ({ ...f, [field]: e.target.value }));
  };

  return [
    inputValues,
    disableSubmitBtn,
    signUpError,
    showModal,
    handleShowModal,
    createInputChangeHandler,
    handleSubmit,
    openVerifyModal,
  ] as [
    typeof inputValues,
    typeof disableSubmitBtn,
    typeof signUpError,
    typeof showModal,
    typeof handleShowModal,
    typeof createInputChangeHandler,
    typeof handleSubmit,
    typeof openVerifyModal
  ];
};
