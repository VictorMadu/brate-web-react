import { ITheme } from "./state";
import { ICHANGE_THEME } from "./types";

export type IChangeTheme = (
  theme: ITheme
) => {
  type: ICHANGE_THEME;
  payload: ITheme;
};

type IActions = IChangeTheme;

export default IActions;
