import React from "react";
import If from "../if";
import { PushRoute } from "../router";
import { useAuthProtected } from "./hook";

const AuthProtected = (Component: () => JSX.Element) => {
  const isAuth = useAuthProtected();
  return isAuth ? Component : () => <PushRoute path="/" />;
};

export default AuthProtected;
