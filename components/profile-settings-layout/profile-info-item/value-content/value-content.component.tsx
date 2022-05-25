import React from "react";
import InfoItem from "../../info-item";
import { DataKey } from "../interfaces";
import { useValueContent } from "./hooks";

interface ValueContentProps {
  dataKey: DataKey;
}

const ValueContent = ({ dataKey }: ValueContentProps) => {
  const { isEditable, value, handleValueChange } = useValueContent(dataKey);

  return (
    <InfoItem.ValueContent
      value={value}
      editable={isEditable}
      handleValueChange={handleValueChange}
    />
  );
};

export default ValueContent;
