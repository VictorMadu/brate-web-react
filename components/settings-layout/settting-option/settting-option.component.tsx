import React from "react";
import { useRouter } from "next/router";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "../../../core/text";
import * as styles from "./settting-option.styles";

interface SettingOptionProps {
  text: string;
  route: string;
}

const SettingOption = ({ text, route }: SettingOptionProps) => {
  const router = useRouter();
  return (
    <li
      className={styles.container()}
      onClick={() => {
        router.push(route);
      }}
    >
      <Text font={styles.text()} text={text} />
      <FontAwesomeIcon
        icon={faChevronRight}
        size="xs"
        className={styles.icon()}
      />
    </li>
  );
};

export default SettingOption;
