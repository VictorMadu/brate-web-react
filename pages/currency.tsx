import React from "react";
import type { NextPage } from "next";
import CurrencyDetailLayout from "../components/currency-detail-layout";
import NavLayout from "../components/nav-layout";
import LayoutContainer from "../core/layout-container";

const Currency: NextPage = () => {
  return <LayoutContainer Layout={CurrencyDetailLayout} NavBar={NavLayout} />;
};

export default Currency;
