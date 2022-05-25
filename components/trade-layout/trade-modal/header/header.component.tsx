import React from "react";
import Modal from "../../modal";
import Text from "../../../../core/text";
import { useHeader } from "./hook";

const Header = () => {
  const { baseSymbol, quotaSymbol } = useHeader();
  return (
    <Modal.Header>
      <Text as="div" text={baseSymbol + "/" + quotaSymbol} />
    </Modal.Header>
  );
};

export default Header;
