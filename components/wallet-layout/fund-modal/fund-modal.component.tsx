import React from "react";
import ModalRoot from "../../modal-root";
import map from "lodash/map";
import * as styles from "./fund-modal.styles";

const FundModal = () => {
  return (
    <ModalRoot>
      <div className={styles.container()}>
        <div className={styles.content()}>
          <p className={styles.header()}>
            <span className={styles.currencyFullName()}>{"Nigeria Naria"}</span>
            <span className={styles.currencyShortName()}>{"(NGN)"}</span>
          </p>
          <div className={styles.formContainer()}>
            <div className={styles.inputGroup()}>
              <label className={styles.inputLabel()}>Available</label>
              <input
                className={styles.UneditableInput()}
                type={"text"}
                value={"200,000"}
                onChange={() => {}}
              />
            </div>
            <div className={styles.inputGroup()}>
              <label className={styles.inputLabel()}>Fund Amount</label>
              <input
                className={styles.EditableInput()}
                type={"text"}
                value={"30,000"}
                onChange={() => {}}
              />
            </div>
            <div className={styles.inputGroup()}>
              <label className={styles.inputLabel()}>Total</label>
              <input
                className={styles.UneditableInput()}
                type={"text"}
                value={"230,000"}
                onChange={() => {}}
              />
            </div>
          </div>
          <div className={styles.footer()}>
            <button className={styles.cancelBtn()}>Cancel</button>
            <button className={styles.continueBtn()}>Continue</button>
          </div>
        </div>
      </div>
    </ModalRoot>
  );
};

export default FundModal;
