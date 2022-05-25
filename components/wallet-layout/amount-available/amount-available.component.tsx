import React from "react";
import Text from "../../../core/text";
import { WalletInfo } from "../../../use-case/wallet/state-manager";

interface AmountAvailableProps {
  walletInfo: WalletInfo;
}

const AmountAvailable = ({ walletInfo }: AmountAvailableProps) => {
  const amountAvailable = walletInfo.amount;
  return (
    <Text
      as="span"
      text={amountAvailable}
      color="text-pri-700"
      font="text-lg"
    />
  );
};

export default AmountAvailable;
