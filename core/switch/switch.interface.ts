export interface IProps {
  onText: string;
  offText: string;
  onClick: (isOn: boolean) => void;
  isOn: boolean;
}
