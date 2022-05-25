import React, { useEffect } from "react";
import type { NextPage } from "next";
import AlertsLayout from "../components/alerts-layout";
import LayoutContainer from "../core/layout-container";
import NavLayout from "../components/nav-layout";
import AuthProtected from "../core/auth-protected";

const Home: NextPage = () => {
  const ProtectedAlertsLayout = AuthProtected(AlertsLayout);
  return <LayoutContainer Layout={ProtectedAlertsLayout} NavBar={NavLayout} />;
};

export default Home;
