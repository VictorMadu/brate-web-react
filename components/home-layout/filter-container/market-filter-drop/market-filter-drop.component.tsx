import React from "react";
import Dropdown from "../../../../core/dropdown-container";
import app from "../../../../language/en/app";
import { rateStateMgr } from "../../../../use-case/rate/state-manager";
import { map } from "lodash";
import { getValueOrDefault } from "../../../../utils/get-value-or-default";
import { useSubscribe } from "../../../../hooks";

interface MarketFilterDropdownProps {
  show: boolean;
  onActiveStart: () => any;
  onActiveEnd: () => any;
}

const texts = [
  ["parallel", app.market_type.parallel],
  ["black", app.market_type.black],
] as ["parallel" | "black", string][];

export const MarketFilterDropdown = (props: MarketFilterDropdownProps) => {
  const market = useSubscribe(rateStateMgr, "market");

  return (
    <Dropdown
      position="top-2 right-full -ml-2"
      show={props.show}
      onActiveStart={props.onActiveStart}
      onActiveEnd={props.onActiveEnd}
    >
      {map(texts, ([type, text]) => (
        <Dropdown.DropItem
          key={type}
          content={
            <Dropdown.Text
              text={text}
              font={getValueOrDefault(
                type === market,
                "text-pri-600",
                "hover:bg-neu-300"
              )}
            />
          }
          onSelect={() => rateStateMgr.setData("market", type)}
        />
      ))}
    </Dropdown>
  );
};

export default MarketFilterDropdown;
