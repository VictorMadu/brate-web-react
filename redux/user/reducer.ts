import { UserState } from "./interfaces/state.interfaces";

const INITIAL_STATE: UserState = {
  token: undefined,
};

export const userReducer = (state = INITIAL_STATE, action: any): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
