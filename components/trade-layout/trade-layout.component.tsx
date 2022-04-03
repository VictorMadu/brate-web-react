import React from "react";
import map from "lodash/map";
import range from "lodash/range";
import Layout from "../layout";
import { faArrowDown, faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import app from "../../language/en/app";
import * as styles from "./trade-layout.styles";

const trade = app.trade;

const TradeLayout = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <div className={styles.header()}>
          <div className={styles.currencyTradeSelectionContainer()}>
            <div className={styles.headerBtnsContainer()}>
              <button className={styles.headerBtn()}>{trade.wallet}</button>
              <button className={styles.headerBtn()}>{trade.buy}</button>
            </div>
            <div className={styles.headerIconBtnsContainer()}>
              <button className={styles.headerIconBtn()}>
                <FontAwesomeIcon icon={faHistory} size="sm" className={""} />
              </button>
              <button className={styles.headerIconBtn()}>
                <FontAwesomeIcon icon={faArrowDown} size="sm" className={""} />
              </button>
            </div>
          </div>
          <div className={styles.currencyList()}>
            {map(range(0, 30), (id) => (
              <button key={id} className={styles.currency()}>
                NGN
              </button>
            ))}
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
              <div className={styles.exchangerContent()}>
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
    </Layout>
  );
};

export default TradeLayout;
