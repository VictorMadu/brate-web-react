import React from "react";
import Modal from "../../modal";
import { ModalType } from "../interface";
import { useFooter } from "./hook";

interface HeaderProps {
  modal: ModalType;
}

const Footer = ({ modal }: HeaderProps) => {
  const { handleCancel, handleContinue } = useFooter(modal);
  return <Modal.Footer onCancel={handleCancel} onContinue={handleContinue} />;
};

export default Footer;
