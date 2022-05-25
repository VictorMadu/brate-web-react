import { Actions } from "./actions";
import { RateState } from "./interfaces/state.interfaces";
import { types } from "./types";

const INITIAL_STATE: RateState = {
  parallelRates: [],
  parallelError: undefined,
  blackRates: [],
  blackError: undefined,
};

export const rateReducer = (
  state = INITIAL_STATE,
  action: Actions
): RateState => {
  switch (action.type) {
    case types.SET_PARALLEL_RATES:
      return { ...state, parallelRates: action.payload };
    case types.SET_BLACK_RATES:
      return { ...state, blackRates: action.payload };
    case types.SET_PARALLEL_ERROR:
      return { ...state, parallelError: action.payload };
    case types.SET_BLACK_ERROR:
      return { ...state, blackError: action.payload };
    default:
      return state;
  }
};

export default rateReducer;
