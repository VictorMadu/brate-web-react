import { createSelector } from "reselect";
import { RootState } from "../redux.interface";

const selectApp = (state: RootState) => state.app;

export const selectTheme = createSelector([selectApp], (app) => app.theme);
