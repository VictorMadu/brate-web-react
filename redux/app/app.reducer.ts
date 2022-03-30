import { IState } from "./interface/state";
import IAction from "./interface/actions";
import * as types from "./app.types";

const INITIAL_STATE: IState = {
  theme: "light",
};

export const appReducer = (
  state = INITIAL_STATE,
  action: ReturnType<IAction>
): IState => {
  switch (action.type) {
    case types.CHANGE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default appReducer;
