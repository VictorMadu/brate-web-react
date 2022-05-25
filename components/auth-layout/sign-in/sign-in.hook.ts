import { ChangeEvent, useState } from "react";
import { AuthApiAction } from "../../../use-case/auth/data-fetcher";

const apiAction = new AuthApiAction();
export const useSignIn = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [signInError, setSignInError] = useState<string | undefined>(undefined);

  const handleSubmit = () => {
    setSignInError(undefined);
    // TODO: Communicate directly with http for more flexibitly
    apiAction.sigIn(inputValues).then((err) => {
      // TODO: Display better error msg and UI
      if (err) return setSignInError("Error while sigining up");
    });
  };

  const createInputChangeHandler = (field: keyof typeof inputValues) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputValues((f) => ({ ...f, [field]: e.target.value }));
  };

  return [inputValues, signInError, createInputChangeHandler, handleSubmit] as [
    typeof inputValues,
    typeof signInError,
    typeof createInputChangeHandler,
    typeof handleSubmit
  ];
};
