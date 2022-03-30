import { CHANGE_THEME } from "./app.types";
import { IChangeTheme } from "./interface/actions";

export const changeTheme: IChangeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme,
});
