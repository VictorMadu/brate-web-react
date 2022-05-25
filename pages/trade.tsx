import { NextPage } from "next";
import React from "react";
import NavLayout from "../components/nav-layout";
import TradeLayout from "../components/trade-layout";
import AuthProtected from "../core/auth-protected";
import LayoutContainer from "../core/layout-container";

const Trade: NextPage = () => {
  const ProtectedTradeLayout = AuthProtected(TradeLayout);
  return <LayoutContainer Layout={ProtectedTradeLayout} NavBar={NavLayout} />;
};

export default Trade;
