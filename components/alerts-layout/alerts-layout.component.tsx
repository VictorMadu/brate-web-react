import React, { useEffect, useRef, useState } from "react";
import Switch from "../../core/switch";
import Layout from "../layout";
import * as styles from "./alerts-layout.styles";
import app, * as text from "../../language/en/app";
import map from "lodash/map";
import range from "lodash/range";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            onText={app.market_type.parallel}
            offText={app.market_type.black}
            onClick={(isOn) => {
              setSwitchIsOn(isOn);
            }}
            isOn={switchIsOn}
          />
        </div>
        <div className={styles.settingsContainer()}>
          <div className={styles.dropdownContainer()}>
            <button className={styles.dropdownBtn()}>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="xs"
                className={styles.dropdownIcon()}
              />
              <span>{text.filter}</span>
            </button>
            <div className={styles.dropdownContent()}>
              <ul className={styles.dropList()}>
                <li className={styles.dropItem()}>{text.all}</li>
                <li className={styles.dropItem()}>{text.triggered}</li>
                <li className={styles.dropItem()}>{text.untriggered}</li>
              </ul>
            </div>
          </div>

          <div className={styles.paginationContainer()}>
            <span>1</span> - <span>10</span> of <span>100</span>
          </div>
        </div>

        <div className={styles.pricesTable()}>
          <div className={styles.pricesTableHeadRow()}>
            <div className={styles.pricesTableHeadCol1()}>
              <div>Currency Pair</div>
              <div>Price</div>
            </div>
            <div className={styles.pricesTableHeadCol2()}>
              <div>Set</div>
              <div>Triggered</div>
            </div>
            <div className={styles.pricesTableHeadCol3()}>Action</div>
          </div>
          {map(range(0, 30), (id) => (
            <div key={id} className={styles.pricesTableBodyRow()}>
              <div className={styles.pricesTableBodyCol1()}>
                <div className={styles.currencyPair()}>{"USD/NGN" + id}</div>
                <div>450.345939</div>
              </div>

              <div className={styles.pricesTableBodyCol2()}>
                <div>12/04/2021 01:30pm</div>
                <div>14/04/2021 12:21am</div>
              </div>

              <div className={styles.pricesTableBodyCol3()}>
                <button className={styles.delBtn()}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AlertsLayout;
