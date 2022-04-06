import React from "react";
import map from "lodash/map";
import range from "lodash/range";
import {
  faArrowDown,
  faHistory,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import app from "../../../language/en/app";
import * as styles from "./buy-layout.styles";
import Layout from "../../layout";

const trade = app.trade;

const BuyLayout = () => {
  return (
    <div className={styles.container()}>
      <div className={styles.header()}>
        <div className={styles.currencyTradeSelectionContainer()}>
          {/* TODO: On search input focus and blur. Toggle hidden and show headerBtnsContainer */}
          <div className={styles.headerBtnsContainer()}>
            <button className={styles.headerBtn()}>{trade.wallet}</button>
            <button className={styles.headerBtn()}>{trade.buy}</button>
          </div>
          <div className={styles.searchContainer()}>
            <input
              className={styles.searchInput()}
              type="text"
              value={""}
              onChange={() => {}}
              onFocus={() => console.log("Input has focus")}
              onBlur={() => console.log("Input has blur")}
            />
            <button className={styles.searchBtn()}>
              <FontAwesomeIcon icon={faSearch} size="sm" className={""} />
            </button>
          </div>
        </div>
        <div className={styles.currencyListContainer()}>
          <div className={styles.currencyList()}>
            {map(range(0, 30), (id) => (
              <button key={id} className={styles.currency()}>
                NGN
              </button>
            ))}
          </div>
          <button className={styles.dropDownBtn()}>
            <FontAwesomeIcon icon={faArrowDown} size="sm" className={""} />
          </button>
        </div>
      </div>
      <div className={styles.body()}>
        <div className={styles.exchangersContainer()}>
          <div className={styles.exchangerHeader()}>
            <div className={styles.nameAndRateContainerHead()}>
              <div className={styles.nameHead()}>Name</div>
              <div className={styles.rateHead()}>Rate</div>
            </div>

            <div className={styles.availableHead()}>Available</div>
            <div className={styles.buyBtnHead()}>{trade.action}</div>
          </div>

          {map(range(0, 30), (id) => (
            <div key={id} className={styles.exchangerContent()}>
              <div className={styles.nameAndRateContainer()}>
                <div className={styles.name()}>{"Victor Madu"}</div>
                <div className={styles.rate()}>{"560.02"}</div>
              </div>
              <div className={styles.available()}>{"500,000 NGN"}</div>
              <div className={styles.buyBtnContainer()}>
                <button className={styles.buyBtn()}>{trade.buy}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyLayout;
