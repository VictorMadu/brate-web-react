import { NextPage } from "next";
import React from "react";
import AccountSettingsLayout from "../../components/account-settings-layout";
import LayoutContainer from "../../core/layout-container";
import NavLayout from "../../components/nav-layout";

const Account: NextPage = () => {
  return <LayoutContainer Layout={AccountSettingsLayout} NavBar={NavLayout} />;
};

export default Account;
