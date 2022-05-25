import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../../../core/dropdown-container";
import map from "lodash/map";
import * as styles from "./modal-currency-dropdown.styles";
import { useFocus, useSearch } from "../../../../hooks";
import { currencyStateMgr } from "../../../../use-case/currency/state-manager";
import { getValueOrDefault } from "../../../../utils/get-value-or-default";

interface ModalDropdownProps {
  activeSymbol: string;
  handleSelect: (currencySym: string) => any;
}

const ModalCurrencyDropdown = ({
  activeSymbol,
  handleSelect,
}: ModalDropdownProps) => {
  const [show, setShow] = useState(false);
  const { handleFocus, handleBlur } = useFocus(undefined, () => setValue(""));

  const [
    searchValue,
    handleSearchChange,
    searchedSymbols,
    setValue,
  ] = useSearch(currencyStateMgr);
  return (
    <div className={styles.container()}>
      <input
        className={styles.input(show)}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={getValueOrDefault(show, searchValue, "")}
        onChange={handleSearchChange}
        disabled={!show}
        placeholder={show ? "Search" : ""}
      />

      <button onClick={() => setShow((s) => !s)}>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="xs"
          className={styles.icon()}
        />
      </button>

      <Dropdown
        show={show}
        position="top-full right-0 mt-0.5"
        overflow="overflow-auto"
        onActiveStart={() => {
          setShow(true);
          handleFocus();
        }}
        onActiveEnd={() => {
          setShow(false);
          handleBlur();
        }}
      >
        {map(searchedSymbols, (symbol) => (
          <Dropdown.DropItem
            key={symbol}
            onSelect={() => handleSelect(symbol)}
            content={
              <Dropdown.Text
                text={symbol}
                font={getValueOrDefault(
                  activeSymbol === symbol,
                  "text-pri-600",
                  "hover:bg-neu-300"
                )}
              />
            }
          />
        ))}
      </Dropdown>
    </div>
  );
};

export default ModalCurrencyDropdown;
