import React from "react";
import Modal from "../../modal";
import { ModalType } from "../interface";
import { useDropdown } from "./hook";

interface HeaderProps {
  modal: ModalType;
}

const Dropdown = ({ modal }: HeaderProps) => {
  const { symbol, handleSelectOfNewSym } = useDropdown(modal);
  return (
    <Modal.CurrencyDropdown
      activeSymbol={symbol}
      handleSelect={handleSelectOfNewSym}
    />
  );
};

export default Dropdown;
