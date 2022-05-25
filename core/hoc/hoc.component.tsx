import React from "react";
import { FuncParams } from "ts-util-types";

type StateToPropsMapper = (props: any) => Record<string, any>;

export const connect = <T extends StateToPropsMapper>(
  stateToPropsMapper: T
) => {
  return (Component: (props: ComponentProps<T>) => JSX.Element) => {
    return function WrappedComponent(props: FirstObjParam<T>) {
      const allProps = {
        ...stateToPropsMapper(props),
      } as ComponentProps<T>;

      return <Component {...allProps}></Component>;
    };
  };
};

type Connector = (props: (props: any) => JSX.Element) => any;

export type ConnectedProps<T extends Connector> = FirstParam<FirstParam<T>>;

type ComponentProps<T extends (arg: any) => any> = ReturnType<T> extends infer O
  ? { [Q in keyof O]: O[Q] }
  : never;

export type FirstObjParam<T extends (props: any) => any> = SetDefault<
  {},
  FirstParam<T>,
  {}
>;

type FirstParam<T extends (props: any) => any> = FuncParams<T>[0];

type SetDefault<
  Type extends any,
  Obj extends any,
  Default extends any
> = Obj extends Type ? Obj : Default;
