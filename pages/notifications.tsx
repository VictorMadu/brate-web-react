import React from "react";
import type { NextPage } from "next";
import NavLayout from "../components/nav-layout";
import NotificationsLayout from "../components/notification-layout";
import AuthProtected from "../core/auth-protected";
import LayoutContainer from "../core/layout-container";

const Notification: NextPage = () => {
  const ProtectedNotificationsLayout = AuthProtected(NotificationsLayout);
  return (
    <LayoutContainer Layout={ProtectedNotificationsLayout} NavBar={NavLayout} />
  );
};

export default Notification;
