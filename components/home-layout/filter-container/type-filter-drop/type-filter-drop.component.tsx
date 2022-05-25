import React from "react";
import Dropdown from "../../../../core/dropdown-container";
import app from "../../../../language/en/app";
import { rateStateMgr } from "../../../../use-case/rate/state-manager";
import { getValueOrDefault } from "../../../../utils/get-value-or-default";
import { map } from "lodash";
import { authStateMgr } from "../../../../use-case/auth/state-manager";
import { useSubscribe, useSubscribeWithTransform } from "../../../../hooks";
import { isAuthTransform } from "../../../../use-case/auth/transformers";

interface TypeFilterDropdownProps {
  show: boolean;
  onActiveStart: () => any;
  onActiveEnd: () => any;
}

type Type = "all" | "favourite" | "unfavourite";

const texts = [
  ["all", app.type_type.all],
  ["favourite", app.type_type.favourite],
  ["unfavourite", app.type_type.not_favourite],
] as [Type, string][];

export const TypeFilterDropdown = (props: TypeFilterDropdownProps) => {
  const filterType: Type = useSubscribe(rateStateMgr, "filter");
  const isAuth = useSubscribeWithTransform(
    authStateMgr,
    "token",
    isAuthTransform
  );

  return (
    <Dropdown
      position="top-2 right-full -ml-5"
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
                type === filterType,
                "text-pri-600",
                "hover:bg-neu-300"
              )}
            />
          }
          onSelect={() => rateStateMgr.setData("filter", type)}
          isDisabled={type !== "all" && !isAuth}
        />
      ))}
    </Dropdown>
  );
};

export default TypeFilterDropdown;
