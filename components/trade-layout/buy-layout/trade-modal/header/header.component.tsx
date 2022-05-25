import React from "react";
import Modal from "../../../modal";
import Text from "../../../../../core/text";
import { useHeader } from "./hook";

interface HeaderProps {
  traderIndex: number;
}

const Header = ({ traderIndex }: HeaderProps) => {
  const { pairToDisplay } = useHeader(traderIndex);
  if (pairToDisplay == null) return <></>;
  return (
    <Modal.Header>
      <Text as="div" text={pairToDisplay} />
    </Modal.Header>
  );
};

export default Header;
