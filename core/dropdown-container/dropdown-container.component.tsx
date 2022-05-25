import React, { ComponentPropsWithoutRef, ElementType } from "react";
import BaseDropdown from "../dropdown";
import Text from "../text";

interface DropdownProps {
  children: JSX.Element | JSX.Element[];
  position: string;
  overflow?: string;
  show: boolean;
  onActiveStart: () => any;
  onActiveEnd: () => any;
}

const Dropdown = ({
  position,
  children,
  overflow,
  show,
  onActiveStart,
  onActiveEnd,
}: DropdownProps) => {
  return (
    <BaseDropdown
      show={show}
      overflow={overflow ?? ""}
      height={"max-h-[10rem]"}
      position={position}
      padding=""
      boxShadow={BaseDropdown.boxShadow.MEDIUM}
      zIndex={"z-10"}
      innerProps={{
        onMouseOver: onActiveStart,
        onMouseOut: onActiveEnd,
      }}
    >
      {children}
    </BaseDropdown>
  );
};

interface DropItemProps {
  content: JSX.Element;
  onSelect?: () => any;
  isDisabled?: boolean;
}

const DropItem = ({ content, onSelect, isDisabled }: DropItemProps) => {
  return (
    <BaseDropdown.DropItem
      bg={BaseDropdown.bg.PLAIN_WITH_INTERACTION}
      content={content}
      onSelect={onSelect}
      isDisabled={isDisabled}
    />
  );
};

interface DropTextProps {
  text: string | number;
  font?: string;
  onActiveStart?: () => any;
  onActiveEnd?: () => any;
}

const DropText = ({
  text,
  font,
  onActiveStart,
  onActiveEnd,
}: DropTextProps) => {
  return (
    <Text
      as="div"
      text={text}
      padding="px-5 py-1.5"
      font={font}
      onMouseOver={onActiveStart}
      onMouseOut={onActiveEnd}
    />
  );
};

Dropdown.DropItem = DropItem;
Dropdown.Text = DropText;

export default Dropdown;
