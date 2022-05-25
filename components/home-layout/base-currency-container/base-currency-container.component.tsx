import * as styles from "./base-currency-container.styles";
import app from "../../../language/en/app";
import { keys, map } from "lodash";
import Dropdown from "../../../core/dropdown-container";
import Text from "../../../core/text";
import { AppDispatch, RootState } from "../../../redux/redux.interface";
import { useFocus, useSearch } from "../../../hooks";
import { getValueOrDefault } from "../../../utils/get-value-or-default";

import { currencyStateMgr } from "../../../use-case/currency/state-manager";
import {
  RateState,
  RateStateManager,
  rateStateMgr,
} from "../../../use-case/rate/state-manager";
import { connect, ConnectedProps } from "../../../core/hoc";
import { CurrencyDataFetcher } from "../../../use-case/currency/data-fetcher";
import { useEffect } from "react";

interface BaseProps {
  type: keyof RateState;
  rateStateMgr: RateStateManager;
}

type BaseContainerProps = ConnectedProps<typeof connector>;

const inputId = "__inputId";

export const BaseContainer = ({
  currencyStateMgr,
  rateStateMgr,
  fetchCurrencyData,
}: BaseContainerProps) => {
  const setBase = (base: string) => rateStateMgr.setData("base", base);
  const base = rateStateMgr.getData("base");

  const [searchValue, handleSearchChange, searchList, setValue] = useSearch(
    currencyStateMgr
  );
  const { hasFocus, handleFocus, handleBlur } = useFocus(undefined, () =>
    setValue("")
  );

  useEffect(() => {
    fetchCurrencyData();
  }, [fetchCurrencyData]);

  return (
    <div className={styles.container()}>
      <Text
        as="label"
        htmlFor={inputId}
        text={app.base}
        padding="px-2 py-1"
        font="bg-neu-400"
        round="rounded-l"
      />
      <div className={styles.inputContainer()}>
        <input
          id={inputId}
          className={styles.input()}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={getValueOrDefault(hasFocus, searchValue, "")}
          onChange={handleSearchChange}
          disabled={false}
        />
        <Dropdown
          show={hasFocus}
          position="top-full"
          overflow="overflow-auto"
          onActiveStart={handleFocus}
          onActiveEnd={handleBlur}
        >
          {map(searchList, (currency) => (
            <Dropdown.DropItem
              key={currency}
              onSelect={() => setBase(currency)}
              content={
                <Dropdown.Text
                  text={currency}
                  font={getValueOrDefault(
                    currency === base,
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

const mapStateToProps = () => ({
  currencyStateMgr: currencyStateMgr,
  rateStateMgr: rateStateMgr,
  fetchCurrencyData: () => new CurrencyDataFetcher().fetchCurrencyList(),
});

const connector = connect(mapStateToProps);

export default connector(BaseContainer);
