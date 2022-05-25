import app from "../../../language/en/app";
import BtnAction from "../action-btn/action-btn.component";
import * as styles from "./auth-btns.styles";
import { useAuthBtns } from "./hook";

const AuthBtns = () => {
  const { handleSignUp, handleLogIn } = useAuthBtns();
  return (
    <>
      <BtnAction
        font={styles.font()}
        text={app.settings.list.sign_in}
        onClick={handleLogIn}
      />
      <BtnAction
        font={styles.font()}
        text={app.settings.list.sign_up}
        onClick={handleSignUp}
      />
    </>
  );
};

export default AuthBtns;
