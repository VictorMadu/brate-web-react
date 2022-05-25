import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";
import * as styles from "./page-back-btn.styles";

interface PageBackBtnProps {
  route: string;
}

const PageBackBtn = ({ route }: PageBackBtnProps) => {
  const router = useRouter();
  return (
    <div className={styles.container()}>
      <button className={styles.btn()} onClick={() => router.push(route)}>
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </button>
    </div>
  );
};

export default PageBackBtn;
