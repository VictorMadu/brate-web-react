import React from "react";
import If from "../../../../core/if";
import InfoItem from "../../info-item";
import { DataKey } from "../interfaces";
import { useActionBtnsContainer } from "./hook";

interface ActionBtnsContainerProps {
  dataKey: DataKey;
}

const ActionBtnsContainer = ({ dataKey }: ActionBtnsContainerProps) => {
  const {
    isEditable,
    makeEditable,
    makeUnEditable,
    saveNewValue,
  } = useActionBtnsContainer(dataKey);

  return (
    <InfoItem.ActionBtnsContainer>
      <If
        deps={[isEditable]}
        Component={() => (
          <div>
            <InfoItem.CancelBtn handleClick={makeUnEditable} />
            <InfoItem.SaveBtn handleClick={saveNewValue} />
          </div>
        )}
        Else={() => <InfoItem.EditBtn handleClick={makeEditable} />}
      />
    </InfoItem.ActionBtnsContainer>
  );
};

export default ActionBtnsContainer;
