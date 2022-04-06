import React from "react";
import Layout from "../layout";
import map from "lodash/map";
import range from "lodash/range";
import app, * as text from "../../language/en/app";
import FundModal from "./fund-modal";
import WithdrawalModal from "./withdrawal-modal";
import * as styles from "./wallet-layout.styles";

const tradeText = app.trade;

const WalletLayout = () => {
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <div className={styles.tableContainer()}>
          <table className={styles.table()}>
            <thead className={styles.head()}>
              <tr className={styles.rowHead()}>
                <th className={styles.colHead1()}>{tradeText.currency}</th>
                <th className={styles.colHead2()}>{tradeText.available}</th>
                <th className={styles.colHead3()}>{tradeText.action}</th>
              </tr>
            </thead>

            <tbody className={styles.body()}>
              {map(range(0, 30), (id) => (
                <tr key={id} className={styles.row()}>
                  <td className={styles.col1()} data-title={tradeText.currency}>
                    <span className={styles.currencyLong()}>
                      {"Nigerian Naira"}
                    </span>
                    <span className={styles.currencyShort()}>{"(NGN)"}</span>
                  </td>
                  <td
                    className={styles.col2()}
                    data-title={tradeText.available}
                  >
                    {"500,000"}
                  </td>
                  <td className={styles.col3()} data-title={tradeText.action}>
                    <button className={styles.actionBtn()}>{text.fund}</button>
                    <button className={styles.actionBtn()}>
                      {text.withdrawal}
                    </button>
                    <button className={styles.actionBtn()}>{text.trade}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <FundModal /> */}
        {/* <WithdrawalModal /> */}
      </div>
    </Layout>
  );
};

export default WalletLayout;
