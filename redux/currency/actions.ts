import { CurrencyState } from "./interfaces/state.interfaces";
import { types } from "./types";

export type SetBase = ReturnType<typeof setBase>;
export type SetList = ReturnType<typeof setList>;
export type SetError = ReturnType<typeof setError>;

export type Actions = SetBase | SetList | SetError;

// ========================== Implementations =======================
export const setBase = (base: string) => ({
  type: types.SET_BASE,
  payload: base,
});

export const setList = (list: CurrencyState["list"]) => ({
  type: types.SET_LIST,
  payload: list,
});

export const setError = (error: number) => ({
  type: types.SET_ERROR,
  payload: error,
});
