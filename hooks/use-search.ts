import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { filter, keys } from "lodash";
import { CurrencyStateManager } from "../use-case/currency/state-manager";
import { CurrencyDataFetcher } from "../use-case/currency/data-fetcher";

// TODO: Set the cursor to correct position
export const useSearch = (currencyStateMgr: CurrencyStateManager) => {
  const currencySymbols = keys(currencyStateMgr.getData("list"));
  const [searchValue, setSearchValue] = useState("");

  // TODO: Instead of obtaining the symbols, tell action you need it. If it is not there, it will be loaded
  useEffect(() => {
    if (currencySymbols.length > 0) return;
    new CurrencyDataFetcher().fetchCurrencyList();
  }, [currencySymbols]);

  const handleChange = handleChangeFnCreator(setSearchValue);
  const searchedSymbols = useFilteredList(currencySymbols, searchValue);
  return [searchValue, handleChange, searchedSymbols, setSearchValue] as [
    typeof searchValue,
    typeof handleChange,
    typeof searchedSymbols,
    typeof setSearchValue
  ];
};

//  ============================= Utility Hooks ===================
const useFilteredList = (collection: string[], searchValue: string) => {
  return useMemo(() => filterList(collection, searchValue), [
    collection,
    searchValue,
  ]);
};

// ========================= utility functions ====================

const filterList = (collection: string[], searchValue: string) => {
  const searchRegExp = new RegExp(
    searchValue.replace(/[\\[.+*?(){|^$]/g, "\\$&"),
    "i"
  );
  return filter(collection, (item) => searchRegExp.test(item));
};

const handleChangeFnCreator = (dispatch: Dispatch<SetStateAction<string>>) => {
  return (e: ChangeEvent<HTMLInputElement>) => dispatch(e.target.value);
};
