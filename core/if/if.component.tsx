import { IProps } from "./if.interface";

const If = (props: IProps) => {
  return props.cond ? props.Component : props.Else ?? null;
};

export default If;
