import React from "react";
import map from "lodash/map";
import app, * as text from "../../../language/en/app";
import Lists from "../../../core/lists";
import Text from "../../../core/text";
import Dropdown from "../../../core/dropdown-container";
import SettingDropContainer from "../../../core/settings-drop-container";
import { useFocus } from "../../../hooks";

const appLng = app.settings.notification.removal_time;

const timeTextAndSeconds = [
  [appLng.one_hr, 1 * 60 * 60],
  [appLng.three_hr, 3 * 60 * 60],
  [appLng.six_hr, 6 * 60 * 60],
  [appLng.one_day, 1 * 24 * 60 * 60],
  [appLng.three_day, 2 * 24 * 60 * 60],
  [appLng.one_wk, 7 * 24 * 60 * 60],
  [appLng.one_mth, 30 * 24 * 60 * 60],
] as [string, number][];

interface ListItemProps {
  text: string;
  onSelect: (time: number, cb: (isSuccess: boolean) => any) => any;
}

const ListItem = ({ text, onSelect }: ListItemProps) => {
  const { hasFocus, handleFocus, handleBlur } = useFocus();
  return (
    <Lists.Item type={Lists.Item.Types.BORDERED_AND_CONTENT_SPACED_BTW}>
      <Text text={text} />
      <SettingDropContainer>
        <SettingDropContainer.Btn
          text={"Time"}
          onClick={() => {
            if (hasFocus) handleBlur();
            else handleFocus();
          }}
          iconPos="left"
        />
        <Dropdown
          show={hasFocus}
          position="top-full"
          overflow="overflow-auto"
          onActiveStart={handleFocus}
          onActiveEnd={handleBlur}
        >
          {map(timeTextAndSeconds, ([text, seconds]) => (
            <Dropdown.DropItem
              key={text}
              onSelect={() =>
                onSelect(seconds, (isSuccess) => {
                  if (isSuccess) {
                    alert("Successful");
                  } else {
                    alert("Unsuccessful");
                  }
                })
              }
              content={<Dropdown.Text text={text} font={"hover:bg-neu-300"} />}
            />
          ))}
        </Dropdown>
      </SettingDropContainer>
    </Lists.Item>
  );
};

export default ListItem;
