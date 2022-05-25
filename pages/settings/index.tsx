import React from "react";
import { NextPage } from "next";
import NavLayout from "../../components/nav-layout";
import SettingsLayout from "../../components/settings-layout";
import LayoutContainer from "../../core/layout-container";

const Settings: NextPage = () => {
  return <LayoutContainer Layout={SettingsLayout} NavBar={NavLayout} />;
};

export default Settings;
