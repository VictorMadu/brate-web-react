import { NextPage } from "next";
import React from "react";
import DisplayLayout from "../../components/display-layout";
import LayoutContainer from "../../core/layout-container";
import NavLayout from "../../components/nav-layout";

const Display: NextPage = () => {
  return <LayoutContainer Layout={DisplayLayout} NavBar={NavLayout} />;
};

export default Display;
