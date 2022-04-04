import React from "react";
import Layout from "../layout";
import map from "lodash/map";
import range from "lodash/range";
import * as styles from "./wallet-layout.styles";
import FundModal from "./fund-modal";
import WithdrawalModal from "./withdrawal-modal";

const WalletLayout = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <div className={styles.body()}>
          <div className={styles.walletTable()}>
            <div className={styles.walletHeader()}>
              <div className={styles.walletCurrencyHead()}>
                <div className={styles.currencyNameHead()}>{"Currency"}</div>
                <div className={styles.availableHead()}>{"Available"}</div>
              </div>

              <div className={styles.actionHead()}>{"Action"}</div>
            </div>

            {map(range(0, 30), (id) => (
              <div key={id} className={styles.walletRow()}>
                <div className={styles.currencyContent()}>
                  <div className={styles.currencyDetail()}>
                    <span className={styles.currencyLong()}>
                      {"Nigerian Naira"}
                    </span>
                    <span className={styles.currencyShort()}>{"(NGN)"}</span>
                  </div>
                  <div className={styles.available()}>{"500,000"}</div>
                </div>
                <div className={styles.action()}>
                  <button className={styles.fundBtn()}>Fund</button>
                  <button className={styles.tradeBtn()}>Trade</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <FundModal /> */}
        {/* <WithdrawalModal /> */}
      </div>
    </Layout>
  );
};

export default WalletLayout;
