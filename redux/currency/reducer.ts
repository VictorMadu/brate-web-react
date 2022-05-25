import { DEFAULT_BASE_CURRENCY } from "../../constants/defaults";
import { CurrencyState } from "./interfaces/state.interfaces";
import { Actions } from "./actions";
import { types } from "./types";

const INITIAL_STATE: CurrencyState = {
  base: DEFAULT_BASE_CURRENCY,
  list: {},
  error: undefined,
};

export const currencyReducer = (
  state = INITIAL_STATE,
  action: Actions
): CurrencyState => {
  switch (action.type) {
    case types.SET_BASE:
      return { ...state, base: action.payload };
    case types.SET_LIST:
      return { ...state, list: action.payload, error: undefined };
    case types.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default currencyReducer;
