import React from "react";
import Text from "../../../../core/text";
import { addTrailingZeroesForMoney } from "../../../../utils/add-trailing-zeros-for-money";

interface RateProps {
  rate: number;
}

const Rate = ({ rate }: RateProps) => {
  return <Text text={addTrailingZeroesForMoney(rate ?? 0)} />;
};

export default Rate;
