import React, { useState } from "react";
import Switch from "../../core/switch";
import Layout from "../layout";
import app from "../../language/en/app";
import * as styles from "./currency-detail-layout.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const CurrencyDetailLayout = () => {
  const [switchIsOn, setSwitchIsOn] = useState(true);
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <div className={styles.switchContainer()}>
          <Switch
            onText={app.market_type.parallel}
            offText={app.market_type.black}
            onClick={(isOn) => {
              setSwitchIsOn(isOn);
            }}
            isOn={switchIsOn}
          />
        </div>
        <div className={styles.currencyPairContainer()}>
          <p className={styles.currency(true)} data-short={"(NGN)"}>
            {"Nigerian Naira"}
          </p>

          <p className={styles.rateContainer()}>
            <span className={styles.rate()}>{"450.6332"}</span>
            <sub className={styles.rateChange()}>{"+1.30%"}</sub>
          </p>
          <p className={styles.currency(false)} data-short={"(USD)"}>
            {"United State Dollars"}
          </p>
        </div>
        <div className={styles.btnGroup()}>
          <button className={styles.btn()}>Convert</button>
          <button className={styles.btn()}>Set Alert</button>
          <button className={styles.btn()}>Trade</button>
        </div>
        <div className={styles.currencyContainer()}>
          <div className={styles.currencyContent()}>
            <label className={styles.currencyAbbrevLabel()}>NGN</label>
            <input
              className={styles.currencyInput()}
              type={"text"}
              value={"123.332"}
              onChange={() => {}}
            />
          </div>
          <div className={styles.toggleBtnContainer()}>
            <button className={styles.toggleBtn()}>
              <FontAwesomeIcon
                icon={faArrowUp}
                size="sm"
                className={styles.icon()}
              />
              <FontAwesomeIcon
                icon={faArrowDown}
                size="sm"
                className={styles.icon()}
              />
            </button>
          </div>
          <div className={styles.currencyContent()}>
            {/* Use uuid to generate id and htmlFor */}
            <label htmlFor="base" className={styles.currencyAbbrevLabel()}>
              USD
            </label>
            <input
              id="base"
              className={styles.currencyInput()}
              type={"text"}
              value={"18"}
              onChange={() => {}}
            />
          </div>
          <div className={styles.actionBtnContainer()}>
            <button className={styles.actionBtn()}>{app.trade.copy}</button>
          </div>
        </div>
        <div className={styles.currencyContainer()}>
          <div className={styles.currencyContent()}>
            {/* Use uuid to generate id and htmlFor */}
            <label htmlFor="base" className={styles.currencyAbbrevLabel()}>
              {app.trade.trigger_at}
            </label>
            <input
              id="base"
              className={styles.currencyInput()}
              type={"text"}
              value={"18"}
              onChange={() => {}}
            />
          </div>
          <div className={styles.actionBtnContainer()}>
            <button className={styles.actionBtn()}>{app.trade.set}</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CurrencyDetailLayout;
