import React from "react";
import Modal from "../../modal";
import { ModalType } from "../interface";
import * as styles from "./header.styles";
import { useHeader } from "./hook";

interface HeaderProps {
  modal: ModalType;
}

const Header = ({ modal }: HeaderProps) => {
  const { symbol, name } = useHeader(modal);
  return (
    <Modal.Header>
      <span className={styles.currencyName()}>{name}</span>
      <span className={styles.currencySymbol()}>{"(" + symbol + ")"}</span>
    </Modal.Header>
  );
};

export default Header;
