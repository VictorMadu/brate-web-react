import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../../../core/dropdown-container";
import { useFocus } from "../../../../hooks";
import map from "lodash/map";
import { getValueOrDefault } from "../../../../utils/get-value-or-default";
import * as styles from "./currency-dropdown.styles";

interface CurrencyDropdownProps {
  title: string;
  placeholder: string;
  currencySymbols: string[];
  currencySymbolToDisplay: string;
  onSelectNewCurrencySybmol: (currencySymbol: string) => any;
  dropIconPos: "left" | "right";
}

const CurrencyDropdown = ({
  title,
  placeholder,
  dropIconPos,
  currencySymbols,
  currencySymbolToDisplay,
  onSelectNewCurrencySybmol,
}: CurrencyDropdownProps) => {
  const { handleFocus, handleBlur, hasFocus } = useFocus();

  return (
    <div className={styles.container()}>
      <div className={styles.headTextContainer()}>
        <p className={styles.title()}>{title}</p>
        <p className={styles.helper()}>{placeholder}</p>
      </div>
      <div className={styles.dropdownContainer()}>
        <button className={styles.iconBtn(dropIconPos)} onClick={handleFocus}>
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </button>
        <input
          type="text"
          className={styles.input(dropIconPos)}
          value={currencySymbolToDisplay}
        />
        <Dropdown
          show={hasFocus}
          position={
            "top-full mt-0.5 " + dropIconPos === "left" ? "left-0" : "right-0"
          }
          overflow="overflow-auto"
          onActiveStart={() => {
            handleFocus();
          }}
          onActiveEnd={() => {
            handleBlur();
          }}
        >
          {map(currencySymbols, (symbol) => (
            <Dropdown.DropItem
              key={symbol}
              onSelect={() => onSelectNewCurrencySybmol(symbol)}
              content={
                <Dropdown.Text
                  text={symbol}
                  font={getValueOrDefault(
                    currencySymbolToDisplay === symbol,
                    "text-pri-600",
                    "hover:bg-neu-300"
                  )}
                />
              }
            />
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
