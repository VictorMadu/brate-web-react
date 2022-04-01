import React, { useEffect, useRef, useState } from "react";
import Switch from "../../core/switch";
import Layout from "../layout";
import * as styles from "./alerts-layout.styles";
import { text } from "../../language/en/app";
import map from "lodash/map";
import range from "lodash/range";

const AlertsLayout = () => {
  const [switchIsOn, setSwitchIsOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setSwitchIsOn((s) => !s), 5000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <Layout showNav={true}>
      <div className={styles.container()}>
        <div className={styles.switchContainer()}>
          <Switch
            onText={text.market_type.parallel}
            offText={text.market_type.black}
            onClick={(isOn) => {
              setSwitchIsOn(isOn);
            }}
            isOn={switchIsOn}
          />
        </div>

        <div className={styles.paginationContainer()}>
          <span>1</span> - <span>10</span> of <span>100</span>
        </div>

        <div className={styles.pricesTableContainer()}>
          <table className={styles.pricesTable()}>
            <thead className={styles.pricesTableHeadRow()}>
              <th className={styles.pricesTableHeadCol1()}>Currency Pair</th>
              <th className={styles.pricesTableHeadCol2()}>Price</th>
              <th className={styles.pricesTableHeadCol3()}>24H Change (%)</th>
              <th className={styles.pricesTableHeadCol4()}></th>
            </thead>
            <tbody className={styles.pricesTableBody()}>
              {map(range(0, 10), (id) => (
                <tr key={id} className={styles.pricesTableBodyRow()}>
                  <td className={styles.pricesTableBodyCol1()}>USD/NGN</td>
                  <td className={styles.pricesTableBodyCol2()}>450.345939</td>
                  <td className={styles.pricesTableBodyCol3()}>-1.38</td>
                  <td className={styles.pricesTableBodyCol4()}>Star</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AlertsLayout;
