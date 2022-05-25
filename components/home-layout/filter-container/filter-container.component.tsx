import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import app from "../../../language/en/app";
import Dropdown from "../../../core/dropdown-container";
import MarketFilterDrop from "./market-filter-drop";
import TypeFilterDrop from "./type-filter-drop";
import * as styles from "./filter-container.styles";
import Text from "../../../core/text";
import DropContainer from "./drop-container";
import { rateStateMgr } from "../../../use-case/rate/state-manager";
import { connect, ConnectedProps } from "../../../core/hoc";

export const FilterContainer = () => {
  const [show, setShow] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [showType, setShowType] = useState(false);

  return (
    <div className={styles.container()}>
      <div className={styles.content()} onClick={() => setShow((s) => !s)}>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="xs"
          className={styles.icon()}
        />
        <Text as="span" text={app.filter} />
      </div>
      <Dropdown
        position="top-full right-1/2"
        show={show}
        onActiveStart={() => setShow(true)}
        onActiveEnd={() => setShow(false)}
      >
        <Dropdown.DropItem
          onSelect={() => {
            setShowMarket(true);
          }}
          content={
            <DropContainer
              show={showMarket}
              text={app.base}
              DropDown={MarketFilterDrop}
            />
          }
        />
        <Dropdown.DropItem
          onSelect={() => {
            setShowType(true);
          }}
          content={
            <DropContainer
              show={showType}
              text={app.type}
              DropDown={TypeFilterDrop}
            />
          }
        />
      </Dropdown>
    </div>
  );
};

export default FilterContainer;
