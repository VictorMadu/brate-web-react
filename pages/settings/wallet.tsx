import React from "react";
import { NextPage } from "next";
import NavLayout from "../../components/nav-layout";
import WalletLayout from "../../components/wallet-layout";
import LayoutContainer from "../../core/layout-container";

const Wallet: NextPage = () => {
  return <LayoutContainer Layout={WalletLayout} NavBar={NavLayout} />;
};

export default Wallet;
