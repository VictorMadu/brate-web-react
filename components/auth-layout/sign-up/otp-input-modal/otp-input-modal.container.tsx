import React from "react";

export interface WrappedComponentProps {
  show: boolean;
  email: string;
  handleShowChange: (show: boolean) => any;
}

export interface ComponentProps {
  handleShowChange: (show: boolean) => any;
  email: string;
}

export const OtpModalContainer = (
  Component: (props: ComponentProps) => JSX.Element
) => {
  return function WrappedComponent({
    show,
    email,
    handleShowChange,
  }: WrappedComponentProps) {
    return show ? (
      <Component email={email} handleShowChange={handleShowChange} />
    ) : null;
  };
};
