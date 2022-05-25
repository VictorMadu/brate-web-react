import React from "react";
import app, * as text from "../../../language/en/app";
import ActionBtn from "../action-btn";
import { useLogoutBtn } from "./hook";
import * as styles from "./logout-btn.styles";

const LogoutBtn = () => {
  const { handleLogout } = useLogoutBtn();
  return (
    <ActionBtn
      font={styles.font()}
      text={app.settings.list.logout}
      onClick={handleLogout}
    />
  );
};

export default LogoutBtn;
