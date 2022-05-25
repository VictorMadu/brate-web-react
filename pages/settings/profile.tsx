import React from "react";
import { NextPage } from "next";
import ProfileSettingsLayout from "../../components/profile-settings-layout";
import NavLayout from "../../components/nav-layout";
import LayoutContainer from "../../core/layout-container";

const Profile: NextPage = () => {
  return <LayoutContainer Layout={ProfileSettingsLayout} NavBar={NavLayout} />;
};

export default Profile;
