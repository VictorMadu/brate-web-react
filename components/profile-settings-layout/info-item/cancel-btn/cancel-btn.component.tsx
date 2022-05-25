import React from "react";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import Btn from "../btn";

interface CancelBtnProps {
  handleClick: () => any;
}

const CancelBtn = ({ handleClick }: CancelBtnProps) => {
  return (
    <Btn
      handleClick={handleClick}
      icon={faCancel}
      bgStyle={"hover:bg-red-200/60 focus:bg-red-200/60"}
      textStyle={"text-neu-500/90 hover:text-red-500/90 focus:text-red-500/90"}
    />
  );
};

export default CancelBtn;
