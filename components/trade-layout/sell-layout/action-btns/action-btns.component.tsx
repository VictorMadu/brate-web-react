import React from "react";
import * as text from "../../../../language/en/app";
import * as styles from "./action-btns.styles";
import { useActionBtns } from "./hook";

interface ActionBtnsProps {
  pair: string;
}

const ActionBtns = ({ pair }: ActionBtnsProps) => {
  const { handleEdit, handleDelete } = useActionBtns(pair);
  return (
    <div className={styles.container()}>
      <button className={styles.btn()} onClick={handleEdit}>
        {text.edit}
      </button>
      <button className={styles.btn()} onClick={handleDelete}>
        {text._delete}
      </button>
    </div>
  );
};

export default ActionBtns;
