import { states } from "./_utils/state-manager/base-manager";
import forEach  from "lodash/map";


export const loadStoredState = () => {
  console.log(states);
  return forEach(states, (s) => s());
};
