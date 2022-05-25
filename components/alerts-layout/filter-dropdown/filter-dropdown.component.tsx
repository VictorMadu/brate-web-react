import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import app, * as text from "../../../language/en/app";
import Dropdown from "../../../core/dropdown-container";
import * as styles from "./filter-dropdown.styles";
import Text from "../../../core/text";
import {
  AlertState,
  alertStateMgr,
} from "../../../use-case/alerts/state-manager";
import map from "lodash/map";
import { useSubscribe, useSubscribeWithTransform } from "../../../hooks";
import { DataFetching } from "../../../utils/status";

// TODO: Abstract this component and filter container dropdown in home layout

const dropItems = [
  [text.all, "all"],
  [text.triggered, "triggered"],
  [text.untriggered, "untriggered"],
] as [string, AlertState["filter"]][];

const FilterDropdown = () => {
  const [show, setShow] = useState(false);
  const filterType = useSubscribe(alertStateMgr, "filter");
  const isFetchSuccess = useSubscribeWithTransform(
    alertStateMgr,
    "dataFetching",
    (f) => f === DataFetching.SUCCESS
  );

  return (
    <div className={styles.container()}>
      <div
        className={styles.content()}
        onClick={() => {
          if (!isFetchSuccess) return;
          setShow((s) => !s);
        }}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          size="xs"
          className={styles.icon()}
        />
        <Text as="span" text={app.filter} />
      </div>
      <Dropdown
        position="top-full left-0"
        show={show}
        onActiveStart={() => setShow(true)}
        onActiveEnd={() => setShow(false)}
      >
        {map(dropItems, ([text, type]) => (
          <Dropdown.DropItem
            key={type}
            onSelect={() => alertStateMgr.setData("filter", type)}
            content={
              <Text
                as="p"
                text={text}
                padding="px-3 py-2"
                font={
                  "capitalize" + (filterType === type ? " text-pri-700" : "")
                }
              />
            }
          />
        ))}
      </Dropdown>
    </div>
  );
};

export default FilterDropdown;
