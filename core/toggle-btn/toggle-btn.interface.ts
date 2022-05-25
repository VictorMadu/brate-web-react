export interface IProps {
  onText: string;
  offText: string;
  onToggle: (isOn: boolean) => void;
  startValue?: boolean;
}
