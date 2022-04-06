import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalRoot from "../../../modal-root";
import map from "lodash/map";
import * as styles from "./action-modal.styles";
import * as text from "../../../../language/en/app";

const ActionModal = () => {
  return (
    <ModalRoot>
      <div className={styles.container()}>
        <div className={styles.content()}>
          <p className={styles.header()}>{"NGN/USD"}</p>
          <div className={styles.formContainer()}>
            <div className={styles.dropdownGroup()}>
              <div>
                <div className={styles.dropdownTitleContainer()}>
                  <p className={styles.title()}>{text.base}</p>
                  <p className={styles.helper()}>{text.you_give}</p>
                </div>
                <div className={styles.dropdownContainer()}>
                  <button className={styles.dropdownBtn()}>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="xs"
                      className={styles.dropdownIcon()}
                    />
                  </button>
                  <input type="text" className={styles.dropInput()} />
                  <div className={styles.dropdownContent()}>
                    <ul className={styles.dropList()}>
                      <li className={styles.dropItem()}>{text.all}</li>
                      <li className={styles.dropItem()}>{text.price_alerts}</li>
                      <li className={styles.dropItem()}>{text.trade}</li>
                      <li className={styles.dropItem()}>{text.fund}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.dropdownTitleContainer()}>
                  <p className={styles.title()}>{text.quota}</p>
                  <p className={styles.helper()}>{text.you_receive}</p>
                </div>
                <div className={styles.dropdownContainer()}>
                  <button className={styles.dropdownBtn()}>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="xs"
                      className={styles.dropdownIcon()}
                    />
                  </button>
                  <input type="text" className={styles.dropInput()} />
                  <div className={styles.dropdownContent()}>
                    <ul className={styles.dropList()}>
                      <li className={styles.dropItem()}>{text.all}</li>
                      <li className={styles.dropItem()}>{text.price_alerts}</li>
                      <li className={styles.dropItem()}>{text.trade}</li>
                      <li className={styles.dropItem()}>{text.fund}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputGroup()}>
              <label className={styles.inputLabel()}>{text.your_rate}</label>
              <input
                className={styles.EditableInput()}
                type={"text"}
                value={"30,000"}
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

export default ActionModal;
