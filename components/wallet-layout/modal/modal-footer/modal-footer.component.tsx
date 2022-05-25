import React from "react";
import * as styles from "./modal-footer.styles";

interface ModalFooterProps {
  onCancel: () => any;
  onContinue: () => any;
}

const ModalFooter = ({ onCancel, onContinue }: ModalFooterProps) => {
  return (
    <div className={styles.container()}>
      <button className={styles.cancelBtn()} onClick={onCancel}>
        Cancel
      </button>
      <button className={styles.continueBtn()} onClick={onContinue}>
        Continue
      </button>
    </div>
  );
};

export default ModalFooter;
