import React from "react";
import app from "../../language/en/app";
import ChangePwdModal from "./change-pwd-modal";
import PageBackBtn from "../../core/page-back-btn";
import ProfileInfoItem from "./profile-info-item";
import PwdInfoItem from "./pwd-profile-info-item";
import * as styles from "./profile-settings-layout.styles";

const appLang = app.settings.profile;

// TODO: All text should be passed to the Text Component. For support of multiple language. Every lanugage text should implement a given interface (or maybe something better) with text keys(written in English) which the object key will be used to obtain the real text. For dynmaic text eg: text coming from the server, there should be an indication that we should use like that. Check the state manager for it

const ProfileSettingsLayout = () => {
  return (
    <div className={styles.container()}>
      <PageBackBtn route="/settings" />
      {/* TODO: Show loader when profileInfo is being changed or maybe just like. Rather show a toaster when successfully or not. So that user can focus on other things */}
      <ul className={styles.list()}>
        <ProfileInfoItem userDataKey="name" />
        <ProfileInfoItem userDataKey="email" />
        <ProfileInfoItem userDataKey="phone" />
        {/* TODO: Add the changing and forgot password feature  */}
        <PwdInfoItem />
      </ul>
      <ChangePwdModal />
    </div>
  );
};

export default ProfileSettingsLayout;
