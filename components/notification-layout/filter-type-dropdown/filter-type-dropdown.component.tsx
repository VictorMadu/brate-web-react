import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../../core/dropdown-container";
import Text from "../../../core/text";
import map from "lodash/map";
import {
  NotificationState,
  notificationStateMgr,
} from "../../../use-case/notification/state-manager";
import * as text from "../../../language/en/app";
import * as styles from "./filter-type-dropdown.styles";
import { useSubscribe, useSubscribeWithTransform } from "../../../hooks";
import { DataFetching } from "../../../utils/status";

const dropItems = [
  [text.all, undefined],
  [text.price_alerts, "P"],
  [text.trade, "T"],
  [text.fund, "F"],
] as [string, NotificationState["type"]][];

const FilterTypeDropdown = () => {
  // TODO: Same with Filter dropdown
  const [show, setShow] = useState(false);
  const filterType = useSubscribe(notificationStateMgr, "type");
  const isFetchSuccess = useSubscribeWithTransform(
    notificationStateMgr,
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
        <Text as="span" text={text.app.filter} />
      </div>
      <Dropdown
        position="top-full left-0"
        show={show}
        onActiveStart={() => setShow(true)}
        onActiveEnd={() => setShow(false)}
      >
        {map(dropItems, ([text, type]) => (
          <Dropdown.DropItem
            key={text}
            onSelect={() => notificationStateMgr.setData("type", type)}
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

export default FilterTypeDropdown;
