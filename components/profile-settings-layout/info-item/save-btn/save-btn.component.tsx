import React from "react";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Btn from "../btn";

interface SaveBtnProps {
  handleClick: () => any;
}

const SaveBtn = ({ handleClick }: SaveBtnProps) => {
  return (
    <Btn
      handleClick={handleClick}
      icon={faSave}
      bgStyle={"hover:bg-green-200/60 focus:bg-green-200/60"}
      textStyle={
        "text-neu-500/90 hover:text-green-500/90 focus:text-green-500/90"
      }
    />
  );
};

export default SaveBtn;
