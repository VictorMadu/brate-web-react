import { DropItemProps } from "./drop-item.interface";
import * as styles from "./drop-item.styles";

export const DropItem = (props: DropItemProps) => {
  return (
    <li
      className={styles.container(props)}
      onMouseDown={() => {
        if (!props.isDisabled) props.onSelect?.();
      }}
    >
      {props.content}
    </li>
  );
};
