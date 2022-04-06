import React, { useState } from "react";
import Layout from "../layout";
import app from "../../language/en/app";
import If from "../../core/if";
import SellLayout from "./sell-layout";
import BuyLayout from "./buy-layout";
import * as styles from "./trade-layout.styles";

const trade = app.trade;

const TradeLayout = () => {
  const [isBereauDeChange, setIsBereauDeChange] = useState(true);
  return (
    <Layout showNav={true}>
      <If deps={[isBereauDeChange]} Component={SellLayout} Else={BuyLayout} />
    </Layout>
  );
};

export default TradeLayout;
