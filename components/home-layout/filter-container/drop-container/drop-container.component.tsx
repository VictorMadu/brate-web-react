import React, { useState } from "react";
import { useFocus } from "../../../../hooks";
import Dropdown from "../../../../core/dropdown-container";
import * as styles from "./drop-container.styles";

interface DropdownProps {
  show: boolean;
  onActiveStart: () => any;
  onActiveEnd: () => any;
}

interface DropContainerProps {
  show: boolean;
  text: string;
  DropDown: (props: DropdownProps) => JSX.Element;
}

export const DropContainer = ({
  show: defaultShow,
  text,
  DropDown,
}: DropContainerProps) => {
  const [show, setShow] = useState(defaultShow);
  return (
    <>
      <Dropdown.Text
        text={text}
        onActiveStart={() => setShow(true)}
        onActiveEnd={() => setShow(false)}
      />
      <DropDown
        show={show}
        onActiveStart={() => setShow(true)}
        onActiveEnd={() => setShow(false)}
      />
    </>
  );
};

export default DropContainer;
