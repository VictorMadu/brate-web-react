import { NextPage } from "next";
import React from "react";
import SettingsNotificationLayout from "../../components/settings-notification-layout";
import LayoutContainer from "../../core/layout-container";
import NavLayout from "../../components/nav-layout";

// TODO: Make this kind of settings page protected and not navigatable to unless user is authenticated
const Notification: NextPage = () => {
  return (
    <LayoutContainer Layout={SettingsNotificationLayout} NavBar={NavLayout} />
  );
};

export default Notification;
