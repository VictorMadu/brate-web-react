import React from "react";
import Modal from "../../modal";
import CurrencyDropdown from "./currency-dropdown";
import Footer from "./footer";
import Header from "./header";
import { useTradeModal } from "./hook";
import InputSection from "./input-container";
import * as styles from "./trade-modal.styles";

interface WalletModalProps {}

const TradeModal = ({}: WalletModalProps) => {
  const {
    traderIndex,
    rate,
    amountAvailableForSale,
    handleAmountToBuyChange,
    amountToBuy,
  } = useTradeModal();

  if (traderIndex < 0) return <></>;

  return (
    <Modal>
      <Header traderIndex={traderIndex} />
      <div className="bg-neu-50 py-8 px-[5%] md:px-6">
        <InputSection label={"Rate"} value={rate} />
        <InputSection
          label={"Amount Available For Sale"}
          value={amountAvailableForSale}
        />
        <InputSection
          label={"Rate"}
          value={amountToBuy}
          handleValueChange={handleAmountToBuyChange}
        />
      </div>
      <Footer />
    </Modal>
  );
};

export default TradeModal;
