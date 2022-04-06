import React from "react";
import map from "lodash/map";
import range from "lodash/range";
import * as text from "../../../language/en/app";
import * as styles from "./sell-layout.styles";
import ActionModal from "./action-modal";

const SellLayout = () => {
  return (
    <div className={styles.container()}>
      <div className={styles.addBtnContainer()}>
        <button className={styles.addBtn()}>{text.add}</button>
      </div>
      <div className={styles.tableContainer()}>
        <table className={styles.table()}>
          <thead className={styles.head()}>
            <tr className={styles.rowHead()}>
              <th className={styles.colHead1()}>
                <p>{text.base}</p>
                <p>{text.quota}</p>
              </th>
              <th className={styles.colHead2()}>{text.rate}</th>
              <th className={styles.colHead3()}>{text.action}</th>
            </tr>
          </thead>

          <tbody className={styles.body()}>
            {map(range(0, 30), (id) => (
              <tr key={id} className={styles.row()}>
                <td className={styles.col1()} data-title={text.currency}>
                  <div className={styles.currencyNameContainer()}>
                    <p className={styles.currencyLong()}>{"Nigerian Naira"}</p>
                    <p className={styles.currencyShort()}>{"(NGN)"}</p>
                  </div>

                  <div className={styles.currencyNameContainer()}>
                    <p className={styles.currencyLong()}>{"Nigerian Naira"}</p>
                    <p className={styles.currencyShort()}>{"(NGN)"}</p>
                  </div>
                </td>
                <td className={styles.col2()} data-title={text.rate}>
                  {"500,000"}
                </td>
                <td className={styles.col3()} data-title={text.action}>
                  <button className={styles.actionBtn()}>{text.edit}</button>
                  <button className={styles.actionBtn()}>{text._delete}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <ActionModal /> */}
    </div>
  );
};

export default SellLayout;
