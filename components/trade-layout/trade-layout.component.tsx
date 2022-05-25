import React, { useState } from "react";
import app from "../../language/en/app";
import If from "../../core/if";
import SellLayout from "./sell-layout";
import BuyLayout from "./buy-layout";

const trade = app.trade;

const TradeLayout = () => {
  const [isBereauDeChange, setIsBereauDeChange] = useState(false);
  return (
    <If deps={[isBereauDeChange]} Component={SellLayout} Else={BuyLayout} />
  );
};

export default TradeLayout;
