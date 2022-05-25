import { Bg } from "./drop-item.styles";

export interface DropItemProps {
  content: JSX.Element;
  bg?: Bg;
  isDisabled?: boolean;
  onSelect?: () => any;
}
