import { getDataValue, setDataValue } from "./data-value-action";

type UserDataKey = "email" | "name" | "phone";

export function handleValueChange(key: UserDataKey, value: string) {
  const isEditable = getDataValue(key, "isValueEditable");
  if (isEditable) setDataValue(key, "value", value);
}
