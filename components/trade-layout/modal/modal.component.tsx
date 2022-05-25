import React from "react";
import { OrWithArray } from "ts-util-types";
import ModalCurrencyDropdown from "./modal-currency-dropdown";
import ModalFooter from "./modal-footer";
import ModalHeader from "./modal-header";
import ModalInput from "./modal-input";
import ModalInputContainer from "./modal-input-container";
import * as styles from "./modal.styles";

interface ModalProps {
  children: OrWithArray<JSX.Element>;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.container()}>
      <div className={styles.content()}>{children}</div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.CurrencyDropdown = ModalCurrencyDropdown;
Modal.InputContainer = ModalInputContainer;
Modal.Input = ModalInput;
Modal.Footer = ModalFooter;

export default Modal;
