import React, { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styles from "./star-btn.styles";
import { starCurrencyPairs, unStarCurrencyPairs } from "../../../../api/http";
import { authStateMgr } from "../../../../use-case/auth/state-manager";
import { connect, ConnectedProps } from "../../../../core/hoc";
import { useStarBtn } from "./star-btn.hook";

interface StarBtnProps {
  // rates: Record<string, { is_favourite?: boolean }>;
  // currencyPair: string;

  pairIndex: number;
}

const StarBtn = ({ pairIndex }: StarBtnProps) => {
  const { isAuth, isFav, handleClick } = useStarBtn(pairIndex);

  return (
    <button
      className={styles.container()}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <FontAwesomeIcon
        icon={faStar}
        size="1x"
        className={styles.icon({ isFav, isAuth })}
      />
    </button>
  );
};

export default StarBtn;
