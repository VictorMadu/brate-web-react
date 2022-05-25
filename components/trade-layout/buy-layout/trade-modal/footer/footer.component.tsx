import React from "react";
import Modal from "../../../modal";
import { useFooter } from "./hook";

interface FooterProps {}

const Footer = () => {
  const { handleCancel, handleContinue } = useFooter();
  return <Modal.Footer onCancel={handleCancel} onContinue={handleContinue} />;
};

export default Footer;
