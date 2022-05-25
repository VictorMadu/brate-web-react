import React, { useEffect } from "react";
import type { NextPage } from "next";
import HomeLayout from "../components/home-layout";
import LayoutContainer from "../core/layout-container";
import NavLayout from "../components/nav-layout";

const Home: NextPage = () => {
  return <LayoutContainer Layout={HomeLayout} NavBar={NavLayout} />;
};

export default Home;
