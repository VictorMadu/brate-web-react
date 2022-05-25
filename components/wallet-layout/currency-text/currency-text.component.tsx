import React from "react";
import Text from "../../../core/text";
import { useSubscribe } from "../../../hooks";
import { currencyStateMgr } from "../../../use-case/currency/state-manager";
import {
  WalletInfo,
  walletStateMgr,
} from "../../../use-case/wallet/state-manager";
import * as styles from "./currency-text.styles";

interface CurrencyTextProps {
  walletInfo: WalletInfo;
}

const CurrencyText = ({ walletInfo }: CurrencyTextProps) => {
  const currencySym = walletInfo.currency;
  const currencyName = useSubscribe(currencyStateMgr, "list")[currencySym];
  return (
    <div>
      <Text as="span" text={currencyName} />
      <Text as="p" text={"(" + currencySym + ")"} font={styles.font()} />
    </div>
  );
};

export default CurrencyText;
