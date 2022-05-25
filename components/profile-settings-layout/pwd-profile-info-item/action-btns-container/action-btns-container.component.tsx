import React from "react";
import InfoItem from "../../info-item";
import { useActionBtnsContainer } from "./hook";

const ActionBtnsContainer = () => {
  const { handleBtnClick } = useActionBtnsContainer();

  return (
    <InfoItem.ActionBtnsContainer>
      <InfoItem.EditBtn handleClick={handleBtnClick} />
    </InfoItem.ActionBtnsContainer>
  );
};

export default ActionBtnsContainer;
