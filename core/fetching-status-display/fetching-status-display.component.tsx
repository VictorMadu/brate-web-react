import React from "react";
import { BaseStateManager } from "../../use-case/_utils/state-manager/base-manager";
import { DataFetchingState } from "../../use-case/_utils/state-manager/interfaces/states";
import If from "../if";
import Text from "../text";
import { useFetchingStatusDisplay } from "./hook";

interface FetchingStatusDisplayProps {
  stateMgr: BaseStateManager<DataFetchingState>;
}

const FetchingStatusDisplay = ({ stateMgr }: FetchingStatusDisplayProps) => {
  const text = useFetchingStatusDisplay(stateMgr);
  return (
    <If
      deps={[text]}
      Component={({ deps: [text] }) => (
        <Text as="div" text={text} margin="mx-auto" />
      )}
    />
  );
};

export default FetchingStatusDisplay;
