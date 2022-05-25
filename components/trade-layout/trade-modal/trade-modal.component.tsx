import React from "react";
import Modal from "../modal";
import CurrencyDropdown from "./currency-dropdown";
import Footer from "./footer";
import Header from "./header";
import { useTradeModal } from "./hook";
import InputSection from "./input-container";
import * as text from "../../../language/en/app";
import * as styles from "./trade-modal.styles";

interface WalletModalProps {}

const TradeModal = ({}: WalletModalProps) => {
  const {
    shouldHide,
    rateInputValue,
    baseSymbol,
    quotaSymbol,
    currencySymbolsToDisplayForBase,
    currencySymbolsToDisplayForQuota,
    handleRateInputChange,
    handleBaseSelect,
    handleQuotaSelect,
  } = useTradeModal();

  if (shouldHide) return <></>;

  return (
    <Modal>
      <Header />
      <div className="bg-neu-50 py-8 px-[5%] md:px-6">
        <div className={styles.dropdownContainer()}>
          <CurrencyDropdown
            title={text.base}
            placeholder={text.you_give}
            currencySymbols={currencySymbolsToDisplayForBase}
            currencySymbolToDisplay={baseSymbol}
            onSelectNewCurrencySybmol={handleBaseSelect}
            dropIconPos={"left"}
          />
          <CurrencyDropdown
            title={text.quota}
            placeholder={text.you_receive}
            currencySymbols={currencySymbolsToDisplayForQuota}
            currencySymbolToDisplay={quotaSymbol}
            onSelectNewCurrencySybmol={handleQuotaSelect}
            dropIconPos={"right"}
          />
        </div>
        <InputSection
          label={"Rate"}
          value={rateInputValue}
          handleValueChange={handleRateInputChange}
        />
      </div>
      <Footer />
    </Modal>
  );
};

export default TradeModal;
