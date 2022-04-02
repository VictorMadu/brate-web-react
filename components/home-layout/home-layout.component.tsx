import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import app from "../../language/en/app";
import map from "lodash/map";
import range from "lodash/range";
import * as styles from "./home-layout.styles";

const HomeLayout = () => {
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
        <div className={styles.settingContainer()}>
          <div className={styles.baseContainer()}>
            <span className={styles.base()}>{app.base}</span>
            <div className={styles.inputContainer()}>
              <input
                className={styles.input()}
                type="text"
                value=""
                onChange={() => {}}
                disabled={false}
              />
              <div className={styles.dropdownContainer(true)}>
                <ul className={styles.dropdownContent()}>
                  {map(range(0, 20), (id) => (
                    <li key={id} className={styles.dropItem(false)}>
                      {"NGN"}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.filterContainer()}>
            <div className={styles.filterContent()}>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="xs"
                className={styles.filterIcon()}
              />
              <span>{app.filter}</span>
            </div>
            <div className={styles.filterDropdownContainer()}>
              <ul className={styles.filterDropdownContent()}>
                <li className={styles.filterDropdownItem()}>
                  <p>{app.base}</p>
                  <div className={styles.filterDropdownDropdownContainer()}>
                    <ul className={styles.filterDropdownDropdownContent()}>
                      <li className={styles.filterDropdownDropItem()}>
                        {app.market_type.parallel}
                      </li>
                      <li className={styles.filterDropdownDropItem()}>
                        {app.market_type.black}
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={styles.filterDropdownItem()}>
                  <p>{app.filter}</p>
                  <div className={styles.filterDropdownDropdownContainer()}>
                    <ul className={styles.filterDropdownDropdownContent()}>
                      <li className={styles.filterDropdownDropItem()}>
                        {app.type_type.all}
                      </li>
                      <li className={styles.filterDropdownDropItem()}>
                        {app.type_type.favourite}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.paginationContainer()}>
          <span>1</span> - <span>10</span> of <span>100</span>
        </div>

        <div className={styles.pricesTable()}>
          <div className={styles.pricesTableHeadRow()}>
            <div className={styles.pricesTableHeadCol1()}>Currency Pair</div>
            <div className={styles.pricesTableHeadCol2()}>Price</div>
            <div className={styles.pricesTableHeadCol3()}>24H Change (%)</div>
            <div className={styles.pricesTableHeadCol4()}></div>
          </div>
          {map(range(0, 30), (id) => (
            <div key={id} className={styles.pricesTableBodyRow()}>
              <div className={styles.pricesTableBodyCol1()}>
                {"USD/NGN" + id}
              </div>
              <div className={styles.pricesTableBodyCol2()}>450.345939</div>
              <div className={styles.pricesTableBodyCol3()}>-1.38</div>
              <div className={styles.pricesTableBodyCol4()}>Star</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomeLayout;
