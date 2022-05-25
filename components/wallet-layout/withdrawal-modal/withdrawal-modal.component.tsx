import React from "react";
import ModalRoot from "../../modal-root";
import map from "lodash/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./withdrawal-modal.styles";
import Dropdown from "../../../core/dropdown-container";
import { range } from "lodash";
import Text from "../../../core/text";

const WithdrawalModal = () => {
  return (
    <div className={styles.container()}>
      <div className={styles.content()}>
        <p className={styles.header()}>
          <span className={styles.currencyFullName()}>{"Nigeria Naria"}</span>
          <span className={styles.currencyShortName()}>{"(NGN)"}</span>
        </p>
        <div className={styles.dropContent()}>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="xs"
            className={styles.icon()}
          />
          <Text as="span" text={""} />
          <Dropdown
            show={true}
            position="top-full"
            overflow="overflow-auto"
            onActiveStart={() => {}}
            onActiveEnd={() => {}}
          >
            {map(range(20), (currency) => (
              <Dropdown.DropItem
                key={currency}
                onSelect={() => {}}
                content={<Dropdown.Text text={"USD"} font={"font-bold"} />}
              />
            ))}
          </Dropdown>
        </div>
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
            <label className={styles.inputLabel()}>Withdrawal Amount</label>
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
  );
};

export default WithdrawalModal;
