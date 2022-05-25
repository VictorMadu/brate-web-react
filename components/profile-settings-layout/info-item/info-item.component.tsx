import React from "react";
import InfoBtnsContainer from "./info-btns-container";
import InfoLabel from "./info-label";
import InfoValueContent from "./info-value-content";
import * as styles from "./info-item.styles";
import EditBtn from "./edit-btn";
import CancelBtn from "./cancel-btn";
import SaveBtn from "./save-btn";
import { DataKey } from "./interfaces";

interface ChildrenProps<T extends DataKey> {
  dataKey: T;
}

interface InfoItemProps<T extends DataKey> {
  dataKey: T;
  Label: (props: ChildrenProps<T>) => JSX.Element;
  ValueContent: (props: ChildrenProps<T>) => JSX.Element;
  ActionBtnsContainer: (props: ChildrenProps<T>) => JSX.Element;
}

const InfoItem = <T extends DataKey>({
  dataKey,
  Label,
  ValueContent,
  ActionBtnsContainer,
}: InfoItemProps<T>) => {
  return (
    <li className={styles.container()}>
      <Label dataKey={dataKey} />
      <ValueContent dataKey={dataKey} />
      <ActionBtnsContainer dataKey={dataKey} />
    </li>
  );
};

InfoItem.Label = InfoLabel;
InfoItem.ActionBtnsContainer = InfoBtnsContainer;
InfoItem.ValueContent = InfoValueContent;
InfoItem.EditBtn = EditBtn;
InfoItem.CancelBtn = CancelBtn;
InfoItem.SaveBtn = SaveBtn;

export default InfoItem;
