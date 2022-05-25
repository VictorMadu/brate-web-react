import React from "react";
import Text from "../../../../core/text";
import { TradeBuyState } from "../../../../use-case/buy-trade/state-manager";
import { addTrailingZeroesForMoney } from "../../../../utils/add-trailing-zeros-for-money";
import { useTraderAmountForSaleAndRate } from "./hook";

interface TraderNameAndPairProps {
  traderInfo: TradeBuyState["traders"][number];
}

const TraderAmountForSaleAndRate = ({ traderInfo }: TraderNameAndPairProps) => {
  const { amount, rate } = useTraderAmountForSaleAndRate(traderInfo);
  return (
    <div>
      <Text
        as="p"
        text={addTrailingZeroesForMoney(rate ?? 0)}
        font="font-semibold text-pri-600"
      />
      <Text as="p" text={addTrailingZeroesForMoney(amount ?? 0)} />
    </div>
  );
};

export default TraderAmountForSaleAndRate;
