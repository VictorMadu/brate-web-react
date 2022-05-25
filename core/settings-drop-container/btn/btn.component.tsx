import React from "react";
import Text from "../../text";
import * as styles from "./btn.styles";
import DropIcon from "./drop-icon";

interface BtnProps {
  text: string;
  iconPos: "left" | "right";
  onClick: () => any;
}

const Btn = ({ text, iconPos, onClick }: BtnProps) => {
  return (
    <button className={styles.btn()} onClick={onClick}>
      {iconPos === "left" ? <DropIcon /> : null}
      <Text text={text} />
      {iconPos === "right" ? <DropIcon /> : null}
    </button>
  );
};

export default Btn;
