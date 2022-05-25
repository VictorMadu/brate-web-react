import If from "../if";
import { LayoutContainerProps } from "./layout-container.interface";
import * as styles from "./layout-container.styles";

export const LayoutContainer = ({
  as,
  Layout,
  NavBar,
}: LayoutContainerProps) => {
  const Component = as || "div";

  return (
    <Component className={styles.container()}>
      <If
        deps={[NavBar]}
        Component={({ deps: [NavBar] }) => (
          <div className={styles.navContainer()}>
            <NavBar />
          </div>
        )}
      />

      <div className={styles.layoutContent()}>
        <Layout />
      </div>
    </Component>
  );
};
