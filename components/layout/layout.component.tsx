import React from "react";
import If from "../../core/if";
import Nav from "./nav";
import { IProps } from "./layout.interface";
import * as styles from "./layout.styles";

const Layout = ({ showNav = true, children }: IProps) => {
  return (
    <div className={styles.container()}>
      <If
        deps={[showNav]}
        Component={() => (
          <div className={styles.navContainer()}>
            <Nav />
          </div>
        )}
      />
      <div className={styles.childrenContainer()}>{children}</div>
    </div>
  );
};

export default Layout;
