import { StateInverter } from "../../../../../use-case/currency-detail/actions/invert-state";

const stateInverter = new StateInverter();

export function useToggleBtn() {
  function handleToggle() {
    stateInverter.invert();
  }

  return handleToggle;
}
