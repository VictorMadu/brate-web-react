import React from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Btn from "../btn";

interface EditBtnProps {
  handleClick: () => any;
}

const EditBtn = ({ handleClick }: EditBtnProps) => {
  return (
    <Btn
      handleClick={handleClick}
      icon={faEdit}
      bgStyle={"hover:bg-pri-200/60 focus:bg-pri-200/60"}
      textStyle={"text-neu-500/90 hover:text-pri-500/90 focus:text-pri-500/90"}
    />
  );
};

export default EditBtn;
