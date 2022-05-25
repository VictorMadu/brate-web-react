import { NextPage } from "next";
import React from "react";
import LanguageSettingLayout from "../../components/language-setting-layout";
import LayoutContainer from "../../core/layout-container";
import NavLayout from "../../components/nav-layout";

const Language: NextPage = () => {
  return <LayoutContainer Layout={LanguageSettingLayout} NavBar={NavLayout} />;
};

export default Language;
