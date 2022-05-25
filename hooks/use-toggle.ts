import { useState } from "react";

export const useToggle = <V1 extends any, V2 extends any>(
  value1: V1,
  value2: V2
) => {
  const [value, setValue] = useState<V1 | V2>(value1);
  const toggleValue = () => setValue((v) => (v === value1 ? value1 : value2));

  return [value, toggleValue] as [V1 | V2, () => void];
};
