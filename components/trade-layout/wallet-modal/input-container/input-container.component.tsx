import React from "react";
import Modal from "../../modal";
import { ModalType } from "../interface";
import { useInputSection } from "./hook";

interface HeaderProps {
  modal: ModalType;
}

const InputSection = ({ modal }: HeaderProps) => {
  const {
    editableValue,
    amountAvailable,
    totalValue,
    editableinputLabelText,
    handleValueChange,
  } = useInputSection(modal);
  return (
    <Modal.InputContainer>
      <Modal.Input labelText={"Available"} value={amountAvailable} />
      <Modal.Input
        labelText={editableinputLabelText}
        value={editableValue}
        handleChange={handleValueChange}
      />
      <Modal.Input labelText={"Total"} value={totalValue} />
    </Modal.InputContainer>
  );
};

export default InputSection;
