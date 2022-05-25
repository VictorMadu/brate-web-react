export const getValueOrDefault = (
  isMatch: boolean,
  value: any,
  defaultValue: any
) => (isMatch ? value : defaultValue);
